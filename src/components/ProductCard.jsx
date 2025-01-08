import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="card sm:max-w-full">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h5 className="card-title mb-2">{product.name}</h5>
        <p className="mb-2">Price: ₹{product.price}</p>
        <div className="card-actions">
          <button className="btn btn-sm btn-gradient btn-primary waves waves-light">
            Buy Now
          </button>
          <button
            className="btn  btn-soft btn-sm btn-gradient btn-secondary waves waves-dark"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
