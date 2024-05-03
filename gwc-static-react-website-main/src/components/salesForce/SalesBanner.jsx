import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./sales.module.css";

import { Link } from "react-router-dom";
import salesbanner from "../../assets/images/salesforce/salesbanner.webp";

const SalesBanner = () => {
    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img} py-lg-5 mt-5`}
            style={{
                backgroundImage: `url(${salesbanner})`,
            }}
        >
            <section className="py-4">
                <Container className="py-4 mt-md-0 mt-4">
                    <Row className="d-flex">
                        <Col lg={6} md={6} className="py-lg-5">
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
                            <p className={`${styles.banner_sub_title} mb-4`} >
                                Unlock Opportunities, Encode Success: Navigate Your Business's Future with our Salesforce Solutions
                            </p>
                            <Link to="/contact-us" >
                                <Button className={`${commonStyles.banner_button}`}>
                                    Get In Touch
                                </Button>
                            </Link>

                        </Col>
                        <Col lg={6} md={6}></Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default SalesBanner
