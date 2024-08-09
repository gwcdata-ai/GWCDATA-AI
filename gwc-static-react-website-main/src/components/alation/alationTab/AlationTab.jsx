import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import TabsPanel from "../../../ReusableUI/Tabs/TabsPanel";
import Tab from "../../../ReusableUI/Tabs/Tab";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../../assets/images/about/ourCultureBg.webp";
import commonStyles from "../../../commoncss/common.module.css";
import styles from "../../atlanPatners/atlan.module.css";
import i1 from "../../../assets/images/atlan/i1.svg";
import i2 from "../../../assets/images/atlan/i2.svg";
import i3 from "../../../assets/images/atlan/i3.svg";
import i4 from "../../../assets/images/atlan/i4.svg";

import t1 from "../../../assets/images/Alation Images/Backend Tech.png";
import t2 from "../../../assets/images/Alation Images/Front end.png";
import t3 from "../../../assets/images/Alation Images/AI & ML.png";
import t4 from "../../../assets/images/Alation Images/aditional tech.png";

import AOS from "aos";
AOS.init({
  duration: 1500,
});

const AlationTab = () => {
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
      style={{ backgroundImage: `url(${banner})` }}
    >
      <section
        className={StyleSheet.productPlatformSection}
        id="data-foundation"
      >
        <Container className="" id="bi-analytics">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={12} xs={12} className="py-md-0 py-5 ">
              <h2 className={`mt-2 ${styles?.title4}`}>
                What Does Alation Do?
              </h2>
              <p className={` ${styles?.title5}`}>
                Alation tames your data beast, maps its secrets, cleans its
                mess, and throws a party for insights. Fuel smarter decisions,
                faster work, and data-driven success!
              </p>
              <TabsPanel>
                <Tab title="Backend Technologies" icon="far fa-address-card">
                  <Container className="mt-5">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center pt-4 pb-4 p-lg-5 `}
                    >
                      <Col
                        lg={12}
                        md={12}
                        className="px-md-0"
                        data-aos="fade-right"
                      >
                        {/* <img
                                                    src={img1}
                                                    alt=""
                                                    className="w-100 h-100"
                                                /> */}
                        <div className={styles.tab_icons}>
                          <img src={i1} alt="icon" />
                          <h3 className={` ${styles?.icon_text} mb-2 `}>
                            Backend Technologies
                          </h3>
                        </div>
                        <div className={styles.platformDataSection}>
                          <p className={` ${styles?.title} mb-2 `}>
                            <b>
                              Leverages highly scalable database systems like
                              Cassandra or Apache HBase to handle massive data
                              volumes efficiently.
                            </b>
                          </p>
                          <p className={styles?.title}>
                            Distributed Databases, Big Data Processing
                            Frameworks, In-Memory Computing, API Management
                          </p>
                        </div>
                        <div className="mt-3">
                          <img
                            src={t1}
                            alt="Governance dashboard in Alation"
                            className="w-100"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>

                <Tab
                  title="Frontend Technologies"
                  icon="fas fa-hourglass-start"
                >
                  <Container className="mt-5">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center pt-4 pb-4 p-lg-5`}
                    >
                      <Col
                        lg={12}
                        md={12}
                        className="px-md-0"
                        data-aos="fade-right"
                      >
                        <div className={styles.tab_icons}>
                          <img src={i2} alt="icon" />
                          <h3 className={` ${styles?.icon_text} mb-2 `}>
                            Frontend Technologies
                          </h3>
                        </div>
                        <div className={styles.platformDataSection}>
                          <p className={` ${styles?.title} mb-2 `}>
                            <b>
                              ReactJS or AngularJS are potential candidates for
                              building the user interface and providing a
                              responsive web experience.
                            </b>
                          </p>
                          <p className={styles?.title}>
                            Modern Web Development Frameworks, JavaScript
                            Libraries, Search Technologies
                          </p>
                        </div>
                        <div className="mt-3">
                          <img
                            src={t2}
                            alt="Frontend Technologies in Alation"
                            className="w-100"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab title="AL and ML" icon="fas fa-hourglass-start">
                  <Container className="mt-5">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center pt-4 pb-4 p-lg-5`}
                    >
                      <Col
                        lg={12}
                        md={12}
                        className="px-md-0"
                        data-aos="fade-right"
                      >
                        <div className={styles.tab_icons}>
                          <img src={i3} alt="icon" />
                          <h3 className={` ${styles?.icon_text} mb-2 `}>
                            Artificial Intelligence and Machine Learning
                          </h3>
                        </div>
                        <div className={styles.platformDataSection}>
                          <p className={` ${styles?.title} mb-2 `}>
                            <b>
                              Alation employs supervised and unsupervised
                              machine learning algorithms for tasks like data
                              profiling, anomaly detection, and generating
                              AI-powered insights.
                            </b>
                          </p>
                          <p className={styles?.title}>
                            Natural Language Processing (NLP), Machine Learning
                            Models, Graph Databases
                          </p>
                        </div>
                        <div className="mt-3">
                          <img
                            src={t3}
                            alt="Artificial Intelligence and Machine Learning in Alation"
                            className="w-100"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab
                  title="Additional Technologies"
                  icon="fas fa-hourglass-start"
                >
                  <Container className="mt-5">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center pt-4 pb-4 p-lg-5`}
                    >
                      <Col
                        lg={12}
                        md={12}
                        className="px-md-0"
                        data-aos="fade-right"
                      >
                        <div className={styles.tab_icons}>
                          <img src={i4} alt="icon" />
                          <h3 className={` ${styles?.icon_text} mb-2 `}>
                            Additional Technologies
                          </h3>
                        </div>
                        <div className={styles.platformDataSection}>
                          <p className={` ${styles?.title} mb-2 `}>
                            <b>
                              Additional technologies supported by Alation
                              include.
                            </b>
                          </p>
                          <p className={styles?.title}>
                            Security & Compliance, DevOps Tools{" "}
                          </p>
                        </div>
                        <div className="mt-3">
                          <img
                            src={t4}
                            alt="Additional Technologies in Alation"
                            className="w-100"
                          />
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

export default AlationTab;
