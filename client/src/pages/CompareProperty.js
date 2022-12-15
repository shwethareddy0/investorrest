import React, { useState } from "react";
import "../App.scss";
import { Col, Card, Form, Row, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Auth from "../utils/auth";

function CompareProperty() {
  const [state, setState] = useState();
  const [city, setCity] = useState();
  // const [price, setPrice] = useState();
  // const [rate, setRate] = useState();
  // const [payment, setPayment] = useState();
  const [propertyResults, setPropertyResults] = useState();
  const fetchPropertyDetails = async () => {
    const url = `https://api.mashvisor.com/v1.1/client/summary/listing/${state}/${city}`;
    try {
      const response = await axios.get(url);
      setPropertyResults(response.data.content);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  function saveHome() {
    axios.post(
      "/api/homes/save",
      {
        city: "Berkeley",
        state: "CA",
        occupancy: 50,
        airbnb_properties: 500,
        airbnb_rental: 4100,
        avg_nightly_rate: 100,
      },
      {
        headers: {
          Authorization: `Basic ${Auth.getToken()}`,
        },
      }
    );
  }
  // var interest = (rate/100)/12
  // var mortgage = ({price}-{payment})[interest(1+interest)^360]/[(1+interest)^360-1]
  // console.log(mortgage)
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
                  <Form.Control
                    type="text"
                    placeholder="Required"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="col-6" controlId="stateInput">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Required"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="col-7" controlId="inputPrice">
                  <Form.Label>Property Price</Form.Label>
                  <Form.Control
                    type="Number"
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="col-5" controlId="inputRate">
                  <Form.Label>Interest Rate</Form.Label>
                  <Form.Control
                    type="Number"
                    step="0.1"
                    format={"### %"}
                    // value={rate}
                    // onChange={(e) => setRate(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="col-9" controlId="downPayment">
                <Form.Label>Down Payment</Form.Label>
                <Form.Control
                  type="Number"
                  // value={payment}
                  // onChange={(e) => setPayment(e.target.value)}
                />
              </Form.Group>
              <Button
                style={{ justifyContent: "center" }}
                variant="primary"
                disabled={!city || !state}
                onClick={saveHome}
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Col>

        {propertyResults && (
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
                    onClick={saveHome}
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
        )}
      </Row>
    </Container>
  );
}

export default CompareProperty;
