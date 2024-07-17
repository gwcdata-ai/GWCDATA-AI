import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import TabsPanel from "../../../ReusableUI/Tabs/TabsPanel";
import Tab from "../../../ReusableUI/Tabs/Tab";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../../assets/images/about/ourCultureBg.webp";
import { Link } from "react-router-dom";
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./fivetabs.module.css";
import img1 from "../../../assets/images/fivetran/t1.svg";
import img2 from "../../../assets/images/fivetran/t2.png";
import img3 from "../../../assets/images/fivetran/t3.svg";
import img4 from "../../../assets/images/fivetran/t4.svg";
import img5 from "../../../assets/images/fivetran/t5.svg";

import AOS from "aos";
AOS.init({
  duration: 1500,
});
const FiveTabs = () => {
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
    <>
      <Container
        fluid
        id="app-creation"
        className={`${commonStyles.banner_container_img}  py-5`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <section
          className={StyleSheet.productPlatformSection}
          id="data-foundation"
        >
          <Container className="" id="data-connectivity">
            <Row className="d-flex align-items-center justify-content-center">
              <Col lg={12} xs={12} className=" py-3 ">
                <h1 className={`mt-2 ${styles?.title4}`}>
                  Riding the Wave of Seamless Data Connectivity with Fivetran
                </h1>
                <p className={` ${styles?.title5}`}>
                  One platform to bridge the gaps between data points.
                </p>
                <TabsPanel>
                  <Tab
                    title="Easy Data Integration"
                    icon="far fa-address-card"
                    className={styles.custom_tab_class}
                  >
                    <Container className="mt-2">
                      <Row
                        className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-4 py-3`}
                      >
                        <Col md={5} className="px-md-0" data-aos="fade-right">
                          <img src={img1} alt="" className="w-100 h-100" />
                        </Col>
                        <Col
                          md={7}
                          className={` ${styles?.text_tab_para} `}
                          data-aos="fade-left"
                        >
                          <div className={styles.platformDataSection}>
                            <h2
                              className={styles?.title}
                              style={{ fontWeight: 600 }}
                            >
                              Easy Data Integration
                            </h2>
                            <p className={styles?.title}>
                              In minutes, you can connect your data sources and
                              destinations with Fivetran’s 400+ pre-built,
                              no-code connectors. In addition to other complex
                              tasks, Fivetran handles.
                            </p>

                            <ul>
                              <li className={styles?.text_ul}>Schema drift </li>
                              <li className={styles?.text_ul}>
                                Data normalization
                              </li>
                              <li className={styles?.text_ul}>
                                Deduplication{" "}
                              </li>
                            </ul>
                            {/* <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Move data with Fivetran
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link> */}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  <Tab
                    title="Reliable Data Quality"
                    icon="fas fa-hourglass-start"
                  >
                    <Container className="mt-2">
                      <Row
                        className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-4 py-3`}
                      >
                        <Col
                          md={5}
                          className={` ${styles?.text_tab_para} `}
                          data-aos="fade-right"
                        >
                          <img src={img2} alt="" className="w-100 h-100" />
                        </Col>
                        <Col md={7} className=" pt-md-0" data-aos="fade-left">
                          <div className={styles.platformDataSection}>
                            <h2
                              className={styles?.title}
                              style={{ fontWeight: 600 }}
                            >
                              Reliable Data Quality{" "}
                            </h2>
                            <p className={styles?.title}>
                              You can trust Fivetran to deliver accurate and
                              consistent data.
                            </p>
                            <ul>
                              <li className={styles?.text_ul}>99.9% uptime </li>
                              <li className={styles?.text_ul}>
                                Idempotent pipelines
                              </li>
                              <li className={styles?.text_ul}>
                                High levels of security and compliance
                              </li>
                            </ul>
                            {/* <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Move data with Fivetran
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link> */}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  <Tab
                    title="Scalable Data Growth"
                    icon="fas fa-hourglass-start"
                  >
                    <Container className="mt-2">
                      <Row
                        className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-4 py-3`}
                      >
                        <Col
                          md={5}
                          className={` ${styles?.text_tab_para} `}
                          data-aos="fade-right"
                        >
                          <img src={img3} alt="" className="w-100 h-100" />
                        </Col>
                        <Col md={7} className=" pt-md-0" data-aos="fade-left">
                          <div className={styles.platformDataSection}>
                            <h2
                              className={styles?.title}
                              style={{ fontWeight: 600 }}
                            >
                              {"Scalable Data Growth "}
                            </h2>
                            <p className={styles?.title}>
                              {" "}
                              You can handle increasing data volumes and
                              complexity with Fivetran.
                            </p>
                            <ul>
                              <li className={styles?.text_ul}>
                                Real-time change data capture{" "}
                              </li>
                              <li className={styles?.text_ul}>
                                Usage-based pricing{" "}
                              </li>
                              <li className={styles?.text_ul}>
                                Extensible platform
                              </li>
                            </ul>
                            {/* <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Move data with Fivetran
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link> */}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  <Tab
                    title="Automated Transformations"
                    icon="fas fa-hourglass-start"
                  >
                    <Container className="mt-2">
                      <Row
                        className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-4 py-3`}
                      >
                        <Col
                          md={5}
                          className={` ${styles?.text_tab_para} `}
                          data-aos="fade-right"
                        >
                          <img src={img4} alt="" className="w-100 h-100" />
                        </Col>
                        <Col md={7} className=" pt-md-0" data-aos="fade-left">
                          <div className={styles.platformDataSection}>
                            <h2
                              className={styles?.title}
                              style={{ fontWeight: 600 }}
                            >
                              {"Automated Transformations "}
                            </h2>
                            <p className={styles?.title}>
                              Fivetran ensures the next level of
                              transformations.
                            </p>
                            <ul>
                              <li className={styles?.text_ul}>
                                Faster time to insight{" "}
                              </li>
                              <li className={styles?.text_ul}>
                                Fully managed – No third-party tool required
                              </li>
                              <li className={styles?.text_ul}>
                                Fresh up-to-date data{" "}
                              </li>
                            </ul>
                            {/* <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Move data with Fivetran
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link> */}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </Tab>
                  <Tab title="Data Security" icon="fas fa-hourglass-start">
                    <Container className="mt-2">
                      <Row
                        className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-4 py-3`}
                      >
                        <Col
                          md={5}
                          className={` ${styles?.text_tab_para} `}
                          data-aos="fade-right"
                        >
                          <img src={img5} alt="" className="w-100 h-100" />
                        </Col>
                        <Col md={7} className=" pt-md-0" data-aos="fade-left">
                          <div className={styles.platformDataSection}>
                            <h2
                              className={styles?.title}
                              style={{ fontWeight: 600 }}
                            >
                              {"Data Security "}
                            </h2>
                            <p className={styles?.title}>
                              Protect your customers, data and reputation with
                              automated and customizable security features,
                              including:{" "}
                            </p>
                            <ul>
                              <li className={styles?.text_ul}>
                                CCPA, GDPR, HIPAA, ISO, PCI, SOC2 certifications{" "}
                              </li>
                              <li className={styles?.text_ul}>
                                Column blocking and hashing
                              </li>
                              <li className={styles?.text_ul}>
                                Secure deployment and flexible connection
                                options{" "}
                              </li>
                            </ul>
                            {/* <Link to='/' target="_blank">
                                                            <div
                                                                className={`${styles.url_card}`}
                                                                style={{ color: hover ? "#712b8c" : "#6F2B8C" }}
                                                            >
                                                                Move data with Fivetran
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="20" height="21"
                                                                    viewBox="0 0 20 21"
                                                                    fill="none"
                                                                >
                                                                    <path
                                                                        d="M4.16602 10.6207H15.8327M15.8327 10.6207L9.99935 4.78735M15.8327 10.6207L9.99935 16.454"
                                                                        stroke={hover ? "#712b8c" : "#6F2B8C"}
                                                                        stroke-width="1.67"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </Link> */}
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

export default FiveTabs;
