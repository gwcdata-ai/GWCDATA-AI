import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "./PrincipalDomoFeatureList.module.css";
import useMedia from "../../../../hooks/useMedia";
import img1 from "../../../../assets/images/ProductDemo/PrincipalDomo/Principal1.webp";
import img2 from "../../../../assets/images/ProductDemo/PrincipalDomo/Principal2.webp";
import img3 from "../../../../assets/images/ProductDemo/PrincipalDomo/Principal3.webp";
import img4 from "../../../../assets/images/ProductDemo/PrincipalDomo/Principal4.webp";
import img5 from "../../../../assets/images/ProductDemo/PrincipalDomo/Principal5.webp";
import img6 from "../../../../assets/images/ProductDemo/PrincipalDomo/Principal6.webp";
import img7 from "../../../../assets/images/ProductDemo/PrincipalDomo/Principal7.webp";
import img8 from "../../../../assets/images/ProductDemo/PrincipalDomo/Principal8.webp";

const PrincipalDomoFeatureListData = [
  {
    id: 1,
    name: "Dashboard Creation",
    className: "firsttab",
    description_title: "Dynamic Dashboards to Unleash Business Insights",
    description_list: [
      "Craft dynamic and interactive dashboards tailored to your business needs with Domo's intuitive and user-friendly dashboard creation tools.",
    ],
    image: img7,
    alt: "Dynamic Dashboards to Unleash Business Insights",
  },
  {
    id: 2,
    name: "Data Visualizations",
    description_title: "Harness Actionable Analytics with Data Visualization",
    description_list: [
      "Transform complex data into compelling visual narratives, leveraging Domo's robust data visualization capabilities for insightful and actionable analytics. ",
    ],
    alt: "Harness Actionable Analytics with Data Visualization",
    image: img8,
  },
  {
    id: 3,
    name: "Domo Appstore",
    description_title:
      "Accelerate Analytics with Pre-build Solutions from Appstore",
    description_list: [
      "Explore a diverse array of pre-built apps and solutions within the Domo Appstore, accelerating your analytics journey with ready-to-use functionalities.",
    ],
    alt: "Domo Appstore",
    image: img1,
  },
  {
    id: 4,
    name: "Flexible Data Connections",
    description_title: "Create Seamless Data Connections",
    description_list: [
      "Seamlessly connect and integrate data from various sources, ensuring flexibility and accessibility to diverse datasets for comprehensive analysis.",
    ],
    alt: "Flexible Data Connections",
    image: img2,
  },
  {
    id: 5,
    name: "Flexible Integrations",
    description_title: "Streamline Workflows Efficiently",
    description_list: [
      "Enhance your workflow efficiency by integrating Domo with a variety of third-party applications and services, fostering a cohesive and interconnected data ecosystem.",
    ],
    alt: "Flexible Integrations",
    image: img3,
  },
  {
    id: 6,
    name: "Mobile First",
    description_title: "Access Critical Insights at All Times",
    description_list: [
      "Experience the power of Domo on the go with a mobile-first approach, ensuring access to critical insights anytime, anywhere, directly from your mobile device. ",
    ],
    alt: "Mobile First",
    image: img4,
  },
  {
    id: 7,
    name: "Project Management",
    description_title: "Navigate Success with Efficient Project Oversight",
    description_list: [
      "Streamline project oversight and coordination within the Domo platform, facilitating effective project management to ensure successful and timely completion.",
    ],
    alt: "Project Management",
    image: img5,
  },
  {
    id: 8,
    name: "Sharing & Collaboration",
    description_title: "Enhance Decision-Making with Domo",
    description_list: [
      "Foster a collaborative analytics environment with Domo's sharing features, enabling team members to collaborate, discuss insights, and collectively drive informed decision-making.",
    ],
    alt: "Sharing & Collaboration",
    image: img6,
  },
];

