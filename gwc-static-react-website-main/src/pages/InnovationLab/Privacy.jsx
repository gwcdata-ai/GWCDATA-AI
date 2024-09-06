import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BannerBgImg from "../../assets/images/ProductGCP/Banner/banner.webp";
// import BannerBgImg from "../../assets/images/ProductGCP/Banner/Section-2.png";

// CSS
import commonStyles from "../../commoncss/common.module.css";

import styles from "../../components/InnovationLab/styleInnovation.module.css";
import AOS from "aos";
import useMedia from "../../hooks/useMedia";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  const isMobile = useMedia("(max-width:600px)");
  AOS.init({
    duration: 300,
  });
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Research & Innovation, AI Solutions, Data Analytics, Sustainability, Manufacturing, Applied AI, Advanced Data Science, Machine Learning, Precision Medicine, Autonomous Systems, Aerospace Simulations, Industrial Automation, Strategic Innovation, Experimentation, AI Technologies, 3D Printing, Drones, Robotics, Big Data, Research and Ideation, Open Innovation, Technology Partnerships, Hackathons, App-a-thons, Innovation Ecosystem, GWC Data.AI"
        />

        <meta
          name="description"
          content="Explore GWC DATA.AI's commitment to research and innovation. Discover cutting-edge projects and solutions that drive advancements in data technology and analytics, shaping the future of the industry."
        />

        <title>GWC DATA.AI - Research & Innovation hub</title>
      </Helmet>
      <Container
        fluid
        className={`${
          isMobile
            ? `${styles.banner_Mobile} py-lg-0  mt-5`
            : `${styles.banner_Desktop_Privacy} py-lg-0`
        }`}
      >
        <section
          className={`${
            isMobile
              ? `${styles.inside_banner_mobile} py-4`
              : `${styles.inside_banner_desktop} py-4`
          }`}
        >
          <Container
            className={`${
              isMobile
                ? `py-4 mt-md-0 ${styles.margin_10_mobile}`
                : `py-4 mt-md-0 mt-4`
            }`}
          >
            <Row className="d-flex">
              <Col lg={12} md={12} className="py-lg-2">
                <h1
                  className={`${styles.privacy_banner_title} `}
                  style={{ margin: "25rem 0rem 0rem 0rem" }}
                >
                  Privacy & Policy
                </h1>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
      <Container fluid className={`pt-2`}>
        <section>
          <Container className="mt-md-4 mt-0">
            <Row
              className={`d-flex align-items-center ${
                isMobile ? `my-1` : `my-5`
              } `}
            >
              <Col sm={12} className="py-md-0 py-5">
                <div>
                  <p
                    className={`${styles?.privacy_title} `}
                    style={{ fontSize: "18px" }}
                  >
                    {"Effective Date: Aug 25,2024"}
                  </p>
                </div>

                {/* Introduction */}
                <div>
                  <p
                    className={`${styles?.privacy_title} `}
                    style={{ textAlign: "left" }}
                  >
                    {" 1. Introduction"}
                  </p>

                  <p
                    className={`${styles?.Privacy_text1} mt-2`}
                    style={{ textAlign: "left" }}
                  >
                    Welcome to GWC Data.AI (“GWC”, “we”, “our”, “us”). We are
                    committed to protecting your privacy and ensuring the
                    security of your personal information. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your
                    information when you visit our website gwcdata.ai (the
                    “Site”) and use our data analytics and artificial
                    intelligence solutions.
                  </p>
                </div>

                {/* Information We Collect */}
                <div>
                  <p
                    className={`${styles?.privacy_title} `}
                    style={{ textAlign: "left" }}
                  >
                    {" 2. Information We Collect"}
                  </p>

                  <ul className={`${styles.privacy_ul}`}>
                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Personal Data:</strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        When you visit our Site or engage with our services, we
                        may collect personal data such as your name, email
                        address, phone number, and company details. This data is
                        collected through forms, inquiries, and interactions
                        with our team.
                      </span>
                    </li>
                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Usage Data:</strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        We collect information about your interactions with our
                        Site, including IP addresses, browser types, referring
                        sites, and pages viewed. This helps us understand how
                        our Site is used and improve our services.
                      </span>
                    </li>
                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Cookies and Tracking :</strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        Our Site uses cookies to enhance your user experience.
                        Cookies help us remember your preferences and track your
                        usage patterns. You can manage your cookie preferences
                        through your browser settings.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* How We Use Your Information */}

                <div>
                  <p
                    className={`${styles?.privacy_title} `}
                    style={{ textAlign: "left" }}
                  >
                    {" 3. How We Use Your Information"}
                  </p>
                  <p
                    className={`${styles?.Privacy_text1} mt-2`}
                    style={{ textAlign: "left" }}
                  >
                    We use the information we collect for various purposes,
                    including:
                  </p>

                  <ul className={`${styles.privacy_ul}`}>
                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Providing Services : </strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        To deliver our data analytics and AI solutions, respond
                        to inquiries, and fulfill contractual obligations.
                      </span>
                    </li>
                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Improving Our Services : </strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        To analyze usage trends, enhance the functionality of
                        our Site, and develop new features.
                      </span>
                    </li>
                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Communications : </strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        To send you updates, newsletters, and promotional
                        materials relevant to our services, if you have opted in
                        to receive such communications.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* How We Share Your Information */}

                <div>
                  <p
                    className={`${styles?.privacy_title} `}
                    style={{ textAlign: "left" }}
                  >
                    {" 4. How We Share Your Information"}
                  </p>
                  <p
                    className={`${styles?.Privacy_text1} mt-2`}
                    style={{ textAlign: "left" }}
                  >
                    We do not sell, trade, or otherwise transfer your personal
                    data to outside parties except as described below:
                  </p>

                  <ul className={`${styles.privacy_ul}`}>
                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Service Providers : </strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        We may share your information with trusted third-party
                        service providers who assist us in operating our Site,
                        conducting business, or servicing you, provided they
                        agree to keep the information confidential.
                      </span>
                    </li>
                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Legal Requirements : </strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        We may disclose your information if required by law or
                        in response to valid requests by public authorities
                        (e.g., subpoenas, court orders).
                      </span>
                    </li>
                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Business Transfers : </strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        In the event of a merger, acquisition, or sale of all or
                        a portion of our assets, your information may be
                        transferred as part of that transaction.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Security of Your Information */}

                <div>
                  <p
                    className={`${styles?.privacy_title} `}
                    style={{ textAlign: "left" }}
                  >
                    {" 5. Security of Your Information"}
                  </p>

                  <p
                    className={`${styles?.Privacy_text1} mt-2`}
                    style={{ textAlign: "left" }}
                  >
                    We implement appropriate technical and organizational
                    measures to protect your personal information from
                    unauthorized access, alteration, disclosure, or destruction.
                    However, no method of transmission over the Internet or
                    electronic storage is 100% secure, so we cannot guarantee
                    absolute security.
                  </p>
                </div>

                {/* Your Choices and Rights */}

                <div>
                  <p
                    className={`${styles?.privacy_title} `}
                    style={{ textAlign: "left" }}
                  >
                    {" 6. Your Choices and Rights"}
                  </p>

                  <ul className={`${styles.privacy_ul}`}>
                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Opt-Out : </strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        You may opt out of receiving marketing communications
                        from us by following the unsubscribe instructions
                        provided in those communications.
                      </span>
                    </li>

                    <li>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Cookies : </strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        You can manage your cookie preferences through your
                        browser settings. Note that disabling cookies may affect
                        the functionality of our Site.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Changes to This Privacy Policy */}

                <div>
                  <p
                    className={`${styles?.privacy_title} `}
                    style={{ textAlign: "left" }}
                  >
                    {" 7. Changes to This Privacy Policy"}
                  </p>

                  <p
                    className={`${styles?.Privacy_text1} mt-2`}
                    style={{ textAlign: "left" }}
                  >
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or legal requirements. We
                    will notify you of any significant changes by posting the
                    updated policy on our Site. Your continued use of our Site
                    and services after such changes constitutes your acceptance
                    of the updated policy.
                  </p>
                </div>
                {/* Contact Us */}

                <div>
                  <p
                    className={`${styles?.privacy_title} `}
                    style={{ textAlign: "left" }}
                  >
                    {" 8. Contact Us"}
                  </p>

                  <p
                    className={`${styles?.Privacy_text1} mt-2`}
                    style={{ textAlign: "left" }}
                  >
                    If you have any questions or concerns about this Privacy
                    Policy or our data practices, please contact us at:
                  </p>
                  <ul className={`${styles.privacy_ul}`}>
                    <li style={{ listStyle: "none" }}>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> GWC Data.AI </strong>
                      </span>{" "}
                    </li>

                    <li style={{ listStyle: "none" }}>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Email : </strong>
                      </span>{" "}
                      <span className={`${styles?.Privacy_text1} `}>
                        <a href="mailto:indiahr@gwcdata.ai">
                          indiahr@gwcdata.ai
                        </a>
                      </span>
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <span className={`${styles?.Privacy_text1} `}>
                        <strong> Address : </strong>
                      </span>{" "}
                      <span
                        className={`${styles?.Privacy_text1} `}
                        style={{ fontWeight: 500 }}
                      >
                        #46/4 Novel Tech Park, Kudlu Gate, Hosur Rd, HSR
                        Extension, Bangalore - 560068, Karnataka, India.
                      </span>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col
                sm={12}
                className={`py-md-0 mt-3 ${styles.parent_box}`}
              ></Col>
            </Row>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default Privacy;
