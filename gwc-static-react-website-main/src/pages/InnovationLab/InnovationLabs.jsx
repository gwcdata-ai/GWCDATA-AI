import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import BannerBgImg from "../../assets/images/ProductGCP/Banner/banner.webp";
// import BannerBgImg from "../../assets/images/ProductGCP/Banner/Section-2.png";

import metaverse from "../../assets/images/innovationLabs/metaverse.webp";
import meta from "../../assets/images/innovationLabs/meta.jpg";

import Future_of_Manufacturing from "../../assets/images/innovationLabs/Future_of_Manufacturing.jpg";
import Future_of_Sustainability from "../../assets/images/innovationLabs/Future_of_Sustainability.jpg";
import Future_of_Applied_AI from "../../assets/images/innovationLabs/Future_of_Applied_AI.jpg";
import Experimentation from "../../assets/images/innovationLabs/Experimentation.jpg";
import Research_and_Ideation from "../../assets/images/innovationLabs/Research_and_Ideation.jpg";
import Open_Innovation from "../../assets/images/innovationLabs/Open_Innovation.jpg";

import inno_banner from "../../assets/images/innovationLabs/inno_banner.png";

// CSS
import commonStyles from "../../commoncss/common.module.css";

import styles from "../../components/InnovationLab/styleInnovation.module.css";
import AOS from "aos";
import useMedia from "../../hooks/useMedia";
import { Helmet } from "react-helmet-async";

