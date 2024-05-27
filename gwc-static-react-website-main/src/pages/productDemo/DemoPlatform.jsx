
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import whitlogo from "../../assets/images/domologo_white.svg"
import macimg from "../../assets/images/create.png"
import { HiOutlineCheckCircle } from "react-icons/hi2";
import commonStyles from "../../commoncss/common.module.css";
import "./style.css";
import bannerImg from "../../assets/images/about/ourCultureBg.webp";
import styles from "../../commoncss/home.module.css";
import styles1 from "../../components/ProductDemo/WhyDomo/WhyDemoCards/WhyDomoCards.module.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/ProductDemo/i1.svg";
import icon2 from "../../assets/images/ProductDemo/i2.svg";
import icon3 from "../../assets/images/ProductDemo/i3.svg";
import icon4 from "../../assets/images/ProductDemo/i4.svg";
import client1 from "../../assets/images/homeClient/Client1.svg";
import client2 from "../../assets/images/homeClient/Client2.svg";
import client3 from "../../assets/images/homeClient/Client3.svg";
import client5 from "../../assets/images/homeClient/client5.svg";
import client6 from "../../assets/images/homeClient/client6.svg";
import client7 from "../../assets/images/homeClient/client7.svg";
import client8 from "../../assets/images/homeClient/client8.svg";
import client9 from "../../assets/images/homeClient/client9.svg";
import client10 from "../../assets/images/homeClient/client10.svg";

