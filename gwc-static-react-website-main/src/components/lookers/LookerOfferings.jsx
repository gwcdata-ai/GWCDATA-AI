
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../assets/images/about/ourCultureBg.webp";

import commonStyles from "../../commoncss/common.module.css";
import styles from "../ProductGCP/GCPOffering/GCPOffering.module.css"
import icon1 from "../../assets/icons/Offeringsvg1.svg";
import icon2 from "../../assets/icons/Offeringsvg2.svg";
import icon3 from "../../assets/icons/Offeringsvg3.svg";
import icon4 from "../../assets/icons/Offeringsvg4.svg";
import icon5 from "../../assets/icons/Offeringsvg5.svg";
import icon6 from "../../assets/icons/Offeringsvg6.svg";


import AOS from "aos";
AOS.init({
    duration: 1500,
});
const LookerOfferings = () => {
    const visionmissionRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#gcp" && visionmissionRef.current) {
            visionmissionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.hash]);
    return (
        <>
            <Container
                fluid
                className={`${commonStyles.banner_container_img}  py-5`}
                style={{ backgroundImage: `url(${banner})` }}
                id='gcp'
            >
                <Container className="">
                    <Row className="d-flex align-items-center justify-content-center px-0">
                        <Col lg={5} md={6} className="px-0" data-aos="fade-right">
                            <div className={styles.platformDataSection}>
                                {/* <p className={styles?.sub_title}>
                  <strong>Offerings</strong>
                </p> */}
                                <p className={styles?.title}>Transform Your Data into Actionable Insights.</p>
                                <p className={styles?.text}>
                                    Looker offers more than just a contemporary business intelligence platform. You have the flexibility to utilize Looker for self-service or governed BI, develop custom applications with reliable metrics, or seamlessly integrate Looker modeling into your current BI environment.
                                </p>
                                <p className={styles?.text}>
                                    Gain access to, analyze, and utilize the latest trusted version of your data. Deliver scalable, trusted data experiences from the cloud platform of your preference, empowering your users with real-time insights to act upon.
                                </p>
                            </div>
                        </Col>
                        <Col lg={7} md={6} className="px-md-1" data-aos="fade-left">
                            <div className={styles.platformDataSection}>
                                <Row className="d-flex align-items-center justify-content-center">
                                    <Col
                                        lg={4}
                                        md={4}
                                        sm={6}
                                        xs={6}
                                        className="mt-4 "
                                    >
                                        <div className={styles.offeringCards}>
                                            <Image
                                                src={icon1}
                                                className={`mt-2 ${styles.imageCard}`}
                                            />
                                            <div className={styles.imageCardText}>
                                                Business Intelligence
                                            </div>
                                        </div>
                                    </Col>
                                    <Col
                                        lg={4}
                                        md={4}
                                        sm={6}
                                        xs={6}
                                        className="mt-4 "
                                    >
                                        <div className={styles.offeringCards}>
                                            <Image
                                                src={icon2}
                                                className={`mt-2 ${styles.imageCard}`}
                                            />
                                            <div className={styles.imageCardText}>
                                                Data-powered Applications
                                            </div>
                                        </div>
                                    </Col>
                                    <Col
                                        lg={4}
                                        md={4}
                                        sm={6}
                                        xs={6} className="mt-4">
                                        <div className={styles.offeringCards}>
                                            <Image
                                                src={icon3}
                                                className={`mt-2 ${styles.imageCard}`}
                                            />
                                            <div className={styles.imageCardText}>
                                                Embedded Analytics
                                            </div>
                                        </div>
                                    </Col>
                                    <Col
                                        lg={4}
                                        md={4}
                                        sm={6}
                                        xs={6}
                                        className="mt-4 "
                                    >
                                        <div className={styles.offeringCards}>
                                            <Image
                                                src={icon4}
                                                className={`mt-2 ${styles.imageCard}`}
                                            />
                                            <div className={styles.imageCardText}>
                                                Data Modeling
                                            </div>
                                        </div>
                                    </Col>
                                    <Col
                                        lg={4}
                                        md={4}
                                        sm={6}
                                        xs={6}
                                        className="mt-4 "
                                    >
                                        <div className={styles.offeringCards}>
                                            <Image
                                                src={icon5}
                                                className={`mt-2 ${styles.imageCard}`}
                                            />
                                            <div className={styles.imageCardText}>
                                                Enhanced Collaboration
                                            </div>
                                        </div>
                                    </Col>
                                    <Col
                                        lg={4}
                                        md={4}
                                        sm={6}
                                        xs={6} className="mt-4">
                                        <div className={styles.offeringCards}>
                                            <Image
                                                src={icon6}
                                                className={`mt-2 ${styles.imageCard}`}
                                            />
                                            <div className={styles.imageCardText}>
                                                Enhanced Decision-making
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default LookerOfferings;
