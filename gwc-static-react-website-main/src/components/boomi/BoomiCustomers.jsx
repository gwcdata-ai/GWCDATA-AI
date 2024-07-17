import React, { useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../assets/images/about/ourCultureBg.webp";
import commonStyles from "../../commoncss/common.module.css";
import styles from "./boomi.module.css";

import c1 from "../../assets/images/boomi/c1.png";
import c2 from "../../assets/images/boomi/c2.png";
import c3 from "../../assets/images/boomi/c3.png";
import c4 from "../../assets/images/boomi/c4.png";

const BoomiCustomers = () => {
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
                Boomi Power of the platform
              </h2>
              <p className={` ${styles?.title5}`}>
                Boomi provides the flexibility, scalability, and security you
                need to integrate and automate your organization in one place.
                Leverage the power of the Boomi AtomSphere platform.
              </p>
              <Card className={` ${styles?.work_card} mt-5`}>
                <Row>
                  <Col md={5}>
                    {showC1 && <img src={c1} alt="" className="w-100" />}
                    {showC2 && <img src={c2} alt="" className="w-100" />}
                    {showC3 && <img src={c3} alt="" className="w-100" />}
                    {showC4 && <img src={c4} alt="" className="w-100" />}
                  </Col>
                  <Col md={1}></Col>
                  <Col md={6}>
                    <div className="mt-5">
                      <div>
                        <p
                          className={` ${styles?.para1}`}
                          onClick={handleC1Click}
                        >
                          <b>Intuitive interface</b>{" "}
                        </p>
                        <p className={` ${styles?.para2}`}>
                          Boomi is known for its easy-to-use interface. Boomi's
                          API Management, it is easy to create APIs from
                          integrations with a simple one-click wizard.
                        </p>
                      </div>
                      <div className="mt-4">
                        <p
                          className={` ${styles?.para1}`}
                          onClick={handleC2Click}
                        >
                          <b>Multi-cloud runtime </b>
                        </p>
                        <p className={` ${styles?.para2}`}>
                          The API Gateway is built on top of Boomi's flexible,
                          multi-cloud, autonomous runtime.
                        </p>
                      </div>
                      <div className="mt-4">
                        <p
                          className={` ${styles?.para1}`}
                          onClick={handleC3Click}
                        >
                          <b>Powerful APIs </b>
                        </p>
                        <p className={` ${styles?.para2}`}>
                          Just like the rest of the Boomi platform, Boomi's API
                          Management includes the robust APIs for managing and
                          reporting on your API usage.
                        </p>
                      </div>
                      <div className="mt-4">
                        <p
                          className={` ${styles?.para1}`}
                          onClick={handleC4Click}
                        >
                          <b>Part of the family</b>
                        </p>
                        <p className={` ${styles?.para2}`}>
                          As part of the Boomi platform, take advantage of tight
                          coupling with other services like Integration,
                          EDI/B2B, Master Data Hub, and Flow.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default BoomiCustomers;
