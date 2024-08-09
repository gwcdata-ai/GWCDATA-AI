import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./WhyDomo.module.css";

import bannerImg from "../../../assets/images/ProductDemo/WhyDemoBanner.png";
import image2 from "../../../assets/images/ProductDemo/WhyDemoImg.png";
import WhyDemoCards from "./WhyDemoCards/WhyDemoCards";
import AOS from "aos";
AOS.init({
  offset: 200,
  duration: 1500,
  easing: "ease-in-sine",
  delay: 100,
});
AOS.refreshHard();
export const WhyDomo = () => {
  return (
    <Container
      fluid
      // className="pt-2 pb-5"
      className={`${commonStyles.banner_container_img}  py-lg-5 `}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <section className="">
        <Container className="">
          <Row className="d-flex align-items-center justify-content-center px-0 ">
            <Col
              lg={5}
              md={6}
              className="pb-md-0 pb-5 px-0"
              data-aos="fade-right"
            >
              <img
                src={image2}
                alt="product feature query data snowflake salesforce sap 2x"
                className={`rounded-4 mx-lg-3 ${styles.imageCard}`}
              />
            </Col>
            <Col lg={7} md={6} className="py-md-0 py-5" data-aos="fade-left">
              <div className="">
                {/* <p className={styles?.sub_title}>
                  <strong>Why Domo ?</strong>
                </p> */}
                <p className={styles?.title}>Why Domo?</p>

                <p className={styles?.text}>
                  Machine learning, natural language processing, and predictive
                  analytics are pivotal to Domo's DNA and data experience
                  platform. Driven by a mission to amplify business impact
                  through data, Domo's AI Service Layer revolutionizes how
                  organizations harness and gain value from generative AI.
                </p>
                <p className={styles?.text}>
                  The potency of AI relies on connected data, and Domo has the
                  most comprehensive end-to-end connected data stack globally.
                  This unleashes a myriad of possibilities, including workflows,
                  alert-triggered actions, and automated apps. Aligned with
                  Domo's principles, the AI Service Layer is meticulously
                  designed for scalability, security, and unwavering business
                  value.
                </p>
                <p className={styles?.text}>
                  Domo streamlines the creation and deployment of AI/ML models
                  within low-code and no-code data experiences, enhancing
                  accessibility and user-friendliness. This ensures that you can
                  integrate AI into your operations and expand its use
                  throughout your entire organization, irrespective of technical
                  expertise.
                </p>
                <p className={styles?.text}>
                  GWC’s Domo capabilities help you efficiently manage your
                  entire AI model lifecycle, spanning from creation,
                  integration, and optimization to deploying endpoints in
                  applications and dashboards. This empowers business users with
                  the flexibility to safely and securely deploy across their
                  entire organization.
                </p>
              </div>
            </Col>
          </Row>
          <WhyDemoCards />
        </Container>
      </section>
    </Container>
  );
};
