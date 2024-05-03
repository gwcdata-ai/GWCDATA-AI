import React, { useEffect, useRef } from "react";
import styles from "./DomoAnalytics.module.css";
import { Col, Container, Row } from "react-bootstrap";

import commonStyles from "../../../commoncss/common.module.css";

import bannerImg from "../../../assets/images/about/ourCultureBg.webp";
import image2 from "../../../assets/images/ProductDemo/AnalyticsBanner.png";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import useScroll from "../../../hooks/useScroll";
AOS.init({
  duration: 1000,
});

const DomoAnalytics = () => {
  const domocapabilitiesRef = useRef(null);
  useScroll();

  return (
    <Container
      fluid
      id="domo-capabilities"
      className={`${commonStyles.banner_container_img} py-2 py-lg-5 mt-2 mt-lg-4`}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <section className="">
        <Container className="">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={12} md={12} className="py-md-0 py-lg-5 pt-5">
              <div className="">
                <p className={styles?.title}>Domo Analytics Capabilities</p>
              </div>
            </Col>
            <Col lg={12} md={12} className="pb-md-0 pb-5">
              <img src={image2} alt="" className="w-100 rounded-4 mx-lg-3" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default DomoAnalytics;
