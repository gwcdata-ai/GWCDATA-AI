import React,{useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import TabsPanel from "../../../ReusableUI/Tabs/TabsPanel";
import Tab from "../../../ReusableUI/Tabs/Tab";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../../assets/images/about/ourCultureBg.webp";

import commonStyles from "../../../commoncss/common.module.css";
import styles from "./GCPOffering.module.css";
import img1 from "../../../assets/images/ProductDemo/Platform/productPlatformImg1.png";
import img2 from "../../../assets/images/ProductDemo/Platform/productPlatformImg.png";
import img3 from "../../../assets/images/ProductDemo/Platform/productPlatformImg3.png";
import img4 from "../../../assets/images/ProductDemo/Platform/productPlatformImg4.png";

import icon1 from "../../../assets/icons/Offeringsvg1.svg";
import icon2 from "../../../assets/icons/Offeringsvg2.svg";
import icon3 from "../../../assets/icons/Offeringsvg3.svg";
import icon4 from "../../../assets/icons/Offeringsvg4.svg";
import icon5 from "../../../assets/icons/Offeringsvg5.svg";
import icon6 from "../../../assets/icons/Offeringsvg6.svg";

import image1 from "../../../assets/images/ProductDemo/Platform/icons/platformcard1.svg";
import AOS from "aos";
AOS.init({
  duration: 1500,
});
const GCPOffering = () => {
  const visionmissionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#gcp" && visionmissionRef.current) {
      visionmissionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);
  return (
    <>
      <Container
        fluid
        className={`${commonStyles.banner_container_img}  py-5`}
        style={{ backgroundImage: `url(${banner})` }}
        id='gcp'
      >
        <Container className="">
          <Row className="d-flex align-items-center justify-content-center px-0">
            <Col lg={5} md={6} className="px-0" data-aos="fade-right">
              <div className={styles.platformDataSection}>
                {/* <p className={styles?.sub_title}>
                  <strong>Offerings</strong>
                </p> */}
                <p className={styles?.title}>Google Cloud Offerings</p>
                <p className={styles?.text}>
                  Our certified experts analyze, assess, and optimize your GCP environment, saving you money and maximizing efficiency.

                </p>
                <p className={styles?.text}>
                  We ensure your cloud operations run smoothly and reliably so you can focus on your business goals.

                </p>
              </div>
            </Col>
            <Col lg={7} md={6} className="px-md-1" data-aos="fade-left">
              <div className={styles.platformDataSection}>
                <Row className="d-flex align-items-center justify-content-center">
                  <Col
                    lg={4}
                    md={4}
                    sm={6}
                    xs={6}
                    className="mt-4 "  
                  >
                    <div className={styles.offeringCards}>
                      <Image
                        src={icon1}
                        className={`mt-2 ${styles.imageCard}`}
                      />
                      <div className={styles.imageCardText}>
                        Infrastructure Modernization
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg={4}
                    md={4}
                    sm={6}
                    xs={6}
                    className="mt-4 "
                  >
                    <div className={styles.offeringCards}>
                      <Image
                        src={icon2}
                        className={`mt-2 ${styles.imageCard}`}
                      />
                      <div className={styles.imageCardText}>
                        Application Modernization
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg={4}
                    md={4}
                    sm={6}
                    xs={6}  className="mt-4">
                    <div className={styles.offeringCards}>
                      <Image
                        src={icon3}
                        className={`mt-2 ${styles.imageCard}`}
                      />
                      <div className={styles.imageCardText}>
                        Data Engineering
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg={4}
                    md={4}
                    sm={6}
                    xs={6}
                    className="mt-4 "
                  >
                    <div className={styles.offeringCards}>
                      <Image
                        src={icon4}
                        className={`mt-2 ${styles.imageCard}`}
                      />
                      <div className={styles.imageCardText}>
                        BI Modernization
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg={4}
                    md={4}
                    sm={6}
                    xs={6}
                    className="mt-4 "
                  >
                    <div className={styles.offeringCards}>
                      <Image
                        src={icon5}
                        className={`mt-2 ${styles.imageCard}`}
                      />
                      <div className={styles.imageCardText}>
                        Machine Learning Operations
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg={4}
                    md={4}
                    sm={6}
                    xs={6}  className="mt-4">
                    <div className={styles.offeringCards}>
                      <Image
                        src={icon6}
                        className={`mt-2 ${styles.imageCard}`}
                      />
                      <div className={styles.imageCardText}> FinOps</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default GCPOffering;
