import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BannerBgImg from "../../../assets/images/ProductGCP/Banner/banner.webp";
import salesforceBanner from "../../../assets/images/salesforce/salesforceBanner.svg";
// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "../../../components/atlanPatners/atlan.module.css";
import { Link } from "react-router-dom";
import styles1 from "../../../commoncomponents/banner/commonBanner.module.css";
import SalesforceGIF2 from  "../../../assets/images/salesforce/salesforceBg2.mp4";

import Sales_force_GIF_New from  "../../../assets/images/salesforce/Sales_force_GIF_New.gif";
import useMedia from "../../../hooks/useMedia";




const SalesforceBanner = () => {
    const isMobile = useMedia('(max-width:600px)');

    return (
        <Container
            fluid
            className={`${commonStyles.banner_container_img} pb-lg-5 mt-5`}
            // style={{
            //     backgroundImage: `url(${BannerBgImg}) `,
            // }}
        >
             <video
        width="100%"
        height="550px"
        autoPlay
        muted
        loop
        playsInline
        className="video-element"
        style={{
          position: "absolute",
          objectFit: "cover",
          zIndex: "-1",
          padding: "0px",
          
        }}
      >
        <source
          src={SalesforceGIF2}
          type="video/mp4"
        />
      </video>
      <div
        
        style={{
          position: "absolute",
          objectFit: "cover",
          zIndex: "-1",
          padding: "0px",
          backgroundColor:"rgba(0,0,0,0.5)"
          }}>
       
      </div>
            <section style={{paddingTop:'2.5rem',paddingBottom:'2.5rem'}}>
                <Container className="py-4 mt-md-0 mt-4">
                    <Row className="d-flex">
                        <Col lg={7} md={6} className="pt-lg-5">
                            <p className={`${styles.breadcrumbs} mb-4`}>
                                <span>
                                    <a
                                        href='/'
                                        className={`${styles.breadcrumbs} mb-3`}
                                    >
                                        Home
                                    </a>
                                    <span> / </span>
                                </span>
                                Salesforce
                            </p>

                            <p className={`${styles.banner_title} mb-4`} />
                            <h1 className={`${styles.banner_title} mb-4`} >
                                Salesforce
                            </h1>
                            <p className={`${styles.banner_sub_title44} mb-4`} >
                                Leverage our Salesforce Expertise to Elevate your Business
                            </p>

                            <Link to='/contact-us' >
                                <Button className={`${styles1.banner_button}`}>

                                    Get In Touch
                                </Button>
                            </Link>
                        </Col>
                        <Col lg={5} md={6} className={`${isMobile ? null : `${styles1.paddingTop_Mobile}`}`}>
                            <img src={Sales_force_GIF_New} alt="logo" className={`${isMobile ? `mt-lg-4 ${styles1.GIF_Width_Mobile}` :`${styles1.GIF_Width_Desktop}`}`}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    )
}

export default SalesforceBanner

