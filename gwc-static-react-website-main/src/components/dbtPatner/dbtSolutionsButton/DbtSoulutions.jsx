import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// CSS
import styles from "../../../components/solutions/dataGovernancelist/dataGovernance.module.css";
import useMedia from "../../../hooks/useMedia";

const DbtSoulutions = ({ dataLists }) => {
  const isMobile = useMedia("(max-width:600px)");
  const [selectedItem, setSelectedItem] = useState({});
  const tbs = document.getElementsByClassName("tb");
  const tbsMobile = document.getElementsByClassName("tbm");

  const funSelectedlist = (item, seltab) => {
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
    setSelectedItem(item);
  };

  useEffect(() => {
    setSelectedItem(dataLists[0]);
  }, []);

  // console.log(dataLists, "dataLists");

  return (
    <Container fluid className="mt-4">
      <section className="">
        <Container className={`${styles.DataGovernanceListCards}`}>
          {isMobile ? (
            dataLists?.map((item, index) => {
              return (
                <div key={index} className={`w-100 mb-md-0 mb-2 `}>
                  <div
                    onClick={(event) =>
                      funSelectedlist(item, event.currentTarget)
                    }
                    className={`px-1 ${
                      item?.className === "first" ? `active` : ""
                    } tbm ${styles.list} mb-md-3 mb-1`}
                  >
                    {" "}
                    <h3
                      className="px-1"
                      style={{ cursor: "pointer", fontSize: "16px" }}
                    >
                      {" "}
                      {item?.name}{" "}
                    </h3>{" "}
                  </div>
                </div>
              );
            })
          ) : (
            <div
              style={{ display: "flex", flexWrap: "wrap" }}
              className={`mb-md-0 mb-1`}
            >
              {dataLists?.map((item, index) => (
                <h3
                  key={index}
                  style={{
                    flex:
                      dataLists?.length === 10
                        ? "0 0 calc(18.7% - 10px)"
                        : dataLists?.length === 8
                        ? "0 0 calc(23.7% - 10px)"
                        : dataLists?.length === 6
                        ? "0 0 calc(31.6% - 10px)"
                        : "", // Adjust width as needed
                    margin: "12px",
                    cursor: "pointer",
                  }}
                  className={`p-2 ${styles.list} mb-md-3 mb-1 tb ${
                    item?.className === "first" ? `active` : ""
                  }`}
                  onClick={(event) =>
                    funSelectedlist(item, event.currentTarget)
                  }
                >
                  {item?.name}
                </h3>
              ))}
            </div>
          )}
        </Container>
        <Container>
          <Row className="d-flex align-items-center justify-content-center mt-4 mb-5">
            <Col lg={4} md={6} className="px-md-0">
              <img
                src={selectedItem?.image}
                alt=""
                className="w-100 mx-lg-3 rounded-4"
              />
            </Col>
            <Col lg={8} md={6} className="px-md-5 pt-md-0 pt-5">
              <div className="">
                <p className={styles?.feat_title}>
                  {" "}
                  {selectedItem?.description_title}{" "}
                </p>
                <div>
                  {selectedItem?.description_list?.map((item, index) => (
                    // <p className={styles?.feat_text}> {item} </p>
                    <ul key={index}>
                      <li> {item} </li>
                    </ul>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default DbtSoulutions;
