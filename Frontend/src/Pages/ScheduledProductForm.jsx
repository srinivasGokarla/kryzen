import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ScheduledProductForm = () => {
  const { username } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    type: "",
    image: "",
  });
  const [minutes, setMinutes] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `http://localhost:5550/api/product/${username}/schedule`,
        { product, minutes },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate(`/${username}/product-list`);
    } catch (error) {
      console.log("Error scheduling product:", error);
    }
  };

  return (
    <div>
      <h2>Schedule Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Type"
          value={product.type}
          onChange={(e) => setProduct({ ...product, type: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Minutes to Schedule"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          required
        />
        <button type="submit">Schedule Product</button>
      </form>
    </div>
  );
};

export default ScheduledProductForm;
