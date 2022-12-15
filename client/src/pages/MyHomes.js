import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import axios from "axios";
import Auth from "../utils/auth";

function MyHomes() {
  async function getSavedProperties() {
    const result = await axios.get("/api/homes/", {
      headers: {
        Authorization: `Basic ${Auth.getToken()}`,
      },
    });
    console.log(result);
    setSavedProperties(result.data);
  }
  const [savedProperties, setSavedProperties] = useState([]);
  useEffect(() => {
    getSavedProperties();
  }, []);

  return (
    <Col>
      {savedProperties.map((property) => (
        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Header>My MyHomes</Card.Header>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Street Address: {property.city}</h3>
              <h4 className="">Monthly Earnings: {property.airbnb_rental}</h4>
              <h4 className="">
                {" "}
                Average Nighlty Rate: {property.avg_nightly_rate}
              </h4>
              <h4 className=""> ROI</h4>
            </div>
          </div>
        </Card>
      ))}
    </Col>
  );
}

export default MyHomes;
