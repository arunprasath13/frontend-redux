import React from 'react';
import { useSelector } from 'react-redux';
import "./Cart.css"
const Cart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div className='cart'>
      <h2 className='cart__header'>Cart</h2>
      <ul className='cart__nav__links'>
        {cart.map((item, index) => (
          <li key={index}>
            {item ? `${item.title} - $${item.price}` : 'Invalid item'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;


