import React from "react";
import { useFetchAllProducts } from "../../hooks/useFetchAllProducts";
import HomeProductCard from "./HomeProductCard";
import Loading from "./Loading";
const AllProducts = () => {
  const { products, loading, error } = useFetchAllProducts();
  if (loading) return <Loading />;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="lg:bg-white rounded pb-10">
      <h1 className="py-5 md:px-12 text-xl">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-5 ">
        {products.map((product) => (
          <HomeProductCard key={product.id} product={product} />
        ))}
        {error && <h2>{error}</h2>}
      </div>
    </div>
  );
};

export default AllProducts;
