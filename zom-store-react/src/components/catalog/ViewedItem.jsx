import { useEffect, useState } from "react";
import { getRecentProducts } from "../../utils/recentViews";
function ViewedItem() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const recents = getRecentProducts();
        setProducts(recents);
    }, []);
    return (
        <>
            {products.length > 0 && (
                <div className="container px-4 py-8 mx-auto">
                    <h2 className="mb-6 text-2xl font-bold text-gray-700">
                        Recently Viewed
                    </h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="p-4 transition-shadow bg-white border shadow-md rounded-2xl hover:shadow-lg"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="object-cover w-full h-32 mb-4 rounded-xl"
                                />
                                <h3 className="mb-2 text-sm font-medium text-gray-700">
                                    {product.name}
                                </h3>
                                <div className="mb-4">
                                    {product.is_on_sale ? (
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-md text-primary-600">
                                                ${product.sale_price}
                                            </span>
                                            <span className="text-xs text-gray-500 line-through">
                                                ${product.price}
                                            </span>
                                            <span className="px-2 py-1 text-xs font-bold rounded-full bg-primary-100 text-primary-700">
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
                                        <span className="font-bold text-md text-primary-600">
                                            ${product.price}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ViewedItem;
