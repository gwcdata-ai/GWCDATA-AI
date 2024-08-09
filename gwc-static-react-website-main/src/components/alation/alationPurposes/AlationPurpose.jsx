import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "../../atlanPatners/atlan.module.css";

import bannerImg from "../../../assets/images/about/ourCultureBg.webp";
import image2 from "../../../assets/images/Alation Images/Drive Strategic.svg";

import AOS from "aos";
AOS.init({
  duration: 1500,
});

const AlationPurpose = () => {
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
            <Col
              lg={6}
              md={6}
              className="py-md-0 py-lg-5"
              data-aos="fade-right"
            >
              <div className="">
                <p className={styles?.text1}>
                  Drive Strategic Growth and Optimize Performance with
                  Comprehensive Data Insights
                </p>
                <p className={styles?.text2}>
                  Alation plays a pivotal role in cultivating a robust data
                  culture by empowering every individual within your
                  organization to discover, comprehend, and place trust in data
                  seamlessly.
                </p>
              </div>
            </Col>
            <Col
              lg={6}
              md={6}
              className="pb-md-0 pb-0 mt-lg    -5 d-flex justify-content-center"
              data-aos="fade-left"
            >
              <img
                src={image2}
                alt="Alation dashboard"
                className=" mx-lg-5"
                width="70%"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default AlationPurpose;
