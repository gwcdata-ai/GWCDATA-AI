import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Slider from "react-slick";
// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./ourExpertise.module.css";
import newStyles from "../../../commoncss/Home.module.css";

import useMedia from "../../../hooks/useMedia";
import AOS from "aos";
AOS.init({
  duration: 1200,
});

export const OurExpertiseSF = ({ ourExpertiseContent }) => {
  const truncateTexthead = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text.padEnd(limit, " "); // Pad with spaces to ensure consistent length
  };

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text.padEnd(limit, " "); // Pad with spaces to ensure consistent length
  };
  const isMobile = useMedia("(max-width:600px)");
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: isMobile ? false : <SampleNextArrow />,
    prevArrow: isMobile ? false : <SamplePrevArrow />,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom mt-3 mt-lg-0">
        <div className="loading " />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
    // Add other settings as needed
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          fontSize: "0px",
          width: "0%",
          position: "absolute",
          right: "10px",
        }}
        onClick={onClick}
      >
        <svg
          className={newStyles.arrows}
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 18.1206L15.5 12.1206L9.5 6.12061"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          height: "30px",
          width: "40px",
          borderRadius: "50%",
          zIndex: "1",
        }}
        onClick={onClick}
      >
        <svg
          className={`${newStyles.arrows}`}
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 18.1206L9.5 12.1206L15.5 6.12061"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
  }
  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img}  pb-lg-3 mb-5 pb-4`}
      style={{ backgroundImage: `url(${ourExpertiseContent?.bannerBg}) ` }}
    >
      <section className="">
        <Container className="mb-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={12} className="mb-4 mt-md-0 mt-lg-5 mt-3">
              <p className={styles?.sub_title}>
                <strong>{ourExpertiseContent?.sub_title}</strong>
              </p>
              <h1 className={styles?.title}>{ourExpertiseContent?.title} </h1>
            </Col>
            <Slider {...settings} className="m-0 p-0">
              {ourExpertiseContent?.list?.map((item, index) => (
                <Col
                  lg={3}
                  md={6}
                  sm={12}
                  key={index}
                  className={`${styles.card_top_section} mb-lg-5 mb-4 mx-3`}
                  data-aos="zoom-in"
                >
                  <div className={`${styles.card_section_sf_expert} mb-3`}>
                    <Image
                      src={item?.img}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      alt=""
                    />
                    <h3 className={`${styles.card_title_expert} my-3`}>
                      {" "}
                      {item?.title}
                    </h3>

                    <p className={`${styles.card_text_expert}  `}>
                      {item?.text}
                    </p>
                  </div>
                </Col>
              ))}
            </Slider>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
