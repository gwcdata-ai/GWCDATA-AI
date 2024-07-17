import React, { useState } from "react";
import { Accordion, Card, Col, Container, Image, Row } from "react-bootstrap";
import banner from "../../../assets/images/about/ourCultureBg.webp";
import commonStyles from "../../../commoncss/common.module.css";
import styles from "../../boomi/boomi.module.css";
import WorkGwcRightImg from "../../../assets/images/about/workGwcRight.png";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

const WorkCulture = () => {
  return (
    <Container
      fluid
      id="our-work-culture"
      className={`${commonStyles.banner_container_img}  py-lg-5`}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <section
        className={StyleSheet.productPlatformSection}
        id="data-foundation"
      >
        <Container className="" id="bi-analytics">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={12} xs={12} className="py-md-0 py-0 ">
              <h2 className={`mt-2 ${styles?.title4}`}>Work Culture</h2>

              <Row>
                <Col md={8} data-aos="fade-right">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Empathy</Accordion.Header>
                      <Accordion.Body>
                        We place ourselves in the shoes of business’ key
                        decision makers to maximize ROI. We understand, support
                        and recommand what best for business, fostering a
                        workplace where compassion is paramount.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Diversity</Accordion.Header>
                      <Accordion.Body>
                        We are dedicated to actively fostering diversity and
                        inclusion by cultivating a vibrant and diverse talent
                        pool. Our commitment extends to empowering talent from
                        all backgrounds through comprehensive training in
                        emerging technologies.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Collaboration</Accordion.Header>
                      <Accordion.Body>
                        Our collaborative spirit fuels innovation and propels us
                        forward as a united force. We amplify our capabilities,
                        share insights, and celebrate collective victories.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Inclusion</Accordion.Header>
                      <Accordion.Body>
                        Every voice matters, and our inclusive environment
                        ensures everyone feels valued and heard. We strive to
                        promote a thriving community where differences are
                        celebrated.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Autonomy</Accordion.Header>
                      <Accordion.Body>
                        We champion autonomy as a catalyst for creativity and
                        personal growth. Our team members are free to explore,
                        innovate, and take ownership of their work, fostering a
                        culture of self-driven excellence.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Trust</Accordion.Header>
                      <Accordion.Body>
                        Trust forms the bedrock of our collaborative success. We
                        believe in our team's integrity and capabilities,
                        cultivating an environment where trust is earned and
                        shared.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>

                <Col md={4} className="pt-md-0 pt-5" data-aos="fade-left">
                  <img
                    src={WorkGwcRightImg}
                    alt=""
                    className="w-100"
                    height="100%"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default WorkCulture;
