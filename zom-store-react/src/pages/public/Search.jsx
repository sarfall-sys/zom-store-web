import { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/catalog/ProductCard";
function Search() {
    const [searchParams] = useSearchParams();
    const { products, loading, error, loadSearchResults, clearProducts } =
        useProducts();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const query = params.get("q") || "";
        console.log("Search query:", query);
        if (query) {
            clearProducts();
            loadSearchResults(query);
        }
    }, [searchParams]); // Added dependencies to run effect when these functions change

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {String(error)}</div>;
    }
    const query = searchParams.get("q") || "";

    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold text-primary-500">
                Search Results for "{query}"
            </h1>
            {products && products.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <div key={product.id} className="p-4 border rounded-lg">
                            <ProductCard key={product.id} product={product} />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-primary-500">
                    No products found for "{query}".
                </p>
            )}
        </div>
    );
}

export default Search;
