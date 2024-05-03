import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import BannerBgImg from "../../assets/images/dbt/dbanner.png";
import bannerbg from "../../assets/images/ProductGCP/Banner/banner.webp"
import dbtImg from "../../assets/images/dbt/bannerDbt.png";
// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./dbt.module.css";

const DbtBanner = () => {
    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img} py-lg-2 mt-5 pt-5 pt-lg-0`}
            style={{
                backgroundImage: `url(${bannerbg})`,
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
                                DBT
                            </p>

                            <h1 className={`${styles.banner_title} mb-4`} />
                            <p className={`${styles.banner_title} mb-4`} >
                                DBT
                            </p>
                            <p className={`${styles.banner_sub_title} mb-4`} >
                                A robust framework that enables you to transform data within your warehouse using SQL more effectively & also helps your organization to build, test, & maintain its data infrastructure.
                            </p>


                        </Col>
                        <Col lg={5} md={6}>
                            <img src={dbtImg} alt="img" className="w-100 " />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default DbtBanner
