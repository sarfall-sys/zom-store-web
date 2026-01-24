import { useProducts } from "../../hooks/useProducts";
import { BiLoader } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { use, useEffect } from "react";
import SortPanel from "./SortPanel";
import FilterPanel from "./FilterPanel";
import Pagination from "./Pagination";

import { useNavigate } from "react-router-dom";

function ProductGrid() {
    const { slug, orderBy, filter, page } = useParams();
    const navigate = useNavigate();

    const { loadProducts, clearProducts, products, loading, error } =
        useProducts();

    const currentPage = page ? parseInt(page, 10) : 1;

    useEffect(() => {
        console.log("Fetching products for slug:", slug, "page:", currentPage);
        if (slug) {
            clearProducts();
            loadProducts({ slug, orderBy, filter, page: currentPage });
        }
    }, [slug, orderBy, filter, currentPage]);

    const handlePageChange = (newPage) => {
        // Build URL with current filters
        navigate(
            `/zo/${slug}/${orderBy || "default"}/${filter || "all"}/page/${newPage}`,
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Safe extraction of data
    const pagination = products?.data?.pagination;
    const productList = products?.data?.products || [];
    const brand = products?.data?.brand || null;
    const subfamily = products?.data?.subfamily || null;

    if (loading) {
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

    // Check if no products found
    if (productList.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <p className="text-xl font-semibold text-gray-700">
                        No products found
                    </p>
                    <p className="mt-2 text-gray-500">
                        Try adjusting your filters or search criteria
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

export default ProductGrid;
