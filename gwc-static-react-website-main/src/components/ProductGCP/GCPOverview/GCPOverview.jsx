import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./GCPOverview.module.css";
import image1 from "../../../assets/images/ProductGCP/Overview/image1.png";
import image2 from "../../../assets/images/ProductGCP/Overview/image2.png";
import image3 from "../../../assets/images/ProductGCP/Overview/image3.png";
import image4 from "../../../assets/images/ProductGCP/Overview/image4.png";
import image5 from "../../../assets/images/ProductGCP/Overview/image5.png";
import image6 from "../../../assets/images/ProductGCP/Overview/image6.png";
import bannerImg from "../../../assets/images/HomePartner/partnersBanner.webp";
import Slider from "react-slick";
import AOS from "aos";
import useMedia from "../../../hooks/useMedia";
AOS.init({
  duration: 1500,
});

export const GCPOverview = () => {
  const isMobile = useMedia("(max-width:600px)");

  const [hoveredText1, setHoveredText1] = useState({
    text: "Symphonic Team",
    style: {},
  });
  const [hoveredText2, setHoveredText2] = useState({
    text: "Proactive Infrastructure Management",
    style: {},
  });
  const [hoveredText3, setHoveredText3] = useState({
    text: "IoT Integration with Google Cloud",
    style: {},
  });
  const [hoveredText4, setHoveredText4] = useState({
    text: "Cost Optimization",
    style: {},
  });
  const [hoveredText5, setHoveredText5] = useState({
    text: "Security and Compliance",
    style: {},
  });
  const [hoveredText6, setHoveredText6] = useState({
    text: "Effortless Collaboration",
    style: {},
  });

  const textStyle = {
    fontFamily: "Roboto-Light",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#FFF",
    padding: "0px 114px",
  };

  const hoveredTextStyle = {
    color: "#FFF",
    padding: "20px",
    fontWeight: "400",
  };

  const textStylemobile = {
    fontFamily: "Roboto-Light",
    fontSize: "12px",
    fontWeight: "bold",
    color: "#FFF",
    padding: "0px 114px",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    // arrows: false,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom ">
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
  return (
    <Container
      fluid
      // className="pt-2 pb-5"
      className={`${commonStyles.banner_container_img}  py-lg-5`}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <section className="">
        <Container className="GCPOverview">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={12} className="mb-4 mt-md-0 mt-5">
              {/* <p className={styles?.sub_title}>
                <strong>Overview</strong>
              </p> */}
              <p className={styles?.title}>What Sets Us Apart?</p>
              <p className={styles?.sub_main_title}>
                GWC's Managed Services team navigates the GCP landscape for you,
                delivering peak performance and unlocking sustainable growth
                through a trusted partnership.
              </p>
            </Col>
            {isMobile ? (
              <Col xs={12} md={6} lg={3} className="w-100">
                <Slider {...settings} className="">
                  <Col
                    md={4}
                    className={`mb-md-0 mb-5`}
                    data-aos="zoom-in"
                    style={{ position: "relative" }}
                    onMouseOver={() =>
                      setHoveredText1({
                        text: "Our team of Certified Architects and Data Engineers ensures that your GCP Managed services requirements are handled effectively.  ",
                        style: hoveredTextStyle,
                      })
                    }
                    onMouseOut={() =>
                      setHoveredText1({ text: "Symphonic Team", style: {} })
                    }
                  >
                    <img
                      src={image1}
                      className={` ${commonStyles.image_space} w-100 mb-4 `}
                      alt=""
                    />
                    <h3
                      className={styles?.text_overlay}
                      style={{ ...textStylemobile, ...hoveredText1.style }}
                    >
                      {hoveredText1.text}
                    </h3>
                  </Col>

                  <Col
                    md={4}
                    className={`mb-md-0 mb-5`}
                    data-aos="zoom-in"
                    style={{ position: "relative" }}
                    onMouseOver={() =>
                      setHoveredText2({
                        text: "Leverage our expertise to ensure your GCP infrastructure is optimized for performance, security, and cost efficiency.",
                        style: hoveredTextStyle,
                      })
                    }
                    onMouseOut={() =>
                      setHoveredText2({
                        text: "Proactive Infrastructure Management",
                        style: {},
                      })
                    }
                  >
                    <img
                      src={image2}
                      className={` ${commonStyles.image_space} w-100 mb-4 `}
                      alt=""
                    />
                    <h3
                      className={styles?.text_overlay}
                      style={{ ...textStylemobile, ...hoveredText2.style }}
                    >
                      {hoveredText2.text}
                    </h3>
                  </Col>

                  <Col
                    md={4}
                    className={`mb-md-0 mb-5`}
                    data-aos="zoom-in"
                    style={{ position: "relative" }}
                    onMouseOver={() =>
                      setHoveredText3({
                        text: "Transform machine data into actionable insights with GCP integration into IoT hardware designed by us. ",
                        style: hoveredTextStyle,
                      })
                    }
                    onMouseOut={() =>
                      setHoveredText3({
                        text: "IoT Integration with Google Cloud",
                        style: {},
                      })
                    }
                  >
                    <img
                      src={image3}
                      className={` ${commonStyles.image_space} w-100 mb-4 `}
                      alt=""
                    />
                    <h3
                      className={styles?.text_overlay}
                      style={{ ...textStylemobile, ...hoveredText3.style }}
                    >
                      {hoveredText3.text}
                    </h3>
                  </Col>

                  <Col
                    md={4}
                    className={`mb-md-0 mb-5`}
                    data-aos="zoom-in"
                    style={{ position: "relative" }}
                    onMouseOver={() =>
                      setHoveredText4({
                        text: "  We help you maximise cost savings by identifying and eliminating inefficiencies in your GCP usage, ensuring you only pay for what you need. ",
                        style: hoveredTextStyle,
                      })
                    }
                    onMouseOut={() =>
                      setHoveredText4({ text: "Cost Optimization", style: {} })
                    }
                  >
                    <img
                      src={image4}
                      className={` ${commonStyles.image_space} w-100 mb-4 `}
                      alt=""
                    />
                    <h3
                      className={styles?.text_overlay}
                      style={{ ...textStylemobile, ...hoveredText4.style }}
                    >
                      {hoveredText4.text}
                    </h3>
                  </Col>

                  <Col
                    md={4}
                    className={`mb-md-0 mb-5`}
                    data-aos="zoom-in"
                    style={{ position: "relative" }}
                    onMouseOver={() =>
                      setHoveredText5({
                        text: "Trust in our expertise in using GCP’s robust security measures and compliance practices, keeping your data safe and meeting industry standards.",
                        style: hoveredTextStyle,
                      })
                    }
                    onMouseOut={() =>
                      setHoveredText5({
                        text: "Security and Compliance",
                        style: {},
                      })
                    }
                  >
                    <img
                      src={image5}
                      className={` ${commonStyles.image_space} w-100 mb-4 `}
                      alt=""
                    />
                    <h3
                      className={styles?.text_overlay}
                      style={{ ...textStylemobile, ...hoveredText5.style }}
                    >
                      {hoveredText5.text}
                    </h3>
                  </Col>

                  <Col
                    md={4}
                    className={`mb-md-0 mb-5`}
                    data-aos="zoom-in"
                    style={{ position: "relative" }}
                    onMouseOver={() =>
                      setHoveredText6({
                        text: "  Our GCP-managed services facilitate seamless collaboration, allowing users from different locations to access and edit projects concurrently.",
                        style: hoveredTextStyle,
                      })
                    }
                    onMouseOut={() =>
                      setHoveredText6({
                        text: "Effortless Collaboration",
                        style: {},
                      })
                    }
                  >
                    <img
                      src={image6}
                      className={` ${commonStyles.image_space} w-100 mb-4 `}
                      alt=""
                    />
                    <p
                      className={styles?.text_overlay}
                      style={{ ...textStylemobile, ...hoveredText6.style }}
                    >
                      {hoveredText6.text}
                    </p>
                  </Col>
                </Slider>
              </Col>
            ) : (
              <>
                <Col
                  md={4}
                  className={`mb-md-0 mb-5`}
                  data-aos="zoom-in"
                  style={{ position: "relative" }}
                  onMouseOver={() =>
                    setHoveredText1({
                      text: "Our team of Certified Architects and Data Engineers ensures that your GCP Managed services requirements are handled effectively.  ",
                      style: hoveredTextStyle,
                    })
                  }
                  onMouseOut={() =>
                    setHoveredText1({ text: "Symphonic Team", style: {} })
                  }
                >
                  <img src={image1} className="w-100 mb-4" alt="" />
                  <h3
                    className={styles?.text_overlay}
                    style={{ ...textStyle, ...hoveredText1.style }}
                  >
                    {hoveredText1.text}
                  </h3>
                </Col>

                <Col
                  md={4}
                  className={`mb-md-0 mb-5`}
                  data-aos="zoom-in"
                  style={{ position: "relative" }}
                  onMouseOver={() =>
                    setHoveredText2({
                      text: "Leverage our expertise to ensure your GCP infrastructure is optimized for performance, security, and cost efficiency. ",
                      style: hoveredTextStyle,
                    })
                  }
                  onMouseOut={() =>
                    setHoveredText2({
                      text: "Proactive Infrastructure Management",
                      style: {},
                    })
                  }
                >
                  <img src={image2} className="w-100 mb-4" alt="" />
                  <h3
                    className={styles?.text_overlay}
                    style={{ ...textStyle, ...hoveredText2.style }}
                  >
                    {hoveredText2.text}
                  </h3>
                </Col>

                <Col
                  md={4}
                  className={`mb-md-0 mb-5`}
                  data-aos="zoom-in"
                  style={{ position: "relative" }}
                  onMouseOver={() =>
                    setHoveredText3({
                      text: "Transform machine data into actionable insights with GCP integration into IoT hardware designed by us. ",
                      style: hoveredTextStyle,
                    })
                  }
                  onMouseOut={() =>
                    setHoveredText3({
                      text: "IoT Integration with Google Cloud",
                      style: {},
                    })
                  }
                >
                  <img src={image3} className="w-100 mb-4" alt="" />
                  <h3
                    className={styles?.text_overlay}
                    style={{ ...textStyle, ...hoveredText3.style }}
                  >
                    {hoveredText3.text}
                  </h3>
                </Col>

                <Col
                  md={4}
                  className={`mb-md-0 mb-5`}
                  data-aos="zoom-in"
                  style={{ position: "relative" }}
                  onMouseOver={() =>
                    setHoveredText4({
                      text: " We help you maximise cost savings by identifying and eliminating inefficiencies in your GCP usage, ensuring you only pay for what you need. ",
                      style: hoveredTextStyle,
                    })
                  }
                  onMouseOut={() =>
                    setHoveredText4({ text: "Cost Optimization", style: {} })
                  }
                >
                  <img src={image4} className="w-100 mb-4" alt="" />
                  <h3
                    className={styles?.text_overlay}
                    style={{ ...textStyle, ...hoveredText4.style }}
                  >
                    {hoveredText4.text}
                  </h3>
                </Col>

                <Col
                  md={4}
                  className={`mb-md-0 mb-5`}
                  data-aos="zoom-in"
                  style={{ position: "relative" }}
                  onMouseOver={() =>
                    setHoveredText5({
                      text: "Trust in our expertise in using GCP’s robust security measures and compliance practices, keeping your data safe and meeting industry standards.",
                      style: hoveredTextStyle,
                    })
                  }
                  onMouseOut={() =>
                    setHoveredText5({
                      text: "Security and Compliance",
                      style: {},
                    })
                  }
                >
                  <img src={image5} className="w-100 mb-4" alt="" />
                  <h3
                    className={styles?.text_overlay}
                    style={{ ...textStyle, ...hoveredText5.style }}
                  >
                    {hoveredText5.text}
                  </h3>
                </Col>

                <Col
                  md={4}
                  className={`mb-md-0 mb-5`}
                  data-aos="zoom-in"
                  style={{ position: "relative" }}
                  onMouseOver={() =>
                    setHoveredText6({
                      text: "  Our GCP-managed services facilitate seamless collaboration, allowing users from different locations to access and edit projects concurrently.",
                      style: hoveredTextStyle,
                    })
                  }
                  onMouseOut={() =>
                    setHoveredText6({
                      text: "Effortless Collaboration",
                      style: {},
                    })
                  }
                >
                  <img src={image6} className="w-100 mb-4" alt="" />
                  <h3
                    className={styles?.text_overlay}
                    style={{ ...textStyle, ...hoveredText6.style }}
                  >
                    {hoveredText6.text}
                  </h3>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </section>
    </Container>
  );
};
