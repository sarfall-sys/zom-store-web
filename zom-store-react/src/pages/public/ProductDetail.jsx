import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { BiLoader } from "react-icons/bi";
import { FiAlertCircle } from "react-icons/fi";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { addRecentProduct } from "../../utils/recentViews";

function ProductDetail() {
    const { slug } = useParams(); // Extract ID from URL
    const { product, productsLoading, error, loadProductDetail } =
        useProducts();

    const brand = product ? product.brand : "";

    const viewedProduct = product
        ? {
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
              sale_price: product.sale_price,
              is_on_sale: product.is_on_sale,
          }
        : null;

    // Load product when component mounts or slug changes
    useEffect(() => {
        if (slug) {
            loadProductDetail(slug);
        }
    }, [slug, loadProductDetail]);

    // Add to recent views when product is loaded/changed
    useEffect(() => {
        console.log("From details Viewed product:", viewedProduct);

        if (viewedProduct) {
            addRecentProduct(viewedProduct);
        }
    }, [viewedProduct]);

    if (productsLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <BiLoader className="text-blue-600 animate-spin" size={48} />
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
                    <button
                        onClick={() => loadProductDetail(slug)}
                        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-gray-700">Product not found.</p>
            </div>
        );
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
                <div className="p-8 bg-white rounded-lg shadow">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="object-contain w-full h-auto max-h-96"
                    />
                </div>

                <div className="flex flex-col p-6 bg-white rounded-lg shadow">
                    <div className="flex items-baseline gap-3 mb-2">
                        <Link
                            className="inline-block px-2 py-1 text-sm font-bold capitalize rounded text-primary-800 bg-primary-100"
                            to={`/zo/${product.brand_slug}`}
                        >
                            {product.brand_name}
                        </Link>
                        <h2 className="text-lg font-normal text-gray-900">
                            {product.name}
                        </h2>
                    </div>

                    <div className="mb-4">
                        {product.is_on_sale ? (
                            <div className="flex items-center gap-3">
                                <span className="text-3xl font-bold text-primary-600">
                                    ${product.sale_price}
                                </span>
                                <span className="text-xl text-gray-500 line-through">
                                    ${product.price}
                                </span>
                                <span className="px-2 py-1 text-sm font-bold rounded bg-primary-100 text-primary-700">
                                    -
                                    {Math.round(
                                        (1 -
                                            product.sale_price /
                                                product.price) *
                                            100,
                                    )}
                                    %
                                </span>
                            </div>
                        ) : (
                            <span className="text-4xl font-bold text-primary-600">
                                ${product.price}
                            </span>
                        )}
                    </div>

                    <div className="flex items-baseline gap-3 mb-2">
                        <p className="mb-6 text-gray-700">
                            {product.description}
                        </p>
                    </div>

                    <div className="flex gap-3 mt-auto">
                        <a
                            href="https://wa.me/907338203"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 font-semibold text-white transition-colors rounded-full bg-accent-400 hover:bg-accent-500"
                        >
                            Contact Seller
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
