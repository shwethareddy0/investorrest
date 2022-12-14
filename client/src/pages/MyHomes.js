import React from "react";
import { Card, Container, Col, Row }from 'react-bootstrap';


function MyHomes() {
  return (
          <Col>
            <Card border="dark" style={{ width: "18rem"}}>
              <Card.Header>My MyHomes</Card.Header>
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">"Street Address"</h3>
                    <h4 className="">Monthly Earnings</h4>
                    <h5 className="">"monthly earnings"</h5> 
                    <h4 className=""> Average Nighlty Rate:</h4>
                    <h5 className="">"aNightly Rate"</h5> 
                    <h4 className=""> ROI</h4>
                    <h5 className="">"Roi"</h5>
                    <a href=""> </a>
                </div>
              </div>
           </Card>
         </Col>
  );
};

export default MyHomes;

