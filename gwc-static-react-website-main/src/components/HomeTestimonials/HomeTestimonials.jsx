import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import styles from "../../commoncss/Home.module.css";
import newStyles from "../../commoncss/Home.module.css";

import stylestestimonial from "./Hometestimonial.module.css";
import testimonial1 from "../../assets/images/HomeTestimonials/testimonial1.svg";
import { TestimonialsData } from "./HomeTestimonialsData";

import backgroundImg from "../../assets/images/HomeTestimonials/testimonialsBackground.webp";
import AOS from "aos";
import useMedia from "../../hooks/useMedia";
AOS.init({
  duration: 1500,
});

const HomeTestimonials = () => {
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
    autoplaySpeed: 2000,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom mt-4 mt-lg-2">
        <div className="loading" />
      </div>
    ),
    nextArrow: isMobile ? false : <SampleNextArrow />,
    prevArrow: isMobile ? false : <SamplePrevArrow />,
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
    <div
      style={{
        background: `url(${backgroundImg})no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <Container fluid>
        <Row className="TestimonialsSection">
          <div className={styles.featuresSection51}>
            <div className={styles.content2}>
              <div className={styles.headingAndSupportingText10}>
                <div className={styles.headingAndSubheading7}>
                  {/* <div className={`${styles.subheading} text-light`}>
                    Clients Testimonials
                  </div> */}
                  <div className={`${styles.heading5} text-light mb-4`}>
                    Hear it From Our Happy Customers
                  </div>
                </div>
                {/* <div className={`${styles.supportingText36} text-light mb-5`}>
                  Powerful, self-serve product and growth analytics to help you
                  convert, engage, and retain more users. Trusted by over 4,000
                  startups.
                </div> */}
              </div>
            </div>
            {/* <div className={styles.container6}> */}
            {/* <Col md={12}> */}

            <Slider {...settings} className="m-0 p-0">
              {TestimonialsData.map((data, index) => (
                <div className="px-md-3 px-2" style={{ position: "relative" }}>
                  <Col
                    key={index}
                    data-aos="flip-left"
                    style={{
                      backgroundColor: "white",
                      borderRadius: "20px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    className={` ${stylestestimonial.card_height}  mb-3`}
                  >
                    <p
                      className={`${stylestestimonial.card_para} px-4 text-center`}
                      style={{
                        position: "absolute",
                        top: 30,
                        left: 0,
                        width: "100%",
                        height: "60%",
                        padding: "10px",
                        zIndex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {data?.desc}
                    </p>

                    {/* Image taking 25% at the bottom */}
                    <img
                      alt=""
                      className="w-100"
                      src={data?.image}
                      style={{
                        position: "absolute",
                        bottom: "-8%",
                        left: 0,
                        width: "100%",
                        // height: "55%",
                        zIndex: 0,
                      }}
                    />
                    <p
                      className={`${stylestestimonial.card_title} px-2 text-center`}
                      style={{
                        position: "absolute",
                        bottom: "8%",
                        left: 0,
                        width: "100%",
                        zIndex: 1,
                      }}
                    >
                      {data?.title}
                    </p>
                    <p
                      className={`${stylestestimonial.card_sub_title} px-2 text-center`}
                      style={{
                        position: "absolute",
                        bottom: "2%",
                        left: 0,
                        width: "100%",
                        zIndex: 1,
                      }}
                    >
                      {data?.name}
                    </p>
                    <img
                      alt=""
                      src={data.icon}
                      style={{
                        position: "absolute",
                        bottom: "18%",
                        right: "40%",
                        zIndex: 1,
                      }}
                    />
                  </Col>
                </div>

                // <div
                //   className={styles.vectorParent1}
                //   key={index}
                //   data-aos="flip-left"
                // >
                //   <img
                //     className={styles.vectorIcon27}
                //     alt=""
                //     src={data?.image}
                //   />
                //   <div className={styles.iconsWrapper}>
                //     <div className={styles.icons}>
                //       <div className={styles.iconsChild} />
                //       <img
                //         className={styles.iconsItem}
                //         alt=""
                //         src={data.icon}
                //       />
                //     </div>
                //   </div>
                //   <div className={styles.johnParkerParent}>
                //     <div className={styles.johnParker}>{data?.name}</div>
                //     <i className={styles.digitalMarketing}>{data?.title}</i>
                //   </div>
                //   <div className={styles.frameWrapper17}>
                //     <div
                //       className={styles.beingATechnology18}
                //       style={{ color: "black" }}
                //     >
                //       {data?.desc}
                //     </div>
                //   </div>
                // </div>
              ))}
            </Slider>
          </div>
          {/* </div> */}
        </Row>
      </Container>
    </div>
  );
};

export default HomeTestimonials;
