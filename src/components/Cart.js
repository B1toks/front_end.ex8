import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../store/cartSlice';

const Cart = () => {
  const cartItems = useSelector(selectCartItems); // Отримання елементів кошика з Redux Store

  if (!cartItems) return <p>No items in the cart</p>;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
