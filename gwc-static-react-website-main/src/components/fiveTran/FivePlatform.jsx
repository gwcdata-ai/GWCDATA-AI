import React from 'react'
import { Container, Row, Col, Image, Button } from "react-bootstrap";

// CSS
import styles from "./five.module.css";
import image1 from "../../assets/images/fivetran/platform.png";

import AOS from "aos";
AOS.init({
    duration: 1500,
});



const FivePlatform = () => {
    return (
        <Container fluid className="pt-2 pb-4">
            <section className="">
                <Container className="mt-md-4 mt-0">
                    <Row className="d-flex align-items-center justify-content-center my-5">
                        <Col
                            md={7}
                            className="pt-md-0 pt-4"
                            data-aos="fade-right"
                        >
                            <div className="px-4">
                                <p className={styles?.title}>
                                    One platform for all your data movement
                                </p>

                                <p className={styles?.text}>
                                    We’ve automated the most time-consuming parts of the ELT process so the data engineers can focus on higher-impact projects with total peace of mind. Fivetran can help you create dashboards and metrics, reduce costs and time, and improve data literacy and insights.
                                </p>

                                <a href="#simplify-data-extraction">
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
                        <Col md={5} className="px-md-0" data-aos="fade-left">
                            <img
                                src={image1}
                                alt=""
                                className=" mx-lg-4 mx-md-4  mt-5 w-100 h-100"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default FivePlatform
