import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./sales.module.css";

import bannerImg from "../../assets/images/about/ourCultureBg.webp";
import image2 from "../../assets/images/salesforce/customer.png";

import AOS from "aos";
AOS.init({
    duration: 1500,
});


const SalesCustomer = () => {
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
                        <Col lg={5} md={5} className="py-md-0 py-5" data-aos="fade-right">
                            <div className="">
                                <p className={styles?.text1}>
                                    Salesforce- A Strategic Asset that Drives Your Business Growth
                                </p>
                                <p className={styles?.text2}>
                                    GWC’s dedicated team ensures that Salesforce aligns seamlessly with your evolving business needs, driving efficiency, innovation, and a customer-centric approach.
                                </p>
                                <Button className={`${styles.banner_button} mt-3`}>
                                    Get In Touch
                                </Button>
                            </div>
                        </Col>
                        <Col lg={7} md={7} className="pb-md-0 pb-5" data-aos="fade-left">
                            <img src={image2} alt="" className="w-100  rounded-4 mx-lg-3" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default SalesCustomer
