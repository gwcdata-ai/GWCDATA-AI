import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import newSec from "../../../assets/images/newSec.png";
import certi1 from "../../../assets/images/certi1.png";
import certi2 from "../../../assets/images/certi2.png";
import certi3 from "../../../assets/images/certi3.png";
import f2 from "../../../assets/images/career/f2.webp";

// CSS
import styles from "../../ProductDemo/DomoOverview/DomoOverview.module.css";
import AOS from "aos";
import DomoCertiSlider from "./DomoCertiSlider";
AOS.init({
    duration: 1500,
});
export const DomoNewSection = () => {
    return (
        <Container fluid className="pt-2 pb-5">
            <section className="">
                <Container className="mt-5">
                    {/* <Row>
                        <p className={styles?.title_top_head}>Six Time Award Winner at Domo</p>
                    </Row> */}
                    <Row className="">

                        <Col
                            md={6}
                            className="px-md-5 mb-4"
                            data-aos="fade-left"
                        >
                            <div className="mt-lg-5">
                                <p className={` ${styles?.title} mt-lg-5`}>DOMO's Trusted Partner</p>

                                <p className={styles?.text}>
                                    As a partner of DOMO and boasting a team of certified experts, GWC invites you to inquire about any topic and we shall have it done using DOMO. Leveraging DOMO's powerful analytics platform, we help clients enhance their processes, identify areas for improvement, and implement strategic solutions to achieve operational excellence while simultaneously reducing costs.
                                </p>

                                {/* <div className="d-flex justify-content-centrt">
                                    <img src={certi1} alt="" className="w-25 mt-1" />
                                    <img src={certi2} alt="" className="w-25 mt-3" />
                                    <img src={certi3} alt="" className="w-25 mt-2" />
                                </div> */}
                                <Row>
                                    <Col md={4} xs={4}><img src={certi2} alt="" className="w-100 mt-3" /></Col>
                                    <Col md={4} xs={4}><img src={certi3} alt="" className="w-100 mt-3" /></Col>
                                    <Col md={4} xs={4}><img src={certi1} alt="" className="w-100 mt-3" /></Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6} className="mt-lg-2" data-aos="fade-right">
                            {/* <img src={f2} alt="" className="mt-lg-5 w-100" /> */}

                            <DomoCertiSlider />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    );
};
