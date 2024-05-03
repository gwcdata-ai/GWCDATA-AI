import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "./dataGovernance.module.css";
import AOS from "aos";
AOS.init({
  duration: 1000,
});
export const DataGovernance = ({ commonRightSectionContent }) => {
  return (
    <Container fluid className="pt-2 pb-5" id={commonRightSectionContent?.id}>
      <section className="">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={7} md={6} className="" data-aos="fade-right">
              <div className="">
                <p className={styles?.sub_title}>
                  <strong>{commonRightSectionContent?.sub_title}</strong>
                </p>
                <p className={styles?.title}>
                  {commonRightSectionContent?.title}
                </p>
                {commonRightSectionContent?.description && (
                  <p className={styles?.text}>
                    {commonRightSectionContent?.description}
                  </p>
                )}
                {commonRightSectionContent?.list && (
                  <ul className={styles?.text}>
                    {commonRightSectionContent?.list?.map((item) => (
                      <li> {item} </li>
                    ))}
                  </ul>
                )}
              </div>
            </Col>
            <Col lg={5} md={6} className="text-center" data-aos="fade-left">
              <img
                src={commonRightSectionContent?.rightImg}
                alt=""
                className="rounded-4 mx-lg-3 w-100"
              // style={{ width: "349px", height: "343px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
