import React from "react";
import { Link } from "react-router-dom";
import commonstyles from "../../../commoncss/Home.module.css";
import styles from "../../../components/home/HomeBlog/homebottom.module.css";
import AOS from "aos";
import { Container, Row, Col, Button } from "react-bootstrap";
AOS.init({
  duration: 1500,
});

const AiBottomSection = () => {
  return (
    <div className={`${commonstyles.frameParent15} mt-5`}>
      <div className={commonstyles.frameParent10}>
        <Container className={styles.banner_img} data-aos="fade-left">
          <Row className="d-flex">
            <Col lg={7} className="py-lg-3 px-0">
              <p className={`${styles.banner_title} mb-4`}>
                Get Started with GWC Data.AI Solutions
              </p>
              <p className={`${styles.banner_para} mb-4`}>
                Embark on a transformative journey with GWC Data's AI solutions.
                Let us co-create intelligent, data-driven strategies for your
                success. Contact us today!
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

export default AiBottomSection;
