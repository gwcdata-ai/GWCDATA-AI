import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../assets/images/about/ourCultureBg.webp";
import Slider from "react-slick";
import commonStyles from "../../commoncss/common.module.css";
import styles from "../../components/ProductGCP/GCPOffering/GCPOffering.module.css";

import icon1 from "../../assets/icons/Offeringsvg1.svg";
import { OfferCardData } from "./data";
import stylescard from "../solutions/ourExpertise/ourExpertise.module.css";
import useMedia from "../../hooks/useMedia";

const OfferingCard = () => {
  const isMobile = useMedia("(max-width:600px)");
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const truncateTextTitle = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text.padEnd(limit, " "); // Pad with spaces to ensure consistent length
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
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
    <Container
      fluid
      className={`${commonStyles.banner_container_img}  py-5`}
      style={{ backgroundImage: `url(${banner})` }}
      id="gcp"
    >
      <Container className="">
        <Row className="">
          <Col lg={12} md={12} className="px-0" data-aos="fade-right">
            <div className={styles.platformDataSection}>
              <h2 className={` ${styles?.title} mt-2   `}>
                Snowflake Offerings
              </h2>
              <p className={styles?.text}>
                Snowflake, a cloud-based data warehousing platform, provides a
                range of offerings to help organizations manage & analyze their
                data efficiently. We ensure your cloud operations run smoothly &
                reliably so you can focus on your business goals.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="">
          <Slider {...settings} className="m-0 p-0">
            {OfferCardData.map((data) => {
              const { id, icon, text, para } = data;
              return (
                // <Col md={3} key={id} className="mt-4">
                //     <div className={styles.offeringCards_snow}>
                //         <Image
                //             src={icon}
                //             className={`mt-2 ${styles.imageCard}`}
                //         />
                //         <div className={styles.imageCardText}>
                //             {text}
                //         </div>
                //         <p>
                //        {para}
                //         </p>
                //     </div>
                // </Col>
                <Col
                  lg={5}
                  md={6}
                  sm={12}
                  key={id}
                  className={` mb-md-0 mb-5 `}
                  data-aos="zoom-in"
                >
                  <div
                    className={`${stylescard.card_snow_section_sf} mb-3 mx-3`}
                  >
                    <Image
                      src={icon}
                      style={{ width: "72px", height: "72px" }}
                      alt=""
                    />
                    {/* <p className={`${styles.card_title} my-3`}> {item?.title}</p> */}
                    {/* <p
                                className={`${stylescard.title} my-3`}
                                dangerouslySetInnerHTML={{
                                  __html: text?.replace(/\n/g, ""),
                                }}
                              /> */}
                    <h3 className={`${stylescard.heading} mt-1`}>{text}</h3>
                    <p className={`${stylescard.card_title}`}>{para}</p>
                    {/* <p className={`${stylescard.heading} my-3`}
                               dangerouslySetInnerHTML={{
                                __html:truncateTextTitle(text,15) ,
                              }}></p>
                              <p className={`${stylescard.card_title} my-3`}
                               dangerouslySetInnerHTML={{
                                __html:truncateTextTitle(para,100 )
                              }}></p> */}
                  </div>
                </Col>
              );
            })}
          </Slider>
        </Row>
      </Container>
    </Container>
  );
};

export default OfferingCard;
