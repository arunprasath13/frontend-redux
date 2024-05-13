import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../redux/apiSlice";
import {addItem} from "../redux/cartSlice"
import { incrementPro } from "../redux/counterSlice";
import "./ProductCard.css";
const ProductCard = () => {
  const productData = useSelector((state) => state.api.data);
  // const loading = useSelector((state) => state.api.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);
 
  const handleClick = (product) => {
    dispatch(addItem(product))
    dispatch(incrementPro())
  }
  return (
    <div className="cards">
      {productData.map((product) => {
        return (
          <div className="card-container">
            <div className="product-img">
              <img src={product.image} />
            </div>
            <div className="product-info">
              <div className="product-name">{product.title}</div>
              <div className="">{product.price}</div>
              <button
                onClick={() => handleClick(product)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "blue",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
