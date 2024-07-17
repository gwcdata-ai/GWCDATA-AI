import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import BannerBgImg from "../../assets/images/ProductGCP/Banner/banner.webp";
import bglogo from "../../assets/images/looker/lookerBanner.svg";
// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "../atlanPatners/atlan.module.css";

const LookerBanner = () => {
  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img} py-lg-2 mt-5 pt-4`}
      style={{
        backgroundImage: `url(${BannerBgImg})`,
      }}
    >
      <section className="py-4">
        <Container className="py-4 mt-md-0 mt-4">
          <Row className="d-flex">
            <Col lg={7} md={6} className="py-lg-5">
              <p className={`${styles.breadcrumbs} mb-4`}>
                <span>
                  <a href="/" className={`${styles.breadcrumbs} mb-3`}>
                    Home
                  </a>

                  <span> / </span>
                </span>
                Looker
              </p>

              {/* <h1 className={`${styles.banner_title} mb-4`} /> */}
              <h1 className={`${styles.banner_title} mb-4`}>Looker</h1>
              <p className={`${styles.banner_sub_title} mb-4`}>
                Unlock the Power of Data-driven Insights with Looker Business
                Intelligence.
              </p>
              <p className={`${styles.looker_banner_para} mb-0`}>
                At GWC, we believe in harnessing the full potential of your data
                to drive informed decision-making. Our Looker BI solution
                empowers your team to explore, analyse, and visualize data
                seamlessly.
              </p>
            </Col>
            <Col lg={5} md={6}>
              <img src={bglogo} alt="logo" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default LookerBanner;
