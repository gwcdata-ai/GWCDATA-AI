import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "./puttingData.module.css";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

export const PuttingDataToWork = ({ puttingDataSectionContent }) => {
  return (
    <Container fluid className="pt-2 pb-5">
      <section className="">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={12} className="">
              <div className="">
                <p className={styles?.sub_title}>
                  <strong>{puttingDataSectionContent?.sub_title}</strong>
                </p>
                <p className={styles?.title}>
                  {puttingDataSectionContent?.title}
                </p>
                {puttingDataSectionContent?.text && (
                  <p className={styles?.text}>
                    {puttingDataSectionContent?.text}
                  </p>
                )}
                <Row className="">
                  {puttingDataSectionContent?.points &&
                    puttingDataSectionContent.points.map((item, index) => {
                      let boxColorClass = styles.section_box;
                      if (index === 0) {
                        boxColorClass += ` ${styles.section_box_0}`;
                      } else if (index === 1) {
                        boxColorClass += ` ${styles.section_box_1}`;
                      } else if (index === 2) {
                        boxColorClass += ` ${styles.section_box_2}`;
                      } else if (index === 3) {
                        boxColorClass += ` ${styles.section_box_3}`;
                      }
                      return (
                        <Col key={index} lg={3} className={` ${styles.card_container} mb-3`}>
                          <div className={`${boxColorClass} ${styles.card} `}>
                            {item}
                          </div>
                        </Col>
                      );
                    })}
                </Row>

                {/* {puttingDataSectionContent?.points && (
                  <Row className="justify-content-md-center">
                    <Col md={6} className="mb-0">
                      <ul className="mb-0">
                        {puttingDataSectionContent?.points
                          ?.slice(
                            0,
                            Math.ceil(
                              puttingDataSectionContent.points.length / 2
                            )
                          )
                          .map((item, index) => (
                            <li key={index} className={styles?.text}>
                              {item}
                            </li>
                          ))}
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul>
                        {puttingDataSectionContent?.points
                          ?.slice(
                            Math.ceil(
                              puttingDataSectionContent.points.length / 2
                            )
                          )
                          .map((item, index) => (
                            <li key={index} className={styles?.text}>
                              {item}
                            </li>
                          ))}
                      </ul>
                    </Col>
                  </Row>
                )} */}
              </div>
            </Col>
            {/* {puttingDataSectionContent?.list?.map((item, index) => {
              let borderColorClass = styles.section_border;

              if (index === 0) {
                borderColorClass += ` ${styles.section_border_0}`;
              } else if (index === 1) {
                borderColorClass += ` ${styles.section_border_1}`;
              } else if (index === 2) {
                borderColorClass += ` ${styles.section_border_2}`;
              } else if (index === 3) {
                borderColorClass += ` ${styles.section_border_3}`;
              }
              return (
                <Col
                  md={6}
                  key={index}
                  className={` mb-md-0 mb-5 `}
                  data-aos="slide-left"
                >
                  <div className={`${borderColorClass} mb-md-4 mb-2`}>
                    <Row
                      className={`d-flex align-items-center justify-content-center`}
                    >
                      <Col xs={2}>
                        <Image
                          style={{ width: "72px", height: "72px" }}
                          src={item?.img}
                          className=""
                          alt=""
                        />
                      </Col>
                      <Col xs={10} className="px-md-0 px-5">
                        <p className={`${styles.card_title} my-3`}>
                          {" "}
                          {item?.title}
                        </p>
                        <ul>
                          {item?.text?.map((item, index) => {
                            return (
                              <li className={`${styles.card_text} my-3`}>
                                {" "}
                                {item}
                              </li>
                            );
                          })}
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Col>
              );
            })} */}
          </Row>
        </Container>
      </section>
    </Container>
  );
};
