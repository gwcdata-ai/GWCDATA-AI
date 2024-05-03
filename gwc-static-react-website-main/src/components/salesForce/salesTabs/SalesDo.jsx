import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import TabsPanel from "../../../ReusableUI/Tabs/TabsPanel";
import Tab from "../../../ReusableUI/Tabs/Tab";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../../assets/images/about/ourCultureBg.webp";
import { Link } from "react-router-dom";
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./tabs.module.css";
import img1 from "../../../assets/images/salesforce/t1.png";
import img2 from "../../../assets/images/salesforce/t2.png";
import img3 from "../../../assets/images/salesforce/t3.png";

import AOS from "aos";
AOS.init({
    duration: 1500,
});
const SalesDo = () => {
    const appCreation = useRef(null);
    const dataFoundation = useRef(null);
    const biAnalytics = useRef(null);

    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#app-creation" && appCreation.current) {
            appCreation.current.scrollIntoView({ behavior: "smooth" });
        }
        if (location.hash === "#data-foundation" && dataFoundation.current) {
            dataFoundation.current.scrollIntoView({ behavior: "smooth" });
        }
        if (location.hash === "#bi-analytics" && biAnalytics.current) {
            biAnalytics.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.hash]);

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <>
            <Container
                fluid
                id="app-creation"
                className={`${commonStyles.banner_container_img}  py-5 `}
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
                                    Why Choose Us?
                                </p >
                                <p className={` ${styles?.title5}`}>GWC’s Salesforce solutions seamlessly transform manual processes into efficient workflows with just a few clicks. Opt for GWC as your reliable CRM partner to propel your business towards unparalleled success.</p>
                                <TabsPanel>
                                    <Tab
                                        title="Proactive Issue Resolution"
                                        icon="far fa-address-card"
                                    >
                                        <Container className="mt-0">
                                            <Row className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center py-3`}>
                                                <Col
                                                    lg={{ offset: 1, span: 3 }}
                                                    md={6}
                                                    className="px-md-0"
                                                    data-aos="fade-right"
                                                >
                                                    <img
                                                        src={img1}
                                                        alt=""
                                                        className="w-100 h-100"
                                                    />
                                                </Col>
                                                <Col
                                                    lg={7}
                                                    md={{ span: 5, offset: 1 }}
                                                    className="px-md-5 pt-md-0 pt-5"
                                                    data-aos="fade-left"
                                                >
                                                    <div className={styles.platformDataSection}>

                                                        <p className={styles?.title6}>Proactive Issue Resolution</p>
                                                        <p className={styles?.text}>
                                                            Our proactive approach ensures that potential issues are identified and resolved before they impact your operations.                                                        </p>
                                                        <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Learn More
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Tab>
                                    <Tab title="Scalability and Flexibility" icon="fas fa-hourglass-start">
                                        <Container className="mt-5">
                                            <Row className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center py-3`}>
                                                <Col
                                                    lg={{ offset: 1, span: 3 }}
                                                    md={6}
                                                    className="px-md-0"
                                                    data-aos="fade-right"
                                                >
                                                    <img
                                                        src={img2}
                                                        alt=""
                                                        className="w-100"
                                                    />
                                                </Col>
                                                <Col
                                                    lg={7}
                                                    md={{ span: 5, offset: 1 }}
                                                    className="px-md-5 pt-md-0 pt-5"
                                                    data-aos="fade-left"
                                                >
                                                    <div className={styles.platformDataSection}>

                                                        <p className={styles?.title6}>Scalability and Flexibility</p>
                                                        <p className={styles?.text}>
                                                            Grow your business confidently, knowing that our services scale with your needs, providing the flexibility to adapt to changing requirements.
                                                        </p>
                                                        <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Learn More
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Tab>
                                    <Tab title="Expert Guidance" icon="fas fa-hourglass-start">
                                        <Container className="mt-5">
                                            <Row className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center py-3`}>
                                                <Col
                                                    lg={{ offset: 1, span: 3 }}
                                                    md={6}
                                                    className="px-md-0"
                                                    data-aos="fade-right"
                                                >
                                                    <img
                                                        src={img3}
                                                        alt=""
                                                        className="w-100"
                                                    />
                                                </Col>
                                                <Col
                                                    lg={7}
                                                    md={{ span: 5, offset: 1 }}
                                                    className="px-md-5 pt-md-0 pt-5"
                                                    data-aos="fade-left"
                                                >
                                                    <div className={styles.platformDataSection}>

                                                        <p className={styles?.title6}>Expert Guidance</p>
                                                        <p className={styles?.text}>
                                                            Leverage the expertise of our certified Salesforce professionals who bring years of experience and industry best practices to the table.
                                                        </p>
                                                        <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Learn More
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Tab>
                                    <Tab title="Cost-Effective Solutions" icon="fas fa-hourglass-start">
                                        <Container className="mt-5">
                                            <Row className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center py-3`}>
                                                <Col
                                                    lg={{ offset: 1, span: 3 }}
                                                    md={6}
                                                    className="px-md-0"
                                                    data-aos="fade-right"
                                                >
                                                    <img
                                                        src={img3}
                                                        alt=""
                                                        className="w-100"
                                                    />
                                                </Col>
                                                <Col
                                                    lg={7}
                                                    md={{ span: 5, offset: 1 }}
                                                    className="px-md-5 pt-md-0 pt-5"
                                                    data-aos="fade-left"
                                                >
                                                    <div className={styles.platformDataSection}>

                                                        <p className={styles?.title6}>Cost-Effective Solutions</p>
                                                        <p className={styles?.text}>
                                                            Optimize your Salesforce investment with our cost-effective managed services, maximizing the value derived from the platform.
                                                        </p>
                                                        <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Learn More
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Tab>
                                    <Tab title="Enhanced Productivity" icon="fas fa-hourglass-start">
                                        <Container className="mt-5">
                                            <Row className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center py-3`}>
                                                <Col
                                                    lg={{ offset: 1, span: 3 }}
                                                    md={6}
                                                    className="px-md-0"
                                                    data-aos="fade-right"
                                                >
                                                    <img
                                                        src={img3}
                                                        alt=""
                                                        className="w-100"
                                                    />
                                                </Col>
                                                <Col
                                                    lg={7}
                                                    md={{ span: 5, offset: 1 }}
                                                    className="px-md-5 pt-md-0 pt-5"
                                                    data-aos="fade-left"
                                                >
                                                    <div className={styles.platformDataSection}>

                                                        <p className={styles?.title6}>Enhanced Productivity</p>
                                                        <p className={styles?.text}>
                                                            Our Salesforce packages efficiently handle multiple customers simultaneously.

                                                        </p>
                                                        <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Learn More
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Tab>
                                    <Tab title="Effortless Collaboration" icon="fas fa-hourglass-start">
                                        <Container className="mt-5">
                                            <Row className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center py-3`}>
                                                <Col
                                                    lg={{ offset: 1, span: 3 }}
                                                    md={6}
                                                    className="px-md-0"
                                                    data-aos="fade-right"
                                                >
                                                    <img
                                                        src={img3}
                                                        alt=""
                                                        className="w-100"
                                                    />
                                                </Col>
                                                <Col
                                                    lg={7}
                                                    md={{ span: 5, offset: 1 }}
                                                    className="px-md-5 pt-md-0 pt-5"
                                                    data-aos="fade-left"
                                                >
                                                    <div className={styles.platformDataSection}>

                                                        <p className={styles?.title6}>Effortless Collaboration</p>
                                                        <p className={styles?.text}>
                                                            Our Salesforce implementation services facilitate seamless collaboration, allowing users from different locations to access and edit projects concurrently.
                                                        </p>
                                                        <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Learn More
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Tab>

                                </TabsPanel>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Container>
        </>
    );
};

export default SalesDo;
