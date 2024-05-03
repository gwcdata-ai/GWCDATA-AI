import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "./PricipalDomoFeatureContent.module.css";

import img1 from "../../../../assets/images/ProductDemo/PrincipalDomo/Principal1.png";

export const PricipalDomoFeatureContent = () => {
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
                  <strong>Visualizations and Dashboards</strong>
                </p>
                <p className={styles?.title}>
                  Build Powerful Data Visualizations on a Single Platform
                </p>

                <p className={styles?.text}>
                  Select from a myriad of custom maps, each meticulously crafted
                  to represent your data uniquely, or effortlessly upload your
                  own maps. Simplify intricate datasets with just a few clicks,
                  and swiftly filter or sort data without modifying the data
                  source or impacting others' perspectives.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
