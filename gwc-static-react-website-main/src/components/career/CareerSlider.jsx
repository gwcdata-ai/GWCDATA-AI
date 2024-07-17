import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./jobpost.module.css";
import newStyles from "../../commoncss/Home.module.css";
import useMedia from "../../hooks/useMedia";
import AOS from "aos";
import { careersliderdData } from "./data";

const ProductAllCard = ({ data }) => {
  const isMobile = useMedia("(max-width:600px)");

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <Col lg={12} className="">
      <div
        className={`${
          isMobile ? styles.carrer_slider_card : styles.carrer_slider_card
        }`}
        data-aos="flip-down"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isMobile ? (
          <div
            className={styles.bg_img}
            style={{
              backgroundImage: `url(${data?.image})`,
              borderRadius: "16px",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              padding: 8,
            }}
          >
            {data?.svg_mobile}
            <p
              className={`${styles.slide_para} mt-3 mb-0`}
              style={{ fontSize: 9, width: "70%" }}
            >
              {data?.description}
            </p>
            <p
              className={`${styles.slide_para2} mt-1 mb-1 `}
              style={{ fontSize: 9 }}
            >
              <b>{data?.title1}</b>
            </p>
            <p className={`${styles.slide_para2}`} style={{ fontSize: 9 }}>
              {data?.title2}
            </p>
          </div>
        ) : (
          <div
            className={styles.bg_img}
            style={{
              backgroundImage: `url(${data?.image})`,
              borderRadius: "16px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {data?.svg}
            <p className={`${styles.slide_para} mt-3 mb-4`}>
              {data?.description}
            </p>
            <p className={`${styles.slide_para2} mt-4 mb-1`}>
              <b>{data?.title1}</b>
            </p>
            <p className={`${styles.slide_para2}`}>{data?.title2}</p>
          </div>
        )}
      </div>
    </Col>
  );
};

const CareerSlider = () => {
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
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "center",
    arrows: true,
    initialSlide: 0,
    autoplay: true,
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
          slidesToShow: 1,
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
    <Container className="my-5">
      <h2 className={`${newStyles.meetOurLeadershipContainer} `}>
        Meet Our People
      </h2>
      <p className={` ${styles?.card_para_title} mt-2 mb-0`}>
        At GWC Data Ai, we want all our people to find their spark. If one has
        an idea, there are ears ready to hear it. If one has a project, there’s
        a team ready to drive it forward. Every voice matters at GWC Data Ai.
        Let’s listen to some of them
      </p>

      <Row className="mt-3">
        <Slider {...settings} className="m-0 p-0">
          {careersliderdData?.map((data) => (
            <ProductAllCard data={data} />
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default CareerSlider;
