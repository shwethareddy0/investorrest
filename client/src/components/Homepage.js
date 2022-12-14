import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

// Home page of the app
function Homepage() {
  return (
    <Container fluid className="col-8 mx-auto">
      <Row>
        <Col>
          <Card
            className="mb-3"
            style={{ width: "18rem", border: "2px solid lightgrey" }}
          >
            <Card.Header className="ir-card-header">
              Top 5 Cities in the USA
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Fontana-on-Geneva Lake</ListGroup.Item>
              <ListGroup.Item>White Sulphur Springs</ListGroup.Item>
              <ListGroup.Item>New Jersey</ListGroup.Item>
              <ListGroup.Item>Portland</ListGroup.Item>
              <ListGroup.Item>Boston</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="./search">Search</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="mb-5"
            style={{ width: "18rem", border: "2px solid lightgrey" }}
          >
            <Card.Header className="ir-card-header">
              Top 5 States in the USA
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Massachusetts</ListGroup.Item>
              <ListGroup.Item>California</ListGroup.Item>
              <ListGroup.Item>Florida</ListGroup.Item>
              <ListGroup.Item>North Carolina</ListGroup.Item>
              <ListGroup.Item>South Carolina</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="/search">Search</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="mb-3"
            style={{ width: "18rem", border: "2px solid lightgrey" }}
          >
            <Card.Header className="ir-card-header">
              Airbnb by the #
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Total number of Airbnbs</ListGroup.Item>
              <ListGroup.Item>Percentage over long term rental</ListGroup.Item>
              <ListGroup.Item>Year over year growth</ListGroup.Item>
              <ListGroup.Item>Average Occupancy</ListGroup.Item>
              <ListGroup.Item>Return of Investment</ListGroup.Item>
              <ListGroup.Item>Rental Rates</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
