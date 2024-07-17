import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import BannerBgImg from "../../assets/images/ProductGCP/Banner/banner.webp";
import snowbanner from "../../assets/images/snowbanner.png";
// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "../../components/atlanPatners/atlan.module.css";

const SnowflakeBanner = () => {
  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img} py-lg-5 mt-5 pt-3`}
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
                SnowFlake
              </p>

              {/* <h1 className={`${styles.banner_title} mb-4`} /> */}
              <p className={`${styles.banner_title} mb-4`}>SnowFlake</p>
              <p className={`${styles.banner_sub_title} mb-4`}>
                As a Snowflake partner, GWC is recognized for its expertise in
                implementing & optimizing solutions on the Snowflake platform.
                This partnership allows you to offer specialized services,
                including data migration, integration, & customized solutions,
                leveraging the capabilities of Snowflake's cloud data platform.
              </p>
            </Col>
            <Col lg={5} md={6}>
              <img src={snowbanner} alt="logo" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default SnowflakeBanner;
