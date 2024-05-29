import React, { useEffect, useRef } from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../commoncss/Home.module.css";
import partner1 from "../../assets/images/HomePartner/Partner1.svg";

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
import { useLocation } from "react-router-dom";

// import ScrollMagic from 'scrollmagic';

const FixedScroll = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave",
        duration: "100%",
      },
    });

    const slides = document.querySelectorAll("section.panel");

    slides.forEach((slide) => {
      new ScrollMagic.Scene({
        triggerElement: slide,
      })
        .setPin(slide, { pushFollowers: false })
        .addTo(controller);
    });
  }, []);
  const solutionsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#our-partners" && solutionsRef.current) {
      solutionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <>
      <Container fluid className="p-0 m-0 mb-5 mb-lg-0 pb-5 pb-lg-0" id="our-partners" ref={solutionsRef}>
        {/* <div class="blank_row">Scroll Me</div> */}
        {/* <div class="blank_row">Scroll Me</div>
                    <div class="blank_row">Scroll Me</div> */}

        <section class="panel blue">
          {/* <div
            className={styles.headingAndSubheading7}
            style={{ paddingTop: 30, marginLeft: 100 }}
          >
            
            <div className={`${styles.heading4} text-white`}>
              <span
                className={styles.whoAreWith}
              >{` Our Trusted Network of Partners `}</span>
            </div>
          </div> */}
          <Row className="center_align_ment">
            <Col lg={4} className=" m-auto center__dev">
              <div className="">
                <img
                  src={demo}
                  className="fixed_image"
                  style={{ height: "200px", width: "200px", marginTop: "18px" }}
                />
              </div>
            </Col>
            <Col lg={7} className="">
              <div className="fixed_para">
                <h1 className="fixed_heading"> DOMO </h1>
                <p className="">
                  As the exclusive implementation partner for DOMO, we take
                  pride in delivering end-to-end data analytics services. Our
                  expertise extends beyond implementation, ensuring clients
                  receive a comprehensive solution tailored to their unique
                  needs, covering the entire spectrum of data analytics.
                </p>
                <h2>Capabilities</h2>
                {/* <div className="badge_box">Data Integrations</div> */}
                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Data Integrations</div>
                    </div>
                  </div>

                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>BI & Analytics</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>App Creation</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Security & Governance
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Embedded Analytics</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </section>
        <section class="panel pink">
          <Row className="center_align_ment">
            <Col lg={4} className=" m-auto center__dev">
              <div className="">
                <img
                  src={gcp}
                  className="fixed_image"
                  style={{ height: "200px", width: "200px", marginTop: "18px" }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="fixed_para">
                <h1> GCP</h1>
                <p>
                  As a GCP partner, we specialize in crafting robust solutions
                  that harness the advanced services of Google Cloud Platform.
                  From Machine Learning models to sophisticated data analytics,
                  we navigate the evolving landscape of data and AI on GCP,
                  empowering businesses with actionable insights for
                  transformative intelligence.
                </p>
                <h2>Capabilities</h2>

                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Data Storage & Processing
                      </div>
                    </div>
                  </div>

                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>IoT</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Serverless Computing</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Machine Learning & AI
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Containers & Kubernetes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </section>
        <section class="panel green">
          <Row className="center_align_ment">
            <Col lg={4} className=" m-auto center__dev">
              <div className="">
                <img
                  src={snoflakes}
                  className="fixed_image"
                  style={{ height: "200px", width: "200px", marginTop: "18px" }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="fixed_para">
                <h1> Snowflake</h1>
                <p>
                  GWC excels as a Snowflake partner. We leverage Snowflake's
                  robust infrastructure and provide bespoke solutions across the
                  spectrum of Data & AI applications. From Machine Learning to
                  comprehensive data analytics, our commitment to innovation
                  empowers businesses to derive actionable insights, optimize
                  operations, and drive strategic decision-making.
                </p>
                <h2>Capabilities</h2>
                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Data Integration</div>
                    </div>
                  </div>

                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Advanced Analytics</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Data Warehousing</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Optimized Operations</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        AI-driven Initiatives
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </section>
        <section class="panel red">
          <Row className="center_align_ment">
            <Col lg={4} className=" m-auto center__dev">
              <div className="">
                <img
                  src={salesforce}
                  className="fixed_image"
                  style={{ height: "200px", width: "200px", marginTop: "18px" }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="fixed_para">
                <h1> Salesforce</h1>
                <p>
                  GWC stands as the premier destination for comprehensive
                  Salesforce solutions. Our expertise lies in effortlessly
                  converting manual processes into streamlined, efficient
                  workflows with just a few clicks. As your dedicated CRM
                  Partner, GWC propels your business towards unparalleled
                  success.
                </p>
                <h2>Capabilities</h2>

                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Solution Architecting
                      </div>
                    </div>
                  </div>

                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Data Management</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Lightning Web Component
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Automation Tools</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Payment Gateway</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Aura Components</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </section>

        <section class="panel red">
          <Row className="center_align_ment">
            <Col lg={4} className=" m-auto center__dev">
              <div className="">
                <img
                  src={fivetran}
                  className="fixed_image"
                  style={{ height: "200px", width: "200px", marginTop: "18px" }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="fixed_para">
                <h1> Fivetran</h1>
                <p>
                  Our seasoned team of Fivetran experts assists in dashboard
                  creation, metric development, cost and time reduction, and
                  enhancing data literacy and insights. Leveraging Fivetran's
                  automated data movement platform, we deliver customized and
                  efficient data solutions tailored to your business
                  requirements.
                </p>
                <h2>Capabilities</h2>

                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Data Security</div>
                    </div>
                  </div>

                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Automated Transformations
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Reliable Data Quality
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Scalable Data Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </section>

        <section class="panel red">
          <Row className="center_align_ment">
            <Col lg={4} className=" m-auto center__dev">
              <div className="">
                <img
                  src={dbt}
                  className="fixed_image"
                  style={{ height: "200px", width: "200px", marginTop: "18px" }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="fixed_para">
                <h1> DBT</h1>
                <p>
                At GWC Analytics, our dbt (data build tool) team is redefining the way we handle data transformation and modeling. With dbt, we turn raw data into valuable, actionable insights, empowering businesses to make data-driven decisions with confidence.
                </p>
                <h2>Capabilities</h2>

                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}> Dbt Implementation and Setup</div>
                    </div>
                  </div>

                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Data Transformation Development
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Data Quality and Testing
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Consulting and Best Practices
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Migration Services</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </section>
        <section class="panel red">
          <Row className="center_align_ment">
            <Col lg={4} className=" m-auto center__dev">
              <div className="">
                <img
                  src={looker}
                  className="fixed_image"
                  style={{ height: "200px", width: "200px", marginTop: "18px" }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="fixed_para">
                <h1> Looker</h1>
                <p>
                  Unlock the full potential of your team with GWC’s Looker BI
                  solution, enabling seamless exploration, analysis, and
                  visualization of data. Experience the power of streamlined
                  data insights with our comprehensive Looker BI solution.
                </p>
                <h2>Capabilities</h2>

                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        {" "}
                        Business Intelligence
                      </div>
                    </div>
                  </div>

                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Data-powered Applications
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Embedded Analytics</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Data Modeling</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Enhanced Collaboration
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Enhanced Decision-making
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </section>
        <section class="panel red">
          <Row className="center_align_ment">
            <Col lg={4} className=" m-auto center__dev">
              <div className="">
                <img
                  src={partner10}
                  className="fixed_image"
                  style={{ height: "200px", width: "200px", marginTop: "18px" }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="fixed_para">
                <h1> Alation </h1>
                <p>
                  GWC's proficiency in Alation empowers you to cultivate a
                  robust data culture. Our capabilities enable every member of
                  your organization to seamlessly discover, comprehend, and
                  confidently trust in data. Experience the transformative power
                  of Alation with GWC by your side.
                </p>
                <h2>Capabilities</h2>

                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        {" "}
                        Active Data Governance
                      </div>
                    </div>
                  </div>

                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>AI & ML</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Cloud Data Migration</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Data Quality</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Metadata Management</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </section>
        <section class="panel red">
          <Row className="center_align_ment">
            <Col lg={4} className=" m-auto center__dev">
              <div className="">
                <img
                  src={tableau}
                  className="fixed_image"
                  style={{ height: "200px", width: "200px", marginTop: "18px" }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="fixed_para">
                <h1> Tableau </h1>
                <p>
                  GWC boasts a solid history of translating intricate data into
                  enlightening visualizations that drive informed
                  decision-making. We meticulously strategize and expand Tableau
                  solutions in alignment with clients' evolving requirements,
                  maximizing resource utilization and delivering sustained
                  cost-effectiveness.
                </p>
                <h2>Capabilities</h2>

                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        {" "}
                        Strategic Data Visualization
                      </div>
                    </div>
                  </div>

                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Optimized Data Integration
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Advanced Analytics</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Predictive Modelling & Forecasting
                      </div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>
                        Proactive Troubleshooting & Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </section>

        <section class="panel red">
          <Row className="center_align_ment">
            <Col lg={4} className=" m-auto center__dev">
              <div className="">
                <img
                  src={bomi}
                  className="fixed_image"
                  style={{ height: "200px", width: "200px", marginTop: "18px" }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="fixed_para">
                <h1> Boomi</h1>
                <p>
                  At GWC, we specialize in Boomi, the foremost integration
                  platform engineered to seamlessly connect applications, data,
                  and devices. With our deep-rooted experience and expertise, we
                  take pride in delivering tailored Boomi solutions to
                  businesses spanning diverse industries.
                </p>
                <h2>Capabilities</h2>

                <div className={styles.badgeParent}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}> Integration</div>
                    </div>
                  </div>

                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>API Management</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>Master Data Hub</div>
                    </div>
                  </div>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text163}>B2B/EDI Management</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </section>

        <div class="blank_row" style={{ display: "hidden" }}>
          Scroll Me
        </div>
        {/* <div class="blank_row">Scroll Me</div>
                    <div class="blank_row">Scroll Me</div> */}
      </Container>
    </>
  );
};

export default FixedScroll;
