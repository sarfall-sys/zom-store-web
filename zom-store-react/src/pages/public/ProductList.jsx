import { useProducts } from "../../hooks/useProducts";
import { BiLoader } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";
import { useEffect } from "react";
import SortPanel from "../../components/catalog/SortPanel";
import FilterPanel from "../../components/catalog/FilterPanel";
import Pagination from "../../components/catalog/Pagination";
import ProductCard from "../../components/catalog/ProductCard";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

function ProductList() {
    const { slug } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const orderBy = searchParams.get("orderBy");
    const filter = searchParams.get("filter");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1", 10);

    const { loadProducts, clearProducts, products, productsLoading, error } =
        useProducts();

    useEffect(() => {
        const currentSlug = slug || "all"; // Use 'all' or whatever your API expects for general search
        clearProducts();

        const params = {
            ...(orderBy && { orderBy }),
            ...(filter && { filter }),
            ...(search && { search }),
            page,
        };

        loadProducts(currentSlug, params);
    }, [slug, orderBy, filter, page, search, clearProducts, loadProducts]);

    const handlePageChange = (newPage) => {
        const params = new URLSearchParams();
        if (orderBy) params.set("orderBy", orderBy);
        if (filter) params.set("filter", filter);
        if (search) params.set("search", search);

        params.set("page", newPage.toString());

        const path = slug ? `/zo/${slug}` : `/zo/search`;

        navigate(`${path}?${params.toString()}`);

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Safe extraction of data
    const pagination = products?.pagination;
    console.log("Products data in ProductList:", products);
    const productList = products || []; // data is the array

    const brand = productList.length > 0 ? productList[0]?.brand : null;
    const subfamily = productList.length > 0 ? productList[0]?.subfamily : null;

    if (productsLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <BiLoader className="text-primary-600 animate-spin" size={48} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <FiAlertCircle
                        className="mx-auto mb-4 text-red-500"
                        size={48}
                    />
                    <p className="text-lg text-red-600">
                        Error: {String(error)}
                    </p>
                </div>
            </div>
        );
    }

    if (productList.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <p className="text-xl font-semibold text-gray-700">
                        No products found
                    </p>
                    <p className="mt-2 text-gray-500">
                        {search
                            ? `No results for "${search}". Try a different search term.`
                            : "Try adjusting your filters or search criteria"}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-sm">
            <div className="relative mb-8">
                <div className="absolute top-0 right-0 flex gap-2">
                    <SortPanel />
                    <FilterPanel />
                </div>
            </div>
            {search && (
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-primary-700">
                        Search Results for "{search}"
                    </h1>
                </div>
            )}

            {/* Brand Title */}
            {brand && (
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-primary-700">
                        Products by Brand: {brand.name}
                    </h1>
                    {pagination && (
                        <p className="mt-2 text-sm text-gray-500">
                            Showing {pagination.from} to {pagination.to} of{" "}
                            {pagination.total} products
                        </p>
                    )}
                </div>
            )}

            {/* Subfamily Title */}
            {subfamily && (
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-primary-700">
                        Products in Subfamily: {subfamily.name}
                    </h1>
                    {pagination && (
                        <p className="mt-2 text-sm text-gray-500">
                            Showing {pagination.from} to {pagination.to} of{" "}
                            {pagination.total} products
                        </p>
                    )}
                </div>
            )}

            {/* Products Grid */}
            <section className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3 lg:grid-cols-5">
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>

            {/* Pagination - Only show if pagination data exists and has multiple pages */}
            {pagination && pagination.last_page > 1 && (
                <Pagination
                    currentPage={pagination.current_page}
                    totalPages={pagination.last_page}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
}

export default ProductList;
