import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import './ProductDisplay.css'
import { db } from "../Firebase";



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
  const handleAddToCart = (product) => {
    const whatsappNumber = "0818836917"; // Replace with your WhatsApp number
    const message = encodeURIComponent(`Hello! I'd like to buy ${product.image}`);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    window.open(whatsappLink, "_blank");
  };
  

   
    useEffect(()=>{
        fetchProducts();
    }, [])

  return (
    <div className="products" >
      <h1 className="pro-header">Featured Products</h1>

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
              <p>Price: R{product.price}</p>
              <button onClick={handleAddToCart}>Buy</button>
            </li>
          ))}
        </ul>
      )} 
    </div>
  );
};

export default ProductDisplay;
