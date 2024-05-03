import React from "react";
import { Link } from "react-router-dom";
import commonstyles from "../../../commoncss/Home.module.css";
import styles from "../../../components/home/HomeBlog/homebottom.module.css";
import AOS from "aos";
import { Container, Row, Col, Button } from "react-bootstrap";
AOS.init({
    duration: 1500,
});

const CloudBottomSection = () => {
    return (
        <div className={commonstyles.frameParent15}>
            <div className={commonstyles.frameParent10}>
                <Container className={styles.banner_img} data-aos="fade-left">
                    <Row className="d-flex">
                        <Col lg={7} className="py-lg-3 px-0">
                            <h1 className={`${styles.banner_title} mb-4`}>
                                Your Cloud Journey, Your Way. We're Your Expert Guides To Optimal Cloud Utilization.
                            </h1>
                            <p className={`${styles.banner_para} mb-2`}>
                                Setup your Cloud Foundations & Infrastructure
                            </p>
                            <p className={`${styles.banner_para} mb-2`}>
                                Modernize your business Operating Model
                            </p>
                            <p className={`${styles.banner_para} mb-4`}>
                                Transform Workforce with Digital Talent & Culture
                            </p>
                            <Link to="/contact-us">
                                <Button className={`${styles.banner_button}`}>
                                    {" "}
                                    Talk To Our Experts{" "}
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CloudBottomSection;


