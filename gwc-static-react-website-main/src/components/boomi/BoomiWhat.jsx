import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

// CSS
import styles from "./boomi.module.css";
import image1 from "../../assets/images/boomi/what.png";

import AOS from "aos";
AOS.init({
  duration: 1500,
});

const BoomiWhat = () => {
  return (
    <Container fluid className="pt-2 pb-4">
      <section className="">
        <Container className="mt-md-4 mt-0">
          <Row className="d-flex align-items-center justify-content-center my-5">
            <Col xs={12} lg={6} md={6} className="px-md-0" data-aos="fade-left">
              <img
                src={image1}
                alt="Automate Your Workflows in Boomi"
                className=" mx-lg-5  mt-md-0 mt-5"
                width="80%"
              />
            </Col>
            <Col
              xs={12}
              lg={6}
              md={6}
              className="pt-md-0 pt-4"
              data-aos="fade-right"
            >
              <div className="">
                <p className={`${styles?.title} pb-3`}>
                  Automate Your Workflows & Streamline Business Processes
                </p>

                <p className={styles?.text}>
                  Boomi enables rapid application development & deployment.
                  Drive innovation & agility with GWC & Boomi by your side.
                </p>

                <a href="#solutions-boomi">
                  <Button className={`${styles.banner_button} mt-3`}>
                    {" "}
                    Explore More
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

export default BoomiWhat;
