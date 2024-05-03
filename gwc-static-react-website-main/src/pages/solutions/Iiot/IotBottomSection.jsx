import React from "react";
import { Link } from "react-router-dom";
import commonstyles from "../../../commoncss/Home.module.css";
import styles from "../../../components/home/HomeBlog/homebottom.module.css";
import AOS from "aos";
import { Container, Row, Col, Button } from "react-bootstrap";
AOS.init({
    duration: 1500,
});

const IotBottomSection = () => {
    return (
        <div className={commonstyles.frameParent15}>
            <div className={commonstyles.frameParent10}>
                <Container className={styles.banner_img} data-aos="fade-left">
                    <Row className="d-flex">
                        <Col lg={7} className="py-lg-3 px-0">
                            <h1 className={`${styles.banner_title} mb-4`}>
                                GWC seamlessly integrates the power of IIoT with Data Analytics and AI solutions to revolutionize the way your industry operates.
                            </h1>
                            {/* <p className={`${styles.banner_para} mb-4`}>
                                Ready to take your BI system to the next level? Contact us today to learn more about our BI migration and modernization services and how we can help you unlock the full potential of your data.
                            </p> */}
                            <Link to="/contact-us">
                                <Button className={`${styles.banner_button}`}>
                                    {" "}
                                    Talk To Our Experts{" "}
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default IotBottomSection;



