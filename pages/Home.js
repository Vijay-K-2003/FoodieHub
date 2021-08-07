import React from "react";
import Dish from "../components/dish/Dish";
import dishes from "../dishes";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <h1>Trending Dishes</h1>
      <Row>
        {dishes.map((dish) => (
          <Col key={dish._id} sm={12} md={6} lg={4} xl={3}>
            <Dish dish={dish} />
          </Col>
        ))}
      </Row>
    </>
  );
}
