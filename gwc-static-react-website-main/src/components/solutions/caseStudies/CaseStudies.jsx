import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Slider from "react-slick";

// CSS
import styles from "./caseStudies.module.css";
import AOS from "aos";
AOS.init({
  duration: 1200,
});

export const CaseStudies = ({ caseStudiesSectionContent }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
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
  };
  return (
    <Container fluid className="pt-2 pb-5">
      <section className="">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col md={12} className="mb-3">
              <div className="">
                <p className={styles?.sub_title}>
                  <strong>{caseStudiesSectionContent?.sub_title}</strong>
                </p>
                <p className={styles?.title}>
                  {caseStudiesSectionContent?.title}
                </p>
                {caseStudiesSectionContent?.text && (
                  <p className={styles?.text}>
                    {caseStudiesSectionContent?.text}
                  </p>
                )}
              </div>
            </Col>
          </Row>
          <Row className={` ${styles.banner_row}`}>
            <Slider {...settings}>
              {caseStudiesSectionContent?.list?.map((item, index) => (
                <Col md={12} data-aos="flip-down" className="px-2 pb-5">
                  <div className={`${styles.card_section} p-4`}>
                    <Image src={item?.img} alt="" className="w-100 mb-3" />
                    <p className="d-flex">
                      {" "}
                      {item?.tags?.map((item) => (
                        <span className={styles.card_tags}> {item} </span>
                      ))}
                    </p>
                    <p className={styles.card_title}> {item?.title} </p>
                    <p className={styles.card_text}> {item?.text} </p>
                    <p className={styles.more_btn}>
                      {" "}
                      <a href="" className={styles.more_btn}>
                        {" "}
                        {item?.more}{" "}
                        <svg
                          className="mx-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M4.16675 10.1204H15.8334M15.8334 10.1204L10.0001 4.28711M15.8334 10.1204L10.0001 15.9538"
                            stroke="currentColor"
                            stroke-width="1.67"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    </p>
                  </div>
                </Col>
              ))}
            </Slider>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
