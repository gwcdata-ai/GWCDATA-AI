import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./jobpost.module.css";
import BannerBgImg from "../../assets/images/ProductGCP/Banner/banner.webp";
import carrerBannerBgImg from "../../assets/images/career/bannerimg.png";
import careerbanner from "../../assets/images/careerbanner.webp";
import { Link } from "react-router-dom";

const CareerBanner = () => {


    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img} pt-lg-0 mt-5`}
            style={{
                backgroundImage: `url(${BannerBgImg})`,
            }}
        >
            <section className="py-lg-0 py-4">
                <Container className="mt-4 pt-lg-5">
                    <Row className="d-flex">
                        <Col lg={6} md={6} className="py-lg-5 mt-5">
                            <p className={`${styles.breadcrumbs} mb-4`}>
                                <span>
                                    <a
                                        href='/'
                                        className={`${styles.breadcrumbs} mb-3`}
                                    >
                                        Home
                                    </a>
                                    <span> / </span>
                                </span>
                                Join Us
                            </p>

                            <h1 className={`${styles.banner_title} mb-4`} />
                            <p className={`${styles.banner_title} mb-4`} >
                                Join Us
                            </p>
                            <p className={`${styles.banner_sub_title} mb-4`} >
                                Do you enjoy tackling challenges & solving intricate problems? Join GWC & contribute to shaping a brighter future with us!
                            </p>
                            <a href="#job-postings" >
                                <Button className={`${commonStyles.banner_button}`}>
                                    Get In Touch
                                </Button>
                            </a>

                        </Col>
                        <Col lg={6} md={6}>
                            <img src={careerbanner} alt="img" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default CareerBanner
