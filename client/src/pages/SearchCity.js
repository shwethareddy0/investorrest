// import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import React from "react";
//  import Button from 'react-bootstrap/Button';
//  import Form from 'react-bootstrap/Form';
import { Card, Form, Button, Container, Row, Col }from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



function SearchCity() {
    return (
      <Container fluid style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
      }}>
        <Row>
          <Col>
            <Card border="dark" style={{ width: "18rem"}}>
              <Card.Header>Check a Property</Card.Header>
            <Form style={{jusitfyContent: 'center', margin: '5px'}} className="col-10">
            <Form.Group className="mb-3" controlId="inputCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Optional"  />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputState">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Required" required/>
            </Form.Group>
            <Button style={{justifyContent:'center'}} variant="primary" type="submit">
              Submit
            </Button>
           </Form>
           </Card>
         </Col>
    
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
          </Col>
        </Row>
      </Container>
    );
};

export default SearchCity;
