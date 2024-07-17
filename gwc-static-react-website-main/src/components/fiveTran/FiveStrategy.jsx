import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import tryimg from "../../assets/images/fivetran/fivetran.png";
import styles from "./five.module.css";
import { Link } from "react-router-dom";

const FiveStrategy = () => {
  return (
    <Container style={{ backgroundColor: "#FFF" }} className="my-5">
      <Row>
        <Col md={6}>
          <img
            src={tryimg}
            alt="imgae"
            className={` ${styles.left_img} `}
            width="75%"
          />
        </Col>
        <Col md={6}>
          <div className={`${styles.leftSection} mt-5`}>
            <h2 className={`${styles.heading}`}>
              Empower your Team to Visualize their Pipeline and Accelerate Time
              to Close with Fivetran
            </h2>
            <p className={`${styles?.text2} text-black`}>
              The GWC team comprises highly qualified and experienced data
              professionals who can provide tailored and effective data
              solutions for your business needs using Fivetran’s automated data
              movement platform.
            </p>
            {/* <Button className={`${styles.get_btn} mt-3 `}>Connect with Us</Button> */}
            <Link to="/contact-us">
              <Button className={`${styles.get_btn} mt-3 `}>
                Talk To Our Experts
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FiveStrategy;
