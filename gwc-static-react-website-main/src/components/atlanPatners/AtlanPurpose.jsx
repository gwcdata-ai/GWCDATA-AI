import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./atlan.module.css";

import bannerImg from "../../assets/images/about/ourCultureBg.webp";
import image2 from "../../assets/images/atlan/purpose.png";

import AOS from "aos";
AOS.init({
    duration: 1500,
});

const AtlanPurpose = () => {
    return (
        <Container
            fluid
            // className="pt-2 pb-5"
            className={`${commonStyles.banner_container_img}  py-lg-5`}
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <section className="">
                <Container className="">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col lg={6} md={6} className="py-md-0 py-5" data-aos="fade-right">
                            <div className="">
                                <p className={styles?.text1}>
                                    Reduce Your Time-To-Value By Providing The Right Data In The Right Context.
                                </p>
                                <p className={styles?.text2}>
                                    We make data more accessible, actionable, and valuable to drive innovation and success.
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="pb-md-0 pb-5 d-flex justify-content-center" data-aos="fade-left">
                            <img src={image2} alt="" className=" mx-lg-5" width="70%" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default AtlanPurpose
