import React, { useState } from 'react'
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";

// CSS
import styles from "../five.module.css";
import image1 from "../../../assets/images/fivetran/platform.png";

import i1 from "../../../assets/images/fivetran/i1.svg";
import i2 from "../../../assets/images/fivetran/i2.svg";
import i3 from "../../../assets/images/fivetran/i3.svg";

import c1 from "../../../assets/images/fivetran/c1.png";
import c2 from "../../../assets/images/fivetran/c2.png";
import c3 from "../../../assets/images/fivetran/c3.png";

import AOS from "aos";
AOS.init({
    duration: 1500,
});


const FiveOperations = () => {

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

        <Container className="pt-2 pb-4" id='simplify-data-extraction'>
            <Row className='mt-5'>
                <Col md={12}>
                    <h3 className={styles.title_head}>
                        Simplify Data Extraction
                    </h3>
                    <p className={` ${styles.para} mb-3 `}>
                        Easily extract data from various sources without writing code, using Fivetran’s more than 300 connectors for popular applications, databases, files and events. We can also build custom connectors using Fivetran’s REST API or SDK.
                    </p>
                </Col>
            </Row>
            <section className="">
                <Container className="mt-md-4 mt-0">
                    <Row className="d-flex align-items-center justify-content-center my-5">
                        <Col
                            lg={6}
                            md={12}
                            className="pt-md-0 pt-4"
                            data-aos="fade-right"
                        >
                            {showC1 && (
                                <img
                                    src={c1}
                                    alt=""
                                    className=" mx-lg-5  mt-lg-5"
                                    width="80%"
                                />
                            )}
                            {showC2 && (
                                <img
                                    src={c2}
                                    alt=""
                                    className=" mx-lg-5  mt-lg-5"
                                    width="80%"
                                />
                            )}
                            {showC3 && (
                                <img
                                    src={c3}
                                    alt=""
                                    className=" mx-lg-5  mt-lg-5"
                                    width="80%"
                                />
                            )}
                        </Col>

                        <Col lg={6} md={12} className="px-md-0" data-aos="fade-left">

                            <Card onClick={handleC1Click} className={` ${styles.five_card} mb-3 `}>
                                <img src={i1} alt="icon" style={{ width: 'fit-content' }} />
                                <Card.Text>
                                    <p className={` ${styles.card_para1} mb-2 `}>Accelerate Data Transformation</p>
                                    <p className={` ${styles.card_para2} mb-3 `}>
                                        We can speed up data transformation and analysis using Fivetran’s pre-built data models that cover common use cases and best practices.
                                    </p>
                                </Card.Text>
                            </Card>

                            <Card onClick={handleC2Click} className={` ${styles.five_card} mb-3 `}>
                                <img src={i2} alt="icon" style={{ width: 'fit-content' }} />
                                <Card.Text>
                                    <p className={` ${styles.card_para1} mb-2 `}>Ensure Data Reliability</p>
                                    <p className={` ${styles.card_para2} mb-3 `}>
                                        Fivetran handles all the tasks, such as schema detection, data type conversion, error handling, incremental loading, and schema changes automatically.
                                    </p>
                                </Card.Text>
                            </Card>

                            <Card onClick={handleC3Click} className={` ${styles.five_card} mb-3 `}>
                                <img src={i3} alt="icon" style={{ width: 'fit-content' }} />
                                <Card.Text>
                                    <p className={` ${styles.card_para1} mb-2 `}>Enable Data Freshness</p>
                                    <p className={` ${styles.card_para2} mb-3 `}>
                                        Fivetran can capture changes in the source data using log-based or trigger-based methods and apply them to the destination data warehouse.
                                    </p>
                                </Card.Text>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default FiveOperations


