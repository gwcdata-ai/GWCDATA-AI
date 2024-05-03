import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";
// CSS
import styles from "../ProductGCP/GCPCloud/GCPCloud.module.css";
import image1 from "../../assets/images/snowFlake/frame.png";
import newsales from "../../assets/images/salesforce/Doing_business.svg";
import AOS from "aos";
AOS.init({
    duration: 1500,
});

const SalesSecondNew = () => {
    return (
        <Container fluid className="">
            <section className="" >
                <Container className="mt-md-4 mt-0">
                    <Row className="d-flex align-items-center justify-content-center my-2">
                        <Col
                            xs={12}
                            lg={6}
                            md={6}
                            className="pt-md-0 pt-2"
                            data-aos="fade-right"
                        >
                            <div className="">
                                <p className={styles?.title}>
                                    Empowering Excellence with a Customer-First Approach
                                </p>
                                <p className={styles?.text}>
                                    GWC facilitates the alignment of all departments to prioritize customer needs
                                    through Salesforce. The Salesforce platform enables seamless collaboration across teams,
                                    providing a unified source of truth to support crucial discussions and decision-making
                                    directly within existing workflows. With our expertise, we empower businesses to unlock
                                    valuable insights and make informed, data-driven decisions, ultimately enhancing customer
                                    service and satisfaction.
                                </p>
                                {/* <a href="#gcp">
                                    <Button className={`${styles.banner_button} mt-3`}>
                                        {" "}
                                        Explore Salesforce
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
                                    </Button>
                                </a> */}
                            </div>
                        </Col>
                        <Col xs={12} lg={6} md={6} className="px-md-0" data-aos="fade-left">
                            <img
                                src={newsales}
                                alt=""
                                className="w-100 mx-lg-3 rounded-4 mt-md-0 mt-lg-5"
                            />
                        </Col>
                    </Row>
                </Container>
            </section >
        </Container >
    )
}

export default SalesSecondNew
