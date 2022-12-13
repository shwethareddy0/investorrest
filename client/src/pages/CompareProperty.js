import React, { useState } from "react";
import '../App.scss';
// import TraditionalComparableListing from "../components/TranditionalComparableListing";
import { Col, Card, Form, Row, Container, Button} from 'react-bootstrap';

// 397651 - property id as an example
function CompareProperty() {
  // const [ready, setReady] = useState(false);
  return (
    <Container fluid style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'}} className="comparisonPage">
      <Row>
        <Col>
        <Card border="dark" className="col-11">
        <Card.Header>Search an Area</Card.Header>
        <Form style={{jusitfyContent: 'center', margin: '5px'}} className="col-11">
        <Form.Group className="mb-3" controlId="inputAddress">
          <Form.Label>Street Address</Form.Label>
          <Form.Control type="text" placeholder="Optional"  />
        </Form.Group>
        <Row>
        <Form.Group className="col-6" controlId="cityInput">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Required"  required/>
        </Form.Group>
        <Form.Group className="col-6" controlId="stateInput">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="CA" id="inputState" required/>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group className="col-7" controlId="inputPrice">
          <Form.Label>Property Price</Form.Label>
          <Form.Control type="Number" placeholder="Required" id="propertyPrice" required/>
        </Form.Group>
        <Form.Group className="col-5" controlId="inputRate">
          <Form.Label>Interest Rate</Form.Label>
          <Form.Control type="Number" format={"### %"} placeholder="Required" id="interest Rate" required/>
        </Form.Group>
        </Row>
        <Form.Group className="col-9" controlId="downPayment">
          <Form.Label>Down Payment</Form.Label>
          <Form.Control  type="Number" placeholder="If none enter 0" id="downPayment" required/>
        </Form.Group>
        <Button  variant="primary" type="submit">
          Submit
        </Button>
        </Form>
        </Card>
      </Col>
      
      <Col>
      <Card border="dark" style={{ width: "46rem" }}>
        <Card.Header className ="comparison">Comparison Chart</Card.Header>
        <Row>
        <Col style={{ margin: '5px'}}>
        <h3 classNameName="card-title">Area Stats</h3>
          <h4 classNameName="areaStat"> Average Occupency Rate:</h4>
            <h5 classNameName="abbStat">Occupency Rate</h5> 
          <h4 classNameName="areaStat"> Average Nightly Rate:</h4>
            <h5 classNameName="abbStat">Nightly Rate</h5> 
          <h4 classNameName="areaStat"> Average Monthly Earnings:</h4>
            <h5 classNameName="abbStat">Monthly Earnings</h5>
        </Col>
        <Col>
        <h3 classNameName="card-title">Property Stats</h3>
          <h4 classNameName="areaStat">Break Even Occupency Rate:</h4>
            <h5 classNameName="abbStat">Occupency Rate</h5> 
          <h4 classNameName="areaStat"> Break Even Nightly Rate:</h4>
            <h5 classNameName="abbStat">Nightly Rate</h5> 
          <h4 classNameName="areaStat"> Potential Monthly Earnings:</h4>
            <h5 classNameName="abbStat">Monthly Earnings</h5>
            <h4 classNameName="areaStat"> ROI:</h4>
            <h5 classNameName="abbStat">ROI%</h5>
        </Col>
        </Row>
      </Card>
      </Col>
      </Row>
      </Container>
  );
}

export default CompareProperty;
