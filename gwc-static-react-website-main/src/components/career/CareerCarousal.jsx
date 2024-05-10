import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./jobpost.module.css";
import bannerImg from "../../assets/images/career/carousalbanner.png";
import { careerCarousalData } from "./data";
import useMedia from "../../hooks/useMedia";
import newStyles from "../../commoncss/Home.module.css";

import AOS from "aos";
import { useRef } from "react";
AOS.init({
  duration: 1500,
});

const CareerCarousal = () => {
  const sliderRef = useRef(null); //slideref for slider arrow
  const isMobile = useMedia("(max-width:600px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  // slider arrow code
  const previous = () => {
    console.log("Previous button clicked");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const next = () => {
    console.log("Next button clicked");
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
      className={`${commonStyles.banner_container_img}  py-5 mb-lg-3 py-xs-5`}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <Container>
        <section className="">
          <p className={` ${styles?.title} `}>Life at GWC Data.AI</p>
          <p className={styles?.sub_main_title}>
            At GWC, employees seamlessly blend professional milestones with
            joyous celebrations, forging a workplace where career growth is
            punctuated with shared triumphs and a vibrant sense of community.
            Here, success isn't just measured in achievements but celebrated as
            a collective journey, making every step forward an occasion to
            cherish.
          </p>
        </section>
        <div className={styles.carousel_container}>
          <Slider ref={sliderRef} {...settings}>
            {careerCarousalData.map((data) => {
              const { id, text, img } = data;
              return (
                <Col lg={3} md={3} sm={12} xs={12} className="">
                  <div className={styles.each_service_car}>
                    <div key={id} className=" mt-4 ">
                      <img
                        src={img}
                        alt="image"
                        className="rounded "
                        width="93%"
                        style={{ height: "266px" }}
                      />
                    </div>
                    <div className={`${styles.service_overly}`}>
                      <p className={styles.overly_para}>{text}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Slider>
          <Row className="mx-5 mt-5">
            {/* <Col md={12} className="d-flex  gap-4">
              <div className={styles.arrows} onClick={previous}>
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
              <div className={styles.arrows} onClick={next}>
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
      </Container>
    </Container>
  );
};

export default CareerCarousal;
