import React from "react";
import { Link } from "react-router-dom";

function HomeProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 mx-auto bg-white border h-full">
        <img
          className="w-full aspect-square"
          src={product.image}
          alt={product.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">
            {product.description.length > 100
              ? `${product.description.substring(0, 100)}...`
              : product.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="text-gray-900 font-bold text-xl">
            ${product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default HomeProductCard;
