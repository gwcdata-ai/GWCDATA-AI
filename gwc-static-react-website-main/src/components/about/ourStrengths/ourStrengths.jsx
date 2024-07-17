import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "./ourStrength.module.css";
import AOS from "aos";
AOS.init({
  duration: 1200,
});

export const OurStrengths = ({ strengthsData }) => {
  // console.log(strengthsData);
  return (
    <Container fluid className="pb-5">
      <section className="">
        <Container className="">
          <Row className="d-flex align-items-center justify-content-center mb-4">
            {/* <Col md={12} className="">
              <p className={styles.title}> Strengths </p>
            </Col> */}
          </Row>
          <Row className="">
            {strengthsData?.map((item, index) => {
              let borderColorClass = styles.section_border;

              if (index === 0) {
                borderColorClass += ` ${styles.section_border_0}`;
              } else if (index === 1) {
                borderColorClass += ` ${styles.section_border_1}`;
              } else if (index === 2) {
                borderColorClass += ` ${styles.section_border_2}`;
              }
              return (
                <Col
                  md={4}
                  key={index}
                  className="mb-md-0 mb-3"
                  data-aos="flip-right"
                >
                  <div
                    className={`${styles.section_border}  ${borderColorClass} p-2`}
                  >
                    <div className="p-3">
                      <Image src={item?.img} className="w-100" alt="" />
                      <h3 className={`${styles.card_title} my-3`}>
                        {" "}
                        <strong> {item?.title} </strong>
                      </h3>
                      <p className={`${styles.card_para} my-3`}>
                        {" "}
                        {item?.description}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Container>
  );
};
