import React, { useState } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";

// CSS
import styles from "../../atlanPatners/atlan.module.css";

import ci1 from "../../../assets/images/atlan/ci1.svg";
import ci2 from "../../../assets/images/atlan/ci2.svg";
import ci3 from "../../../assets/images/atlan/ci3.svg";

import ct1 from "../../../assets/images/Alation Images/Manage Workflows.png";
import ct2 from "../../../assets/images/Alation Images/Monitor Workflows.png";
import ct3 from "../../../assets/images/Alation Images/Get Slack Alerts.png";

import AOS from "aos";
AOS.init({
  duration: 1500,
});

const AlationCards = () => {
  const [showC1, setShowC1] = useState(true);
  const [showC2, setShowC2] = useState(false);
  const [showC3, setShowC3] = useState(false);

  const handleC1Click = () => {
    setShowC1(true);
    setShowC2(false);
    setShowC3(false);
  };

  const handleC2Click = () => {
    setShowC1(false);
    setShowC2(true);
    setShowC3(false);
  };
  const handleC3Click = () => {
    setShowC1(false);
    setShowC2(false);
    setShowC3(true);
  };

  return (
    <Container className="pt-2 pb-4">
      <Row className="mt-5">
        <Col md={12}>
          <p className={styles.title_head}>
            Foster a culture of data-driven decision-making and unlock new
            opportunities with Alation
          </p>
          <p className={` ${styles.para} mb-3 `}>
            Streamline your workflows and accelerate research with fast and
            accurate data retrieval. GWC partners with Alation to drive
            strategic growth and optimize performance through informed decisions
            based on comprehensive data insights. Through collaborative services
            from Alation, we foster a culture of shared ownership and collective
            success.
          </p>
        </Col>
      </Row>
      <section className="">
        <Container className="mt-md-4 mt-0">
          <Row className="d-flex align-items-center justify-content-center my-5">
            <Row>
              <Col
                xs={12}
                lg={12}
                md={12}
                className="pt-md-0 pt-4"
                data-aos="fade-right"
              >
                {showC1 && (
                  <img
                    src={ct1}
                    alt="Optimize workflows and accelerate research with fast, accurate data retrieval. GWC and Alation partner to drive growth and performance through comprehensive data insights and collaborative services."
                    className=" mx-lg-5  mt-lg-2 w-100"
                  />
                )}
                {showC2 && (
                  <img
                    src={ct2}
                    alt="Optimize workflows and accelerate research with fast, accurate data retrieval. GWC and Alation partner to drive growth and performance through comprehensive data insights and collaborative services."
                    className=" mx-lg-5  mt-lg-2 w-100"
                  />
                )}
                {showC3 && (
                  <img
                    src={ct3}
                    alt="Optimize workflows and accelerate research with fast, accurate data retrieval. GWC and Alation partner to drive growth and performance through comprehensive data insights and collaborative services."
                    className=" mx-lg-5 mt-lg-2 w-100"
                  />
                )}
              </Col>
            </Row>

            <Row className="mt-lg-5">
              <Col xs={12} lg={4} md={4} className=" mb-3" data-aos="fade-left">
                <Card
                  onClick={handleC1Click}
                  className={` ${styles.five_card} mb-3 `}
                >
                  <Card.Text>
                    <div className={` ${styles.text_icon} mb-2`}>
                      <img
                        src={ci1}
                        alt="Manage workflows in Alation"
                        style={{ width: "fit-content" }}
                      />
                      <h3 className={` ${styles.card_para1} mb-3 `}>
                        Manage workflows
                      </h3>
                    </div>
                    <p className={` ${styles.card_para2} mb-3 `}>
                      Troubleshoot with ease through a graphical view of your
                      connections.
                    </p>
                  </Card.Text>
                </Card>
              </Col>

              <Col xs={12} lg={4} md={4} className="mb-3" data-aos="fade-left">
                <Card
                  onClick={handleC2Click}
                  className={` ${styles.five_card} mb-3 `}
                >
                  <Card.Text>
                    <div className={` ${styles.text_icon} mb-2`}>
                      <img
                        src={ci2}
                        alt="Monitor workflows in Alation"
                        style={{ width: "fit-content" }}
                      />
                      <h3 className={` ${styles.card_para1} mb-3 `}>
                        Monitor workflows
                      </h3>
                    </div>
                    <p className={` ${styles.card_para2} mb-3 `}>
                      Search and filter between workflows to see success and
                      failure logs.
                    </p>
                  </Card.Text>
                </Card>
              </Col>

              <Col xs={12} lg={4} md={4} className="mb-3" data-aos="fade-left">
                <Card
                  onClick={handleC3Click}
                  className={` ${styles.five_card} mb-3 `}
                >
                  <Card.Text>
                    <div className={` ${styles.text_icon} mb-2`}>
                      <img
                        src={ci3}
                        alt="Get Slack alerts in Alation"
                        style={{ width: "fit-content" }}
                      />
                      <p className={` ${styles.card_para1} mb-3 `}>
                        Get Slack alerts
                      </p>
                    </div>
                    <p className={` ${styles.card_para2} mb-3 `}>
                      Stay updated with automated, context-rich alerts for every
                      workflow.
                    </p>
                  </Card.Text>
                </Card>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default AlationCards;
