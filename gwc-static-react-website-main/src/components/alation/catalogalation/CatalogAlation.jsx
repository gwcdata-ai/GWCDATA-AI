import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";

// CSS
import styles from "../../atlanPatners/atlan.module.css";
import image1 from "../../../assets/images/Alation Images/what Alation.webp";

import AOS from "aos";
AOS.init({
    duration: 1500,
});


const CatalogAlation = () => {
    return (
        <Container fluid className="pt-2 pb-4">
            <section className="">
                <Container className="mt-md-4 mt-0">
                    <Row className="d-flex align-items-center justify-content-center my-lg-5">
                        <Col xs={12} lg={6} md={6} className="px-md-0" data-aos="fade-left">
                            <img
                                src={image1}
                                alt=""
                                className=" mx-lg-5  mt-md-0 mt-5"
                                width="80%"
                            />
                        </Col>
                        <Col
                            xs={12}
                            lg={6}
                            md={6}
                            className="pt-md-0 pt-4"
                            data-aos="fade-right"
                        >
                            <div className="">
                                <p className={styles?.title}>
                                    What is Alation?
                                </p>

                                <p className={styles?.text}>
                                    Feeling lost in a swamp of spreadsheets and cryptic databases? Alation dives in and rescues you. It's a powerful platform that organizes your company's data, highlighting hidden assets and making them easy to find and understand. Think of it as an intelligent librarian for your information, ensuring its quality, security, and accessibility for everyone. With Alation, collaboration thrives, insights blossom and your data transforms from confusion to fuel for smarter decisions and business success.
                                </p>

                                <a href="">
                                    <Button className={`${styles.banner_button} mt-3`}>
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
                                    </Button>
                                </a>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default CatalogAlation

