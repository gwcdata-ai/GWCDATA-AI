import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

// CSS
import commonStyles from "../../commoncss/common.module.css";
import styles from "../ProductGCP/GCPOverview/GCPOverview.module.css";
import image1 from "../../assets/images/snowFlake/card (1).png";
import image2 from "../../assets/images/snowFlake/card (2).png";
import image3 from "../../assets/images/snowFlake/card (3).png";
import image4 from "../../assets/images/snowFlake/card (4).png";
import image5 from "../../assets/images/snowFlake/card (5).png";
import image6 from "../../assets/images/snowFlake/card (6).png";

import bannerImg from "../../assets/images/HomePartner/partnersBanner.jpg";
import Slider from "react-slick";

import AOS from "aos";
import useMedia from "../../hooks/useMedia";
AOS.init({
    duration: 1500,
});

const SnowOverflow = () => {


    const isMobile = useMedia("(max-width:600px)");


    const [hoveredText1, setHoveredText1] = useState({
        text: 'Performance Optimization',
        style: {},
    });
    const [hoveredText2, setHoveredText2] = useState({
        text: 'Cost Optimization',
        style: {},
    });
    const [hoveredText3, setHoveredText3] = useState({
        text: 'Data Modeling Excellence',
        style: {},
    });
    const [hoveredText4, setHoveredText4] = useState({
        text: 'Security Implementation',
        style: {},
    });
    const [hoveredText5, setHoveredText5] = useState({
        text: 'ETL Process Enhancements',
        style: {},
    });
    const [hoveredText6, setHoveredText6] = useState({
        text: 'BI Integration Success',
        style: {},
    });

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
                            <p className={styles?.title}>What Sets Us Apart?</p>
                            <p className={styles?.sub_main_title}>
                                As a Snowflake partner, our distinctiveness lies in certified expertise, a proven track record, & a client-centric approach. We offer tailored solutions, stay innovative, & prioritize collaboration. Our comprehensive services cover the entire Snowflake spectrum, ensuring clients derive maximum value. With agility, responsiveness, & global reach, we position ourselves as thought leaders, providing clients with a competitive edge in data management & analytics.
                            </p>
                        </Col>
                        {isMobile ? (
                            <Col xs={12} md={6} lg={3} className="w-100">
                                <Slider {...settings} className="">
                                    <Col
                                        md={4}
                                        className={`mb-md-0 mb-5`}
                                        data-aos="zoom-in"
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => setHoveredText1({ text: 'Our Snowflake services optimize complex queries, significantly improving query execution times & overall system performance.', style: hoveredTextStyle })}
                                        onMouseOut={() => setHoveredText1({ text: 'Performance Optimization', style: {} })}
                                    >
                                        <div className="overlay_container">
                                            <img src={image1} className={` ${commonStyles.image_space} w-100 mb-4 `} alt="" />
                                            <div className={commonStyles?.overlay}></div>
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
                                        onMouseOver={() => setHoveredText2({ text: 'We implement cost-effective solutions by leveraging Snowflake\'s separation of storage & compute resources, resulting in optimized resource utilization & cost savings.', style: hoveredTextStyle })}
                                        onMouseOut={() => setHoveredText2({ text: 'Cost Optimization', style: {} })}
                                    >
                                        <div className="overlay_container">
                                            <img src={image2} className={` ${commonStyles.image_space} w-100 mb-4 `} alt="" />
                                            <div className={commonStyles?.overlay}></div>
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
                                        onMouseOver={() => setHoveredText3({ text: ' We design & implement highly efficient & scalable data models in Snowflake, enhancing data organization & accessibility for analytics & reporting.', style: hoveredTextStyle })}
                                        onMouseOut={() => setHoveredText3({ text: 'Data Modeling Excellence', style: {} })}
                                    >
                                        <div className="overlay_container">
                                            <img src={image3} className={` ${commonStyles.image_space} w-100 mb-4 `} alt="" />
                                            <div className={commonStyles?.overlay}></div>
                                        </div>
                                        <p className={styles?.text_overlay} style={{ ...textStylemobile, ...hoveredText3.style }}>
                                            {hoveredText3.text}
                                        </p>
                                    </Col>

                                    <Col
                                        md={4}
                                        className={`mb-md-0 mb-5`}
                                        data-aos="zoom-in"
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => setHoveredText4({ text: 'We implement robust security measures, including role-based access control (RBAC), encryption, & data masking, ensuring data integrity & compliance with security st&ards. ', style: hoveredTextStyle })}
                                        onMouseOut={() => setHoveredText4({ text: 'Security Implementation', style: {} })}
                                    >
                                        <div className="overlay_container">
                                            <img src={image4} className={` ${commonStyles.image_space} w-100 mb-4 `} alt="" />
                                            <div className={commonStyles?.overlay}></div>
                                        </div>
                                        <p className={styles?.text_overlay} style={{ ...textStylemobile, ...hoveredText4.style }}>
                                            {hoveredText4.text}
                                        </p>
                                    </Col>

                                    <Col
                                        md={4}
                                        className={`mb-md-0 mb-5`}
                                        data-aos="zoom-in"
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => setHoveredText5({ text: 'Our services streamline ETL processes, reducing data processing times & improving the efficiency of data movement within the Snowflake platform.  ', style: hoveredTextStyle })}
                                        onMouseOut={() => setHoveredText5({ text: 'ETL Process Enhancements', style: {} })}
                                    >
                                        <div className="overlay_container">
                                            <img src={image5} className={` ${commonStyles.image_space} w-100 mb-4 `} alt="" />

                                            <div className={commonStyles?.overlay}></div>
                                        </div>
                                        <p className={styles?.text_overlay} style={{ ...textStylemobile, ...hoveredText5.style }}>
                                            {hoveredText5.text}
                                        </p>
                                    </Col>

                                    <Col
                                        md={4}
                                        className={`mb-md-0 mb-5 `}
                                        data-aos="zoom-in"
                                        style={{ position: 'relative' }}
                                        onMouseOver={() => setHoveredText6({
                                            text: 'We integrate Snowflake with various Business Intelligence (BI) tools, enabling seamless data visualization & reporting capabilities for end-users. ', style: hoveredTextStyle
                                        })}
                                        onMouseOut={() => setHoveredText6({ text: 'BI Integration Success', style: {} })}
                                    >
                                        <div className="overlay_container">
                                            <img src={image6} className={` ${commonStyles.image_space} w-100 mb-4 `} alt="" />

                                            <div className={commonStyles?.overlay}></div>
                                        </div>
                                        <p className={styles?.text_overlay} style={{ ...textStylemobile, ...hoveredText6.style }}>
                                            {hoveredText6.text}
                                        </p>
                                    </Col>

                                </Slider>
                            </Col>
                        ) : (
                            <>
                                <Col
                                    md={4}
                                    className={`mb-md-0 mb-5`}
                                    data-aos="zoom-in"
                                    style={{ position: 'relative' }}
                                    onMouseOver={() => setHoveredText1({ text: 'Our Snowflake services optimize complex queries, significantly improving query execution times and overall system performance.', style: hoveredTextStyle })}
                                    onMouseOut={() => setHoveredText1({ text: 'Performance Optimization', style: {} })}
                                >
                                    <div className="overlay_container">
                                        <img src={image1} className="w-100 mb-4 image_container" alt="" />
                                        <div className="overlay"></div>
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
                                    onMouseOver={() => setHoveredText2({
                                        text: 'We implement cost-effective solutions by leveraging Snowflake\'s separation of storage & compute resources, resulting in optimized resource utilization & cost savings.', style: hoveredTextStyle
                                    })}
                                    onMouseOut={() => setHoveredText2({ text: 'Cost Optimization', style: {} })}
                                >
                                    <div className="overlay_container">
                                        <img src={image2} className="w-100 mb-4" alt="" />
                                        <div className="overlay"></div>
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
                                    onMouseOver={() => setHoveredText3({ text: ' We design & implement highly efficient & scalable data models in Snowflake, enhancing data organization & accessibility for analytics & reporting.', style: hoveredTextStyle })}
                                    onMouseOut={() => setHoveredText3({ text: 'Data Modeling Excellence', style: {} })}
                                >
                                    <div className="overlay_container">
                                        <img src={image3} className="w-100 mb-4" alt="" />
                                        <div className="overlay"></div>
                                    </div>

                                    <p className={styles?.text_overlay} style={{ ...textStyle, ...hoveredText3.style }}>
                                        {hoveredText3.text}
                                    </p>
                                </Col>

                                <Col
                                    md={4}
                                    className={`mb-md-0 mb-5`}
                                    data-aos="zoom-in"
                                    style={{ position: 'relative' }}
                                    onMouseOver={() => setHoveredText4({ text: 'We implement robust security measures, including role-based access control (RBAC), encryption, & data masking, ensuring data integrity & compliance with security st&ards.  ', style: hoveredTextStyle })}
                                    onMouseOut={() => setHoveredText4({ text: 'Security Implementation', style: {} })}
                                >
                                    <div className="overlay_container">
                                        <img src={image4} className="w-100 mb-4" alt="" />
                                        <div className="overlay"></div>
                                    </div>

                                    <p className={styles?.text_overlay} style={{ ...textStyle, ...hoveredText4.style }}>
                                        {hoveredText4.text}
                                    </p>
                                </Col>

                                <Col
                                    md={4}
                                    className={`mb-md-0 mb-5`}
                                    data-aos="zoom-in"
                                    style={{ position: 'relative' }}
                                    onMouseOver={() => setHoveredText5({
                                        text: 'Our services streamline ETL processes, reducing data processing times and improving the efficiency of data movement within the Snowflake platform. ', style: hoveredTextStyle
                                    })}
                                    onMouseOut={() => setHoveredText5({ text: 'ETL Process Enhancements', style: {} })}
                                >
                                    <div className="overlay_container">
                                        <img src={image5} className="w-100 mb-4" alt="" />

                                        <div className="overlay"></div>
                                    </div>
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
                                        text: 'We integrate Snowflake with various Business Intelligence (BI) tools, enabling seamless data visualization & reporting capabilities for end-users.', style: hoveredTextStyle
                                    })}
                                    onMouseOut={() => setHoveredText6({ text: 'BI Integration Success', style: {} })}
                                >

                                    <div className="overlay_container">
                                        <img src={image6} className="w-100 mb-4" alt="" />

                                        <div className="overlay"></div>
                                    </div>

                                    <p className={styles?.text_overlay} style={{ ...textStyle, ...hoveredText6.style }}>
                                        {hoveredText6.text}
                                    </p>
                                </Col>

                            </>
                        )}
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default SnowOverflow
