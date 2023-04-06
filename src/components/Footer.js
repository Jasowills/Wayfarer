import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css"; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md={6}>
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li>
                <a href="https://twitter.com/Jasowills">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://web.facebook.com/kachijason.williams">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jasowills/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h3>Contact Us</h3>
            <p>WayFarer</p>
            <p>Email: Jujuzhaddy01@gmail.com</p>
             <p>Phone: (+234) 91-344551849</p>
            <p>Developed by Jason williams</p>

          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <hr className="divider" />
            <p className="text-muted small">
              &copy; WayFarer.com {new Date().getFullYear()}. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
