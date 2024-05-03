import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BannerBgImg from "../../assets/images/ProductGCP/Banner/banner.webp";
// import BannerBgImg from "../../assets/images/ProductGCP/Banner/Section-2.png";
import fivelogo from "../../assets/images/fivebanner.png";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "../../components/atlanPatners/atlan.module.css";
import { Link } from "react-router-dom";


const FivetranBanner = () => {
    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img} py-lg-0  mt-5`}
            style={{
                backgroundImage: `url(${BannerBgImg})`,
            }}
        >
            <section className="py-4">
                <Container className="py-4 mt-md-0 mt-4">
                    <Row className="d-flex">
                        <Col lg={7} md={6} className="py-lg-5">
                            <p className={`${styles.breadcrumbs} mb-4 mt-5 mt-lg-3`}>
                                <span>
                                    <a
                                        href='/'
                                        className={`${styles.breadcrumbs} mb-3`}
                                    >
                                        Home
                                    </a>
                                    <span> / </span>
                                </span>
                                FIVETRAN
                            </p>

                            <h1 className={`${styles.banner_title} mb-4`} />
                            <p className={`${styles.banner_title} mb-4`} >
                                Fivetran
                            </p>
                            <p className={`${styles.banner_sub_title} mb-4`} >
                                Fivetran is a modern, cloud-based, automated data-movement platform that can extract, load & transform data from various sources & destinations.
                            </p>

                            {/* <Link to='/contact-us' >
                                <Button className={`${styles.banner_button} mb-4`}>
                                    Talk to GWC experts
                                </Button>
                            </Link> */}
                        </Col>
                        <Col lg={5} md={6}>
                            <img src={fivelogo} alt="logo" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default FivetranBanner