const InnovationLabs = () => {
  const isMobile = useMedia("(max-width:600px)");
  AOS.init({
    duration: 300,
  });
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="GWC DATA.AI, research and innovation, data technology, analytics solutions, cutting-edge projects, industry advancements, data science research, innovative solutions, tech innovation"
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
            : `${styles.banner_Desktop} py-lg-0`
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
              <Col lg={7} md={6} className="py-lg-5">
                {/* <p className={`${styles.breadcrumbs} mb-4 mt-5 mt-lg-3`}>
                                <span>
                                    <a
                                        href='/'
                                        className={`${styles.breadcrumbs} mb-3`}
                                    >
                                        Home
                                    </a>
                                    <span> / </span>
                                </span>
                                Innovation Labs
                            </p> */}

                {/* <h1 className={`${styles.banner_title} mb-4`} /> */}
                <h1
                  className={`${styles.banner_title} `}
                  style={{ margin: "20rem 0rem 0rem 0rem" }}
                >
                  Research & Innovation
                </h1>
                <p className={`${styles.banner_description} `}>
                  {
                    " Welcome to our Research and Innovation Hub, where expertise meets pioneering spirit and explore how our commitment to innovation can redefine possibilities and propel your organization forward. "
                  }
                </p>
              </Col>
              {/* <Col lg={5} md={6}>
                            <img src={fivelogo} alt="logo" className="w-100" />
                        </Col> */}
            </Row>
          </Container>
        </section>
      </Container>

      {isMobile ? (
        <Container fluid className={`${isMobile ? `pt-5 pb-5` : `pt-2`}`}>
          <section>
            <Container className="mt-md-4 mt-0">
              <Row
                className={`d-flex align-items-center ${
                  isMobile ? `my-1` : `my-5`
                } `}
              >
                <Col
                  sm={12}
                  className={`${isMobile ? `py-md-0 ` : `py-md-0 py-5`}`}
                >
                  <div>
                    {/* <p className={styles?.sub_title}>
                  <strong>Analytics</strong>
                </p> */}
                    <h2 className={styles?.title}>
                      {"Discover How We’re Innovating Across Industries "}
                    </h2>

                    <p className={`${styles?.text1} mt-2`}>
                      Discover how GWC Data.ai is leading the charge in
                      revolutionizing industries through cutting-edge AI
                      solutions. Our robust research and innovation programs
                      leverage data to generate actionable insights that drive
                      progress and create substantial value for businesses and
                      the planet alike. From enhancing sustainability practices
                      to optimizing manufacturing processes, our technologies
                      are at the forefront of transformative change.
                    </p>
                  </div>
                </Col>

                <Col
                  sm={12}
                  className={`${
                    isMobile
                      ? `${`py-md-0 mt-3 ${styles.padding_0} ${styles.parent_box_2}`}`
                      : `${`py-md-0 mt-5  ${styles.parent_box_2}`}`
                  }`}
                >
                  <div className={`${styles.img_section_parent_2} `}>
                    <img
                      src={Future_of_Sustainability}
                      className={`${
                        isMobile
                          ? `${styles.img_section_2_Mobile}`
                          : `${styles.img_section_2}`
                      }`}
                      width={"100%"}
                      alt=""
                    />
                  </div>
                  <div
                    className={`${
                      isMobile
                        ? `text-center ${styles.content_section_parent_2_Mobile}`
                        : `${styles.content_section_parent_2}`
                    } `}
                  >
                    <h2 className={`${isMobile && `${styles.title_mobile}`}`}>
                      <strong>Future of Sustainability</strong>
                    </h2>
                    <p style={{ lineHeight: "1.8", paddingTop: "1rem" }}>
                      Accelerating the transition towards sustainable industries
                      in developing comprehensive, science-based solutions
                      designed to monitor, mitigate, and adapt to climate
                      change. Our innovative approach ensures that these
                      solutions not only meet but exceed long-term human and
                      societal needs. By integrating cutting-edge data analytics
                      and AI technologies, we empower businesses to achieve
                      sustainability goals efficiently.
                    </p>
                  </div>
                </Col>

                <Col
                  sm={12}
                  className={`${
                    isMobile
                      ? `${`py-md-0 mt-5 ${styles.padding_0} ${styles.parent_box_2}`}`
                      : `${`py-md-0 mt-5  ${styles.parent_box_2}`}`
                  }`}
                >
                  <div className={`${styles.img_section_parent_2} `}>
                    <img
                      src={Future_of_Manufacturing}
                      className={`${
                        isMobile
                          ? `${styles.img_section_2_Mobile}`
                          : `${styles.img_section_2}`
                      }`}
                      width={"100%"}
                      alt=""
                    />
                  </div>
                  <div
                    className={`${
                      isMobile
                        ? `text-center ${styles.content_section_parent_2_Mobile}`
                        : `${styles.content_section_parent_2}`
                    } `}
                  >
                    <h2 className={`${isMobile && `${styles.title_mobile}`}`}>
                      <strong>Future of Manufacturing</strong>
                    </h2>
                    <p style={{ lineHeight: "1.8", paddingTop: "1rem" }}>
                      Harnessing cutting-edge data science and machine learning
                      advancements from precision medicine to autonomous
                      systems, aerospace simulations, and industrial automation,
                      we strategically tackle industry-specific challenges. Our
                      approach drives scalable solutions that optimize
                      operational efficiency and redefine innovation standards.
                    </p>
                  </div>
                </Col>
                <Col
                  sm={12}
                  className={`${
                    isMobile
                      ? `${`py-md-0 mt-5 ${styles.padding_0} ${styles.parent_box_2}`}`
                      : `${`py-md-0 mt-5  ${styles.parent_box_2}`}`
                  }`}
                >
                  <div className={`${styles.img_section_parent_2} `}>
                    <img
                      src={Future_of_Applied_AI}
                      className={`${
                        isMobile
                          ? `${styles.img_section_2_Mobile}`
                          : `${styles.img_section_2}`
                      }`}
                      width={"100%"}
                      alt=""
                    />
                  </div>
                  <div
                    className={`${
                      isMobile
                        ? `text-center ${styles.content_section_parent_2_Mobile}`
                        : `${styles.content_section_parent_2}`
                    } `}
                  >
                    <h2 className={`${isMobile && `${styles.title_mobile}`}`}>
                      <strong>Future of Applied AI</strong>
                    </h2>
                    <p style={{ lineHeight: "1.8", paddingTop: "1rem" }}>
                      Strategically applying advanced data science and machine
                      learning technologies to tackle industry-specific
                      challenges in precision medicine, autonomous systems,
                      aerospace simulations, and industrial automation. Our
                      approach is meticulously designed to optimize performance
                      and innovation across diverse sectors.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Container>
      ) : (
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
                    {/* <p className={styles?.sub_title}>
                  <strong>Analytics</strong>
                </p> */}
                    <p className={styles?.title}>
                      {" Discover How We’re Innovating Across Industries"}
                    </p>

                    <p className={`${styles?.text1} mt-2`}>
                      Discover how GWC Data.ai is leading the charge in
                      revolutionizing industries through cutting-edge AI
                      solutions. Our robust research and innovation programs
                      leverage data to generate actionable insights that drive
                      progress and create substantial value for businesses and
                      the planet alike. From enhancing sustainability practices
                      to optimizing manufacturing processes, our technologies
                      are at the forefront of transformative change.
                    </p>
                  </div>
                </Col>

                <Col sm={12} className={`py-md-0 mt-3 ${styles.parent_box}`}>
                  <div className={`${styles.img_section_parent} `}>
                    <img
                      src={Future_of_Sustainability}
                      className={`${styles.img_section} `}
                      width={"100%"}
                      alt=""
                    />
                  </div>
                  <div className={`${styles.content_section_parent_right} `}>
                    <h2 className={`${styles.title_desktop}`}>
                      <strong>Future of Sustainability</strong>
                    </h2>
                    <p style={{ lineHeight: "1.8", paddingTop: "1rem" }}>
                      Accelerating the transition towards sustainable industries
                      in developing comprehensive, science-based solutions
                      designed to monitor, mitigate, and adapt to climate
                      change. Our innovative approach ensures that these
                      solutions not only meet but exceed long-term human and
                      societal needs. By integrating cutting-edge data analytics
                      and AI technologies, we empower businesses to achieve
                      sustainability goals efficiently.
                    </p>
                  </div>
                </Col>
                <Col sm={12} className={`py-md-0 mt-4 ${styles.parent_box}`}>
                  <div className={`${styles.content_section_parent_left} `}>
                    <h2 className={`${styles.title_desktop}`}>
                      <strong>Future of Manufacturing</strong>
                    </h2>
                    <p style={{ lineHeight: "1.8", paddingTop: "1rem" }}>
                      Harnessing cutting-edge data science and machine learning
                      advancements from precision medicine to autonomous
                      systems, aerospace simulations, and industrial automation,
                      we strategically tackle industry-specific challenges. Our
                      approach drives scalable solutions that optimize
                      operational efficiency and redefine innovation standards.
                    </p>
                  </div>
                  <div className={`${styles.img_section_parent} `}>
                    <img
                      src={Future_of_Manufacturing}
                      className={`${styles.img_section} `}
                      width={"100%"}
                      alt=""
                      style={{ transform: "scaleX(-1)" }}
                    />
                  </div>
                </Col>
                <Col sm={12} className={`py-md-0 mt-3 ${styles.parent_box}`}>
                  <div className={`${styles.img_section_parent} `}>
                    <img
                      src={Future_of_Applied_AI}
                      className={`${styles.img_section} `}
                      width={"100%"}
                      alt=""
                    />
                  </div>
                  <div className={`${styles.content_section_parent_right} `}>
                    <h2 className={`${styles.title_desktop}`}>
                      <strong>Future of Applied AI</strong>
                    </h2>
                    <p style={{ lineHeight: "1.8", paddingTop: "1rem" }}>
                      Strategically applying advanced data science and machine
                      learning technologies to tackle industry-specific
                      challenges in precision medicine, autonomous systems,
                      aerospace simulations, and industrial automation. Our
                      approach is meticulously designed to optimize performance
                      and innovation across diverse sectors.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </Container>
      )}

      <Container fluid className={`pt-2`}>
        <img
          src={meta}
          alt=""
          width={"100%"}
          style={{ width: "100%", height: "60vh", objectFit: "cover" }}
        />
      </Container>

      <Container fluid className={`${isMobile ? `pt-5 pb-5` : `pt-2`}`}>
        <section>
          <Container className="mt-md-4 mt-0">
            <Row
              className={`d-flex align-items-center ${
                isMobile ? `my-1` : `my-5`
              } `}
            >
              <Col
                sm={12}
                className={`${isMobile ? `py-md-0 ` : `py-md-0 py-5`}`}
              >
                <div>
                  {/* <p className={styles?.sub_title}>
                  <strong>Analytics</strong>
                </p> */}
                  <p className={styles?.title}>
                    {
                      "How GWC DATA.AI's Research and Innovation Can Benefit You "
                    }
                  </p>

                  <p className={`${styles?.text1} mt-2`}>
                    Discover the strategic advantages of partnering with GWC
                    DATA.AI, where our commitment to research and innovation is
                    tailored to amplify your business impact. Through rigorous
                    exploration and pioneering methodologies, we navigate the
                    complexities of your industry, uncovering insights that
                    drive informed decision-making. Our collaborative approach
                    ensures that we not only meet but exceed your expectations,
                    delivering bespoke solutions that propel growth and
                    operational excellence.
                  </p>
                </div>
              </Col>

              <Col
                sm={12}
                className={`${
                  isMobile
                    ? `${`py-md-0 mt-3 ${styles.padding_0} ${styles.parent_box_2}`}`
                    : `${`py-md-0 mt-5  ${styles.parent_box_2}`}`
                }`}
              >
                <div className={`${styles.img_section_parent_2} `}>
                  <img
                    src={Experimentation}
                    className={`${
                      isMobile
                        ? `${styles.img_section_2_Mobile}`
                        : `${styles.img_section_2}`
                    }`}
                    width={"100%"}
                    alt=""
                  />
                </div>
                <div
                  className={`${
                    isMobile
                      ? `text-center ${styles.content_section_parent_2_Mobile}`
                      : `${styles.content_section_parent_2}`
                  } `}
                >
                  <h2 className={`${styles.title_desktop}`}>
                    <strong>Experimentation</strong>
                  </h2>
                  <p style={{ lineHeight: "1.8", paddingTop: "1rem" }}>
                    Harnessing our expertise in cutting-edge technologies—AI, 3D
                    printing, drones, robotics, and big data—we pioneer the
                    design and prototyping of innovative concepts and compelling
                    value propositions. Continually ahead of evolving trends, we
                    champion experimentation and innovation, forging new paths
                    in research and development.
                  </p>
                </div>
              </Col>

              {/* <Col sm={12} className={`py-md-0 mt-4 ${styles.parent_box}`}>
                <div className={`${styles.content_section_parent_2} `}>
                  <h4>
                    <strong>Future of Manufacturing</strong>
                  </h4>
                  <p style={{ lineHeight: "1.8", paddingTop: "1rem" }}>
                    Harnessing cutting-edge data science and machine learning
                    advancements from precision medicine to autonomous systems,
                    aerospace simulations, and industrial automation, we
                    strategically tackle industry-specific challenges. Our
                    approach drives scalable solutions that optimize operational
                    efficiency and redefine innovation standards. Join us as we
                    pave the way towards a transformative era in manufacturing,
                    where technology and data converge to revolutionize global
                    industries.
                  </p>
                </div>
                <div className={`${styles.img_section_parent} `}>
                  <img
                    src={AboutUS_ventures}
                    className={`${styles.img_section} `}
                    width={"100%"}
                    alt=""
                  />
                </div>
              </Col> */}
              <Col
                sm={12}
                className={`${
                  isMobile
                    ? `${`py-md-0 mt-5 ${styles.padding_0} ${styles.parent_box_2}`}`
                    : `${`py-md-0 mt-5  ${styles.parent_box_2}`}`
                }`}
              >
                <div className={`${styles.img_section_parent_2} `}>
                  <img
                    src={Research_and_Ideation}
                    className={`${
                      isMobile
                        ? `${styles.img_section_2_Mobile}`
                        : `${styles.img_section_2}`
                    }`}
                    width={"100%"}
                    alt=""
                  />
                </div>
                <div
                  className={`${
                    isMobile
                      ? `text-center ${styles.content_section_parent_2_Mobile}`
                      : `${styles.content_section_parent_2}`
                  } `}
                >
                  <h2 className={`${styles.title_desktop}`}>
                    <strong>Research and Ideation</strong>
                  </h2>
                  <p style={{ lineHeight: "1.8", paddingTop: "1rem" }}>
                    our collaborative efforts decode disruptive trends,
                    cultivate groundbreaking ideas, and forecast new horizons
                    for growth. At the heart of our approach lies a commitment
                    to innovation, crafting tailored solutions that navigate the
                    intricacies of modern challenges with precision and insight.
                    By embracing complexity, we forge pathways to redefine
                    paradigms and drive impactful research and ideation.
                  </p>
                </div>
              </Col>
              <Col
                sm={12}
                className={`${
                  isMobile
                    ? `${`py-md-0 mt-5 ${styles.padding_0} ${styles.parent_box_2}`}`
                    : `${`py-md-0 mt-5  ${styles.parent_box_2}`}`
                }`}
              >
                <div className={`${styles.img_section_parent_2} `}>
                  <img
                    src={Open_Innovation}
                    className={`${
                      isMobile
                        ? `${styles.img_section_2_Mobile}`
                        : `${styles.img_section_2}`
                    }`}
                    width={"100%"}
                    alt=""
                  />
                </div>
                <div
                  className={`${
                    isMobile
                      ? `text-center ${styles.content_section_parent_2_Mobile}`
                      : `${styles.content_section_parent_2}`
                  } `}
                >
                  <h2 className={`${styles.title_desktop}`}>
                    <strong>Open Innovation</strong>
                  </h2>
                  <p style={{ lineHeight: "1.8", paddingTop: "1rem" }}>
                    At the core of our philosophy lies open innovation, a
                    dynamic bridge connecting clients to Australia's vibrant
                    innovation ecosystem. We orchestrate seamless partnerships
                    with startups, technology pioneers, students, and esteemed
                    universities. Through dynamic platforms like hackathons,
                    app-a-thons, maker events, and curated meet-ups.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default InnovationLabs;
