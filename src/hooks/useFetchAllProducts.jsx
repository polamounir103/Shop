// import { useState, useEffect } from "react";

// const useFetchAllProducts = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchAllProducts = async () => {
//             try {
//                 const response = await fetch("https://fakestoreapi.com/products");
//                 console.log(response)
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 setProducts(data);
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAllProducts();
//     }, []); // Empty dependency array ensures this runs once

//     return { products, loading, error };
// };

// export default useFetchAllProducts;
import { useState, useEffect } from "react";

const useFetchAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      console.log(response);
      if (!response.ok) {
        // Corrected the condition
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error);
      console.error("Error fetching products: ", error); // More informative error log
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
};

const useFetchProduct = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError(error);
      console.error("Error fetching product: ", error); // More informative error log
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  });

  return { product, loading, error };
};

export { useFetchAllProducts, useFetchProduct };
