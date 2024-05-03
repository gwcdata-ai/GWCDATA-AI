import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import BannerBgImg from "../../assets/images/ProductGCP/Banner/banner.webp";
import bglogo from "../../assets/images/atlan/atlanlogo.png";
// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./atlan.module.css";


const AtlanBanner = () => {
  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img} py-lg-5 mt-5`}
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

                  <a
                    href='/'
                    className={`${styles.breadcrumbs} mb-3`}
                  >
                    Home
                  </a>

                  <span> / </span>
                </span>
                Atlan
              </p>

              <h1 className={`${styles.banner_title} mb-4`} />
              <p className={`${styles.banner_title} mb-4`} >
                A Single Source of Truth for Your Team
              </p>
              <p className={`${styles.banner_sub_title} mb-4`} >
                Atlan is a data catalog that helps you search, discover, and understand data across your data stack using natural language, business context, or SQL syntax.
              </p>


            </Col>
            <Col lg={5} md={6}>
              <img src={bglogo} alt="logo" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  )
}

export default AtlanBanner
