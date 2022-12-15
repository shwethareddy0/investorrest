import React, { useState } from "react";
import axios from "axios";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../App.scss";

function SearchCity() {
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [cityResults, setCityResults] = useState();
  const fetchCityDetails = async () => {
    const url = `/getResults?url=https://api.mashvisor.com/v1.1/client/city/investment/${state}/${city}`;
    try {
      const response = await axios.get(url);
      setCityResults(response.data.content);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //GeoLocation
  const [geoResults, setGeoResults] = useState();
  const getLocation = () => {
    fetch(`https://api.api-ninjas.com/v1/geocoding?city=${city}`, {
      headers: {
        "X-Api-Key": "h3rta61reyR1vGE54NdvUg==KxJvxJiNvhkx8xRr",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGeoResults([data[0].latitude, data[0].longitude]);
        position = [data[0].latitude, data[0].longitude];
        console.log(position);
      });
  };
  var position = [];

  return (
    <Container
      fluid
      className="ml-3 searchcity"
      style={{
        display: "flex",
        height: "90vh",
      }}
  
    >
      <Row>
        <Col>
          <Card
            className="mb-3"
            style={{ width: "20rem", border: "2px solid black" }}
          >
            <Card.Header className="ir-card-header">
              <strong>Search an Area</strong>
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
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
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
                disabled={!city || !state}
                onClick={(event) => {
                  fetchCityDetails();
                  getLocation();
                }}
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
              style={{ width: "30rem", border: "2px solid black" }}
            >
              <div className="card">
                <Card.Header className="ir-card-header">
                  <h4>
                    {" "}
                    <strong>Area Stats</strong>
                  </h4>
                </Card.Header>
                <div className="card-body">
                  <h5 className="areaStat">
                    {" "}
                    Average Occupency Rate: <h4>{cityResults.occupancy}%</h4>
                  </h5>
                  <h5 className="areaStat">
                    {" "}
                    Number of Airbnbs: <h4>{cityResults.airbnb_properties}</h4>
                  </h5>
                  <h5 className="areaStat">
                    {" "}
                    Average Nighlty Rate: <h4>$
                    {(cityResults.airbnb_rental / 30.41).toFixed(2)}</h4>
                  </h5>
                  <h5 className="areaStat">
                    {" "}
                    Average Monthly Earning: <h4>${cityResults.airbnb_rental.toLocaleString("en-US")}</h4>
                  </h5>
                  <h5 className="areaStat">
                    {" "}
                    Average Property Price: <h4>${cityResults.median_price.toLocaleString("en-US")}</h4>
                  </h5>
                </div>
              </div>
            </Card>
            <br />
            <p>
              To know more about the property details and to calculate the
              mortgage, please <a href="/login">login</a> or <a href="/singup">signup</a>
              {/* <Row>
              <Nav.Link activeclassname="active" as={Link} to="/login">
                login
              </Nav.Link>
              or
              <Nav.Link activeclassname="active" as={Link} to="/signup">
                signup
              </Nav.Link>
              </Row> */}
            </p>
          </Col>
        )}
        {geoResults && (
          <Col>
            <Card
              className="mb-3"
              style={{
                width: "30rem",
                height: "30rem",
                border: "2px solid black",
              }}
            >
              <MapContainer
                style={{ height: "30rem" }}
                center={geoResults}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default SearchCity;
