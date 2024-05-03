import React from "react";
import { Link } from "react-router-dom";
import commonstyles from "../../../commoncss/Home.module.css";
import styles from "../../../components/home/HomeBlog/homebottom.module.css";
import AOS from "aos";
import { Container, Row, Col, Button } from "react-bootstrap";
AOS.init({
    duration: 1500,
});

const HomeBottomGov = () => {
    return (
        <div className={commonstyles.frameParent9}>
            <div className={commonstyles.frameParent10}>
                <Container className={styles.banner_img} data-aos="fade-left">
                    <Row className="d-flex">
                        <Col lg={7} className="py-lg-3 px-0">
                            <h1 className={`${styles.banner_title} mb-4`}>
                                Embark on a Transformative Journey with GWC’s Atlan & Alation Services
                            </h1>
                            <p className={`${styles.banner_para} mb-4`}>
                                Empower your enterprise with GWC’S services Alation & Atlan. Alation enhances collaboration and data discovery by providing advanced data cataloguing solutions, fostering a data-driven culture. Atlan transforms data management, ensuring efficient governance and utilization. Get ready to unlock the transformative potential of data and Artificial Intelligence!
                            </p>
                            {/* <Link to="/contact-us">
                <Button className={`${styles.banner_button}`}>
                  {" "}
                  Get Started{" "}
                </Button>
              </Link> */}
                            <div className={styles.two_btn_bottom}>
                                <Link to="/atlan">
                                    <Button className={`${styles.banner_button2} mt-3`}>
                                        {" "}
                                        Know more about Atlan{" "}
                                    </Button>
                                </Link><Link to="/alation">
                                    <Button className={`${styles.banner_button2} mx-lg-3 mt-3`}>
                                        {" "}
                                        Know more about Alation{" "}
                                    </Button>
                                </Link>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HomeBottomGov;
