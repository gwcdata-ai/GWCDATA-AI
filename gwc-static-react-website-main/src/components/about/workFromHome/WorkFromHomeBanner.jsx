import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./workFromHomeBanner.module.css";

export const WorkFromHomeBanner = ({ workFromHomeBannerContent }) => {
  console.log("workFromHomeBannerContent", workFromHomeBannerContent);
  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img} mt-5 py-lg-1`}
      style={{
        backgroundImage: `url(${workFromHomeBannerContent?.bannerBg})`,
      }}
    >
      <section className="py-3">
        <Container className="py-3">
          <Row className="d-flex">
            <Col md={6} className="py-lg-5">
              <p className={`${styles.breadcrumbs} mb-4`}>
                {workFromHomeBannerContent?.breadcrumbs?.map((item, index) => (
                  <span key={index}>
                    {item?.url ? (
                      <a
                        href={item?.url}
                        className={`${styles.breadcrumbs} mb-4`}
                      >
                        {" "}
                        {item?.text}{" "}
                      </a>
                    ) : (
                      <span>{item?.text}</span>
                    )}
                    {index !==
                      workFromHomeBannerContent?.breadcrumbs?.length - 1 && (
                      <span> / </span>
                    )}
                  </span>
                ))}
              </p>

              <h1 className={`${styles.banner_title} mb-4`}>
                {workFromHomeBannerContent?.para}
              </h1>
              <p className={`${styles.banner_para} mb-4`}>
                {workFromHomeBannerContent?.title}
              </p>
              <Button className={`${styles.banner_button}`}>
                {" "}
                {workFromHomeBannerContent?.buttontext}{" "}
              </Button>
            </Col>
            <Col md={6}>
              <Image
                className="w-100 mt-md-0 mt-5"
                src={workFromHomeBannerContent?.image}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
