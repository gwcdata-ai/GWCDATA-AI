import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import BannerBgImg from "../../assets/images/atlan/abanner.png";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./atlan.module.css";


const BannerAlation = () => {
    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img} py-lg-5 mt-5`}
            style={{
                backgroundImage: `url(${BannerBgImg})`,
            }}
        >
            <section className="py-4">
                <Container className="py-4 mt-md-0 mt-4">
                    <Row className="d-flex">
                        <Col lg={7} md={6} className="py-lg-5">
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
                                Atlan
                            </p>

                            <h1 className={`${styles.banner_title} mb-4`} />
                            <p className={`${styles.banner_title} mb-4`} >
                                Atlan
                            </p>
                            <p className={`${styles.banner_sub_title} mb-4`} >
                                Atlan is the single source of truth for your team to discover,
                                trust, and understand data they care about.
                            </p>


                        </Col>
                        <Col lg={5} md={6}></Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default BannerAlation
