import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
// import BannerBgImg from "../../assets/images/boomi/Bbanner.png";
import BannerBgImg from "../../assets/images/ProductGCP/Banner/banner.webp";
import boomilogo from "../../assets/images/boomi/boomilogo.png";
// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./boomi.module.css";

const BoomiBanner = () => {
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
            <Col lg={6} md={6} className="py-lg-5">
              <p className={`${styles.breadcrumbs} mb-4`}>
                <span>
                  <a href="/" className={`${styles.breadcrumbs} mb-3`}>
                    Home
                  </a>
                  <span> / </span>
                </span>
                BOOMI
              </p>

              {/* <h1 className={`${styles.banner_title} mb-4`} /> */}
              <p className={`${styles.banner_title} mb-4`}>
                Drive Efficiency, Productivity, and Innovation Across Your
                Organization
              </p>
              <p className={`${styles.banner_sub_title} mb-4`}>
                At GWC, we offer expertise in Boomi, a leading integration
                platform designed to connect applications, data, automation, and
                devices seamlessly.
              </p>
            </Col>
            <Col lg={6} md={6}>
              <img src={boomilogo} alt="logo" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default BoomiBanner;
