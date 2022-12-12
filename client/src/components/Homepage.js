import React from "react";
import { Card, ListGroup } from "react-bootstrap";

// Home page of the app
function Homepage() {
  return (
    <>
      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Header>Top 5 Cities in the USA</Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>Atlanta</ListGroup.Item>
              <ListGroup.Item>California</ListGroup.Item>
              <ListGroup.Item>Las Vegas</ListGroup.Item>
              <ListGroup.Item>Portland</ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Card.Link href="#">Search City</Card.Link>
        </Card.Body>
      </Card>

      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Header>Top 5 States in the USA</Card.Header>
        <Card.Body>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item>Atlanta</ListGroup.Item>
              <ListGroup.Item>California</ListGroup.Item>
              <ListGroup.Item>Florida</ListGroup.Item>
              <ListGroup.Item>Idaho</ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Card.Link href="#">Search City</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Homepage;
