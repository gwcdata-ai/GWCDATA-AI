import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// CSS

import commonStyles from "../../../commoncss/common.module.css";
import styles from "./ProductBanner.module.css";
import { AboutBannerData, ProductBannerCardsData } from "./ProductBannerData";
import bannerRightImg from "../../../assets/images/ProductDemo/Banner/bannerRight.svg";

export const ProductBanner = () => {
  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img} py-lg-2 mt-5`}
      // style={{
      //   background: "linear-gradient(90.06deg, #6F2B8C 0.47%, rgba(55, 8, 89, 0.83) 52.28%, rgba(111, 43, 140, 0) 87.51%)",
      // }}
    >
      <video
        width="100%"
        height="700px"
        autoPlay
        muted
        loop
        playsInline
        className="video-element"
        style={{
          position: "absolute",
          objectFit: "cover",
          zIndex: "-1",
          padding: "0px",
          
        }}
      >
        <source
          src={
            "https://zerozilla-admin.s3.ap-south-1.amazonaws.com/apartment/images/1704181979613~original-d43d94acd20b40ea8a8ff115cd684422.mp4"
          }
          type="video/mp4"
        />
      </video>
      <section className="py-1">
        <Container className="py-1 mt-md-0 mt-5" >
          <Row className="d-flex">
            <Col lg={7} className="py-lg-5">
              <p className={`${styles.breadcrumbs} mb-4`}>
                {AboutBannerData?.breadcrumbs && (
                  <>
                    {AboutBannerData?.breadcrumbs?.map((item, index) => (
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
                        {index !== AboutBannerData?.breadcrumbs?.length - 1 && (
                          <span> / </span>
                        )}
                      </span>
                    ))}
                  </>
                )}
              </p>

              <p className={`${styles.banner_title} mb-4`}>
                {AboutBannerData?.title}
              </p>
              <p className={`${styles.banner_para} mb-4`}>
                {AboutBannerData?.para}
              </p>
              {AboutBannerData?.buttontext && (
                <>
                  <Button className={`${styles.banner_button} me-4`}>
                    {" "}
                    {AboutBannerData?.buttontext}{" "}
                  </Button>
                  <Button
                    className={`${styles.banner_button} ${styles.banner_button2}`}
                  >
                    {" "}
                    {AboutBannerData?.buttontext2}{" "}
                  </Button>
                </>
              )}
            </Col>
            <Col lg={5}>
              <img src={bannerRightImg} alt="" className="w-100 mt-5" />
            </Col>
          </Row>
          <Row>
            {ProductBannerCardsData.map((data,index) => (
              <Col sm={12} md={6} lg={4} >
                <div className={styles.bannerCard} key={index}>
                  <div className={styles.BannerCardHeading}>{data?.name}</div>
                  <p className={`h-50 ${styles.BannerCardPara}`}>
                    {data?.desc}
                  </p>
                  <a href={data?.url}>
                    <Button className={`w-80  ${styles.subscribe_btn}`}>
                      {" "}
                      {data?.buttonTxt}
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
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Button>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Container>
  );
};
