import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";


// Home page of the app
function Homepage() {
  return (
    <Container fluid className="col-10 mx-auto">
      <Row>
        <Col>
          <Card
            className="mb-3"
            style={{ width: "17rem", border: "2px solid black" }}
          >
            <Card.Header className="ir-card-header">
              Top 5 Most Popular Cities in the USA
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Park City, UT</ListGroup.Item>
              <ListGroup.Item>Breckenridge, CO</ListGroup.Item>
              <ListGroup.Item>Steaamboat Springs, CO</ListGroup.Item>
              <ListGroup.Item>Palm Springs, CA</ListGroup.Item>
              <ListGroup.Item>Lahaina, HI</ListGroup.Item>
              <Nav.Link activeclassname="active" as={Link} to="/search">
                Search
              </Nav.Link>
            </ListGroup>
          </Card>
        </Col>
        <Col>
          <Card
            className="mb-5"
            style={{ width: "18rem", border: "2px solid black" }}
          >
            <Card.Header className="ir-card-header">
              Top 5 Most Popular States in the USA
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
          </Card>
        </Col>
        <Col>
          <Card
            className="mb-3"
            style={{ width: "24rem", border: "2px solid black" }}
          >
            <Card.Header className="ir-card-header">
              Airbnb by the Numbers
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Total number of Airbnbs <h5>5,600,000 listings</h5></ListGroup.Item>
              <ListGroup.Item>Profitability over long term rental <p>STR's can make 3.5x more</p></ListGroup.Item>
              <ListGroup.Item>Year over year growth <p>32.56%</p></ListGroup.Item>
              <ListGroup.Item>Average Occupancy<p>58.9%</p></ListGroup.Item>
              <ListGroup.Item>Average Profits per Listing <p> $13,800/year</p></ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage;
