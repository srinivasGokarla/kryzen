import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5550/api/product", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(res.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5550/api/product/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  return (
    <>
     <h1 className="pro">Products</h1>
    <div  className="product-list-container" >
      <div style={{border : "5px solid red"}}>

      <Link to="/add-product" className="add-product-link" >Add Product</Link>
      </div>
     
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <img src={product.image} alt={product.name} width="50" height="50" />
            <p> Name : {product.name}</p>
            <p> Price : {product.price}</p>
            <p> Type : {product.type}</p>
            <Link to={`/edit-product/${product._id}`} className="edit-button" >Edit</Link>
            <button onClick={() => handleDelete(product._id)} className="delete-button" >Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
    
  );
};

export default ProductList;
