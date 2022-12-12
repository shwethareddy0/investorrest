import React from "react";
//  import Button from 'react-bootstrap/Button';
//  import Form from 'react-bootstrap/Form';
import { Card, Form, Button, Container, Row, Col }from 'react-bootstrap';

function SearchCity() {
    return (
      <Container fluid style={{ justifyContent: "center" }}>
        <Row>
          <Col sm={4}>
            <Card border="dark" style={{ width: "18rem" }}>
              <Card.Header>Search an Area</Card.Header>
            <Form className="col-10">
            <Form.Group className="mb-3" controlId="inputCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Optional" input="inputCity" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputState">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Required" id="inputState" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
           </Form>
           </Card>
         </Col>
    
        <Col sm={8}>
            <Card border="dark" style={{ width: "50rem" }} className="col-lg-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Area Stats</h3>
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
                    <a href="#" className="btn btn-outline-secondary btn-sm">
                    <i className="far fa-heart"></i></a>
                </div>
              </div>
            </Card> 
          </Col>
        </Row>
      </Container>
    );
};

export default SearchCity;
