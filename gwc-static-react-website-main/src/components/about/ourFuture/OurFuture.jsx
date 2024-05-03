import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

// CSS
import styles from "./ourFuture.module.css";
import commonStyles from "../../../commoncss/common.module.css";
import AOS from "aos";
import useScroll from "../../../hooks/useScroll";
AOS.init({
  duration: 1000,
});

export const OurFuture = ({ ourFutureContent }) => {
  const visionmissionRef = useRef("#vision-mission");
  useScroll();


  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img} py-5 mt-5`}
      style={{
        backgroundImage: `url(${ourFutureContent?.bannerBg})`,
      }}
      id="vision-mission"
      ref={visionmissionRef}
    >
      <section className="">
        <Container className="">
          <Row className="">
            <Col md={12} className="">
              <p className={styles.sub_title}>
                {" "}
                {ourFutureContent?.sub_title}{" "}
              </p>
              <p className={`mb-5 ${styles.title}`}>
                {" "}
                {ourFutureContent?.title}{" "}
              </p>
            </Col>
            {ourFutureContent?.content?.map((item, index) => {
              return (
                <Col sm={12} md={12} lg={6} className="mb-4" data-aos="zoom-in">
                  <Card className={`${styles.card_height} p-4 rounded-4`}>
                    <Image
                      className={`${styles.list_img}`}
                      src={item?.img}
                      alt="img"
                    />
                    <p className={`${styles.list_title} mt-3`}>
                      {item?.title}{" "}
                    </p>
                    <ul className={`${styles?.list_list} px-0`}>
                      {item?.list?.map((item, index) => (
                        <li key={index}> {item} </li>
                      ))}
                    </ul>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Container>
  );
};
