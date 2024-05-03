import React, { useState } from 'react'
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";

// CSS
import styles from "./atlan.module.css";

import ci1 from "../../assets/images/atlan/ci1.svg";
import ci2 from "../../assets/images/atlan/ci2.svg";
import ci3 from "../../assets/images/atlan/ci3.svg";

import ct1 from "../../assets/images/atlan/ct1.png";
import ct2 from "../../assets/images/atlan/ct2.png";
import ct3 from "../../assets/images/atlan/ct3.png";

import AOS from "aos";
AOS.init({
    duration: 1500,
});


const AtlanCards = () => {

    const [showC1, setShowC1] = useState(true);
    const [showC2, setShowC2] = useState(false);
    const [showC3, setShowC3] = useState(false);

    const handleC1Click = () => {
        setShowC1(true);
        setShowC2(false);
        setShowC3(false);
    };

    const handleC2Click = () => {
        setShowC1(false);
        setShowC2(true);
        setShowC3(false);
    };
    const handleC3Click = () => {
        setShowC1(false);
        setShowC2(false);
        setShowC3(true);
    };

    return (

        <Container className="pt-2 pb-4">
            <Row className='mt-5'>
                <Col md={12}>
                    <h3 className={styles.title_head}>
                        Playbooks
                    </h3>
                    <p className={` ${styles.para} mb-3 `}>
                        Atlan serves as the cohesive force uniting your data stack and team, facilitating seamless collaboration and communication. By centralizing data management and providing robust tools for analysis and exploration, Atlan empowers your data team to work efficiently and effectively towards achieving organizational goals.
                    </p>
                </Col>
            </Row>
            <section className="">
                <Container className="mt-md-4 mt-0">
                    <Row className="d-flex align-items-center justify-content-center my-5">
                        <Row>
                            <Col
                                xs={12}
                                lg={12}
                                md={12}
                                className="pt-md-0 pt-4"
                                data-aos="fade-right"
                            >
                                {showC1 && (
                                    <img
                                        src={ct1}
                                        alt=""
                                        className=" mx-lg-5  mt-lg-2 w-100"
                                    />
                                )}
                                {showC2 && (
                                    <img
                                        src={ct2}
                                        alt=""
                                        className=" mx-lg-5  mt-lg-2 w-100"
                                    />
                                )}
                                {showC3 && (
                                    <img
                                        src={ct3}
                                        alt=""
                                        className=" mx-lg-5 mt-lg-2 w-100"
                                    />
                                )}
                            </Col>
                        </Row>

                        <Row className='mt-lg-5'>
                            <Col xs={12} lg={4} md={4} className="" data-aos="fade-left">
                                <Card onClick={handleC1Click} className={` ${styles.five_card} mb-3 `}>
                                    <Card.Text>
                                        <div className={` ${styles.text_icon} mb-2`}>
                                            <img src={ci1} alt="icon" style={{ width: 'fit-content' }} />
                                            <p className={` ${styles.card_para1} mb-3 `}>Zapier for metadata</p>
                                        </div>
                                        <p className={` ${styles.card_para2} mb-3 `}>
                                            Get alerts for critical issues, auto-classify sensitive data, and automatically update documentation.
                                        </p>
                                    </Card.Text>
                                </Card>
                            </Col>

                            <Col xs={12} lg={4} md={4} className="" data-aos="fade-left">
                                <Card onClick={handleC2Click} className={` ${styles.five_card} mb-3 `}>
                                    <Card.Text>
                                        <div className={` ${styles.text_icon} mb-2`}>
                                            <img src={ci2} alt="icon" style={{ width: 'fit-content' }} />
                                            <p className={` ${styles.card_para1} mb-3 `}>Custom Metadata Widgets</p>
                                        </div>
                                        <p className={` ${styles.card_para2} mb-3 `}>
                                            Our Custom Metadata Builder is powered by a modular, no-code interface. You can easily create widgets and start crowdsourcing metadata in minutes.
                                        </p>
                                    </Card.Text>
                                </Card>
                            </Col>

                            <Col xs={12} lg={4} md={4} className="" data-aos="fade-left">
                                <Card onClick={handleC3Click} className={` ${styles.five_card} mb-3 `}>
                                    <Card.Text>
                                        <div className={` ${styles.text_icon} mb-2`}>
                                            <img src={ci3} alt="icon" style={{ width: 'fit-content' }} />
                                            <p className={` ${styles.card_para1} mb-3 `}>Automated API Enrichment</p>
                                        </div>
                                        <p className={` ${styles.card_para2} mb-3 `}>
                                            Powerful and easy-to-use APIs bring in metadata from any tool in your data stack.
                                        </p>
                                    </Card.Text>
                                </Card>
                            </Col>
                        </Row>

                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default AtlanCards
