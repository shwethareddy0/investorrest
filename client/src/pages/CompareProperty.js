import React, { useState } from "react";
import "../App.scss";
import { Col, Card, Form, Row, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function CompareProperty() {
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [price, setPrice] = useState();
  const [rate, setRate] = useState();
  const [payment, setPayment] = useState();
  const [propertyResults, setPropertyResults] = useState();
  const fetchPropertyDetails = async () => {
    const url = `/cors?url=https://api.mashvisor.com/v1.1/client/city/investment//${state}/${city}`;
    try {
      const response = await axios.get(url);
      setPropertyResults(response.data.content);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // const interest = ({rate}/100)/12
  // var mortgage = ({price}-${payment})[interest(1+interest)^360]/[(1+interest)^360-1

  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
      }}
      className="comparisonPage"
    >
      <Row>
        <Col>
          <Card style={{ border: "2px solid lightgrey" }}>
            <Card.Header>Search an Area</Card.Header>
            <Form
              style={{ jusitfyContent: "center", margin: "5px" }}
              className="col-11"
            >
              <Form.Group className="mb-3" controlId="inputAddress">
                <Form.Label>Street Address</Form.Label>
                <Form.Control type="text" placeholder="Optional" />
              </Form.Group>
              <Row>
                <Form.Group className="col-6" controlId="cityInput">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Required" required />
                </Form.Group>
                <Form.Group className="col-6" controlId="stateInput">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CA"
                    id="inputState"
                    required
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="col-7" controlId="inputPrice">
                  <Form.Label>Property Price</Form.Label>
                  <Form.Control
                    type="Number"
                    placeholder="Required"
                    id="propertyPrice"
                    required
                  />
                </Form.Group>
                <Form.Group className="col-5" controlId="inputRate">
                  <Form.Label>Interest Rate</Form.Label>
                  <Form.Control
                    type="Number"
                    format={"### %"}
                    placeholder="Required"
                    id="interest Rate"
                    required
                  />
                </Form.Group>
              </Row>
              <Form.Group className="col-9" controlId="downPayment">
                <Form.Label>Down Payment</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="If none enter 0"
                  id="downPayment"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "46rem", border: "2px solid lightgrey" }}>
            <Card.Header className="comparison">Comparison Chart</Card.Header>
            <Row>
              <Col style={{ margin: "5px" }}>
                <h3 className="card-title">Area Stats</h3>
                <h4 className="areaStat"> Average Occupency Rate:</h4>
                <h5 className="abbStat">Occupency Rate</h5>
                <h4 className="areaStat"> Average Nightly Rate:</h4>
                <h5 className="abbStat">Nightly Rate</h5>
                <h4 className="areaStat"> Average Monthly Earnings:</h4>
                <h5 className="abbStat">Monthly Earnings</h5>
              </Col>
              <Col>
                <h3 className="card-title">Property Stats</h3>
                <h4 className="areaStat">Break Even Occupency Rate:</h4>
                <h5 className="abbStat">Occupency Rate</h5>
                <h4 className="areaStat"> Break Even Nightly Rate:</h4>
                <h5 className="abbStat">Nightly Rate</h5>
                <h4 className="areaStat"> Potential Monthly Earnings:</h4>
                <h5 className="abbStat">Monthly Earnings</h5>
                <h4 className="areaStat"> ROI:</h4>
                <h5 className="abbStat">ROI%</h5>
                <Button
                  className="col-11/12"
                  style={{ justifyContent: "center" }}
                  variant="primary"
                  type="submit"
                >
                  <FontAwesomeIcon className="icon" icon={faHeart} />
                </Button>
              </Col>
            </Row>
            <Card.Body>
              <Card.Link href="/myhomes">My Homes</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CompareProperty;
