import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Image, Row, Accordion } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import AOS from "aos";

// css
import styles from "../dbt.module.css";
import commonStyles from "../../../commoncss/common.module.css";

// assets
import Git_Integration from "../../../assets/images/dbt/Git_Integration.webp";
import Efficiency_and_Reproducibility from "../../../assets/images/dbt/Efficiency_and_Reproducibility.webp";
import Scheduled_Runs from "../../../assets/images/dbt/Scheduled_Runs.webp";
import Collaboration_and_Documentation from "../../../assets/images/dbt/Collaboration_and_Documentation.webp";
import banner from "../../../assets/images/about/ourCultureBg.webp";

AOS.init({
  duration: 1500,
});

const DbtCard = () => {
  const [showC1, setShowC1] = useState(true);
  const [showC2, setShowC2] = useState(false);
  const [showC3, setShowC3] = useState(false);
  const [showC4, setShowC4] = useState(false);

  const handleC1Click = () => {
    setShowC1(true);
    setShowC2(false);
    setShowC3(false);
    setShowC4(false);
  };

  const handleC2Click = () => {
    setShowC1(false);
    setShowC2(true);
    setShowC3(false);
    setShowC4(false);
  };
  const handleC3Click = () => {
    setShowC1(false);
    setShowC2(false);
    setShowC3(true);
    setShowC4(false);
  };

  const handleC4Click = () => {
    setShowC1(false);
    setShowC2(false);
    setShowC3(false);
    setShowC4(true);
  };

  const dataservice = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#data-service" && dataservice.current) {
      dataservice.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <Container
      fluid
      className={`${commonStyles.banner_container_img}  py-lg-5`}
      style={{ backgroundImage: `url(${banner})` }}
      id="data-service"
    >
      <section className={StyleSheet.productPlatformSection}>
        <Container className="" id="bi-analytics">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={12} xs={12} className="py-md-0 py-0 ">
              <p className={`mt-2 ${styles?.title4}`}>
                Data Services That Scale{" "}
              </p>
              <p className={` ${styles?.title5} mb-4 `}>
                Unleash the potential of dbt and empower your organization to
                make data-driven decisions confidently.
              </p>

              <Row>
                <Col md={8}>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header onClick={handleC1Click}>
                        Efficiency and Reproducibility
                      </Accordion.Header>
                      <Accordion.Body>
                        Automate and orchestrate your data transformations,
                        ensuring consistency and reproducibility in your
                        analytics workflows. dbt makes it easy to maintain and
                        version control your analytics code.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header onClick={handleC2Click}>
                        Collaboration and Documentation
                      </Accordion.Header>
                      <Accordion.Body>
                        Foster collaboration among data teams by providing a
                        centralized platform for analytics documentation.
                        Document and share the meaning and context of your data
                        transformations, making it easier for everyone to
                        understand and contribute.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header onClick={handleC3Click}>
                        Git Integration
                      </Accordion.Header>
                      <Accordion.Body>
                        Seamlessly integrate dbt with version control systems
                        like Git, enabling robust versioning, collaboration, and
                        tracking of changes in your analytics codebase.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header onClick={handleC4Click}>
                        Scheduled Runs
                      </Accordion.Header>
                      <Accordion.Body>
                        Schedule and automate your dbt runs to ensure that your
                        data transformations stay up-to-date and aligned with
                        your business requirements.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>

                <Col md={4}>
                  {showC1 && (
                    <img
                      src={Efficiency_and_Reproducibility}
                      alt=""
                      className="w-100"
                      height="100%"
                    />
                  )}
                  {showC2 && (
                    <img
                      src={Collaboration_and_Documentation}
                      alt=""
                      className="w-100"
                      height="100%"
                    />
                  )}
                  {showC3 && (
                    <img
                      src={Git_Integration}
                      alt=""
                      className="w-100"
                      height="100%"
                    />
                  )}
                  {showC4 && (
                    <img
                      src={Scheduled_Runs}
                      alt=""
                      className="w-100"
                      height="100%"
                    />
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default DbtCard;
