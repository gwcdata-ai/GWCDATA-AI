import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "./whyChooseGwc.module.css";

// ASSETS
import HorizondalLine from "../../../assets/images/about/hrLine.png";
import AOS from "aos";
AOS.init({
  duration: 1500,
});

export const WhyChooseGwc = ({ dataWhyChooseGwc, dataEmployees }) => {
  // console.log(dataEmployees);
  return (
    <Container fluid className="pt-2 pb-5">
      <section className="">
        <Container className="mt-5">
          <Row className="my-5 ">
            {dataEmployees?.map((item, index) => (
              <Col
                lg={3}
                md={6}
                key={index}
                className={` mb-md-0 mb-4`}
                data-aos="zoom-in"
              >
                <div className="px-3">
                  <Image
                    src={item?.img}
                    className={`${styles.card_img} w-100`}
                    alt={item.alt}
                  />
                  <Row className="mt-3">
                    <Col xs={1} sm={2}>
                      <Image src={HorizondalLine} alt="HRLINE" />
                    </Col>
                    <Col xs={7} sm={7} className="px-0">
                      <h3 className={`${styles.card_title}  mb-1 mt-0`}>
                        {" "}
                        {item?.title}
                      </h3>
                      <h2 className={`${styles.card_para}`}>
                        {" "}
                        {item?.description}
                      </h2>
                    </Col>
                    <Col xs={4} sm={3} className="mt-3">
                      <a target="_blank" href={item?.url}>
                        <img src={item?.logo} alt="" />
                      </a>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
          <Row className="d-flex align-items-center justify-content-center mb-4">
            <Col md={12} className="">
              <h2 className={styles.title}> Why Choose GWC Data.AI?</h2>
            </Col>
          </Row>
          <Row className="">
            {dataWhyChooseGwc?.map((item, index) => (
              <Col
                md={6}
                lg={3}
                key={index}
                className={` mb-md-0 mb-3`}
                data-aos="flip-down"
              >
                <div className={`${styles.card_section}`}>
                  <Image
                    src={item?.img}
                    style={{ width: "72px", height: "72px" }}
                    alt=""
                  />
                  <h3 className={`${styles.card_title1} my-3`}>
                    {" "}
                    {item?.title}
                  </h3>
                  <p className={`${styles.card_para1} my-3`}>
                    {" "}
                    {item?.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Container>
  );
};
