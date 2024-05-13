import React, { useRef } from "react";
import Slider from "react-slick";
import { HomeApproachData } from "./HomeApproachData";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./HomeApproach.module.css";
import newStyles from "../../commoncss/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import useMedia from "../../hooks/useMedia";
AOS.init({
  duration: 1500,
});

const HomeApproach = () => {
  const sliderRef = useRef(null); //slideref for slider arrow

  const isMobile = useMedia("(max-width:600px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    nextArrow: isMobile ? false : <SampleNextArrow />,
    prevArrow: isMobile ? false : <SamplePrevArrow />,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom mt-5 mt-lg-4">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
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
          width: "4%",
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
    <div className={`ApproachSection ${styles.HomeApproachSection} `}>
      {/* <Container className="mx-0"> */}
      {/* <div className={newStyles.featuresSection}> */}
      <div className={newStyles.content2}>
        <div className={newStyles.headingAndSupportingText10}>
          <div className={newStyles.headingAndSubheading7}>
            {/* <div className={`${newStyles.subheading} text-white`}>
              Our Approach
            </div> */}
            <div
              className={`${newStyles.meetOurLeadershipContainer} text-white`}
            >
              Amplify Business Impacts with the Transformative Power of Data
            </div>
          </div>
          <div className={`${newStyles.supportingText36} text-light mb-3`}>
            Discover data analytics and AI solutions, that expand the horizons of
            your business possibilities.
          </div>
        </div>
      </div>
      <Row>
        <Col xs={12} md={6} lg={3} className="w-100">
          <Slider ref={sliderRef} {...settings} className="m-0 p-0">
            {HomeApproachData.map((data) => (
              <div className={styles.approachdivpadding}>
                <div className={styles.BenefitSectionBox} data-aos="fade-out">
                  <img src={data?.image} alt="Icon" />
                  <div className={styles.benefits_title}>{data.title}</div>
                  <div className="text-left">{data.description}</div>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
      {/* </div> */}
      {/* </Container> */}

      <Row className="mx-5 mt-5">
        {/* <Col md={12} className="d-flex justify-content-between gap-4">
          <div
            className={newStyles.arrows}
            onClick={previous}
            style={{ alignSelf: "flex-start" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={newStyles.arrows}
            onClick={next}
            style={{ alignSelf: "flex-end" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Col> */}
      </Row>
    </div>
  );
};

export default HomeApproach;
