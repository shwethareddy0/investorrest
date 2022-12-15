import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import axios from "axios";
import Auth from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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

  async function deleteProperty(propId) {
    const result = await axios.delete(`/api/homes/${propId}`, {
      headers: {
        Authorization: `Basic ${Auth.getToken()}`,
      },
    });
    console.log(result);
    setSavedProperties(result.data);
  }
  useEffect(() => {
    getSavedProperties();
  }, []);

  return (
    <Col>
      {savedProperties.map((property) => (
        <Card
          className="mb-3"
          style={{ width: "30rem", border: "2px solid lightgrey" }}
        >
          <Card.Header className="ir-card-header">My saved homes</Card.Header>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Street Address: {property.city}</h5>
              <h5 className="">Monthly Earnings: ${property.airbnb_rental}</h5>
              <h5 className="">
                {" "}
                Average Nighlty Rate: ${property.avg_nightly_rate}
              </h5>
              <h5 className=""> ROI:</h5>
              <FontAwesomeIcon
                className="icon"
                icon={faTrashCan}
                onClick={() => deleteProperty(property._id)}
              />
            </div>
          </div>
        </Card>
      ))}
    </Col>
  );
}

export default MyHomes;
