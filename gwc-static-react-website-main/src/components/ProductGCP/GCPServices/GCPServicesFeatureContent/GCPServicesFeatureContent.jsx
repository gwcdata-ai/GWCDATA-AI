import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "./GCPServicesFeatureContent.module.css";

import img1 from "../../../../assets/images/ProductDemo/PrincipalDomo/Principal1.png";

export const GCPServicesFeatureContent = () => {
  return (
    <Container fluid className="pt-2 pb-5">
      <section className="">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={5} md={6} className="px-md-0">
              <img src={img1} alt="" className="w-100 mx-lg-3 rounded-4" />
            </Col>
            <Col lg={7} md={6} className="px-md-5 pt-md-0 pt-5">
              <div className="">
                <p className={styles?.sub_title}>
                  <strong>Analytics Features</strong>
                </p>
                <p className={styles?.title}>Google Compute Engine </p>

                <p className={styles?.text}>
                  Google Compute Engine is an Infrastructure as a Service (IaaS)
                  offering that allows users to run virtual machines (VMs) on
                  Google's infrastructure. It provides scalable and flexible
                  computing resources, allowing you to easily deploy and manage
                  virtual machines in the cloud. Compute Engine is suitable for
                  a wide range of workloads, including web hosting, application
                  development, and data processing.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
