import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (
    <Link to={`/products/${product.slug}`}>
      <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-48"
        />
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-700">
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <div className="price">
              {product.is_on_sale ? (
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.sale_price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.price}
                  </span>
                  {product && (
                    <span className="px-2 py-1 text-xs rounded bg-lavender-100 text-lavender-700">
                      -
                      {Math.round(
                        (1 - product.sale_price / product.price) * 100
                      )}
                      %
                    </span>
                  )}
                </div>
              ) : (
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
