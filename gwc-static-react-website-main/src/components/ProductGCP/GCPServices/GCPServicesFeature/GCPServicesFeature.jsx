import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// CSS
import styles from "./GCPServicesFeature.module.css";

export const GCPServicesFeature = () => {
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
                <h1 className={styles?.title}>Google Service Offerings</h1>

                <p className={styles?.text}>
                  Don't just migrate to the cloud; fly high with it! Our GCP
                  Managed Services unlock the full potential of the Google Cloud
                  Platform, empowering you to focus on innovation while we
                  handle the heavy lifting.
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
