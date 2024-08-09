import React, { useEffect, useRef, useState } from "react";
import styles from "../../commoncss/Home.module.css";

import demo from "../../assets/images/HomePartner/Domo.png";
import snoflakes from "../../assets/images/HomePartner/snoflakes.png";
import gcp from "../../assets/images/HomePartner/gcp.png";
import bomi from "../../assets/images/HomePartner/bomi.png";
import atlan from "../../assets/images/HomePartner/atlan.png";
import dbt from "../../assets/images/HomePartner/dbt.png";
import fivetran from "../../assets/images/HomePartner/fivetran.png";
import looker from "../../assets/images/HomePartner/looker.png";
import salesforce from "../../assets/images/HomePartner/salesforce.png";
import tableau from "../../assets/images/HomePartner/tableau.png";
import partner10 from "../../assets/images/HomePartner/alation.png";

import { Form } from "react-bootstrap";
import { HomePartnersData } from "./HomePartnersData";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import { useLocation } from "react-router-dom";
AOS.init({
  duration: 1500,
});

const HomePartners2 = () => {
  const [selectedOption, setSelectedOption] = useState("domo");
  const [allowScroll, setAllowScroll] = useState(false);
  const partnersSectionRef = useRef(null);
  // console.log("selectedOption", selectedOption);

  //  useEffect(() => {
  //   const handleScroll = () => {
  //     const partnersSection = partnersSectionRef.current;
  //     const partnersSectionTop = partnersSection.offsetTop;

  //     const scrollPosition = window.scrollY;

  //     if (scrollPosition >= partnersSectionTop && selectedOption !== "boomi") {

  //       window.scrollTo({ top: partnersSectionTop, behavior: 'smooth' });

  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const solutionsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#our-partners" && solutionsRef.current) {
      solutionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div
      className={styles.featuresSection3}
      id="our-partners"
      ref={solutionsRef}
    >
      <div className={styles.content2} ref={partnersSectionRef}>
        <div className={`${styles.heading4} text-white mt-1`}>
          <span
            className={styles.whoAreWith}
          >{` Our Trusted Network of Partners `}</span>
        </div>
        <Container
          className="my-3 py-md-4 py-3 bg-white rounded-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Row className="" data-aos="flip-down">
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                data-aos="fade-right"
                src={demo}
                alt="DOMO logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={9} data-aos="fade-left">
              <h1 className="fixed_heading"> DOMO </h1>
              <p className="">
                As the exclusive implementation partner for DOMO, we take pride
                in delivering end-to-end data analytics services. Our expertise
                extends beyond implementation, ensuring clients receive a
                comprehensive solution tailored to their unique needs, covering
                the entire spectrum of data analytics.
              </p>
              <h2>Capabilities</h2>
              {/* <div className="badge_box">Data Integrations</div> */}
              <div className={styles.badgeParent}>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Data Integrations</div>
                  </div>
                </div>

                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>BI & Analytics</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>App Creation</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Security & Governance</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Embedded Analytics</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container
          className="my-3 py-md-4 py-3 bg-white rounded-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Row className="" data-aos="flip-down">
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                data-aos="fade-right"
                src={gcp}
                alt="GCP Partner logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={9} data-aos="fade-left">
              <h1 className="fixed_heading"> GCP </h1>
              <p className="">
                As a GCP partner, we specialize in crafting robust solutions
                that harness the advanced services of Google Cloud Platform.
                From Machine Learning models to sophisticated data analytics, we
                navigate the evolving landscape of data and AI on GCP,
                empowering businesses with actionable insights for
                transformative intelligence.
              </p>
              <h2>Capabilities</h2>
              {/* <div className="badge_box">Data Integrations</div> */}
              <div className={styles.badgeParent}>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Data Storage & Processing
                    </div>
                  </div>
                </div>

                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>IoT</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Serverless Computing</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Machine Learning & AI</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Containers & Kubernetes
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container
          className="my-3 py-md-4 py-3 bg-white rounded-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Row className="" data-aos="flip-down">
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                data-aos="fade-right"
                src={snoflakes}
                alt="Snowflake Partner logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={9} data-aos="fade-left">
              <h1 className="fixed_heading"> Snowflake </h1>
              <p className="">
                GWC excels as a Snowflake partner. We leverage Snowflake's
                robust infrastructure and provide bespoke solutions across the
                spectrum of Data & AI applications. From Machine Learning to
                comprehensive data analytics, our commitment to innovation
                empowers businesses to derive actionable insights, optimize
                operations, and drive strategic decision-making.
              </p>
              <h2>Capabilities</h2>
              {/* <div className="badge_box">Data Integrations</div> */}
              <div className={styles.badgeParent}>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Data Integration</div>
                  </div>
                </div>

                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Advanced Analytics</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Data Warehousing</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Optimized Operations</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>AI-driven Initiatives</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container
          className="my-3 py-md-4 py-3 bg-white rounded-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Row className="" data-aos="flip-down">
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                data-aos="fade-right"
                src={salesforce}
                alt="Salesforce logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={9} data-aos="fade-left">
              <h1 className="fixed_heading"> Salesforce </h1>
              <p className="">
                GWC stands as the premier destination for comprehensive
                Salesforce solutions. Our expertise lies in effortlessly
                converting manual processes into streamlined, efficient
                workflows with just a few clicks. As your dedicated CRM Partner,
                GWC propels your business towards unparalleled success.
              </p>
              <h2>Capabilities</h2>
              {/* <div className="badge_box">Data Integrations</div> */}
              <div className={styles.badgeParent}>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Solution Architecting</div>
                  </div>
                </div>

                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Data Management</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Lightning Web Component
                    </div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Automation Tools</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Payment Gateway</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Aura Components</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container
          className="my-3 py-md-4 py-3 bg-white rounded-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Row className="" data-aos="flip-down">
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                data-aos="fade-right"
                src={fivetran}
                alt="Fivetran logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={9} data-aos="fade-left">
              <h1 className="fixed_heading"> Fivetran </h1>
              <p className="">
                Our seasoned team of Fivetran experts assists in dashboard
                creation, metric development, cost and time reduction, and
                enhancing data literacy and insights. Leveraging Fivetran's
                automated data movement platform, we deliver customized and
                efficient data solutions tailored to your business requirements.
              </p>
              <h2>Capabilities</h2>
              {/* <div className="badge_box">Data Integrations</div> */}
              <div className={styles.badgeParent}>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Data Security</div>
                  </div>
                </div>

                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Automated Transformations
                    </div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Reliable Data Quality</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Scalable Data Growth</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container
          className="my-3 py-md-4 py-3 bg-white rounded-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Row className="" data-aos="flip-down">
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                data-aos="fade-right"
                src={dbt}
                alt="dbt logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={9} data-aos="fade-left">
              <h1 className="fixed_heading"> DBT </h1>
              <p className="">
                At GWC Analytics, our dbt (data build tool) team is redefining
                the way we handle data transformation and modeling. With dbt, we
                turn raw data into valuable, actionable insights, empowering
                businesses to make data-driven decisions with confidence.
              </p>
              <h2>Capabilities</h2>
              {/* <div className="badge_box">Data Integrations</div> */}
              <div className={styles.badgeParent}>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      {" "}
                      DBT Implementation and Setup
                    </div>
                  </div>
                </div>

                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Data Transformation Development
                    </div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Data Quality and Testing
                    </div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Consulting and Best Practices
                    </div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Migration Services</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container
          className="my-3 py-md-4 py-3 bg-white rounded-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Row className="" data-aos="flip-down">
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                data-aos="fade-right"
                src={looker}
                alt="looker logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={9} data-aos="fade-left">
              <h1 className="fixed_heading"> Looker </h1>
              <p className="">
                Unlock the full potential of your team with GWC’s Looker BI
                solution, enabling seamless exploration, analysis, and
                visualization of data. Experience the power of streamlined data
                insights with our comprehensive Looker BI solution.
              </p>
              <h2>Capabilities</h2>
              {/* <div className="badge_box">Data Integrations</div> */}

              <div className={styles.badgeParent}>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}> Business Intelligence</div>
                  </div>
                </div>

                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Data-powered Applications
                    </div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Embedded Analytics</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Data Modeling</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Enhanced Collaboration</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Enhanced Decision-making
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container
          className="my-3 py-md-4 py-3 bg-white rounded-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Row className="" data-aos="flip-down">
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                data-aos="fade-right"
                src={partner10}
                alt="Alation logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={9} data-aos="fade-left">
              <h1 className="fixed_heading"> Alation </h1>
              <p className="">
                GWC's proficiency in Alation empowers you to cultivate a robust
                data culture. Our capabilities enable every member of your
                organization to seamlessly discover, comprehend, and confidently
                trust in data. Experience the transformative power of Alation
                with GWC by your side.
              </p>
              <h2>Capabilities</h2>
              {/* <div className="badge_box">Data Integrations</div> */}

              <div className={styles.badgeParent}>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      {" "}
                      Active Data Governance
                    </div>
                  </div>
                </div>

                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>AI & ML</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Cloud Data Migration</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Data Quality</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Metadata Management</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container
          className="my-3 py-md-4 py-3 bg-white rounded-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Row className="" data-aos="flip-down">
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                data-aos="fade-right"
                src={tableau}
                alt="Tableau Solutions Logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={9} data-aos="fade-left">
              <h1 className="fixed_heading"> Tableau </h1>
              <p className="">
                GWC boasts a solid history of translating intricate data into
                enlightening visualizations that drive informed decision-making.
                We meticulously strategize and expand Tableau solutions in
                alignment with clients' evolving requirements, maximizing
                resource utilization and delivering sustained
                cost-effectiveness.
              </p>
              <h2>Capabilities</h2>
              {/* <div className="badge_box">Data Integrations</div> */}

              <div className={styles.badgeParent}>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      {" "}
                      Strategic Data Visualization
                    </div>
                  </div>
                </div>

                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Optimized Data Integration
                    </div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Advanced Analytics</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Predictive Modelling & Forecasting
                    </div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>
                      Proactive Troubleshooting & Support
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container
          className="my-3 py-md-4 py-3 bg-white rounded-3 d-flex align-items-center justify-content-center"
          data-aos="zoom-in"
        >
          <Row className="" data-aos="flip-down">
            <Col
              md={3}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                data-aos="fade-right"
                src={bomi}
                alt="Boomi Integration Solutions Logo"
                style={{
                  height: "200px",
                  width: "200px",
                  objectFit: "contain",
                }}
              />
            </Col>
            <Col md={9} data-aos="fade-left">
              <h1 className="fixed_heading"> Boomi </h1>
              <p className="">
                At GWC, we specialize in Boomi, the foremost integration
                platform engineered to seamlessly connect applications, data,
                and devices. With our deep-rooted experience and expertise, we
                take pride in delivering tailored Boomi solutions to businesses
                spanning diverse industries.
              </p>
              <h2>Capabilities</h2>
              {/* <div className="badge_box">Data Integrations</div> */}

              <div className={styles.badgeParent}>
                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}> Integration</div>
                  </div>
                </div>

                <div className={styles.badge} data-aos="fade-right">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>API Management</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>Master Data Hub</div>
                  </div>
                </div>
                <div className={styles.badge} data-aos="fade-left">
                  <div className={styles.badgeBase}>
                    <div className={styles.text163}>B2B/EDI Management</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePartners2;
