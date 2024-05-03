import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "./PrincipalDomoFeature.module.css";

export const PrincipalDomoFeature = () => {
  return (
    <Container fluid className="pt-2 pb-5">
      <section className="">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={7} md={6} className="">
              <div className="">
                {/* <p className={styles?.sub_title}>
                  <strong>Principals</strong>
                </p> */}
                <p className={styles?.title}>Features of Domo</p>

                <p className={styles?.text}>
                  Leveraging more than 1,000 pre-built connectors and numerous
                  alternative data connection options, Domo eradicates the need
                  for time-consuming and expensive engineering projects.
                  Discover the functionalities of Domo for integrating,
                  analyzing, and making informed decisions based on your data.
                </p>
              </div>
            </Col>
            <Col lg={5} md={6} className="text-center">
              {/* <img
                src={commonRightSectionContent?.rightImg}
                alt=""
                className="rounded-4 mx-lg-3"
              /> */}
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