const DemoPlatform = () => {
    return (
        <>
            <Container fluid id="domo-freeaccount"
                className={`${commonStyles.banner_container_img} container_bg py-5`}
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <Container className="mt-2">
                    {/* <Row className="d-flex align-items-center justify-content-center">

                        <Col md={4}>
                            <div className="w-100 center_align mt-2">
                                <img src={whitlogo} alt="" className="demo_log mb-3" />
                            </div>
                        </Col>

                        <Col md={8} className="py-md-0 pt-lg-2">
                            <div className="">
                                <h3 className="domo_heading mb-2"><b>Create Your Free Account Now & Access It Forever</b></h3>
                                <p className="domo_para mb-2">Enjoy unlimited features and get an unlimited number of users- With no credit card!</p>
                            </div>
                        </Col>
                    </Row> */}

                    <Row className="mb-2">
                        <Col md={4} className="" data-aos="fade-right">

                            <div className="left_section">
                                <img src={macimg} alt="" className=" mx-lg-0 rounded-4 w-100 mb-2 px-4 mt4" />
                                <div className="btn_Wrapper">
                                    <Link
                                        to="https://www.domo.com/start/freemium?utm_source=referral_gwc&utm_medium=organic&orgid=100000770&utm_campid=701f2000001C6UOAA0%20Start%20Free%20|%20Domo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className="create_btn">Create Your Free Account</button>
                                    </Link>
                                </div>
                            </div>
                        </Col>

                        <Col md={8} data-aos="fade-left">
                            {/* <Row className="mb-4 mt-4">
                                <Col md={6}>
                                    <Card className="domo_card mb-2">
                                        <div>
                                            <Image src={icon1} className="imageCard mb-2" />
                                        </div>
                                        <p className="card_domo_head1 mb-1"><b>Unlimited users</b></p>
                                        <p className="card_domo_para1 mb-2">There's no seat limit, ever.</p>
                                    </Card>
                                </Col>

                                <Col md={6}>
                                    <Card className="domo_card">
                                        <div>
                                            <Image src={icon2} className="imageCard mb-2" />
                                        </div>
                                        <p className="card_domo_head2 mb-1"><b>Empowered workforce</b></p>
                                        <p className="card_domo_para2 mb-2">Give all users access to real-time data to make fast, smart decisions that transform the business.</p>
                                    </Card>
                                </Col>
                            </Row> */}
                            <div className="mx-lg-4">
                                <h3 className="domo_heading mt-4 mb-2"><b>Create Your Free Account Now & Access It Forever</b></h3>
                                <p className="domo_para mb-2">Enjoy unlimited features and get an unlimited number of users- With no credit card!</p>
                            </div>
                            <Row className=" mb-md-0 mb-5 mt-4 mx-lg-4">
                                <Col xs={12} md={4} data-aos="fade-right" className="mb-3">
                                    <div className={styles.groupParentss}>
                                        <div className={styles.vectorParent}>
                                            <img className={` ${styles.vectorIcon8_dash} mx-3 `} width="75%" alt="" src={client5} />
                                        </div>
                                        <div className={styles1.domo3cardtitle2}>Unlimited Users</div>
                                        {/* <div className={styles1.domo1cardtext}>There's no seat limit, ever.</div> */}
                                    </div>
                                </Col>
                                <Col xs={12} md={4} data-aos="fade-right" className="mb-3">
                                    <div className={styles.groupParentss}>
                                        <div className={styles.vectorParent}>
                                            <img className={` ${styles.vectorIcon8_dash} mx-3 `} width="75%" alt="" src={client6} />
                                        </div>
                                        <div className={styles1.domo1cardtitle2}>1200+ Connecters</div>
                                        {/* <div className={styles1.domo2cardtext}>Give all users access to real-time data to make fast, smart decisions that transform the business.</div> */}
                                    </div>
                                </Col>
                                <Col xs={12} md={4} data-aos="fade-left" className="mb-3">
                                    <div className={styles.groupParentss}>
                                        <div className={styles.vectorParent}>
                                            <img className={` ${styles.vectorIcon8_dash} mx-3 `} width="75%" alt="" src={client7} />
                                        </div>
                                        <div className={styles1.domo2cardtitle2}>Next Gen AI</div>
                                        {/* <div className={styles1.domo3cardtext}>payback period</div> */}
                                    </div>
                                </Col>

                            </Row>
                            {/* <Row>
                                <Col md={6}>
                                    <Card className="domo_card mb-2">
                                        <div>
                                            <Image src={icon3} className="imageCard mb-2" />
                                        </div>
                                        <p className="card_domo_head3 mb-1"><b>50+ features included</b></p>
                                        <p className="card_domo_para3 mb-2">Create BI dashboards, build apps, transform and govern your data at scale, integrate AI in your business, and more.</p>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card className="domo_card">
                                        <div>
                                            <Image src={icon4} className="imageCard mb-2" />
                                        </div>
                                        <p className="card_domo_head4 mb-1"><b>Flexible pricing</b></p>
                                        <p className="card_domo_para4 mb-2">When it's time to move beyond free, get budget-friendly pricing based on how much you use the platform.</p>
                                    </Card>
                                </Col>
                            </Row> */}
                            <Row className=" mb-md-0 mb-5 mt-4 mx-lg-4">
                                <Col xs={12} md={4} data-aos="fade-right" className="mb-3">
                                    <div className={styles.groupParentss}>
                                        <div className={styles.vectorParent}>
                                            <img className={` ${styles.vectorIcon8_dash} mx-3 `} width="75%" alt="" src={client8} />
                                        </div>
                                        <div className={styles1.domo1cardtitle8}>Workflow Automation</div>
                                        {/* <div className={styles1.domo1cardtext}>Create BI dashboards, build apps, transform and govern your data at scale, integrate AI in your business, and more.</div> */}
                                    </div>
                                </Col>
                                <Col xs={12} md={4} data-aos="fade-right" className="mb-3">
                                    <div className={styles.groupParentss}>
                                        <div className={styles.vectorParent}>
                                            <img className={` ${styles.vectorIcon8_dash} mx-3 `} width="75%" alt="" src={client9} />
                                        </div>
                                        <div className={styles1.domo2cardtitle8}>Flexible Pricing</div>
                                        {/* <div className={styles1.domo3cardtext}>When it's time to move beyond free, get budget-friendly pricing based on how much you use the platform.</div> */}
                                    </div>
                                </Col>
                                <Col xs={12} md={4} data-aos="fade-left" className="mb-3">
                                    <div className={styles.groupParentss}>
                                        <div className={styles.vectorParent}>
                                            <img className={` ${styles.vectorIcon8_dash} mx-3 `} width="75%" alt="" src={client10} />
                                        </div>
                                        <div className={styles1.domo2cardtitle9}>Reuse the Instance</div>
                                        {/* <div className={styles1.domo3cardtext}>payback period</div> */}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default DemoPlatform