export const PrincipalDomoFeatureList = ({ dataList }) => {
  const isMobile = useMedia("(max-width:600px)");

  const [selectedItem, setSelectedItem] = useState({});

  const tbs = document.querySelectorAll(".tb");
  const tbsMobile = document.getElementsByClassName("tbm");

  const funSelectedlist = (item, seltab) => {
    // console.log('this is ', seltab);

    if (isMobile) {
      // console.log('tbsMobile',tbsMobile);
      if (tbsMobile[0].classList.contains("activeTab")) {
        tbsMobile[0].classList.remove("activeTab");
      }

      Array.from(tbsMobile).forEach((elem) => {
        // console.log('foreach', elem);
        if (elem.classList.contains("tbm")) {
          elem.classList.remove("activeTab");
        }
      });
      seltab.classList.add("activeTab");
    } else {
      // for desktop
      if (tbs[0].classList.contains("activeTab")) {
        tbs[0].classList.remove("activeTab");
      }
      Array.from(tbs).forEach((elem) => {
        // console.log('foreach', elem);
        if (elem.classList.contains("tb")) {
          elem.classList.remove("activeTab");
        }
      });
      // console.log('seltab',seltab);
      seltab.classList.add("activeTab");
    }
    setSelectedItem(item);
    // console.log(item);
  };

  useEffect(() => {
    setSelectedItem(PrincipalDomoFeatureListData[0]);
  }, []);

  // console.log(dataList);
  return (
    <Container fluid className="">
      <section className="">
        <Container className={`${styles.DataGovernanceListCards}`}>
          {isMobile ? (
            PrincipalDomoFeatureListData?.map((item, index) => {
              return (
                <div key={index} className={`w-100 mb-md-0 mb-2 `}>
                  <div
                    onClick={(event) => {
                      funSelectedlist(item, event.currentTarget);
                    }}
                    className={`px-1 ${
                      item?.className === "firsttab" ? `activeTab` : ""
                    } tbm  ${styles.list} mb-md-3 mb-1`}
                  >
                    {" "}
                    <div className="px-1"> {item?.name} </div>{" "}
                  </div>
                </div>
              );
            })
          ) : (
            // <div
            //   style={{ display: "flex", flexWrap: "wrap" }}
            //   className={`mb-md-0 mb-1`}
            // >
            //   {PrincipalDomoFeatureListData.map((item, index) => (
            //     <div
            //       key={index}
            //       style={{
            //         flex: "0 0 calc(18.7% - 10px)", // Adjust width as needed
            //         margin: "12px",
            //         cursor: "pointer",
            //       }}
            //       className={`p-2 ${styles.list} mb-md-3 mb-1`}
            //     >
            //       {item}
            //     </div>
            //   ))}
            // </div>

            <Row className="">
              {PrincipalDomoFeatureListData?.map((item, index) => {
                return (
                  <Col md={3} key={index} className={`mb-md-0 mb-2`}>
                    <div
                      className={`px-1 tb ${
                        item.className === "firsttab" ? `activeTab` : ""
                      }
                      ${styles.list} mb-md-3 mb-1`}
                      style={{ cursor: "pointer" }}
                      onClick={(event) =>
                        funSelectedlist(item, event.currentTarget)
                      }
                    >
                      {" "}
                      <h2 className="px-1" style={{ fontSize: "18px" }}>
                        {" "}
                        {item?.name}{" "}
                      </h2>{" "}
                    </div>
                  </Col>
                );
              })}
            </Row>
          )}
        </Container>
      </section>
      <Container>
        <Row className="d-flex align-items-center justify-content-center my-3 my-md-5">
          <Col lg={4} md={6} className="px-md-0">
            <img
              src={selectedItem?.image}
              alt=""
              className="w-100 mx-lg-3 rounded-4"
            />
          </Col>
          <Col lg={8} md={6} className="px-md-5 pt-md-0 pt-5">
            <div className="">
              {/* <p className={styles?.sub_title}>
                  <strong>Visualizations and Dashboards</strong>
                </p> */}
              <p className={styles?.title}>{selectedItem?.description_title}</p>

              <p className={styles?.text}>{selectedItem?.description_list}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
