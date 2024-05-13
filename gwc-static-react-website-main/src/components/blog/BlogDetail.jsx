import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  FormControl,
  Button,
} from "react-bootstrap";
import styles from "./blog.module.css";
import Facebook from "../../assets/images/Blog/Facebook.svg";
import Twitter from "../../assets/images/Blog/Twitter.svg";
import Linkedin from "../../assets/images/Blog/Linkedin.svg";
import Instagram from "../../assets/images/Blog/Instagram.svg";
import { BlogCardData, BlogCardData2, BlogCardData3 } from "./data";
import detailImg from "../../assets/images/Blog/detailImg.png";
import BlogDetailImg from "../../assets/images/Blog/BlogDetailImg.png";
import logo from "../../assets/images/Blog/logo.png";
import { BlogListData } from "../../components/blog/BlogListData";
import { Link, useParams } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const SERVICEID = "service_tq3fxn1";
const TEMPLATEID = "template_msmv4ui";
const PUBLICID = "_M_x6ZxOlDwyjQYJ6";

const BlogDetail = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid phone number")
      .required("Phone Number is required"),
    message: Yup.string(),
  });

  const notify = () => {
    toast.success(
      "Thank You, Got your message! Our team is on standby, and you can expect a response in 24 hours",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  //   const handleSubmit = (values) => {
  //     console.log(values); // Handle form submission here
  //   };

  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    emailjs.send(SERVICEID, TEMPLATEID, values, PUBLICID).then(
      (response) => {
        notify();
        resetForm();
      },
      (err) => {
        console.log(
          `Hello!, there is some network issue please check your internet connection and re-submit the request`
        );
      }
    );
  };

  let { slug } = useParams();
  let item = BlogListData?.find((ele) => {
    return ele.slug == slug;
  });

  // console.log("item", item.blogSubHeading);

  return (
    <Container fluid className={` ${styles.detail_container}`}>
      <Container className="mb-5">
        <Row className="">
          <Col md={8}>
            <Row className="mt-0">
              <p className={` ${styles?.title2} `}>{item?.topHeading}</p>
            </Row>
            <Row>
              <Col md={8}>
                <div className={` ${styles?.logo_para_sec} `}>
                  <img src={logo} alt="" />
                  <div>
                    <p className={` ${styles?.logo_para} mb-0`}>GWC DATA.AI</p>
                    {/* <p className={` ${styles?.logo_sub_para} mb-0 `}>
                      110k Views
                    </p> */}
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.socialMedia_sec}>
                  <Link
                    to="https://www.linkedin.com/company/gwcdataai/"
                    target="_blank"
                  >
                    <img src={Linkedin} alt="Linkedin" />
                  </Link>
                </div>
              </Col>
            </Row>
            <Row className={styles.section}>
              <div className="mt-0">
                <img
                  src={item?.blogTopImg}
                  alt="image"
                  className="w-100 my-4"
                />

                {/* <h3 className={` ${styles.blog_main_para} `}>{item?.blogSubHeading}</h3>
                                <p className={styles.blog_sub_para}>
                                    {item?.blogSubPara}
                                </p> */}
                {item.blogSubHeading && (
                  <h3 className={` ${styles.blog_main_para} mb-3`}>
                    {item.blogSubHeading}
                  </h3>
                )}

                {item.blogSubPara1 && (
                  <p className={` ${styles.blog_sub_para} mb-3`}>
                    {item.blogSubPara1}
                  </p>
                )}
                {item.blogSubPara2 && (
                  <p className={` ${styles.blog_sub_para} mb-3`}>
                    {item.blogSubPara2}
                  </p>
                )}
                <ul className={` ${styles.list_section}`}>
                  {item.blogList.map((data) => {
                    const {
                      id,
                      listHeading,
                      listPara,
                      listSub,
                      listPoints,
                      images,
                    } = data;
                    return (
                      <>
                        {/* <li key={id}>
                                                    <h6 className={` ${styles.blog_next_para}`}>{listHeading}</h6>
                                                    <p className={` ${styles.blog_sub_para}`}>{listPara}</p>
                                                </li> */}

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
                              {listPoints?.map((item) => (
                                <li
                                  className={` ${styles.blog_sub_para} mb-3`}
                                  dangerouslySetInnerHTML={{
                                    __html: item.replace(/\n/g, ""),
                                  }}
                                />
                              ))}
                            </ul>
                          )}

                          {images?.length === 1 &&
                            images?.map((item) => (
                              <img src={item} className="w-50 mt-3 mb-5" />
                            ))}
                          <Row>
                            {images?.length === 2 &&
                              images?.map((item) => (
                                <Col lg={5}>
                                  <img src={item} className="w-100 mb-5" />
                                </Col>
                              ))}
                          </Row>
                          <Row>
                            {images?.length === 3 &&
                              images?.map((item) => (
                                <Col lg={4}>
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

                <h6 className={` ${styles.blog_next_para} `}>
                  {item?.imageHeading}
                </h6>
                {item?.blogImage && (
                  <img
                    src={item?.blogImage}
                    alt="image"
                    className="my-4 w-100"
                  />
                )}

                <h6 className={` ${styles.blog_next_para}`}>
                  {item?.conclusion}
                </h6>
                <p className={` ${styles.blog_sub_para}`}>
                  {item?.conclusionText}
                </p>

                {/* <div className={` ${styles.socialMedia} my-4 `}>
                                    <img src={Facebook} alt="facebook" />
                                    <img src={Twitter} alt="twitter" />
                                    <img src={Linkedin} alt="Linkedin" />
                                </div> */}
                <p className={` ${styles.last_para} my-2`}>{item?.writtenBy}</p>
              </div>
            </Row>
          </Col>

          <Col md={4}>
            {/* <div className="mb-4">
                            <Form.Control type="search" placeholder="Search" className={styles.search_logo} />
                        </div> */}
            <Card className={styles.detail_card_form}>
              <div>
                <p className={` ${styles?.main_para2} mb-0`}>
                  Get a free consultation for a winning strategy for your
                  business!
                </p>
              </div>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  phoneNumber: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      className={`blogform mb-2 ${
                        styles?.blogform ? styles.blogform : ""
                      } ${
                        errors.firstName && touched.firstName
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    {errors.firstName && touched.firstName ? (
                      <div
                        className="invalid-feedback"
                        style={{
                          textAlign: "left",
                          marginBottom: "15px",
                          marginTop: "-5px",
                          color: "white",
                        }}
                      >
                        {errors.firstName}
                      </div>
                    ) : null}
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      className={`blogform mb-2 ${
                        styles?.blogform ? styles.blogform : ""
                      } ${
                        errors.lastName && touched.lastName ? "is-invalid" : ""
                      }`}
                    />
                    {errors.lastName && touched.lastName ? (
                      <div
                        className="invalid-feedback"
                        style={{
                          textAlign: "left",
                          marginBottom: "15px",
                          marginTop: "-5px",
                          color: "white",
                        }}
                      >
                        {errors.lastName}
                      </div>
                    ) : null}
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      className={`blogform mb-2 ${
                        styles?.blogform ? styles.blogform : ""
                      } ${errors.email && touched.email ? "is-invalid" : ""}`}
                    />
                    {errors.email && touched.email ? (
                      <div
                        className="invalid-feedback"
                        style={{
                          textAlign: "left",
                          marginBottom: "15px",
                          marginTop: "-5px",
                          color: "white",
                        }}
                      >
                        {errors.email}
                      </div>
                    ) : null}
                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number *"
                      className={`blogform mb-2 ${
                        styles?.blogform ? styles.blogform : ""
                      } ${
                        errors.phoneNumber && touched.phoneNumber
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <div
                        className="invalid-feedback"
                        style={{
                          textAlign: "left",
                          marginBottom: "15px",
                          marginTop: "-5px",
                          color: "white",
                        }}
                      >
                        {errors.phoneNumber}
                      </div>
                    ) : null}
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Your Message Here"
                      className={`blogform mb-0 ${
                        styles?.blogform ? styles.blogform : ""
                      } ${
                        errors.message && touched.message ? "is-invalid" : ""
                      }`}
                    />
                    {errors.message && touched.message ? (
                      <div
                        className="invalid-feedback"
                        style={{
                          textAlign: "left",
                          marginBottom: "15px",
                          marginTop: "-5px",
                          color: "white",
                        }}
                      >
                        {errors.message}
                      </div>
                    ) : null}
                    <Button
                      type="submit"
                      className={`mb-0 ${styles?.blog_btn2}`}
                      style={{ width: "100%", marginTop: "10px" }}
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
              <ToastContainer />
            </Card>

            <Card className={` ${styles.card_form} mt-4 `}>
              <div>
                <p className={` ${styles?.main_para} mb-0`}>Recent Posts</p>
              </div>

              {BlogCardData3.map((data) => {
                const { id, date, heading, days, views, img, slug } = data;
                return (
                  <Col md={12} key={id}>
                    <Card className={` ${styles.card_bg} mb-2`}>
                      <Card.Img variant="top" src={img} />
                      <Card.Text>
                        <div className={` ${styles?.text_section} `}>
                          <p className={` ${styles?.para} mb-0`}>{date}</p>
                          <Link to={`/blogs/${slug}`} target="_top">
                            <h6 className={` ${styles?.main_para} mb-0`}>
                              {heading}
                            </h6>
                          </Link>
                          <div className={` ${styles?.views_sec} `}>
                            <p className={` ${styles?.para} mb-0 `}>{days}</p>
                            {/* <p className={` ${styles?.para} mb-0 `}>•</p> */}
                            {/* <p className={` ${styles?.para} mb-0 `}>{views}</p> */}
                          </div>
                          <div className={styles.hr_line}></div>
                          <div className={styles.socialMedia}>
                            <Link
                              to="https://www.linkedin.com/company/gwcdataai/"
                              target="_blank"
                            >
                              <img src={Linkedin} alt="Linkedin" />
                            </Link>
                          </div>
                        </div>
                      </Card.Text>
                    </Card>
                  </Col>
                );
              })}
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BlogDetail;
