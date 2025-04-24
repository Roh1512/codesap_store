import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useCart } from "../hooks/useCart";

const Product = ({ product }) => {
  // Destructure props for clarity and brevity
  const { image, title, price } = product;
  const { addItem } = useCart();

  return (
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img variant="top" src={image} alt={title} className="img-fluid" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price.toFixed(2)}</Card.Text>
        <Button variant="primary" onClick={() => addItem(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
