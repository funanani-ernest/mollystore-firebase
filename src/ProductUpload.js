import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../src/Firebase';

const ProductUpload = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
  
    const handleFileUpload = async (file) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
        });
      } catch (error) {
        console.error("Error encoding file:", error);
        throw error;
      }
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const imageData = await handleFileUpload(image);
  
        const docRef = await addDoc(collection(db, "products"), {
          name: name,
          price: price,
          image: imageData
        });
  
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
  
      setName("");
      setPrice("");
      setImage(null);
    };
  
    return (
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default ProductUpload;