import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import Buy from "../components/Buy";
import Success from "../components/Success";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((acc, item) => acc + (item ? item.price : 0), 0);
  return (
    <div className="cart">
      <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center",justifyContent:"center" }}>
        <h1>Shopping Cart</h1>
      </div>
      <div style={{display:"flex",justifyContent: "space-between",alignItems:"center",justifyContent:"center",gap:"40px"
      }}>
        {cart.map((product) => {
          return (
            <div style={{border:"1px solid black",padding:"20px"}}>
              <div className="img" style={{}}>
                <img src={product.image} />
              </div>
              <div className="cart__info">
                <h2>{product.title}</h2>
                <div className="">
                  <p>{product.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1>total: ${total.toFixed(2)}</h1>
      {total > 0 && <Buy />}
    </div>
  );
};

export default Cart;
