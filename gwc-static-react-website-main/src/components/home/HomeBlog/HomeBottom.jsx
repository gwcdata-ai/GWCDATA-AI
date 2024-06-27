import React from "react";
import { Link } from "react-router-dom";
import commonstyles from "../../../commoncss/Home.module.css";
import styles from "./homebottom.module.css";
import AOS from "aos";
import { Container, Row, Col, Button } from "react-bootstrap";
AOS.init({
  duration: 1500,
});

const HomeBottom = () => {
  return (
    <div className={commonstyles.frameParent9}>
      <div className={commonstyles.frameParent10}>
        <Container className={styles.banner_img} data-aos="fade-left">
          <Row className="d-flex">
            <Col lg={7} className="py-lg-3 px-0">
              <p className={`${styles.banner_title} mb-4`}>
                Want to gain actionable insights from your data?
              </p>
              <p className={`${styles.banner_para} mb-4`}>
                Empower your business & drive success with our advanced BI and analytics solutions.
              </p>
              <Link to="/contact-us">
                <Button className={`${styles.banner_button}`}>
                  {" "}
                  Talk To Our Experts{" "}
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomeBottom;


