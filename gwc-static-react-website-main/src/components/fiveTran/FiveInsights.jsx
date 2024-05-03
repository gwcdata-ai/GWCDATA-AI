import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./five.module.css";

import bannerImg from "../../assets/images/about/ourCultureBg.webp";
import image2 from "../../assets/images/fivetran/dataImg.png";

import AOS from "aos";
import { Link } from "react-router-dom";
AOS.init({
    duration: 1500,
});


const FiveInsights = () => {
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
                                    Empower your Team to Visualize their Pipeline and Accelerate Time to Close with Fivetran
                                </p>
                                <p className={styles?.text2}>
                                    The GWC team comprises highly qualified and experienced data professionals who can provide tailored and effective data solutions for your business needs using Fivetran’s automated data movement platform.
                                </p>

                                <Link to="/" >
                                    <Button className={`${styles.banner_button} mt-3`}>
                                        Get In Touch
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6} md={6} className="pb-md-0 pb-5" data-aos="fade-left">
                            <img src={image2} alt="" className="rounded-4 mx-lg-3 " width="100%" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default FiveInsights
