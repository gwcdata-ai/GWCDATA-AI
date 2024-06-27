import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// CSS
import styles from "./slider.module.css";
import AOS from "aos";
AOS.init({
    duration: 1000,
});

export const SalesNewSection = () => {
    return (
        <Container fluid className="pt-2 pb-0">
            <section className="">
                <Container className="mt-5">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col lg={12} md={12} className="">
                            <div className="">
                                <p className={styles?.title}>
                                    Salesforce- A Strategic Asset that Drives Your Business Growth
                                </p>
                                <p className={styles?.text}>
                                    GWC stands as the preeminent destination for comprehensive Salesforce solutions. We specialize in seamlessly transforming manual processes into streamlined, efficient workflows with just a few clicks. Choose GWC as your trusted CRM Partner, and let us propel your business towards unparalleled success.

                                </p>
                                {/* <ul className={styles?.text}>
                                    <li> </li>
                                </ul> */}
                            </div>
                            
                        </Col>

                    </Row>
                </Container>
            </section>
        </Container>
    );
};
