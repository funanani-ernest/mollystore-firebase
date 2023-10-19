import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import './ProductDisplay.css'
import { db } from "../src/Firebase";



const ProductDisplay = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      console.log(querySnapshot)
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      console.log(newData.image)
      setProducts(newData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

   
    useEffect(()=>{
        fetchProducts();
    }, [])

  return (
    <div >
      <h2>Products</h2>

       {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="product-list" >
          {products.map((product, index) => (
            <li  className="product-card" key={index}>
              <img
                src={product.image} // Assuming imageUrl is the storage path
                alt={product.name}
              />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      )} 
    </div>
  );
};

export default ProductDisplay;
