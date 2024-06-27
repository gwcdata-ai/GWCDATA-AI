import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BannerBgImg from "../../assets/images/ProductGCP/Banner/banner.webp";
// import BannerBgImg from "../../assets/images/ProductGCP/Banner/Section-2.png";
import fivelogo from "../../assets/images/fivebanner.png";
import image1 from "../../assets/images/fivetran/platform.png";

// CSS
import commonStyles from "../../commoncss/common.module.css";

import styles from '../../components/InnovationLab/styleInnovation.module.css';


const InnovationLabs = () => {
    return (
        <>
        <Container
            fluid
            className={`${commonStyles.banner_container_img} py-lg-0  mt-5`}
            style={{
                backgroundImage: `url(${BannerBgImg})`,
            }}>
            <section className="py-4">
                <Container className="py-4 mt-md-0 mt-4">
                    <Row className="d-flex">
                        <Col lg={7} md={6} className="py-lg-5">
                            <p className={`${styles.breadcrumbs} mb-4 mt-5 mt-lg-3`}>
                                <span>
                                    <a
                                        href='/'
                                        className={`${styles.breadcrumbs} mb-3`}
                                    >
                                        Home
                                    </a>
                                    <span> / </span>
                                </span>
                                Innovation Labs
                            </p>

                            {/* <h1 className={`${styles.banner_title} mb-4`} /> */}
                            <p className={`${styles.banner_title} mb-6`} style={{margin:'5rem 0rem'}}>
                            Innovation Lab
                            </p>
                            
                        </Col>
                        <Col lg={5} md={6}>
                            <img src={fivelogo} alt="logo" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
        <Container fluid className= {`${styles.parent_box} pt-2 pb-4`}>
            <section className="">
                <Container className="mt-md-4 mt-0">
                    <Row className= {`d-flex align-items-center my-5`}>
                        <Col
                            md={8}
                            className="pt-md-0 pt-4 w-100"
                            data-aos="fade-right"
                            
                        >
                            <div className="px-4">
                                <p className={`${styles?.title1}`}>
                                Discover how we’re innovating across industries

                                </p>

                               
                            </div>
                        </Col>
                        <Col className={`${styles.section2_parent} pt-md-0  w-100`}
                            md={8}
                            data-aos="fade-right" >
                            <div  style={{backgroundColor:'white',padding:'50px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <div style={{width:'30%'}}>
                                <div  className={`${styles.box}`} style={{}} >
                                    <p className={`${styles.sub_titles}`} style={{textAlign:'center',paddingTop:'10px'}}>Future of Sustainability</p>
                                    <p className={`${styles.content_down}`}>Innovating to accelerate the shift towards sustainable industries through comprehensive, science-driven solutions. Our approach aids in monitoring, mitigating, and adapting to climate change while addressing enduring human and societal needs.</p>
                                </div>
                                </div>
                                
                                <div style={{width:'30%'}}>

                                <div  className={`${styles.box}`} style={{}} >
                                    <p className={`${styles.sub_titles}`} style={{textAlign:'center',paddingTop:'10px'}}>Future of Manufacturing</p>
                                    <p className={`${styles.content_down}`}>Strategically harnessing data science and machine learning advancements to tackle industry-specific challenges across precision medicine, autonomous systems, aerospace simulations, and industrial automation, driving scalable solutions.</p>
                                </div>
                                </div>

                                <div style={{width:'30%'}}>

                                <div  className={`${styles.box}`} style={{}} >
                                    <p className={`${styles.sub_titles}`} style={{textAlign:'center',paddingTop:'10px'}}>Future of Applied AI</p>
                                    <p className={`${styles.content_down}`}>Leveraging data science and machine learning capabilities to effectively address industry-specific challenges in precision medicine, autonomous systems, aerospace simulations, and industrial automation, advancing practical applications of artificial intelligence.</p>
                                </div>
                                </div>


                               
                            </div>
                        </Col>
                        {/* <Col md={5} className="px-md-0" data-aos="fade-left">
                            <img
                                src={image1}
                                alt=""
                                className=" mx-lg-4 mx-md-4  mt-5 w-100 h-100"
                            />
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </Container>
        </>
    )
}

export default InnovationLabs