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
import styles from "./blog.module.css";
import Facebook from "../../assets/images/Blog/Facebook.svg";
import Twitter from "../../assets/images/Blog/Twitter.svg";
import Linkedin from "../../assets/images/Blog/Linkedin.svg";
import Instagram from "../../assets/images/Blog/Instagram.svg";
import { BlogCardData, BlogCardData2 } from "./data";
import { Link } from "react-router-dom";

const BlogsPosts = ({ blogData }) => {
  return (
    <Container fluid className={styles.container}>
      <Container>
        <Row>
          <div className="mt-5">
            <p className={` ${styles?.title} `} style={{ color: "black" }}>
              Curated Reads
            </p>
          </div>
        </Row>
        <Row>
          <Col md={12}>
            <Row style={{ display: "flex", flexDirection: "row" }}>
              {blogData.map((data) => {
                const {
                  id,
                  date,
                  heading,
                  days,
                  views,
                  img,
                  blogList,
                  topHeading,
                  page,
                } = data;
                return (
                  <Col md={4} key={id}>
                    <Card className={` ${styles.card_bg} mb-5`}>
                      <Link to={`/${page}/${data?.slug}`}>
                        <Card.Img variant="top" src={img} />
                      </Link>

                      <Card.Text>
                        <div className={` ${styles?.text_section} `}>
                          <Link to={`/${page}/${data?.slug}`}>
                            <p className={` ${styles?.para} mb-0`}>{date}</p>{" "}
                            <h6
                              className={` ${styles?.main_para} mb-0`}
                              style={{ fontSize: 16 }}
                            >
                              {/* {topHeading} */}
                              {topHeading?.slice(0, 40)} ...
                            </h6>
                            <div className={` ${styles?.views_sec} `}>
                              {/* <p className={` ${styles?.para} mb-0 `}>{days}</p> */}
                              {/* <p
                              className={` ${styles?.para} mb-0 `}
                              style={{ fontSize: 12 }}
                            >
                              {blogList[0]?.listPara?.slice(0, 130)}...
                            </p> */}
                              {/* <p className={` ${styles?.para} mb-0 `}>{views}</p> */}
                            </div>
                          </Link>

                          <div className={styles.hr_line}></div>
                          <div className={styles.socialMedia}>
                            {/* <img src={Facebook} alt="facebook" /> */}
                            {/* <img src={Twitter} alt="twitter" /> */}
                            <Link
                              to="https://www.linkedin.com/company/gwcdataai"
                              target="_blank"
                            >
                              {" "}
                              <img src={Linkedin} alt="Linkedin" />
                            </Link>
                            {/* <img src={Instagram} alt="instagrm" /> */}
                          </div>
                        </div>
                      </Card.Text>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
          {/* <Col md={4}> */}
          {/* <div className="mb-4">
                            <Form.Control type="search" placeholder="Search" className={styles.search_logo} />
                        </div> */}

          {/* <Card className={` ${styles.card_form} mt-4 `}>
                            <div>
                                <p className={` ${styles?.main_para} mb-0`}>Recent Posts</p>
                            </div>

                            {BlogCardData2.map((data) => {
                                const { id, date, heading, days, views, img } = data;
                                return (
                                    <Col md={12} key={id}>
                                        <Card className={` ${styles.card_bg} mb-2`}>
                                            <Card.Img variant="top" src={img} />
                                            <Card.Text>
                                                <div className={` ${styles?.text_section} `}>
                                                    <p className={` ${styles?.para} mb-0`}>{date}</p>
                                                    <h6 className={` ${styles?.main_para} mb-0`}>{heading}</h6>
                                                    <div className={` ${styles?.views_sec} `}>
                                                        <p className={` ${styles?.para} mb-0 `}>{days}</p>
                                                        <p className={` ${styles?.para} mb-0 `}>•</p>
                                                        <p className={` ${styles?.para} mb-0 `}>{views}</p>
                                                    </div>
                                                    <div className={styles.hr_line}></div>
                                                    <div className={styles.socialMedia}>
                                                        <img src={Facebook} alt="facebook" />
                                                        <img src={Twitter} alt="twitter" />
                                                        <img src={Linkedin} alt="Linkedin" />
                                                        <img src={Instagram} alt="instagrm" />
                                                    </div>
                                                </div>

                                            </Card.Text>
                                        </Card>
                                    </Col>
                                )
                            })}

                        </Card> */}

          {/* </Col> */}
        </Row>
      </Container>
    </Container>
  );
};

export default BlogsPosts;
