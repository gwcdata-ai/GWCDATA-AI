import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import bannercase from "../../assets/images/casestudy/bannercase.png";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "../../commoncomponents/banner/commonBanner.module.css";

const CaseStudyBanner = () => {
    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img} py-lg-5 mt-5`}
            style={{
                backgroundImage: `url(${bannercase})`,
            }}
        >
            <section className="py-4 mt-5">
                <Container className="py-4 mt-md-0 mt-5">
                    <Row className="d-flex">
                        <Col lg={12} className="py-lg-5">
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
                                Case Studies
                            </p>

                            <h1 className={`${styles.banner_title} mb-4`} />
                            <p className={`${styles.banner_title} mb-4`} >
                                Case Studies
                            </p>
                            <p className={`${styles.banner_sub_title} mb-4`} >
                            Dive into Our Case Studies Insights from Our Clients Journeys
                            </p>
                            <div className="div">
                                <Form.Control type="search" placeholder="Search" className={`${styles.search_logo} w-50  `} />
                            </div>


                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default CaseStudyBanner
