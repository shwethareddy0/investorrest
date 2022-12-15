import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

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
              <ListGroup.Item>Phoenix, AZ</ListGroup.Item>
              <ListGroup.Item>Lake Tahoe, CA</ListGroup.Item>
              <ListGroup.Item>Charleston, SC</ListGroup.Item>
              <ListGroup.Item>Savannah, GA</ListGroup.Item>
              <ListGroup.Item>Myrtle Beach, CA</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Nav.Link activeclassname="active" as={Link} to="/search">
                Search
              </Nav.Link>
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
              <ListGroup.Item>Arizona</ListGroup.Item>
              <ListGroup.Item>California</ListGroup.Item>
              <ListGroup.Item>Florida</ListGroup.Item>
              <ListGroup.Item>Hawaii</ListGroup.Item>
              <ListGroup.Item>South Carolina</ListGroup.Item>
              <Nav.Link activeclassname="active" as={Link} to="/search">
                Search
              </Nav.Link>
            </ListGroup>
            <Card.Body>
              <Nav.Link activeclassname="active" as={Link} to="/search">
                Search
              </Nav.Link>
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
