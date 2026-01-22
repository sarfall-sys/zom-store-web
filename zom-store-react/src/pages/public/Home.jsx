import React, { use } from "react";
import Banner from "../../components/catalog/Banner";
import Image1 from "../../assets/skincare1.jpg";
import Brands from "../../components/catalog/Brands";
import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/catalog/ProductCard";

function Home() {
  const { saleProducts, latestProducts, loading, error } = useProducts();

  // Handle loading
  if (loading) {
    return <div className="py-16 text-center">Loading...</div>;
  }

  // Handle error
  if (error) {
    return <div className="py-16 text-center text-red-500">Error: {error}</div>;
  }

  // Safe array checks
  const safeSaleProducts = Array.isArray(saleProducts) ? saleProducts : [];
  const safeLatestProducts = Array.isArray(latestProducts) ? latestProducts : [];


  return (
    <div className="text-center">
      {/* Hero Section */}
      <Banner />
      
      {/* New Arrivals - Only show if we have products */}
      {safeLatestProducts.length > 0 && (
        <section className="py-8">
          <div className="m-4">
            <h3 className="mb-6 text-3xl font-bold text-lavender-700">
              New Arrivals
            </h3>
            <p className="mb-8 text-lg text-gray-600">
              Check out the latest additions to our catalog!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-4">
            {safeLatestProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Offers - Only show if we have products */}
      {safeSaleProducts.length > 0 && (
        <section className="py-8 bg-red-50">
          <div className="m-4">
            <h3 className="mb-6 text-3xl font-bold text-red-700">
              On Sale Now
            </h3>
            <p className="mb-8 text-lg text-red-600">
              Don't miss out on these limited-time offers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-4">
            {safeSaleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Show message if no products */}
      {safeLatestProducts.length === 0 && safeSaleProducts.length === 0 && !loading && (
        <div className="py-16">
          <p className="text-gray-500">No products available at the moment.</p>
        </div>
      )}

      {/**Brands */}
      <Brands />
    </div>
  );
}

export default Home;
