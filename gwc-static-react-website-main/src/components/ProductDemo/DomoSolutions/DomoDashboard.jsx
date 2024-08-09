import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { DomoDashData, DomoSolutionsData } from "./DomoSolutionsData";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles1 from "./dashboard.module.css";
import newStyles from "../../../commoncss/Home.module.css";
import useMedia from "../../../hooks/useMedia";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

const DomoSolutionsCard = ({ data, index }) => {
  // const domodashRef = useRef(null);
  // const location = useLocation();

  // useEffect(() => {
  //     if (location.hash === "#domo-dashboards" && domodashRef.current) {
  //         domodashRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  // }, [location.hash]);

  const navigate = useNavigate();

  const isMobile = useMedia("(max-width:600px)");

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Link key={index} to={data?.url} target="blank">
      <div className={`${styles1.hover_card_img}`}>
        <div
          className={`${
            isMobile ? styles1.BenefitSectionBox1 : styles1.BenefitSectionBoxs
          }`}
          data-aos="zoom-out"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* {console.log(data?.alt)} */}
          <img
            src={data?.image}
            // alt={data?.alt}
            className={`${styles1.title_card_img}`}
          />

          <div className={`${styles1.title_card_dash} fw-bold text-center`}>
            {" "}
            {data.title}{" "}
          </div>
        </div>
      </div>
    </Link>
  );
};

const DomoDashboard = () => {
  const sliderRef = useRef(null); //slideref for slider arrow
  const isMobile = useMedia("(max-width:600px)");

  useEffect(() => {
    AOS.init({
      offset: 210,
      duration: 1300,
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
          infinite: true,
          dots: true,
          speed: 2300,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: true,
          arrows: false,
          speed: 2300,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          speed: 2300,
          autoplay: true,
          autoplaySpeed: 2000,
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
          right: "-75px ",
        }}
        onClick={onClick}
      >
        <svg
          className={newStyles.arrows}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
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
        </svg>{" "}
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
          left: "-35px !important ",
        }}
        onClick={onClick}
      >
        <svg
          className={`${newStyles.arrows}`}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
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
    );
  }

  return (
    <div className={`${styles1.HomeApproachSection} mt-5`} id="domo-dashboards">
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
              <h2 className={newStyles.title}> Domo Dashboards </h2>
            </div>
          </div>
        </div>
      </div>
      <Row className="mt-3">
        <Col xs={12} md={6} lg={3} className="w-100">
          <Slider ref={sliderRef} {...settings} className="m-0 p-0">
            {DomoDashData?.map((data, index) => (
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

export default DomoDashboard;
