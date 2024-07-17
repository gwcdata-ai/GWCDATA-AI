import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { dataExplainedGCPServices } from "./data";
import img1 from "../../../../assets/images/ProductDemo/PrincipalDomo/GoogleComputeEngine.webp";

// CSS
import styles from "./GCPServicesFeatureList.module.css";
import useMedia from "../../../../hooks/useMedia";

export const GCPServicesFeatureList = ({ dataList }) => {
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    name: "Google Compute Engine",
    image: img1,
    description:
      "Google Compute Engine is an Infrastructure as a Service (IaaS) offering that allows users to run virtual machines (VMs) on Google's infrastructure. It provides scalable and flexible computing resources, allowing you to easily deploy and manage virtual machines in the cloud. Compute Engine is suitable for a wide range of workloads, including web hosting, application development, and data processing. ",
  });
  const tbs = document.getElementsByClassName("tb");
  const tbsMobile = document.getElementsByClassName("tbm");
  const handleItemClick = (itemName, seltab) => {
    // console.log('this is ', seltab);
    if (isMobile) {
      // console.log('tbsMobile',tbsMobile);
      if (tbsMobile[0].classList.contains("active")) {
        tbsMobile[0].classList.remove("active");
      }

      Array.from(tbsMobile).forEach((elem) => {
        // console.log('foreach', elem);
        if (elem.classList.contains("tbm")) {
          elem.classList.remove("active");
        }
      });
      seltab.classList.add("active");
    } else {
      // for desktop
      // console.log('tbs[0].classList',tbs);
      if (tbs[0].classList.contains("active")) {
        tbs[0].classList.remove("active");
      }
      Array.from(tbs).forEach((elem) => {
        // console.log('foreach', elem);
        if (elem.classList.contains("tb")) {
          elem.classList.remove("active");
        }
      });

      seltab.classList.add("active");
    }
    setSelectedItem(itemName);
  };

  const isMobile = useMedia("(max-width:600px)");

  // console.log(dataList);
  return (
    <Container fluid className="pb-5">
      <section className="">
        <Container className={`${styles.DataGovernanceListCards}`}>
          {isMobile ? (
            dataList?.map((item, index) => {
              return (
                <div key={index} className={`w-100 mb-md-0 mb-2 `}>
                  <div
                    onClick={(event) =>
                      handleItemClick(item, event.currentTarget)
                    }
                    className={`px-1 ${
                      item?.className === "first" ? `active` : ""
                    } tbm ${styles.list} mb-md-3 mb-1`}
                  >
                    {" "}
                    <h2
                      className="px-1"
                      style={{ cursor: "pointer", fontSize: "16px" }}
                    >
                      {" "}
                      {item?.name}{" "}
                    </h2>{" "}
                  </div>
                </div>
              );
            })
          ) : (
            <Row className="">
              {dataList?.map((item, index) => {
                return (
                  <Col
                    md={3}
                    key={index}
                    className={`mb-md-0 mb-2 `}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      onClick={(event) =>
                        handleItemClick(item, event.currentTarget)
                      }
                      className={`px-1 ${styles.list} mb-md-3 mb-1 tb ${
                        item?.className === "first" ? `active` : ""
                      }`}
                    >
                      {" "}
                      <h2 className={` px-1`} style={{ fontSize: "20px" }}>
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
        <Row className="d-flex align-items-center justify-content-center mt-4">
          <Col lg={5} md={6} className="px-md-0">
            <img
              src={selectedItem?.image}
              alt=""
              className="w-100 mx-lg-3 rounded-4"
            />
          </Col>
          <Col lg={7} md={6} className="px-md-5 pt-md-0 pt-5">
            <div className="">
              {/* <p className={styles?.feat_sub_title}>
                <strong>Analytics Features</strong>
              </p> */}
              <p className={styles?.feat_title}>{selectedItem?.name} </p>

              <p className={styles?.feat_text}>{selectedItem?.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
