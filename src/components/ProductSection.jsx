// src/components/ProductSection.js
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Apple Watch",
      description:
        "Stay connected, motivated, and healthy with the latest Apple Watch.",
      category: "men",
      price: 5000,
      image: "https://via.placeholder.com/300x200/",
    },
    {
      id: 2,
      name: "Nike Shoes",
      description: "Comfortable shoes for all-day wear.",
      category: "men",
      price: 2500,
      image: "https://via.placeholder.com/300x200/",
    },
    {
      id: 3,
      name: "Adidas Shirt",
      description: "Stylish Adidas shirt.",
      category: "women",
      price: 1500,
      image: "https://via.placeholder.com/300x200/",
    },
    {
      id: 4,
      name: "Levi's Jeans",
      description: "Comfortable and stylish jeans from Levi's.",
      category: "women",
      price: 3500,
      image: "https://via.placeholder.com/300x200/",
    },
    {
      id: 5,
      name: "Baby Diapers",
      description: "Soft and comfortable baby diapers.",
      category: "kids",
      price: 700,
      image: "https://via.placeholder.com/300x200/",
    },
    {
      id: 6,
      name: "Baby Shoes",
      description: "Cute baby shoes.",
      category: "kids",
      price: 1500,
      image: "https://via.placeholder.com/300x200/",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cart, setCart] = useState([]);

  const handleFilterChange = (category, maxPrice) => {
    let filtered = products;

    // Filter by category
    if (category !== "allproducts") {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Filter by max price
    filtered = filtered.filter((product) => product.price <= maxPrice);

    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout");
  };

  return (
    <div className="container mx-auto flex flex-col gap-10 items-start mt-10 px-2 md:px-0">
      <p className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent font-bold text-4xl md:text-6xl w-fit">
        Our Latest Collection
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
