import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import TabsPanel from "../../../ReusableUI/Tabs/TabsPanel";
import Tab from "../../../ReusableUI/Tabs/Tab";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../../assets/images/about/ourCultureBg.webp";
import { Link } from "react-router-dom";
import commonStyles from "../../../commoncss/common.module.css";
import styles from "../atlan.module.css";
import i1 from "../../../assets/images/atlan/i1.svg";
import i2 from "../../../assets/images/atlan/i2.svg";
import i3 from "../../../assets/images/atlan/i3.svg";
import i4 from "../../../assets/images/atlan/i4.svg";

import t1 from "../../../assets/images/atlan/t1.png";
import t2 from "../../../assets/images/atlan/t2.png";
import t3 from "../../../assets/images/atlan/t3.png";
import t4 from "../../../assets/images/atlan/t4.png";

import AOS from "aos";
AOS.init({
    duration: 1500,
});


const AtlanTab = () => {

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
                        <Col lg={12} xs={12} className="py-md-0 py-5 ">

                            <p className={`mt-2 ${styles?.title4}`}>
                                Use Cases
                            </p >
                            <p className={` ${styles?.title5}`}>
                                Free up your day with automated metadata enrichment across your data landscape.
                            </p>
                            <TabsPanel>
                                <Tab
                                    title="Alerts"
                                    icon="far fa-address-card"
                                >
                                    <Container className="mt-5">
                                        <Row className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-5 `}>
                                            <Col
                                                lg={12}
                                                md={12}
                                                className="px-md-0"
                                                data-aos="fade-right"
                                            >
                                                {/* <img
                                                    src={img1}
                                                    alt=""
                                                    className="w-100 h-100"
                                                /> */}
                                                <div className={styles.tab_icons}>
                                                    <img src={i1} alt="icon" />
                                                    <h4 className={` ${styles?.icon_text} mb-2 `}>Alerts</h4>
                                                </div>
                                                <div className={styles.platformDataSection}>
                                                    <p className={` ${styles?.title} mb-2 `}><b>Notify downstream consumers of impacts.</b></p>
                                                    <p className={styles?.title}>Make consumers aware of potential problems in advance.</p>
                                                </div>
                                                <div className="mt-3">
                                                    <img src={t1} alt="image" className="w-100" />
                                                </div>
                                            </Col>

                                        </Row>
                                    </Container>
                                </Tab>



                                <Tab title="Security" icon="fas fa-hourglass-start">
                                    <Container className="mt-5">
                                        <Row className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-5`}>
                                            <Col
                                                lg={12}
                                                md={12}
                                                className="px-md-0"
                                                data-aos="fade-right"
                                            >

                                                <div className={styles.tab_icons}>
                                                    <img src={i2} alt="icon" />
                                                    <h4 className={` ${styles?.icon_text} mb-2 `}>Security</h4>
                                                </div>
                                                <div className={styles.platformDataSection}>
                                                    <p className={` ${styles?.title} mb-2 `}><b>Security and compliance reporting.</b></p>
                                                    <p className={styles?.title}>Report on interrelated metadata for security or compliance purposes.</p>
                                                </div>
                                                <div className="mt-3">
                                                    <img src={t2} alt="image" className="w-100" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab>
                                <Tab title="Quality" icon="fas fa-hourglass-start">
                                    <Container className="mt-5">
                                        <Row className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-5`}>
                                            <Col
                                                lg={12}
                                                md={12}
                                                className="px-md-0"
                                                data-aos="fade-right"
                                            >

                                                <div className={styles.tab_icons}>
                                                    <img src={i3} alt="icon" />
                                                    <h4 className={` ${styles?.icon_text} mb-2 `}>Quality</h4>
                                                </div>
                                                <div className={styles.platformDataSection}>
                                                    <p className={` ${styles?.title} mb-2 `}><b>Automatically assign a freshness status to assets.</b></p>
                                                    <p className={styles?.title}>Avoid accidental reuse of stale assets.</p>
                                                </div>
                                                <div className="mt-3">
                                                    <img src={t3} alt="image" className="w-100" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Tab>
                                <Tab title="Embedded Content" icon="fas fa-hourglass-start">
                                    <Container className="mt-5">
                                        <Row className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-5`}>
                                            <Col
                                                lg={12}
                                                md={12}
                                                className="px-md-0"
                                                data-aos="fade-right"
                                            >

                                                <div className={styles.tab_icons}>
                                                    <img src={i4} alt="icon" />
                                                    <h4 className={` ${styles?.icon_text} mb-2 `}>Embedded Content</h4>
                                                </div>
                                                <div className={styles.platformDataSection}>
                                                    <p className={` ${styles?.title} mb-2 `}><b>Enrich user experience in BI tools with additional metadata.</b></p>
                                                    <p className={styles?.title}>Add information consistency and reduce duplication of effort.</p>
                                                </div>
                                                <div className="mt-3">
                                                    <img src={t4} alt="image" className="w-100" />
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
    )
}

export default AtlanTab
