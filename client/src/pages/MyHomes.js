import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import Auth from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../App.scss";

function MyHomes() {
  // api call to get the saved properties
  async function getSavedProperties() {
    const result = await axios.get("/api/homes/", {
      headers: {
        Authorization: `Basic ${Auth.getToken()}`,
      },
    });
    setSavedProperties(result.data);
  }
  const [savedProperties, setSavedProperties] = useState([]);

  // api call to delete the saved properties
  async function deleteProperty(propId) {
    const result = await axios.delete(`/api/homes/${propId}`, {
      headers: {
        Authorization: `Basic ${Auth.getToken()}`,
      },
    });
    console.log(result);
    setSavedProperties(result.data);
  }
  // Once component is mounted, get saved properties from the server
  useEffect(() => {
    getSavedProperties();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {/* Using the map method, iterate over the list of saved properties and display them in their own cards*/}
      {savedProperties.map((property) => (
        <Card
          className="mb-3"
          style={{ width: "30rem", border: "2px solid black" }}
          key={property._id}
        >
          <Card.Header className="ir-card-header">
            {property.street_address}
          </Card.Header>
          <div className="card">
            <div className="card-body">
              <p>City:{property.city}</p>
              <p>State:{property.state}</p>
              <p>Property Price:${property.property_price}</p>
              <p>Interest Rate:{property.interest_rate}%</p>
              <p>Down Payment: ${property.down_payment}</p>
              <p>
                {" "}
                Average Occupency Rate: {property.avg_occupancy.toFixed(2)}%
              </p>
              <p>
                Average Nightly Rate:${property.avg_nightly_price.toFixed(2)}
              </p>
              <p>
                Average Monthly Earnings: $
                {property.avg_airbnb_rental.toFixed(2)}
              </p>
              <p> ROI:{property.avg_airbnb_ROI.toFixed(2)}%</p>
              <FontAwesomeIcon
                className="icon"
                icon={faTrashCan}
                onClick={() => deleteProperty(property._id)}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default MyHomes;
