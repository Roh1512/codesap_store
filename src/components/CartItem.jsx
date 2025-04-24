import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const CartItem = ({ item, removeItem }) => {
  const { id, title, price, quantity, image } = item;

  return (
    <ListGroup.Item className="py-3">
      <Row className="align-items-center">
        {/* Product Image */}
        <Col xs={2}>
          <Image src={image} fluid rounded alt={title} />
        </Col>

        {/* Product Title */}
        <Col xs={4}>
          <h6 className="mb-1">{title}</h6>
        </Col>

        {/* Unit Price */}
        <Col xs={2} className="text-center">
          ${price.toFixed(2)}
        </Col>

        {/* Quantity Controls */}
        <Col xs={2} className="d-flex align-items-center">
          <span className="mx-2">{quantity}</span>
        </Col>

        {/* Remove Item */}
        <Col xs={2} className="text-end">
          <Button variant="danger" size="sm" onClick={() => removeItem(id)}>
            Remove
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CartItem;
