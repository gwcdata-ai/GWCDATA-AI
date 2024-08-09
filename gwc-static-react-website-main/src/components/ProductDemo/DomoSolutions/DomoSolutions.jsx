import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { DomoSolutionsData } from "./DomoSolutionsData";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./DomoSolutions.module.css";
import newStyles from "../../../commoncss/Home.module.css";
import useMedia from "../../../hooks/useMedia";
import AOS from "aos";

const DomoSolutionsCard = ({ data, index }) => {
  const isMobile = useMedia("(max-width:600px)");

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      key={index}
      className={`${
        isMobile ? styles.BenefitSectionBox1 : styles.BenefitSectionBox
      }`}
      data-aos="slide-right"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={data?.image} alt={data?.alt} />
      <div className={`${styles.title_card} fw-bold`}>{data.title}</div>
      <div style={{ color: "black" }} className={`${styles.description_card}`}>
        {data.description}
      </div>
      <Link to={data?.url} target="_blank">
        <div
          className={`${styles.url_card}`}
          style={{ color: hover ? "#712b8c" : "black" }}
        >
          {" "}
          Learn More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M4.16699 10.1488H15.8337M15.8337 10.1488L10.0003 4.31543M15.8337 10.1488L10.0003 15.9821"
              stroke={hover ? "#6F2B8C" : "black"}
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

const DomoSolutions = () => {
  const sliderRef = useRef(null); //slideref for slider arrow

  const isMobile = useMedia("(max-width:600px)");

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refreshHard();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2300,
    slidesToShow: 4,
    slidesToScroll: 1.5,
    className: "center",
    arrows: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: isMobile ? false : <SampleNextArrow />,
    prevArrow: isMobile ? false : <SamplePrevArrow />,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom mt-5 mt-lg-4">
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
          slidesToShow: 2,
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
          right: "-75px",
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
          left: "-35px",
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
            {/* <div className={`${newStyles.subheading} text-white`}>
              Domo Solutions
            </div> */}
            <div
              className={`${newStyles.meetOurLeadershipContainer} text-white`}
            >
              <h2 className={newStyles.title}> Solutions of Domo </h2>
            </div>
          </div>
        </div>
      </div>
      <Row className="mt-3">
        <Col xs={12} md={6} lg={3} className="w-100">
          <Slider ref={sliderRef} {...settings} className="m-0 p-0">
            {DomoSolutionsData?.map((data, index) => (
              <DomoSolutionsCard data={data} index={index} />
            ))}
          </Slider>
        </Col>
      </Row>
      <Row className="mx-5 mt-5 mt-lg-2">
        {/* <Col md={12} className="d-flex  gap-4">
          <div className={styles.arrows} onClick={previous} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={styles.arrows} onClick={next} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Col> */}
      </Row>
      {/* </div> */}
      {/* </Container> */}
    </div>
  );
};

export default DomoSolutions;
