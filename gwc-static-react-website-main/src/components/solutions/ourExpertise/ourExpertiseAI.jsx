import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./ourExpertise.module.css";
import AOS from "aos";
AOS.init({
  duration: 1200,
});

export const OurExpertiseAI = ({ ourExpertiseContent }) => {
  console.log("ourExpertiseContent", ourExpertiseContent);
  return (
    <Container
      fluid
      // className="pt-2 pb-5"
      className={`${commonStyles.banner_container_img}  py-lg-5 mt-5`}
      style={{ backgroundImage: `url(${ourExpertiseContent?.bannerBg})` }}
    >
      <section className="">
        <Container className="">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={12} className="mb-4 mt-md-0 mt-5">
              <p className={styles?.sub_title}>
                <strong>{ourExpertiseContent?.sub_title}</strong>
              </p>
              <p className={styles?.title}>{ourExpertiseContent?.title}</p>
            </Col>
            {ourExpertiseContent?.list?.map((item, index) => (
              <Col
                lg={3}
                md={6}
                sm={12}
                key={index}
                className={` mb-md-0 mb-5`}
                data-aos="zoom-in"
              >
                <div className={`${styles.card_section_ai} mb-3`}>
                  <Image
                    src={item?.img}
                    style={{ width: "72px", height: "72px" }}
                    alt=""
                  />
                  {/* <p className={`${styles.card_title} my-3`}> {item?.title}</p> */}
                  <p
                    className={`${styles.card_title} my-3`}
                    dangerouslySetInnerHTML={{
                      __html: item?.title?.replace(/\n/g, ""),
                    }}
                  />
                  <p className={`${styles.card_text} my-3`}> {item?.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Container>
  );
};
