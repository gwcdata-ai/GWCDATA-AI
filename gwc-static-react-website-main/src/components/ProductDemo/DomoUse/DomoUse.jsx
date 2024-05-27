import React, { useState } from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./DomoUse.module.css";
import newStyles from "../../../commoncss/Home.module.css";
import { DomoUseData } from "./DomoUseData";
import AOS from "aos";
AOS.init({
  duration: 1500,
});
// import image1 from '../'

const DomoUse = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    arrows: false,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom mt-4">
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

  return (
    <div className={styles.HomeApproachSection}>
      {/* <Container className="mx-0"> */}
      {/* <div className={newStyles.featuresSection}> */}
      <div className={newStyles.content2}>
        <div className={newStyles.headingAndSupportingText10}>
          <div className={newStyles.headingAndSubheading7}>
            {/* <div className={`${styles.sub_title} `}>Use Of Domo</div> */}
            <div className={`${newStyles.meetOurLeadershipContainer}`}>
              When to use Domo?
            </div>
          </div>
          <div className={`${newStyles.supportingText36} mb-4`}>
            Want actionable insights to make smart decisions? Try Domo!
          </div>
        </div>
      </div>
      <Row>
        <Col
          xs={12}
          md={6}
          lg={3}
          className="w-100"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Slider {...settings} className="m-0 p-0">
            {DomoUseData.map((data,index) => (
              <div
              key={index}
                className={styles["section-container"]}
                data-aos="fade-right"
              >
                <div className={styles["image-container"]}>
                  <div className={`${styles.productCard} rounded-4 m-3`}>
                    <div className="text-start mb-3">{data.image}</div>
                    <div className="fw-bold">{data.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
      {/* </div> */}
      {/* </Container> */}
    </div>
  );
};

export default DomoUse;
