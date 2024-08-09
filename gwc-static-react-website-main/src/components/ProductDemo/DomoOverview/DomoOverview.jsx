import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import overviewimg from "../../../assets/images/ProductDemo/DomoOverview.png";

// CSS
import styles from "./DomoOverview.module.css";
import AOS from "aos";
AOS.init({
  duration: 1500,
});
export const DomoOverview = ({ commonLeftSectionContent }) => {
  return (
    <Container fluid className="pt-2 pb-5">
      <section className="">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={5} md={6} className="px-md-0" data-aos="fade-right">
              <img
                src={overviewimg}
                alt="DOMO"
                className=" mx-lg-5  rounded-4"
              />
            </Col>
            <Col
              lg={7}
              md={6}
              className="px-md-5 pt-md-0 pt-5"
              data-aos="fade-left"
            >
              <div className="px-3 px-lg-0">
                {/* <p className={styles?.sub_title}>
                  <strong>Overview</strong>
                </p> */}
                <h2 className={styles?.title}>What is Domo?</h2>

                <p className={styles?.text}>
                  Experience Domo, an all-encompassing platform which seamlessly
                  integrates data, visualization, app development, security, and
                  governance. Uncover the power of customizable, real-time, and
                  interactive dashboards that can be effortlessly crafted by
                  anyone. Hosted in the cloud, it effortlessly interfaces with
                  data from various systems and cloud data warehouses. With
                  inherent data governance, meticulous user permissions, and
                  robust data security and compliance, it facilitates the
                  creation of apps using both low- and pro-code tools. Elevate
                  your data experience with this comprehensive solution.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
