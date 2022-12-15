import React, { useState } from "react";
import "../App.scss";
import { Col, Card, Form, Row, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Auth from "../utils/auth";

function CompareProperty() {
  const [invest, setInvest] = useState();
  const [price, setPrice] = useState();
  const [address, setAddress] = useState();
  const [mortgage, setMortgage] = useState();
  const [rate, setRate] = useState();
  const [payment, setPayment] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [propertyResults, setPropertyResults] = useState();

  const fetchPropertyDetails = async () => {
    const url = `/getResults?url=https://api.mashvisor.com/v1.1/client/trends/summary/${state}/${city}`;

    try {
      const response = await axios.get(url);
      console.log(response);
      setPropertyResults(response.data.content);
      // Mortgage evaluation
      // var investment = ((invest/12)+291);
      const interest = rate / 100 / 12;
      const mortgage = 
        (price - payment) *
        interest *
        (Math.pow(1 + interest, 360) / (Math.pow(1 + interest, 360) - 1));
      setMortgage(mortgage);
      console.log(mortgage);
      console.log(interest);
    } catch (error) {
      console.log(error);
    }
  };

  function saveHome() {
    axios.post(
      "/api/homes/save",
      {
        city: city,
        state: state,
        property_price: price,
        interest_rate: rate,
        down_payment: payment,
        street_address: address,
        mortgage: mortgage,
        avg_occupancy: propertyResults.avg_occupancy,
        avg_airbnb_rental: propertyResults.avg_airbnb_rental,
        avg_nightly_price: propertyResults.avg_nightly_price,
        avg_airbnb_ROI: propertyResults.avg_airbnb_ROI,
      },
      {
        headers: {
          Authorization: `Basic ${Auth.getToken()}`,
        },
      }
    );
  }

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
          <Card style={{ border: "2px solid black" }}>
            <Card.Header className="ir-card-header">Search an Area</Card.Header>
            <Form
              style={{ jusitfyContent: "center", margin: "5px" }}
              className="col-11"
            >
              <Form.Group className="mb-3" controlId="inputAddress">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Optional"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
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
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="col-5" controlId="inputRate">
                  <Form.Label>Interest Rate</Form.Label>
                  <Form.Control
                    type="Number"
                    step="0.1"
                    format={"### %"}
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row>
              <Form.Group className="col-9" controlId="downPayment">
                <Form.Label>Down Payment</Form.Label>
                <Form.Control
                  type="Number"
                  value={payment}
                  placeholder="If nothing enter 0"
                  onChange={(e) => setPayment(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="col-5" controlId="Investment">
                <Form.Label>Additional Investment</Form.Label>
                <Form.Control
                  type="Number"
                  value={invest}
                  placeholder="If nothing enter 0"
                  onChange={(e) => setInvest(e.target.value)}
                />
              </Form.Group>
              </Row>
              <Row>
              <p>Monthly Cost:</p><h5>${(mortgage + ((invest/12)+291)).toFixed(2)}</h5>
              </Row>
              <Button
                style={{ justifyContent: "center" }}
                variant="primary"
                disabled={!city || !state}
                onClick={fetchPropertyDetails}
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Col>

        {propertyResults && (
          <Col>
            <Card
              className="mb-3"
              style={{ width: "45rem", border: "2px solid black" }}
            >
              <Card.Header className="comparison ir-card-header">
                <h4>Comparison Chart</h4>
              </Card.Header>
              <Row>
                <Col style={{ margin: "5px" }}>
                  <h3 className="card-title">Area Stats</h3>
                  <br />
                  <h5 className="areaStat">
                    Average Occupency Rate:
                    </h5>
                    <h4 className ="lor">
                    {propertyResults.avg_occupancy.toFixed(2)}%
                  </h4>
                  <h5 className="areaStat">
                    Average Nightly Rate:
                    </h5>
                    <h4>
                     $
                    {propertyResults.avg_nightly_price.toFixed(2)}
                  </h4>
                  <h5 className="areaStat">
                    Average Monthly Earnings:
                    </h5>
                    <h4> $
                    {(propertyResults.avg_airbnb_rental.toFixed(2))}
                  </h4>
                </Col>
                <Col>
                  <h3 className="card-title">Property Stats</h3>
                  <br />
                  <h5 className="areaStat">Break Even Occupency Rate:</h5>
                  <h4 className="abbStat beor">{((mortgage/(propertyResults.avg_nightly_price))/.3041).toFixed(2)}%</h4>
                  <h5 className="areaStat"> Break Even Nightly Rate:</h5>
                  <h4 className="abbStat">${(((mortgage)/(30.41*(propertyResults.avg_occupancy/100))).toFixed(2))}</h4>
                  <h5 className="areaStat"> Potential Monthly Earnings:</h5>
                  <h4 className="abbStat">${((30.41*(propertyResults.avg_occupancy/100))*(propertyResults.avg_nightly_price)).toFixed(2)}</h4>
                  <h5 className="areaStat"> Monthly ROI:</h5>
                  <h4 className="areaStat">
                    {" "}
                    {((((((30.41*(propertyResults.avg_occupancy/100))*(propertyResults.avg_nightly_price)).toFixed(2))-mortgage)/mortgage)*100).toFixed(2)}%
                  </h4>
                  </Col>
                  <Col className="col-2">
                  
                  <Button
                  className="btn"
                    style={{ justifyContent: "center" }}
                    variant="primary"
                    type="submit"
                    onClick={saveHome}
                  >
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                  </Button>
                </Col>
              </Row>
              {/* <Row> */}
              <Card.Body>
                <Card.Link 
                href="/myhomes">
                  <h4>My Homes</h4>
                </Card.Link>
              </Card.Body>
              <p id="disclaimer"> Break even stats are based off given mortgage and local statistcs</p>
              {/* </Row> */}
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default CompareProperty;
