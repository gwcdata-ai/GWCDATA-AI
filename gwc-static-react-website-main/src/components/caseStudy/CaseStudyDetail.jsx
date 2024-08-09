import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import styles from "./case.module.css";
import Facebook from "../../assets/images/Blog/Facebook.svg";
import Twitter from "../../assets/images/Blog/Twitter.svg";
import Linkedin from "../../assets/images/Blog/Linkedin.svg";
import logo from "../../assets/images/Blog/logo.png";

import { useParams } from "react-router-dom";
import { CaseListData } from "./CaseData";

const CaseStudyDetail = () => {
  let { slug } = useParams();
  let item = CaseListData?.find((ele) => {
    return ele.slug == slug;
  });
  // console.log("item", item.caseSubHeading);

  return (
    <Container fluid className={styles.detail_container}>
      <Container className="mb-5">
        <Row>
          <Col md={12}>
            <Row className="mt-0">
              <p className={` ${styles?.title2} `}>{item?.topHeading}</p>
            </Row>

            <Row className={styles.section}>
              <div className="mt-0">
                <img
                  src={item?.caseTopImg}
                  alt={item?.topHeading}
                  className="my-4 w-100"
                />
                <h3 className={` ${styles.blog_main_para} `}>
                  {item?.caseSubHeading}
                </h3>
                <p className={styles.blog_sub_para}>{item?.caseSubPara}</p>

                <ul className={` ${styles.list_section}`}>
                  {item.caseList.map((data) => {
                    const {
                      id,
                      listHeading,
                      listPara,
                      images,
                      listSub,
                      listPoints,
                    } = data;
                    return (
                      <>
                        <li key={id}>
                          {listHeading && (
                            <h6 className={` ${styles.blog_next_para} mb-3`}>
                              {listHeading}
                            </h6>
                          )}
                          {listSub && (
                            <h6 className={` ${styles.blog_next_para2}`}>
                              {listSub}
                            </h6>
                          )}
                          {listPara && (
                            <p className={` ${styles.blog_sub_para}`}>
                              {listPara}
                            </p>
                          )}
                          {listPoints && (
                            <ul>
                              {listPoints?.map((item, index) => (
                                <li
                                  key={index}
                                  className={` ${styles.blog_sub_para} mb-3`}
                                  dangerouslySetInnerHTML={{
                                    __html: item.replace(/\n/g, ""),
                                  }}
                                />
                              ))}
                            </ul>
                          )}

                          {images?.length === 1 &&
                            images?.map((item, index) => (
                              <img
                                key={index}
                                src={item}
                                className="w-50 mt-3 mb-5"
                              />
                            ))}
                          <Row>
                            {images?.length === 2 &&
                              images?.map((item, index) => (
                                <Col lg={5} key={index}>
                                  <img src={item} className="w-100 mb-5" />
                                </Col>
                              ))}
                          </Row>
                          <Row>
                            {images?.length === 3 &&
                              images?.map((item, index) => (
                                <Col key={index} lg={4}>
                                  {" "}
                                  <img src={item} className="w-100 mb-5" />{" "}
                                </Col>
                              ))}
                          </Row>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CaseStudyDetail;
