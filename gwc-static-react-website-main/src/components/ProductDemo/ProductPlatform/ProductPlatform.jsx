import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import TabsPanel from "../../../ReusableUI/Tabs/TabsPanel";
import Tab from "../../../ReusableUI/Tabs/Tab";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../../assets/images/about/ourCultureBg.webp";

import commonStyles from "../../../commoncss/common.module.css";
import styles from "./ProductPlatform.module.css";
import img1 from "../../../assets/images/ProductDemo/Platform/productPlatformImg11.png";
import img2 from "../../../assets/images/ProductDemo/Platform/productPlatformImg00.png";
import img3 from "../../../assets/images/ProductDemo/Platform/productPlatformImg33.png";
import img4 from "../../../assets/images/ProductDemo/Platform/productPlatformImg44.png";

import icon1 from "../../../assets/images/ProductDemo/Platform/icons/platformcard1.svg";
import icon2 from "../../../assets/images/ProductDemo/Platform/icons/platformcard2.svg";
import icon3 from "../../../assets/images/ProductDemo/Platform/icons/platformcard3.svg";
import icon4 from "../../../assets/images/ProductDemo/Platform/icons/platformcard4.svg";

import image1 from "../../../assets/images/ProductDemo/Platform/icons/platformcard1.svg";
import AOS from "aos";
AOS.init({
  duration: 1500,
});
const ProductPlatform = () => {
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

  return (
    <>
      <Container
        fluid
        id="app-creation"
        className={`${commonStyles.banner_container_img}  py-lg-5`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <section
          className={StyleSheet.productPlatformSection}
          id="data-foundation"
        >
          <Container className="" id="bi-analytics">
            <Row className="d-flex align-items-center justify-content-center">
              <Col lg={12} xs={12} className="py-md-0 py-5 ">
                {/* <p className={`${styles?.sub_title} mb-5`}>
                  <strong>Platform</strong>
                </p> */}
                <h2 className={`mt-2 ${styles?.title}`}>
                  Domo Data Experience Platform
                </h2>
                <TabsPanel>
                  <Tab
                    title="Overview"
                    // subtitle="Little About us"
                    icon="far fa-address-card"
                  >
                    <Container className="mt-5">
                      <Row className="d-flex align-items-center justify-content-center">
                        <Col
                          lg={{ offset: 1, span: 3 }}
                          md={6}
                          className="px-md-0"
                          data-aos="fade-right"
                        >
                          <img
                            src={img1}
                            alt=""
                            className="w-100 mx-lg-3 rounded-4"
                          />
                        </Col>
                        <Col
                          lg={7}
                          md={{ span: 5, offset: 1 }}
                          className="px-md-5 pt-md-0 pt-5"
                          data-aos="fade-left"
                        >
                          <div className={styles.platformDataSection}>
                            {/* <p className={styles?.sub_title}>
                              <strong>Domo</strong>
                            </p> */}
                            <p className={styles?.title}>Overview</p>
                            <p className={styles?.text}>
                              Leverage the Domo Data Experience Platform to
                              empower everyone through AI-driven experiences,
                              user-friendly analysis, and a secure foundation
                              that seamlessly links your data systems.
                            </p>
                            <p className={styles?.sub_title}>
                              <strong>Platform Outputs</strong>
                            </p>
                            <Row className="w-100">
                              <Col sm={12} md={{ span: 6, offset: 0 }}>
                                <div className={styles.PlatformOutputCards}>
                                  <Image
                                    src={icon1}
                                    className={styles.imageCard}
                                  />
                                  <div className={styles.imageCardText}>
                                    Business Apps
                                  </div>
                                </div>
                              </Col>
                              <Col sm={12} md={{ span: 6, offset: 0 }}>
                                <div className={styles.PlatformOutputCards}>
                                  <Image
                                    src={icon2}
                                    className={styles.imageCard}
                                  />
                                  <div className={styles.imageCardText}>
                                    Self-Serve Reporting
                                  </div>
                                </div>
                              </Col>
                              <Col sm={12} md={{ span: 6, offset: 0 }}>
                                <div className={styles.PlatformOutputCards}>
                                  <Image
                                    src={icon3}
                                    className={styles.imageCard}
                                  />
                                  <div className={styles.imageCardText}>
                                    Interactive Dashboards
                                  </div>
                                </div>
                              </Col>
                              <Col sm={12} md={{ span: 6, offset: 0 }}>
                                <div className={styles.PlatformOutputCards}>
                                  <Image
                                    src={icon4}
                                    className={styles.imageCard}
                                  />
                                  <div className={styles.imageCardText}>
                                    Embedded Analytics
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  <Tab title="App Creation" icon="fas fa-hourglass-start">
                    <Container className="mt-5">
                      <Row className="d-flex align-items-center justify-content-center">
                        <Col
                          lg={{ offset: 1, span: 3 }}
                          md={6}
                          className="px-md-0"
                          data-aos="fade-right"
                        >
                          <img
                            src={img2}
                            alt=""
                            className="w-100 mx-lg-3 rounded-4"
                          />
                        </Col>
                        <Col
                          lg={7}
                          md={{ span: 5, offset: 1 }}
                          className="px-md-5 pt-md-0 pt-5"
                          data-aos="fade-left"
                        >
                          <div className={styles.platformDataSection}>
                            {/* <p className={styles?.sub_title}>
                              <strong>App Creation</strong>
                            </p> */}
                            <p className={styles?.title}>App Creation</p>
                            <p className={styles?.text}>
                              Optimize decision-making through Domo's low-code
                              and pro-code apps. Catalyze innovation and enhance
                              efficiencies, enabling your organization to
                              effortlessly convert data into actionable
                              intelligence.
                            </p>
                            <p className={styles?.sub_title}>
                              <strong>CAPABILITIES</strong>
                            </p>
                            {/* <Row className="w-100"> */}
                            <div className={styles.capabibilitiesSection}>
                              <div className={styles.capabibilities}>
                                Low-code Tools for Simple Design
                              </div>
                              <div className={styles.capabibilities}>
                                Pro-code Tools for Fast Development
                              </div>
                              <div className={styles.capabibilities}>
                                App Distribution
                              </div>
                              <div className={styles.capabibilities}>
                                Task Automation
                              </div>
                            </div>
                            {/* </Row> */}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  <Tab title="BI & Analytics" icon="fas fa-hourglass-start">
                    <Container className="mt-5">
                      <Row className="d-flex align-items-center justify-content-center">
                        <Col
                          lg={{ offset: 1, span: 3 }}
                          md={6}
                          className="px-md-0"
                        >
                          <img
                            src={img3}
                            alt=""
                            className="w-100 mx-lg-3 rounded-4"
                          />
                        </Col>
                        <Col
                          lg={7}
                          md={{ span: 5, offset: 1 }}
                          className="px-md-5 pt-md-0 pt-5"
                        >
                          <div className={styles.platformDataSection}>
                            {/* <p className={styles?.sub_title}>
                              <strong>BI and Analytics</strong>
                            </p> */}
                            <p className={styles?.title}>BI & Analytics</p>
                            <p className={styles?.text}>
                              Facilitate quick and informed decision-making for
                              diverse users with our intuitive custom data views
                              and reporting functionalities.
                            </p>
                            <p className={styles?.sub_title}>
                              <strong>CAPABILITIES</strong>
                            </p>
                            {/* <Row className="w-100"> */}
                            <div className={styles.capabibilitiesSection}>
                              <div className={styles.capabibilities}>
                                Advanced Visualizations
                              </div>
                              <div className={styles.capabibilities}>
                                AI & Data Science
                              </div>
                              <div className={styles.capabibilities}>
                                Alerts
                              </div>
                              <div className={styles.capabibilities}>
                                Collaboration
                              </div>
                              <div className={styles.capabibilities}>
                                Data Storytelling
                              </div>

                              <div className={styles.capabibilities}>
                                Dashboard Interactivity & Customization
                              </div>
                              <div className={styles.capabibilities}>
                                Mobile
                              </div>
                            </div>
                            {/* </Row> */}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  <Tab title="Data Foundation" icon="fas fa-hourglass-start">
                    <Container className="mt-5">
                      <Row className="d-flex align-items-center justify-content-center">
                        <Col
                          lg={{ offset: 1, span: 3 }}
                          md={6}
                          className="px-md-0"
                        >
                          <img
                            src={img4}
                            alt=""
                            className="w-100 mx-lg-3 rounded-4"
                          />
                        </Col>
                        <Col
                          lg={7}
                          md={{ span: 5, offset: 1 }}
                          className="px-md-5 pt-md-0 pt-5"
                        >
                          <div className={styles.platformDataSection}>
                            {/* <p className={styles?.sub_title}>
                              <strong>Data Foundation</strong>
                            </p> */}
                            <p className={styles?.title}>Data Foundation</p>
                            <p className={styles?.text}>
                              Leverage our Domo solutions to establish an
                              advanced Data Foundation, serving as the framework
                              for the continuous progress of your business.
                            </p>
                            <p className={styles?.sub_title}>
                              <strong>CAPABILITIES</strong>
                            </p>
                            {/* <Row className="w-100"> */}
                            <div className={styles.capabibilitiesSection}>
                              <div className={styles.capabibilities}>
                                Data Integration from Any Source
                              </div>
                              <div className={styles.capabibilities}>
                                Security
                              </div>

                              <div className={styles.capabibilities}>
                                Data Writeback
                              </div>
                              <div className={styles.capabibilities}>
                                Data Governance
                              </div>
                              <div className={styles.capabibilities}>
                                Cloud Data Warehouse Integration
                              </div>
                              <div className={styles.capabibilities}>
                                Drag-&-Drop ETL Tools
                              </div>
                            </div>
                            {/* </Row> */}
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
    </>
  );
};

export default ProductPlatform;
