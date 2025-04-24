import React from "react";
import { useCart } from "../hooks/useCart";
import CartItem from "../components/CartItem";
import { Button } from "bootstrap";

const Cart = () => {
  const { items, removeItem, clearCart } = useCart();

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  console.log("Items: ", items);

  return (
    <div>
      <h2>Your Cart</h2>
      {items.map((item) => (
        <CartItem item={item} removeItem={removeItem} key={item.id} />
      ))}
      <button onClick={clearCart}>Clear Cart</button>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default Cart;
