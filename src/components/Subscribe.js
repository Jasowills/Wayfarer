import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../index.css"; // Import the CSS file

function EmailSubscription() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email: ${email}`);
    // TODO: Add email submission logic here
  };

    return (
        <div className="slope">
            <Container className="py-5 email-subscription-container">
      <Row className="justify-content-center">
        <Col lg={8}>
          <h2 className="text-center mb-4">
            Be the first to receive the latest news and product updates.
          </h2>
          <Form onSubmit={handleSubmit}>
            <Row className="align-items-center">
              <Col md={9}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Col>
              <Col md={3} className="mt-3 mt-md-0">
                <Button variant="primary" type="submit" >
                  Subscribe
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
      </div>
    
  );
}

export default EmailSubscription;
