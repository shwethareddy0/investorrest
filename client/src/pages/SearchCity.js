import React, { useState } from "react";
import axios from "axios";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faUnderline } from "@fortawesome/free-solid-svg-icons";

function SearchCity() {
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [cityResults, setCityResults] = useState();
  const fetchCityDetails = async () => {
    const url = `http://localhost:3001/cors?url=https://api.mashvisor.com/v1.1/client/city/investment/${state}/${city}`;
    try {
      const response = await axios.get(url);
      setCityResults(response.data.content);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      fluid
      className="ml-3"
      style={{
        display: "flex",
        height: "90vh",
      }}
    >
      <Row>
        <Col>
          <Card
            className="mb-3"
            style={{ width: "18rem", border: "2px solid lightgrey" }}
          >
            <Card.Header>
              <strong>Check a Property</strong>
            </Card.Header>
            <Form
              style={{ jusitfyContent: "center", margin: "5px" }}
              className="col-10"
            >
              <Form.Group className="mb-3" controlId="inputCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Required"
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
                  id="inputState"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </Form.Group>
              <Button
                style={{ justifyContent: "center" }}
                variant="primary"
                disabled={!city || !state}
                onClick={fetchCityDetails}
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Col>

        {cityResults && (
          <Col>
            <Card
              className="mb-3"
              style={{ width: "30rem", border: "2px solid lightgrey" }}
            >
              <div className="card">
                <Card.Header>
                  <h4>
                    {" "}
                    <strong>Area Stats</strong>
                  </h4>
                </Card.Header>
                <div className="card-body">
                  <h5 className="areaStat">
                    {" "}
                    Average Occupency Rate: {cityResults.occupancy}%
                  </h5>
                  <h5 className="areaStat">
                    {" "}
                    Number of Airbnbs: {cityResults.airbnb_properties}
                  </h5>
                  <h5 className="areaStat">
                    {" "}
                    Average Nighlty Rate: $
                    {(cityResults.airbnb_rental / 30.41).toFixed(2)}
                  </h5>
                  <h5 className="areaStat">
                    {" "}
                    Average Monthly Earning: ${cityResults.airbnb_rental}
                  </h5>
                  <h5 className="areaStat">
                    {" "}
                    Average Property Price: ${cityResults.median_price}
                  </h5>
                </div>
              </div>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default SearchCity;
