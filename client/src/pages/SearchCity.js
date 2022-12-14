// import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
//  import Button from 'react-bootstrap/Button';
//  import Form from 'react-bootstrap/Form';
import axios from "axios";

import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const config = {
  headers: {
    "x-api-key": "ec5fbc97-8313-4c5d-ac09-3e59940a364b",
  },
};
function SearchCity() {
  const [state, setState] = useState("CA");
  const [city, setCity] = useState("Berkeley");
  const [cityResults, setCityResults] = useState();
  const fetchCityDetails = async () => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.mashvisor.com/v1.1/client/city/investment//${state}/${city}`;
    try {
      const response = await axios.get(url, config);
      setCityResults(response.data.content);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

    return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
        <Row>
          <Col>

          <Card border="dark" style={{ width: "40rem" }} >
            <div className="card">
              <div className="card-body">
                <h3 className="card-title"> city Stats</h3>
                <h4 className="areaStat"> Average Occupency Rate:</h4>
                <h5 className="abbStat">"Occupency Rate"</h5>
                <h4 className="areaStat"> Number of Airbnbs:</h4>
                <h5 className="abbStat">"# of Airbnbs"</h5>
                <h4 className="areaStat"> Average Nighlty Rate:</h4>
                <h5 className="abbStat">"Nightly Rate"</h5>
                <h4 className="areaStat"> Average Monthly Earning:</h4>
                <h5 className="abbStat">"Monthly Earnings"</h5>
                <h4 className="areaStat"> Average Property Price:</h4>
                <h5 className="abbStat">"Avg Property Price"</h5>
              </div>
            </div>
          </Card> 

          <Card border="dark" style={{ width: "18rem" }}>
              <Card.Header>Check a Property</Card.Header>
            <Form
              style={{ jusitfyContent: "center", margin: "5px" }}
              className="col-10"
            >
            <Form.Group className="mb-3" controlId="inputCity">
              <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Optional"
                  input="inputCity"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputState">
              <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Required"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
            </Form.Group>
              <Button
                style={{ justifyContent: "center" }}
                variant="primary"
                onClick={fetchCityDetails}
              >
              Submit
            </Button>
           </Form>
           </Card>
         </Col>
    
        {cityResults && (
         <Col>
            <Card border="dark" style={{ width: "50rem" }}>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Area Stats</h3>
                    <h4 className="areaStat"> Average Occupency Rate:</h4>
                  <h5 className="abbStat">{cityResults.occupancy}%</h5>
                    <h4 className="areaStat"> Number of Airbnbs:</h4>
                  <h5 className="abbStat">{cityResults.airbnb_properties}</h5>
                    <h4 className="areaStat"> Average Nighlty Rate:</h4>
                  <h5 className="abbStat">
                    ${(cityResults.airbnb_rental / 30.41).toFixed(2)}
                  </h5>
                    <h4 className="areaStat"> Average Monthly Earning:</h4>
                  <h5 className="abbStat">${cityResults.airbnb_rental}</h5>
                    <h4 className="areaStat"> Average Property Price:</h4>
                  <h5 className="abbStat">${cityResults.median_price}</h5>
                  <Button
                    style={{ justifyContent: "center" }}
                    variant="primary"
                    type="submit"
                  >
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                  </Button>

                </div>
              </div>
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

export default SearchCity;
