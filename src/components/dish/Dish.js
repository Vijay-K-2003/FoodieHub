import React from "react";
import { Card } from "react-bootstrap";

export default function Dish(props) {
  return (
    <>
      <Card className="my-3 py-3 rounded">
        <a href={`/product/${props.dish._id}`}>
          <Card.Img src={props.dish.image} variant="top" />
        </a>
        <Card.Body>
          <a href={`/product/${props.dish.id}`}>
            <Card.Title as="div">
              <strong>{props.dish.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="div">
            <div className="my-3">
              Rating {props.dish.rating}/5
            </div>
          </Card.Text>

          <Card.Text as="h4">₹{props.dish.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
