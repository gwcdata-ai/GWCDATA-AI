import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import img1 from "../../../assets/images/ProductDemo/PrincipalDomo/Principal1.png";

// CSS
import styles from "./dataGovernance.module.css";
import useMedia from "../../../hooks/useMedia";

export const DataGovernanceList = ({ dataList }) => {
  const isMobile = useMedia("(max-width:600px)");
  const [selectedItem, setSelectedItem] = useState({});
  const tbs =  document.querySelectorAll('.tb');
  const tbsMobile =  document.getElementsByClassName('tbm');



  const funSelectedlist = (item,seltab) => {
    // console.log('this is ', seltab);
    
    if(isMobile)
      {
        // console.log('tbsMobile',tbsMobile);
    if (tbsMobile[0].classList.contains('active')) {
      tbsMobile[0].classList.remove('active');
    }

    Array.from(tbsMobile).forEach(elem => {
      // console.log('foreach', elem);
      if (elem.classList.contains('tbm')) {
        elem.classList.remove('active');
      }
    });
    seltab.classList.add('active');
      }
    else{
      // for desktop
      if (tbs[0].classList.contains('active')) {
        tbs[0].classList.remove('active');
      }
      tbs.forEach(tb => {
        if (tb.classList.contains('tb')) {
          tb.classList.remove('active');
        }
        // console.log('foreach', tb.classList);
      });
      seltab.classList.add('active');
      }
    setSelectedItem(item);
  };

  useEffect(() => {
    setSelectedItem(dataList[0]);
  }, []);

  // console.log(dataList);
  return (
    <Container fluid className="">
      <section className="">
        <Container className={`${styles.DataGovernanceListCards}`}>
          {/* <h2 className="heading_skill">Skill Set</h2> */}
          {isMobile ? (
            dataList?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-100 mb-md-0 mb-2 `}
                 
                >
                  <div  onClick={(event) => funSelectedlist(item,event.currentTarget)} 
                  className={`px-1 ${item?.className === 'first' ? `active` : ''} tbm ${styles.list} mb-md-3 mb-1`}>
                    {" "}
                    <div className="px-1 "> {item?.name} </div>{" "}
                  </div>
                </div>
              );
            })
          ) : (
            <div
              style={{ display: "flex", flexWrap: "wrap" }}
              className={`mb-md-0 mb-1 mt-3`}
            >
              {dataList.map((item, index) => (
                <div
                  key={index}
                  style={{
                    flex:
                      dataList?.length === 10
                        ? "0 0 calc(17.7% - 10px)"
                        : dataList?.length === 8
                          ? "0 0 calc(22.7% - 10px)"
                          : dataList?.length === 6
                            ? "0 0 calc(31.6% - 10px)"
                            : "", // Adjust width as needed
                    margin: "12px",
                    cursor: "pointer",
                  }}
                  className={`p-2 tb ${item.className === 'first' ? `active` : ''} ${styles.list} mb-md-3 mb-1 `}
                  onClick={(event) => funSelectedlist(item,event.currentTarget)}>
                  {item?.name}
                </div>
              ))}
            </div>
          )}
        </Container>
        <Container>
          <Row className="d-flex align-items-center justify-content-center mt-5 mb-3  ">
            <Col lg={4} md={6} className="px-md-0">
              <img
                src={selectedItem?.image}
                alt=""
                className="w-100 mx-lg-3 rounded-4 mt-lg-3"
              />
            </Col>
            <Col lg={8} md={6} className="px-md-5 pt-md-0 pt-5">
              <div className="">
                {/* <p className={styles.feat_sub_title}> {selectedItem.name} </p> */}
                <h2 className={styles?.feat_title}>
                  {" "}
                  {selectedItem?.description_title}{" "}
                </h2>
                <ul style={{lineHeight:'2px'}}>
                  {selectedItem?.description_list?.map((item,index) => (
                    <li key={index} className={styles?.feat_text}> {item} </li>
                  ))}
                </ul>
                {/* <p className={styles?.feat_text}>{selectedItem?.description_list}</p> */}
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </Container>
  );
};
