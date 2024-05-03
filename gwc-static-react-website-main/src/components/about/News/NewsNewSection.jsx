import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
// CSS
import styles from "../../ProductGCP/GCPCloud/GCPCloud.module.css";
import news1 from "../../../assets/images/about/e1.png";
import news2 from "../../../assets/images/about/p1.png";

import AOS from "aos";
AOS.init({
    duration: 1500,
});

const NewsNewSection = () => {
    return (
        <Container fluid className="">
            <section className="" >
                <Container className=" mt-0">
                    <Row className="d-flex align-items-center justify-content-center my-2">
                        <Col
                            xs={12}
                            lg={6}

                            className="pt-md-0 pt-2"
                            data-aos="fade-right"
                        >
                            <div className="">
                                <p className={styles?.title}>
                                    GCU Puraskar
                                </p>
                                <p className={styles?.text}>
                                    Honoured to receive GCU Puraskar 2022 from Garden City University,
                                    Bangalore for contribution in the field of Analytics and Business Intelligence.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} lg={6} md={6} className="px-md-0" data-aos="fade-left">
                            <img
                                src={news1}
                                alt=""
                                className="w-100 mx-lg-3 rounded-4 "
                            />
                        </Col>
                    </Row>

                    <Row className="d-flex align-items-center justify-content-center my-5">
                        <Col
                            xs={12}
                            lg={6}

                            className="pt-md-0 pt-2"
                            data-aos="fade-right"
                        >
                            <img
                                src={news2}
                                alt=""
                                className="w-100 mx-lg-3 rounded-4 "
                            />
                        </Col>
                        <Col xs={12} lg={6} md={6} className="px-md-0" data-aos="fade-left">

                            <div className="px-lg-5">
                                <p className={styles?.title}>
                                    Young Entrepreneur
                                </p>
                                <p className={styles?.text}>
                                    This award for Young Entrepreneur in Tirupattur District was received from Vendhar TV.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </Container >
    )
}

export default NewsNewSection
