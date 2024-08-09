import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import TabsPanel from "../../ReusableUI/Tabs/TabsPanel";
import Tab from "../../ReusableUI/Tabs/Tab";
import { Col, Container, Image, Row } from "react-bootstrap";
import commonStyles from "../../commoncss/common.module.css";
import styles from "./boomi.module.css";

import t1 from "../../assets/images/boomi/t1.png";
import t2 from "../../assets/images/boomi/t2.png";
import t3 from "../../assets/images/boomi/t3.png";
import t4 from "../../assets/images/boomi/t4.png";

import AOS from "aos";
AOS.init({
  duration: 800,
});

const BoomiTabs = () => {
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
      style={{ backgroundColor: "white" }}
    >
      <section
        className={StyleSheet.productPlatformSection}
        id="data-foundation"
      >
        <Container className="" id="bi-analytics">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={12} xs={12} className="py-md-0 py-5 ">
              <h2 className={`mt-2 ${styles?.title7}`}>Platform Services</h2>
              <p className={` ${styles?.title8}`}>
                At GWC, we pride ourselves on our extensive experience and
                expertise in implementing Boomi solutions for businesses across
                various industries. The platform services comprise of:
              </p>
              <TabsPanel>
                <Tab
                  title={<h3 className={styles.tab_text}>Integration</h3>}
                  icon="far fa-address-card"
                >
                  <Container className="mt-0">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-5`}
                    >
                      <Col md={5} className="px-md-0" data-aos="fade-right">
                        <img
                          src={t1}
                          alt="Integration"
                          className="w-100 h-100"
                        />
                      </Col>
                      <Col md={7} className=" pt-md-0" data-aos="fade-left">
                        <div className={styles.platformDataSection}>
                          <p className={` ${styles?.title6} mb-4`}>
                            Integration
                          </p>
                          <p className={styles?.text}>
                            Unite your diverse ecosystem of applications and
                            systems with Boomi's intuitive integration
                            capabilities. Design and deploy integrations
                            effortlessly with Boomi's drag-and-drop interface.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>

                <Tab
                  title={<h3 className={styles.tab_text}>API Management</h3>}
                  icon="fas fa-hourglass-start"
                >
                  <Container className="mt-0">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-5`}
                    >
                      <Col md={5} className="px-md-0" data-aos="fade-right">
                        <img
                          src={t3}
                          alt="API Management"
                          className="w-100 h-100"
                        />
                      </Col>
                      <Col md={7} className=" pt-md-0" data-aos="fade-left">
                        <div className={styles.platformDataSection}>
                          <p className={` ${styles?.title6} mb-4`}>
                            API Management
                          </p>
                          <p className={styles?.text}>
                            Efficiently manage your APIs with Boomi, ensuring
                            seamless communication between your applications and
                            external systems. Benefit from pre-built connectors
                            and real-time monitoring for optimal performance.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab
                  title={<h3 className={styles.tab_text}>Master Data Hub</h3>}
                  icon="fas fa-hourglass-start"
                >
                  <Container className="mt-0">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-5`}
                    >
                      <Col md={5} className="px-md-0" data-aos="fade-right">
                        <img
                          src={t2}
                          alt="Master Data Hub"
                          className="w-100 h-100"
                        />
                      </Col>
                      <Col md={7} className=" pt-md-0" data-aos="fade-left">
                        <div className={styles.platformDataSection}>
                          <p className={` ${styles?.title6} mb-4`}>
                            Master Data Hub
                          </p>
                          <p className={styles?.text}>
                            Centralize your master data management with Boomi's
                            Master Data Hub, ensuring consistency and accuracy
                            across your organization. Prioritize data security
                            with robust encryption and compliance features.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>

                <Tab
                  title={
                    <h3 className={styles.tab_text}>B2B/EDI Management</h3>
                  }
                  icon="fas fa-hourglass-start"
                >
                  <Container className="mt-0">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-5`}
                    >
                      <Col md={5} className="px-md-0" data-aos="fade-right">
                        <img
                          src={t4}
                          alt="B2B/EDI Management"
                          className="w-100 h-100"
                        />
                      </Col>
                      <Col md={7} className=" pt-md-0" data-aos="fade-left">
                        <div className={styles.platformDataSection}>
                          <p className={` ${styles?.title6} mb-4`}>
                            B2B/EDI Management
                          </p>
                          <p className={styles?.text}>
                            Simplify complex B2B transactions and EDI processes
                            with Boomi, facilitating smooth communication with
                            your trading partners. Ensure compliance with
                            industry standards for data exchange.
                          </p>
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
  );
};

export default BoomiTabs;
