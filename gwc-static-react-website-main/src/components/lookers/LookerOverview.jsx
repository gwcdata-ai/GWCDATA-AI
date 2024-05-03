import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "../ProductGCP/GCPOverview/GCPOverview.module.css";
import image1 from "../../assets/images/looker/expert Support.webp";
import image2 from "../../assets/images/looker/tailored solutions.webp";
import image3 from "../../assets/images/looker/Proven success.webp";
import bannerImg from "../../assets/images/HomePartner/partnersBanner.webp";
import Slider from "react-slick";
import AOS from "aos";
import useMedia from "../../hooks/useMedia";
import { HiAcademicCap } from "react-icons/hi2";
AOS.init({
    duration: 1500,
});

export const LookerOverview = () => {
    const isMobile = useMedia("(max-width:600px)");


    const [hoveredText1, setHoveredText1] = useState({
        text: 'Expert Support',
        style: {},
    });
    const [hoveredText2, setHoveredText2] = useState({
        text: 'Tailored Solutions',
        style: {},
    });
    const [hoveredText3, setHoveredText3] = useState({
        text: 'Proven Success',
        style: {},
    });
    // const [hoveredText4, setHoveredText4] = useState({
    //     text: 'Cost Optimization',
    //     style: {},
    // });
    // const [hoveredText5, setHoveredText5] = useState({
    //     text: 'Security and Compliance',
    //     style: {},
    // });
    // const [hoveredText6, setHoveredText6] = useState({
    //     text: 'Effortless Collaboration',
    //     style: {},
    // });

    const textStyle = {
        fontFamily: 'Roboto-Light',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#FFF',
        padding: '0px 114px'
    };

    const hoveredTextStyle = {
        color: '#FFF',
        padding: '20px',
        fontWeight: '400'
    };

    const textStylemobile = {
        fontFamily: 'Roboto-Light',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#FFF',
        padding: '0px 114px'
    };




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        // arrows: false,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2000,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],
        // Add other settings as needed
    };
    return (
        <Container
            fluid
            // className="pt-2 pb-5"
            className={`${commonStyles.banner_container_img}  py-lg-5`}
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <section className="">
                <Container className="GCPOverview">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={12} className="mb-4 mt-md-0 mt-5">
                            {/* <p className={styles?.sub_title}>
                <strong>Overview</strong>
              </p> */}
                            <p className={styles?.title}>Why Choose GWC for Looker BI?</p>
                            <p className={styles?.sub_main_title}>We access your business and its pain points, build KPIs and wireframes which relieves those identified pain areas and then turn the imagined wireframes into real dashboards which then be presented to the leaders in the organisation.</p>
                        </Col>
                        {isMobile ? (
                            <Col xs={12} md={6} lg={3} className="w-100">
                                <Slider {...settings} className="">
                                    <Col
                                        md={4}
                                        className={`mb-md-0 mb-5`}
                                        data-aos="zoom-in"
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => setHoveredText1({ text: 'Over 30 Looker certified experts. Our dedicated support team is here to assist you at every step, ensuring a smooth and successful integration.', style: hoveredTextStyle })}
                                        onMouseOut={() => setHoveredText1({ text: 'Expert Support', style: {} })}
                                    >
                                        <div className={styles.imageContainer}>
                                            <div className={styles.gradientOverlay}></div>
                                            <img src={image1} className={`w-100 h-100 mb-4 ${styles.last_img}`} alt="" />
                                        </div>
                                        <p className={styles?.text_overlay} style={{ ...textStylemobile, ...hoveredText1.style }}>
                                            {hoveredText1.text}
                                        </p>
                                    </Col>

                                    <Col
                                        md={4}
                                        className={`mb-md-0 mb-5`}
                                        data-aos="zoom-in"
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => setHoveredText2({ text: ' We understand that every business is unique. Our Looker BI solutions are customizable to fit your specific requirements.', style: hoveredTextStyle })}
                                        onMouseOut={() => setHoveredText2({ text: 'Tailored Solutions', style: {} })}
                                    >
                                        <div className={styles.imageContainer}>
                                            <div className={styles.gradientOverlay}></div>
                                            <img src={image2} className={`w-100 h-100 mb-4 ${styles.last_img}`} alt="" />
                                        </div>
                                        <p className={styles?.text_overlay} style={{ ...textStylemobile, ...hoveredText2.style }}>
                                            {hoveredText2.text}
                                        </p>
                                    </Col>

                                    <Col
                                        md={4}
                                        className={`mb-md-0 mb-5`}
                                        data-aos="zoom-in"
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => setHoveredText3({ text: 'Join a growing list of satisfied clients who have transformed their data into actionable insights with GWC and Looker BI. ', style: hoveredTextStyle })}
                                        onMouseOut={() => setHoveredText3({ text: 'Proven Success', style: {} })}
                                    >
                                        <div className={styles.imageContainer}>
                                            <div className={styles.gradientOverlay}></div>
                                            <img src={image3} className={`w-100 h-100 mb-4 ${styles.last_img}`} alt="" />
                                        </div>
                                        <p className={styles?.text_overlay} style={{ ...textStylemobile, ...hoveredText3.style }}>
                                            {hoveredText3.text}
                                        </p>
                                    </Col>

                                    {/* <Col
                                        md={4}
                                        className={`mb-md-0 mb-5`}
                                        data-aos="zoom-in"
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => setHoveredText4({ text: '  We help you maximise cost savings by identifying and eliminating inefficiencies in your GCP usage, ensuring you only pay for what you need. ', style: hoveredTextStyle })}
                                        onMouseOut={() => setHoveredText4({ text: 'Cost Optimization', style: {} })}
                                    >
                                        <img src={image4} className="w-100 mb-4" alt="" />
                                        <p className={styles?.text_overlay} style={{ ...textStylemobile, ...hoveredText4.style }}>
                                            {hoveredText4.text}
                                        </p>
                                    </Col>

                                    <Col
                                        md={4}
                                        className={`mb-md-0 mb-5`}
                                        data-aos="zoom-in"
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => setHoveredText5({ text: 'Trust in our expertise in using GCP’s robust security measures and compliance practices, keeping your data safe and meeting industry standards.', style: hoveredTextStyle })}
                                        onMouseOut={() => setHoveredText5({ text: 'Security and Compliance', style: {} })}
                                    >
                                        <img src={image5} className="w-100 mb-4" alt="" />
                                        <p className={styles?.text_overlay} style={{ ...textStylemobile, ...hoveredText5.style }}>
                                            {hoveredText5.text}
                                        </p>
                                    </Col>

                                    <Col
                                        md={4}
                                        className={`mb-md-0 mb-5`}
                                        data-aos="zoom-in"
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => setHoveredText6({
                                            text: '  Our GCP-managed services facilitate seamless collaboration, allowing users from different locations to access and edit projects concurrently.', style: hoveredTextStyle
                                        })}
                                        onMouseOut={() => setHoveredText6({ text: 'Effortless Collaboration', style: {} })}
                                    >
                                        <img src={image6} className="w-100 mb-4" alt="" />
                                        <p className={styles?.text_overlay} style={{ ...textStylemobile, ...hoveredText6.style }}>
                                            {hoveredText6.text}
                                        </p>
                                    </Col> */}


                                </Slider>
                            </Col>
                        ) : (
                            <>
                                <Col
                                    md={4}
                                    className={`mb-md-0 mb-5`}
                                    data-aos="zoom-in"
                                    style={{ position: 'relative' }}
                                    onMouseOver={() => setHoveredText1({
                                        text: 'Over 30 Looker certified experts. Our dedicated support team is here to assist you at every step, ensuring a smooth and successful integration. ', style: hoveredTextStyle
                                    })}
                                    onMouseOut={() => setHoveredText1({ text: 'Expert Support', style: {} })}
                                >
                                    <div className={styles.imageContainer}>
                                        <div className={styles.gradientOverlay}></div>
                                        <img src={image1} className={`w-100 h-100 mb-4 ${styles.last_img}`} alt="" />
                                    </div>
                                    <p className={styles?.text_overlay} style={{ ...textStyle, ...hoveredText1.style }}>
                                        {hoveredText1.text}
                                    </p>
                                </Col>

                                <Col
                                    md={4}
                                    className={`mb-md-0 mb-5`}
                                    data-aos="zoom-in"
                                    style={{ position: 'relative' }}
                                    onMouseOver={() => setHoveredText2({ text: ' We understand that every business is unique. Our Looker BI solutions are customizable to fit your specific requirements. ', style: hoveredTextStyle })}
                                    onMouseOut={() => setHoveredText2({ text: 'Tailored Solutions', style: {} })}
                                >
                                    <div className={styles.imageContainer}>
                                        <div className={styles.gradientOverlay}></div>
                                        <img src={image2} className={`w-100 h-100 mb-4 ${styles.last_img}`} alt="" />
                                    </div>
                                    <p className={styles?.text_overlay} style={{ ...textStyle, ...hoveredText2.style }}>
                                        {hoveredText2.text}
                                    </p>
                                </Col>

                                <Col
                                    md={4}
                                    className={`mb-md-0 mb-5`}
                                    data-aos="zoom-in"
                                    style={{ position: 'relative' }}
                                    onMouseOver={() => setHoveredText3({ text: 'Join a growing list of satisfied clients who have transformed their data into actionable insights with GWC and Looker BI. ', style: hoveredTextStyle })}
                                    onMouseOut={() => setHoveredText3({ text: 'Proven Success', style: {} })}
                                >
                                    {/* <img src={image3} className={` ${styles.last_img} w-100 mb-4  `} alt="" /> */}
                                    <div className={styles.imageContainer}>
                                        <div className={styles.gradientOverlay}></div>
                                        <img src={image3} className={`w-100 h-100 mb-4 ${styles.last_img}`} alt="" />
                                    </div>
                                    <p className={styles?.text_overlay} style={{ ...textStyle, ...hoveredText3.style }}>
                                        {hoveredText3.text}
                                    </p>
                                </Col>

                                {/* <Col
                                    md={4}
                                    className={`mb-md-0 mb-5`}
                                    data-aos="zoom-in"
                                    style={{ position: 'relative' }}
                                    onMouseOver={() => setHoveredText4({ text: ' We help you maximise cost savings by identifying and eliminating inefficiencies in your GCP usage, ensuring you only pay for what you need. ', style: hoveredTextStyle })}
                                    onMouseOut={() => setHoveredText4({ text: 'Cost Optimization', style: {} })}
                                >
                                    <img src={image4} className="w-100 mb-4" alt="" />
                                    <p className={styles?.text_overlay} style={{ ...textStyle, ...hoveredText4.style }}>
                                        {hoveredText4.text}
                                    </p>
                                </Col>

                                <Col
                                    md={4}
                                    className={`mb-md-0 mb-5`}
                                    data-aos="zoom-in"
                                    style={{ position: 'relative' }}
                                    onMouseOver={() => setHoveredText5({ text: 'Trust in our expertise in using GCP’s robust security measures and compliance practices, keeping your data safe and meeting industry standards.', style: hoveredTextStyle })}
                                    onMouseOut={() => setHoveredText5({ text: 'Security and Compliance', style: {} })}
                                >
                                    <img src={image5} className="w-100 mb-4" alt="" />
                                    <p className={styles?.text_overlay} style={{ ...textStyle, ...hoveredText5.style }}>
                                        {hoveredText5.text}
                                    </p>
                                </Col>

                                <Col
                                    md={4}
                                    className={`mb-md-0 mb-5`}
                                    data-aos="zoom-in"
                                    style={{ position: 'relative' }}
                                    onMouseOver={() => setHoveredText6({
                                        text: '  Our GCP-managed services facilitate seamless collaboration, allowing users from different locations to access and edit projects concurrently.', style: hoveredTextStyle
                                    })}
                                    onMouseOut={() => setHoveredText6({ text: 'Effortless Collaboration', style: {} })}
                                >
                                    <img src={image6} className="w-100 mb-4" alt="" />
                                    <p className={styles?.text_overlay} style={{ ...textStyle, ...hoveredText6.style }}>
                                        {hoveredText6.text}
                                    </p>
                                </Col> */}


                            </>
                        )}
                    </Row>
                </Container>
            </section>
        </Container>
    );
};
 
