import { useProducts } from "../../hooks/useProducts";
import { BiLoader } from "react-icons/bi";
import { Link } from "react-router-dom";

function Brands() {
  const { brands, loading, error } = useProducts();
  return (
    <>
      {loading && (
        <div className="p-4">
          <BiLoader className="text-lavender-600 animate-spin" size={24} />
        </div>
      )}

      {error && (
        <div className="p-4">
          <div className="text-center text-red-600">{error}</div>
        </div>
      )}

      <div className="m-4">
        <h1 className="mb-6 text-3xl font-bold text-lavender-700">Brands</h1>
      </div>

      <section className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-3 lg:grid-cols-5">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            to={`/zo/${brand.slug ?? ""}`}
            className="flex flex-col items-center group"
          >
            <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <img
                src={brand.logo}
                alt={brand.name}
                className="object-cover w-full h-48"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold capitalize transition text-lavender-800 group-hover:text-lavender-600">
              {brand.name}
            </h3>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Brands;
