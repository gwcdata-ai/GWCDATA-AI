import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

// CSS
import styles from "./dbt.module.css";
import image1 from "../../assets/images/dbt/what.png";

import AOS from "aos";
AOS.init({
  duration: 1500,
});

const WhatDbt = () => {
  return (
    <Container fluid className="pt-2 pb-4">
      <section className="">
        <Container className="mt-md-0 mt-0">
          <Row className="d-flex align-items-center justify-content-center my-lg-5">
            <Col md={5} className="px-md-0" data-aos="fade-left">
              <img
                src={image1}
                alt="develop design and modify dbt models for data transformation"
                className={`${styles.five_image} w-100 `}
              />
            </Col>
            <Col md={7} className="pt-md-0 pt-4 px-lg-5" data-aos="fade-right">
              <div className="">
                <p className={`${styles?.title} mb-3`}>
                  Unlock the Hidden Gems in your data
                </p>

                <p className={styles?.text}>
                  Unlock the full potential of your data with dbt, a powerful
                  open-source analytics engineering tool designed to transform
                  the way you work with your data warehouse. dbt empowers data
                  analysts and teams to efficiently transform raw data into
                  valuable insights, driving data-driven decision-making across
                  your organization.
                </p>

                <a href="/dbt#data-service">
                  <Button className={`${styles.banner_button} mt-3`}>
                    {" "}
                    Explore more
                    <svg
                      className="mx-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M1 8.61035H15M15 8.61035L8 1.61035M15 8.61035L8 15.6104"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default WhatDbt;
