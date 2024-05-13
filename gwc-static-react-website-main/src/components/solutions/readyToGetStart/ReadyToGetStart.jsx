import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./readyToGetStart.module.css";

export const ReadyToGetStart = ({ ReadyToGetStartContent }) => {
  // console.log("ReadyToGetStartContent", ReadyToGetStartContent);
  return (
    <Container
      fluid
      // className="pt-2 pb-5"
      className={`${commonStyles.banner_container_img}  py-lg-5`}
      style={{ backgroundImage: `url(${ReadyToGetStartContent?.bannerBg})` }}
    >
      <section className="">
        <Container className="">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={8} className="mb-4 mt-md-0 mt-5 mb-md-0 mb-5">
              <p className={styles?.sub_title}>
                {ReadyToGetStartContent?.sub_title}
              </p>
              <p className={` ${styles?.title} mb-1 `}>{ReadyToGetStartContent?.title1}</p>
              <p className={` ${styles?.title} mb-1 `}>{ReadyToGetStartContent?.title2}</p>
              <p className={` ${styles?.title} mb-4 `}>{ReadyToGetStartContent?.title3}</p>
              <Link to="/contact-us">
                <Button className={`${styles.btn2} mx-1`}>
                  {" "}
                  {ReadyToGetStartContent?.btn2}{" "}
                </Button>
              </Link>
              {/* <Button className={` ${styles.btn2} mx-md-2 mx-xs-2 mx-sm-2 my-md-0 my-3`}>
                {" "}
                {ReadyToGetStartContent?.btn2}{" "}
              </Button> */}
            </Col>
            <Col md={4} className="mb-md-0 mb-5">
              <Image
                src={ReadyToGetStartContent?.video}
                className="w-100 rounded-4"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
