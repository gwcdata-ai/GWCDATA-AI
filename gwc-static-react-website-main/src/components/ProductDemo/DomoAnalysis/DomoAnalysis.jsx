import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./DomoAnalysis.module.css";

import bannerImg from "../../../assets/images/about/ourCultureBg.webp";
import image2 from "../../../assets/images/ProductDemo/DomoAnalysis.png";
import AOS from "aos";
AOS.init({
  duration: 1500,
});
export const DomoAnalysis = () => {
  return (
    <Container
      fluid
      // className="pt-2 pb-5"
      className={`${commonStyles.banner_container_img}  py-lg-5`}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <section className="">
        <Container className="">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={7} md={6} className="py-md-0 py-5" data-aos="fade-right">
              <div className="">
                <p className={styles?.text}>
                  As the implementation partner for Domo, GWC provides intuitive
                  experiences infused with AI, data science, and a robust data
                  foundation. Seamlessly integrating with your current cloud and
                  legacy systems, our solutions ignite curiosity and drive
                  substantial business impact.
                </p>
                <p className={styles?.text}>
                  From user-friendly self-service dashboards to tailored
                  pro-code applications, Domo maximizes the returns on your data
                  investments, providing timely insights to empower everyone.
                  Leverage public models, large language models, and generative
                  AI such as ChatGPT with Domo's reliable and flexible AI
                  framework. This enables you to expedite the speed to value
                  without compromising on security.
                </p>
              </div>
            </Col>
            <Col lg={5} md={6} className="pb-md-0 pb-5" data-aos="fade-left">
              <img src={image2} alt="" className="w-100  rounded-4 mx-lg-3" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
