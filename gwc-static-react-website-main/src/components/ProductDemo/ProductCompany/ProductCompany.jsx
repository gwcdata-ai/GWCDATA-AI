import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

// CSS
import styles from "./ProductCompany.module.css";

import image1 from "../../../assets/images/ProductDemo/Company/ProductCompany.svg";
import AOS from "aos";
AOS.init({
  duration: 1500,
});
export const ProductCompany = () => {
  return (
    <Container fluid className="pt-2 pb-5">
      <section className="">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col
              xs={12}
              lg={6}
              md={6}
              className="px-md-5 pt-md-0 pt-5"
              data-aos="fade-right"
            >
              <div className="">
                {/* <p className={styles?.sub_title}>
                  <strong>Company</strong>
                </p> */}
                <p className={styles?.title}>
                  Multiply Impact Throughout Your Business
                </p>

                <p className={styles?.text}>
                  An operating system for your business.
                </p>
                <div className={styles.companyCard}>
                  <div className={styles.BannerCompanyHeading}>
                    Add true value to every team within your organization.
                  </div>
                  <div className={styles.BannerCardPara}>
                    Our distinctive user-centric strategy ensures simplicity for
                    all users, while also delivering advanced capabilities for
                    technical teams to swiftly address business requirements.
                  </div>
                  <div className={styles.BannerCompanyHeading}>
                    Infuse data into your business strategy.
                  </div>
                  <div className={styles.BannerCompanyPara}>
                    Our Domo solutions cultivates a culture of curiosity,
                    facilitating intelligent, rapid, and transformative actions
                    based on data insights.
                  </div>
                </div>
                {/* <Button className={`${styles.banner_button} `}>
                  {" "}
                  Explore More
                  <svg
                    className="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M1 8.61035H15M15 8.61035L8 1.61035M15 8.61035L8 15.6104"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button> */}
              </div>
            </Col>
            <Col xs={12} lg={6} md={6} className="px-md-0" data-aos="fade-left">
              <img src={image1} alt="" className="w-100 mx-lg-3 rounded-4" />
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
