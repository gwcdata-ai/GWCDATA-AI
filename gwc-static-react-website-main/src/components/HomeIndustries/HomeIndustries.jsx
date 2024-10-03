import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { HomeApproachData } from "./HomeApproachData";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./HomeIndustries.module.css";
import newStyles from "../../commoncss/Home.module.css";
import { HomeIndustriesData } from "./HomeIndustriesData";
import AOS from "aos";
import useMedia from "../../hooks/useMedia";
AOS.init({
  duration: 1500,
});

// import image1 from '../'

const HomeIndustries = () => {
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
      <div className="ft-slick__dots--custom mt-4 mt-lg-4">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 3000,
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
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
    ],
    // Add other settings as needed
  };

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
    <div className={styles.HomeApproachSection}>
      {/* <Container className="mx-0"> */}
      {/* <div className={newStyles.featuresSection}> */}
      <div className={newStyles.content2}>
        <div className={newStyles.headingAndSupportingText10}>
          <div className={newStyles.headingAndSubheading7}>
            {/* <div
              className={`${newStyles.subheading} `}
              style={{ color: "#6941C6" }}
            >
              Industries we Cater to
            </div> */}
            <h2 className={`${newStyles.meetOurLeadershipContainer} mb-4`}>
              AI-Driven Solutions for Seamless Success in Your Industry.
            </h2>
          </div>
          {/* <div className={`${newStyles.supportingText36} mb-4`}>
              We build strategic data analytics platforms helping businesses
              gain value from their data assets and extend their capabilities to
              truly data-driven decision making.
            </div> */}
        </div>
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={3} className="w-100">
          <Slider ref={sliderRef} {...settings} className="m-0 p-0">
            {HomeIndustriesData.map((data, index) => (
              <div className="px-3" key={index}>
                <div
                  className={styles["section-container"]}
                  data-aos="flip-down"
                >
                  <div className={styles["image-container"]}>
                    <img
                      className={styles["section-image"]}
                      src={data?.banner} // Replace with your image URL
                      alt={data.altImage}
                    />
                    <div className={styles.IndustriesSectionBox}>
                      <img src={data?.image} alt="Icon" />
                      <h3 className="fw-bold" style={{ fontSize: "16px" }}>
                        {data.title}
                      </h3>
                      <div className="text-start" style={{ color: "black" }}>
                        {data.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
      {/* </div> */}
      {/* </Container> */}
      <Row className="mx-5 mt-4 mt-lg-2">
        {/* <Col md={12} className="d-flex  gap-4">
          <div className={newStyles.arrows} onClick={previous}>
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
          <div className={newStyles.arrows} onClick={next}>
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

export default HomeIndustries;
