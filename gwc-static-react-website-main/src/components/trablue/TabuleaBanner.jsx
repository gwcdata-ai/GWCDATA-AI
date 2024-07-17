import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BannerBgImg from "../../assets/images/ProductGCP/Banner/banner.webp";
// import BannerBgImg from "../../assets/images/ProductGCP/Banner/Section-2.png";
import tablogo from "../../assets/images/tabbanner.png";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "../atlanPatners/atlan.module.css";
import { Link } from "react-router-dom";

const TabuleaBanner = () => {
  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img} py-lg-1 mt-5`}
      style={{
        backgroundImage: `url(${BannerBgImg})`,
      }}
    >
      <section className="py-4">
        <Container className="py-4 mt-md-0 mt-4">
          <Row className="d-flex">
            <Col lg={7} md={6} className="py-lg-5">
              <p className={`${styles.breadcrumbs} mb-4 mt-5 mt-lg-3`}>
                <span>
                  <a href="/" className={`${styles.breadcrumbs} mb-3`}>
                    Home
                  </a>
                  <span> / </span>
                </span>
                Tableau
              </p>

              {/* <h1 className={`${styles.banner_title} mb-4`} /> */}
              <h1 className={`${styles.banner_title} mb-4`}>Tableau</h1>
              <p className={`${styles.banner_sub_title} mb-4`}>
                Elevate Business Intelligence for Competitive Edge
              </p>

              {/* <Link to='/contact-us' >
                                <Button className={`${styles.banner_button} mb-4`}>
                                    Talk to GWC experts
                                </Button>
                            </Link> */}
            </Col>
            <Col lg={5} md={6}>
              <img src={tablogo} alt="logo" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default TabuleaBanner;
