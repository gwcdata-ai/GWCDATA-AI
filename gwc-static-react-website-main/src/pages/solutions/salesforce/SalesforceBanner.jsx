import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BannerBgImg from "../../../assets/images/ProductGCP/Banner/banner.webp";
import salesforceBanner from "../../../assets/images/salesforce/salesforceBanner.svg";
// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "../../../components/atlanPatners/atlan.module.css";
import { Link } from "react-router-dom";
import styles1 from "../../../commoncomponents/banner/commonBanner.module.css";


const SalesforceBanner = () => {
    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img} py-lg-5 mt-5`}
            style={{
                backgroundImage: `url(${BannerBgImg}) `,
            }}
        >
            <section className="py-4">
                <Container className="py-4 mt-md-0 mt-4">
                    <Row className="d-flex">
                        <Col lg={7} md={6} className="pt-lg-5">
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
                                Salesforce
                            </p>

                            <h1 className={`${styles.banner_title} mb-4`} />
                            <p className={`${styles.banner_title} mb-4`} >
                                Salesforce
                            </p>
                            <p className={`${styles.banner_sub_title44} mb-4`} >
                                Leverage our Salesforce Expertise to Elevate your Business
                            </p>

                            <Link to='/contact-us' >
                                <Button className={`${styles1.banner_button}`}>

                                    Get In Touch
                                </Button>
                            </Link>
                        </Col>
                        <Col lg={5} md={6}>
                            <img src="https://zerozilla-admin.s3.ap-south-1.amazonaws.com/apartment/images/1709118796905~comp-1-1.gif" alt="logo" className="w-100 h-100 mt-lg-4" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default SalesforceBanner

