import React from 'react'
import { Container, Row, Col, Button, Image } from "react-bootstrap";
// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "./sales.module.css";
import bannerCard from "../../assets/images/salesforce/bannerCard.png";


import client1 from "../../assets/images/salesforce/Client1.png";
import client2 from "../../assets/images/salesforce/Client2.png";
import client3 from "../../assets/images/salesforce/Client3.png";
import client4 from "../../assets/images/salesforce/Client4.png";
import useMedia from "../../hooks/useMedia";

import AOS from "aos";
AOS.init({
    duration: 1500,
});


const SalesCard = () => {

    const isMobile = useMedia("(max-width:600px)");
    const isMiniLap = useMedia("(max-width:1200px)");

    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img}  py-lg-5`}
            style={{ backgroundImage: `url(${bannerCard})` }}
        >
            <section className="">
                <Container className="">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={12}>
                            <h4 className={`${styles.top_heading} my-3`}>How can we help grow your business?</h4>
                            <div className={styles.frameParent}>
                                <Row
                                    className=""
                                    style={{ width: isMobile ? "100%" : isMiniLap ? "100%" : "90%" }}
                                >
                                    <Col xs={6} md={3} className="mb-md-0 mb-2">
                                        <div className={styles.groupParent} data-aos="fade-left">
                                            <div className={styles.vectorParent}>
                                                <img className={styles.vectorIcon8} alt="" src={client1} />
                                                {/* <img className={styles.archiveIcon1} alt="" src="/archive@2x.png" /> */}
                                            </div>
                                            <div className={styles.div}>20 hrs</div>
                                            <div className={styles.happyClients}>Saved Each Week</div>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={3} className="mb-md-0 mb-2">
                                        <div className={styles.groupParent1} data-aos="fade-right">
                                            <div className={styles.vectorParent}>
                                                <img className={styles.vectorIcon8} alt="" src={client2} />
                                            </div>
                                            <div className={styles.div}>+29%</div>
                                            <div className={styles.happyClients}>Certified Experts</div>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <div className={styles.groupParent2} data-aos="fade-left">
                                            <div className={styles.vectorParent}>
                                                <img className={styles.vectorIcon8} alt="" src={client3} />
                                            </div>
                                            <div className={styles.div}>-27%</div>
                                            <div className={styles.happyClients}>Solutions Provided</div>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={3}>
                                        <div className={styles.groupParent3} data-aos="fade-right">
                                            <div className={styles.vectorParent}>
                                                <img className={styles.vectorIcon8} alt="" src={client4} />
                                            </div>
                                            <div className={styles.div}>-27%</div>
                                            <div className={styles.happyClients}>Locations</div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default SalesCard
