import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import styles from "../../../components/SolutionsSalesForce/slider.module.css";
import useMedia from "../../../hooks/useMedia";
import Slider from "react-slick";
import { AiData } from "./data";

const AiINdustries = () => {
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text.padEnd(limit, " "); // Pad with spaces to ensure consistent length
  };

  const truncateTextTitle = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text.padEnd(limit, " "); // Pad with spaces to ensure consistent length
  };

  const isMobile = useMedia("(max-width:600px)");
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    nextArrow: isMobile ? false : <SampleNextArrow />,
    prevArrow: isMobile ? false : <SamplePrevArrow />,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.8,
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
          height: "100%",
          fontSize: "0px",
          width: "180px",
          position: "absolute",
          right: "-65px",
        }}
        onClick={onClick}
      />
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
      />
    );
  }
  return (
    <Container fluid>
      <Container className="">
        <Row className="card_solution">
          <div className="div">
            <h2 className={` ${styles?.title2} mt-2 `}>Industries Uses AI</h2>
          </div>
          <Slider {...settings} className="m-0 p-0">
            {AiData?.map((item, index) => (
              <Col key={index} md={3} className="mb-5">
                <Card className={` ${styles?.home_card} mt-3  mx-3`}>
                  <Card.Img
                    variant="top"
                    src={item?.img}
                    className="px-3 py-2"
                  />
                  <div className="px-3">
                    <h3 className={` ${styles?.card_title} mb-3`}>
                      {item?.title}
                    </h3>
                    <p className={` ${styles?.card_para_title}  mb-0`}>
                      {item?.para}
                    </p>
                  </div>
                </Card>
              </Col>
            ))}
          </Slider>
        </Row>
      </Container>
    </Container>
  );
};

export default AiINdustries;
