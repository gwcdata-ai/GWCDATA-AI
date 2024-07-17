import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./snow.module.css";

const ServiceHead = () => {
  return (
    <Container className="mt-5" id="snowflake-industry">
      <Row>
        <Col md={12}>
          <h1 className={styles.title}> Snowflake for your industry</h1>
          {/* <p className={` ${styles.para} mb-5`}>Streamline data architectures and forge a connected future using Snowflake.</p> */}
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceHead;
