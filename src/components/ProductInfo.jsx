import React from "react";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "../hooks/useFetchAllProducts";

function ProductInfo() {
  const { id } = useParams();
  console.log(id);

  const { product, loading, error } = useFetchProduct(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-64 md:h-96"
          />
        </div>
        <div className="md:w-1/2 flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl font-semibold">Price: ${product.price}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Add to Cart
          </button>{}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
