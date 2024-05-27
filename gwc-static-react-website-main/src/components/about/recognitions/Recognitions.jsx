import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Slider from "react-slick";

// CSS
import styles from "./recognitions.module.css";
import commonStyles from "../../../commoncss/common.module.css";
import newstyles from "../../../commoncss/Home.module.css";
import newStyles from "../../../commoncss/Home.module.css";
import useMedia from "../../../hooks/useMedia";

import AOS from "aos";
AOS.init({
  duration: 1500,
});
export const AboutRecognitions = ({ recognitionsContent }) => {
  const sliderRef = useRef(null); //slideref for slider arrow
  const isMobile = useMedia("(max-width:600px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: isMobile ? false : <SampleNextArrow />,
    prevArrow: isMobile ? false : <SamplePrevArrow />,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom mt-4 mt-lg-4">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
  // console.log("recognitionsContent", recognitionsContent);

  // slider arrow code
  const previous = () => {
    // console.log("Previous button clicked");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const next = () => {
    // console.log("Next button clicked");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
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
      className={`${commonStyles.banner_container_img} py-5`}
      style={{
        backgroundImage: `url(${recognitionsContent?.bannerBg})`,
      }}
      id="recognitions"
    >
      <section className="">
        <Container>
          <Row className="">
            <Col md={9} className="">
              <p className={`mb-2 ${styles.sub_title}`}>
                {" "}
                {recognitionsContent?.sub_title}{" "}
              </p>
              <p className={`mb-4 ${styles.title}`}>
                {" "}
                {recognitionsContent?.title1}{" "}
              </p>
              <p className={`mb-0 ${styles.text}`}>
                {" "}
                {recognitionsContent?.text}{" "}
              </p>
              <p className={`mt-4 ${styles.title}`}>
                {" "}
                {recognitionsContent?.title2}{" "}
              </p>
            </Col>
            <Col md={3}>
              <Image src={recognitionsContent?.img} className="w-100" alt="" />
            </Col>
            {/* <p className={` ${styles.slide_title}`}>
              {" "}
              {recognitionsContent?.list[0]?.title}{" "}
            </p>
            <p className={` ${styles.slide_text}`}>
              {" "}
              {recognitionsContent?.list[0]?.text}{" "}
            </p> */}
          </Row>
          <Row className={styles.banner_row}>
            <Col xs={12} md={6} lg={3} className="w-100" data-aos="fade-down">
              <Slider ref={sliderRef} {...settings} className="m-0 p-0">
                {recognitionsContent?.list?.map((data,index) => (
                  <div key={index} className={`${styles.section_container} px-md-0 px-2`}>
                    <div className={styles.image_container}>
                      <Image
                        className={`rounded-4 ${styles.section_image}`}
                        src={data?.img} // Replace with your image URL
                        alt="Your Image"
                      />
                      <div className={styles.IndustriesSectionBox}>
                        {/* <img
                          src="https://via.placeholder.com/400x200"
                          alt="Icon"
                        /> */}
                        <div className={styles.slide_title}>{data.title}</div>
                        <div className={styles.slide_text}>{data.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </Col>
            <Row className="mx-5 mt-4 mt-lg-3">
              {/* <Col md={12} className="d-flex  gap-4">
                <div className={newstyles.arrows} onClick={previous} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={newstyles.arrows} onClick={next} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Col> */}
            </Row>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
