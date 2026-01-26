import { useProducts } from "../../hooks/useProducts";
import { BiLoader } from "react-icons/bi";
import { Link } from "react-router-dom";

function Brands() {
    const { brands, loading, error } = useProducts();
    return (
        <>
            {loading && (
                <div className="p-4">
                    <BiLoader
                        className="text-primary-600 animate-spin"
                        size={24}
                    />
                </div>
            )}

            {error && (
                <div className="p-4">
                    <div className="text-center text-red-600">{error}</div>
                </div>
            )}

            <div className="m-4">
                <h1 className="mb-6 text-3xl font-bold text-gray-700">
                    Brands
                </h1>
            </div>

            <section className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3 lg:grid-cols-5">
                {brands.map((brand) => (
                    <Link
                        key={brand.id}
                        to={`/zo/${brand.slug ?? ""}`}
                        className="flex flex-col items-center group"
                    >
                        <div className="w-40 overflow-hidden transition-shadow bg-white rounded-full shadow-md hover:shadow-lg">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="object-cover w-full transition-transform duration-300 ease-in-out h-15 group-hover:scale-105"
                            />
                            <h3 className="items-center mt-2 text-sm font-semibold capitalize transition text-primary-800 group-hover:text-primary-600">
                                {brand.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    );
}

export default Brands;
