import React, { useState } from "react";
import { Accordion, Card, Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../assets/images/about/ourCultureBg.webp";
import commonStyles from "../../commoncss/common.module.css";
import styles from "./boomi.module.css";
import f1 from "../../assets/images/boomi/f11.png";
import f2 from "../../assets/images/boomi/f12.png";
import f3 from "../../assets/images/boomi/f13.png";

const BoomiFaq = () => {

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
        <Container
            fluid
            id="app-creation"
            className={`${commonStyles.banner_container_img}  py-lg-5`}
            style={{ backgroundImage: `url(${banner})` }}
        >
            <section
                className={StyleSheet.productPlatformSection}
                id="data-foundation"
            >
                <Container className="" id="bi-analytics">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col lg={12} xs={12} className="py-md-0 py-0 ">

                            <p className={`mt-2 ${styles?.title4}`}>
                                Features of Boomi
                            </p >
                            <p className={` ${styles?.title5} mb-4 `}>
                                Boomi is a cloud-native platform, offering scalability, flexibility, and ease of deployment. Boomi prioritizes data security, offering robust encryption and compliance with industry standards to protect your sensitive information. Its features include:
                            </p>

                            <Row>
                                <Col md={8}>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header onClick={handleC1Click}>Drag-&-Drop Interface</Accordion.Header>
                                            <Accordion.Body>
                                                Design and deploy integrations effortlessly with Boomi's intuitive interface, no extensive coding required.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header onClick={handleC2Click}>Pre-built Connectors</Accordion.Header>
                                            <Accordion.Body>
                                                Access a vast library of pre-built connectors, accelerating integration development and reducing time to market.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header onClick={handleC3Click}>Real-time Monitoring</Accordion.Header>
                                            <Accordion.Body>
                                                Monitor your integrations in real-time, ensuring optimal performance and reliability.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>

                                <Col md={4}>


                                    {showC1 && (
                                        <img src={f1} alt="" className="w-100" height="100%" />
                                    )}
                                    {showC2 && (
                                        <img src={f2} alt="" className="w-100" height="100%" />
                                    )}
                                    {showC3 && (
                                        <img src={f3} alt="" className="w-100" height="100%" />
                                    )}
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default BoomiFaq
