import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// CSS
import styles from "../ProductGCP/GCPServices/GCPServicesFeature/GCPServicesFeature.module.css";

export const LookersServiceHeader = () => {
  return (
    <Container fluid className="pt-2 pb-5">
      <section className="">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={7} md={6} className="">
              <div className="">
                {/* <p className={styles?.sub_title}>
                  <strong>Services</strong>
                </p> */}
                <h2 className={styles?.title}>Looker Offered Services</h2>

                <p className={styles?.text}>
                  GWC offers a wide range of consulting services to help you to
                  get the maximum from looker. Take a dive deep into your data
                  with an intuitive and user-friendly interface and empower your
                  team to ask questions and discover insights on the fly.
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
