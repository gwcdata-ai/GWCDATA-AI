import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "./leftSideImageSection.module.css";
import AOS from "aos";
AOS.init({
  duration: 1000,

});

export const CommonLeftImageComponent = ({ commonLeftSectionContent }) => {
  return (
    <Container fluid className="pt-2">
      <section className="">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={4} md={6} className="px-md-0" data-aos="fade-right">
              <img
                src={commonLeftSectionContent?.leftImg}
                alt=""
                className="w-100 mx-lg-3 rounded-4"
              />
            </Col>
            <Col
              lg={8}
              md={6}
              className="px-md-5 pt-md-0 pt-5"
              data-aos="fade-left"
            >
              <div className="">
                <p className={styles?.sub_title}>
                  <strong>{commonLeftSectionContent?.sub_title}</strong>
                </p>
                <p className={styles?.title}>
                  {commonLeftSectionContent?.title}
                </p>
                {commonLeftSectionContent?.description && (
                  <p className={styles?.text}>
                    {commonLeftSectionContent?.description}
                  </p>
                )}
                {commonLeftSectionContent?.list && (
                  <ul className={`${styles?.text} px-3`}>
                    {commonLeftSectionContent?.list?.map((item, index) => (
                      <li className='mb-3' key={index}> {item} </li>
                    ))}
                  </ul>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
