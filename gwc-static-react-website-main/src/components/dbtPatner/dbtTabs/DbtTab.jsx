import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import TabsPanel from "../../../ReusableUI/Tabs/TabsPanel";
import Tab from "../../../ReusableUI/Tabs/Tab";
import { Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../../assets/images/about/ourCultureBg.webp";
import { Link } from "react-router-dom";
import commonStyles from "../../../commoncss/common.module.css";
import styles from "../dbt.module.css";

import t1 from "../../../assets/images/dbt/t1.png";
import t2 from "../../../assets/images/dbt/t2.png";
import t3 from "../../../assets/images/dbt/t3.png";
import t4 from "../../../assets/images/dbt/t4.png";

import AOS from "aos";
AOS.init({
  duration: 1500,
});

const DbtTab = () => {
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
            <Col lg={12} xs={12} className="py-md-0 py- ">
              <h2 className={`mt-2 ${styles?.title7} mb-1`}>
                The New Standard For Data Transformation
              </h2>
              <p className={` ${styles?.title8} mb-5`}>
                Build systems that uphold the sustainability of your data
                development processes.
              </p>
              <TabsPanel>
                <Tab
                  title={<span className={styles.tab_text}>Optimization</span>}
                  icon="far fa-address-card"
                >
                  <Container className="mt-2">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-4 py-4`}
                    >
                      <Col md={5} className="px-md-0" data-aos="fade-right">
                        <img
                          src={t1}
                          alt="DBT - Optimization"
                          className="w-100 h-100"
                        />
                      </Col>
                      <Col md={7} className=" pt-md-0" data-aos="fade-left">
                        <div className={styles.platformDataSection}>
                          <h3 className={` ${styles?.title6} mb-3`}>
                            Optimization
                          </h3>
                          <p className={styles?.text}>
                            We can optimize our code using dbt to replace
                            boilerplate DDL/DML with simple SQL SELECT
                            statements that infer dependencies, build tables and
                            views, and run models in order. Develop code that
                            writes itself with macros, ref statements, and
                            auto-complete commands in the Cloud IDE. Make use of
                            Python packages to speed up complex analysis.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>

                <Tab
                  title={<span className={styles.tab_text}>Hypothesis</span>}
                  icon="fas fa-hourglass-start"
                >
                  <Container className="mt-2">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-4 py-4`}
                    >
                      <Col md={5} className="px-md-0" data-aos="fade-right">
                        <img
                          src={t2}
                          alt="DBT - Hypothesis"
                          className="w-100 h-100"
                        />
                      </Col>
                      <Col md={7} className=" pt-md-0" data-aos="fade-left">
                        <div className={styles.platformDataSection}>
                          <h3 className={` ${styles?.title6} mb-4`}>
                            Hypothesis
                          </h3>
                          <p className={styles?.text}>
                            dbt’s pre-packaged and custom testing helps
                            developers create a “paper trail” of validated
                            assumptions for data collaborators. Auto-generated
                            dependency graphs and dynamic data dictionaries
                            promote trust and transparency for data consumers.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>
                <Tab
                  title={
                    <span className={styles.tab_text}>Effective Delivery</span>
                  }
                  icon="fas fa-hourglass-start"
                >
                  <Container className="mt-2">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-4 py-4`}
                    >
                      <Col md={5} className="px-md-0" data-aos="fade-right">
                        <img
                          src={t3}
                          alt="DBT - Effective Delivery"
                          className="w-100 h-100"
                        />
                      </Col>
                      <Col md={7} className=" pt-md-0" data-aos="fade-left">
                        <div className={styles.platformDataSection}>
                          <h3 className={` ${styles?.title6} mb-3`}>
                            Effective Delivery
                          </h3>
                          <p className={styles?.text}>
                            dbt seamlessly integrates with CI/CD pipelines, but
                            the automation potential goes beyond deployments.
                            Think about automatically generating data
                            dictionaries and lineage graphs, scheduling daily
                            data quality checks and automatically notifying
                            stakeholders of anomalies. These hidden gems show
                            their potential to transform your data culture,
                            faster collaboration, and unlock automation power.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Tab>

                <Tab
                  title={
                    <span className={styles.tab_text}>Eliminate Silos</span>
                  }
                  icon="fas fa-hourglass-start"
                >
                  <Container className="mt-2">
                    <Row
                      className={` ${styles.tab_sub_sec} d-flex align-items-center justify-content-center p-md-4 py-4`}
                    >
                      <Col md={5} className="px-md-0" data-aos="fade-right">
                        <img
                          src={t4}
                          alt="DBT - Eliminate Silos"
                          className="w-100 h-100"
                        />
                      </Col>
                      <Col md={7} className=" pt-md-0" data-aos="fade-left">
                        <div className={styles.platformDataSection}>
                          <h3 className={` ${styles?.title6} mb-3`}>
                            Eliminate Silos
                          </h3>
                          <p className={styles?.text}>
                            Traditionally, data analysis has been siloed across
                            different teams and tools. This creates
                            communication gaps, slows down insights, and hinders
                            data accessibility. dbt bridges the gap by
                            empowering analysts and engineers to collaborate on
                            a single platform. Its easy-to-use SQL interface
                            makes data transformation accessible to diverse
                            skillsets, fostering a data-driven culture.
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

export default DbtTab;
