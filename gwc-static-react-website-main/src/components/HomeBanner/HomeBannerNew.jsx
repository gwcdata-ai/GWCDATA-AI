import React, { useState } from "react";
import styles from "../../commoncss/home.module.css";

import Slider from "react-slick";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import banner1 from "../../assets/images/Banner/homeBanner1.png";
import banner2 from "../../assets/images/Banner/BannerImage2.webp";
import thumbsUp from "../../assets/icons/thumbsUp.png";
import { Link } from "react-router-dom";
import useMedia from "../../hooks/useMedia";
import HomepageNewBG from "../../assets/images/Banner/homepagenewbg.gif";



// Form
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles1 from "../ContactUs/ContactUsBanner/ContactUsBanner.module.css";
import homebannerstyle from "./HomeBanner.module.css";

const SERVICEID = "service_tq3fxn1";
const TEMPLATEID = "template_msmv4ui";
const PUBLICID = "_M_x6ZxOlDwyjQYJ6";

const bannerImages = [
  {
    id: 1,
    imageUrl: banner2,
    color: "white",
    gradient: "linear-gradient(180deg, #F16B66 35.94%, #FAAF5F 100%)",
    caption: "Banner 1 Caption",
  },
  //   {
  //     id: 2,
  //     imageUrl: banner2,
  //     color: "white",
  //     caption: "Banner 1 Caption",
  //   },
];

const HomeBannerNew = () => {

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const isMobile = useMedia("(max-width:600px)");

  const settings = {
    dots: true,
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
    // Add other settings as needed
  };

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Should contain only letters")
      .required("First Name is required"),
    lastName: Yup.string()
      .matches(/^[A-Za-z]+$/, "Should contain only letters")
      .required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Must be only 10 digits")
      .required("Mobile Number is required"),
    message: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    emailjs.send(SERVICEID, TEMPLATEID, values, PUBLICID).then(
      (response) => {
        notify();
        resetForm();
        handleClose();
      },
      (err) => {
        console.log(
          `Hello!, there is some network issue please check your internet connection and re-submit the request`
        );
      }
    );
  };

  return isMobile ? (
    <Container fluid className="mt-5 px-0 mb-5">
      <img width="100%"
        height="680px"
        autoPlay
        muted
        loop
        playsInline
        className="video-element"
        style={{
          position: "absolute",
          objectFit: "cover",
          zIndex: "-1",
          padding: "0px",
        }} src={HomepageNewBG} />
      <Row className="px-0">
        <Slider {...settings} className="m-0 p-0 mt-md-0 mt-4">
          {bannerImages.map((banner, index) => (
            <>
              <div className={`${styles.section}`}>
                <div className={styles.content1}>
                  <div className={styles.headingAndSupportingText9}>
                    <b
                      className={`${styles.heading} mb-0`}
                      style={{
                        backgroundImage: banner.gradient,
                        color: "transparent",
                        WebkitBackgroundClip: "text",
                        marginTop: "-20px",
                      }}
                    >
                      Solution
                    </b>
                    <b
                      className={`${styles.heading} `}
                      style={{
                        backgroundImage: banner.gradient,
                        color: "transparent",
                        WebkitBackgroundClip: "text",
                        marginTop: "-20px",
                      }}
                    >
                      Matters
                    </b>

                    <div
                      className={styles.supportingText35}
                      style={{ color: banner?.color }}
                    >
                      Empowering Businesses with Data & AI Insights to Drive
                      Informed Actions.
                    </div>
                  </div>
                  <div className={`${styles.actions} mt-md-5 mt-5`}>
                    <div className={styles.button5} onClick={handleShow}>
                      {/* <div className={styles.buttonBase5}>
                        <div className={styles.johnParker}>Get Started</div>
                      </div> */}
                    </div>
                    <Link to="#our-partners" className={styles.button6}>
                      <div className={styles.button6}>
                        <div className={styles.buttonBase6}>
                          <div className={styles.johnParker}>Learn More
                            <svg
                              className="mx-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="currentColor"
                            >
                              <path
                                d="M1 8.61035H15M15 8.61035L8 1.61035M15 8.61035L8 15.6104"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </>
          ))}
        </Slider>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className={styles.supportingText35}>
              Query Corner
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className={styles1.form} novalidate>
                    <div className={styles1.formRow}>
                      <Row className="w-100">
                        <Col sm={12} md={6}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="firstName">
                              First Name<span style={{ color: "red" }}>*</span>
                            </label>
                            <Field
                              type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="Enter your first name"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="span"
                              className="error"
                              style={{ color: "red", fontSize: "14px" }}
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="lastName">
                              Last Name<span style={{ color: "red" }}>*</span>
                            </label>
                            <Field
                              type="text"
                              id="lastName"
                              name="lastName"
                              placeholder="Enter your last name"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="span"
                              className="error"
                              style={{ color: "red", fontSize: "14px" }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className={styles1.formRow}>
                      <Row className="w-100">
                        <Col sm={12} md={6}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="email">
                              Email
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Enter your email address"
                            />
                            <ErrorMessage
                              name="email"
                              component="span"
                              className="error"
                              style={{ color: "red", fontSize: "14px" }}
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="phone">
                              Phone<span style={{ color: "red" }}>*</span>
                            </label>
                            <Field
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="Enter your phone number"
                            />
                            <ErrorMessage
                              name="phone"
                              component="span"
                              className="error"
                              style={{ color: "red", fontSize: "14px" }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className={styles1.inputGroup}>
                      <label htmlFor="message">Message</label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        rows="4"
                      />
                      <ErrorMessage
                        name="message"
                        component="span"
                        className="error"
                        style={{ color: "red" }}
                      />
                    </div>
                    <button type="submit">Submit</button>
                    <ToastContainer />
                  </Form>
                )}
              </Formik>
            </div>
          </Modal.Body>
        </Modal>
      </Row>
      <ToastContainer />
    </Container>
  ) : (
    <Container fluid className="mt-5 px-0 mb-5">
      <img width="100%"
        height="690px"
        autoPlay
        muted
        loop
        playsInline
        className="video-element"
        style={{
          position: "absolute",
          objectFit: "cover",
          zIndex: "-1",
          padding: "0px",
        }} src={HomepageNewBG} alt='' />

      <Row className="px-0">
        <Slider {...settings} className="m-0 p-0 mt-md-0 mt-4">
          {bannerImages.map((banner, index) => (
            <>
              <div className={`${styles.section}`}>
                <div className={styles.content1}>
                  <div className={styles.headingAndSupportingText9}>
                    <b
                      className={`${styles.heading} ${homebannerstyle.banner_heading_text}`}
                      style={{
                        backgroundImage: banner.gradient,
                        color: "transparent",
                        WebkitBackgroundClip: "text",
                      }}
                    >
                      Solution Matters
                    </b>

                    <div
                      className={styles.supportingText35}
                      style={{ color: banner?.color }}
                    >
                      Empowering Businesses with Data & AI Insights to Drive
                      Informed Actions.
                    </div>
                  </div>
                  <div className={`${styles.actions} mt-md-5 mt-5`}>
                    <div className={styles.button5} onClick={handleShow}>
                      {/* <div className={styles.buttonBase5}>
                        <div className={styles.johnParker}>Get Started</div>
                      </div> */}
                    </div>
                    <Link to="#our-partners" className={styles.button6}>
                      <div className={styles.button6}>
                        <div className={styles.buttonBase6}>
                          <div className={styles.johnParker}>Learn More
                            <svg
                              className="mx-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="currentColor"
                            >
                              <path
                                d="M1 8.61035H15M15 8.61035L8 1.61035M15 8.61035L8 15.6104"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </>
          ))}
        </Slider>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className={styles.supportingText35}>
              Query Corner
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form className={styles1.form}>
                    <div className={styles1.formRow}>
                      <Row className="w-100">
                        <Col sm={12} md={6}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="firstName">
                              First Name<span style={{ color: "red" }}>*</span>
                            </label>
                            <Field
                              type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="Enter your first name"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="span"
                              className="error"
                              style={{ color: "red", fontSize: "14px" }}
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="lastName">
                              Last Name<span style={{ color: "red" }}>*</span>
                            </label>
                            <Field
                              type="text"
                              id="lastName"
                              name="lastName"
                              placeholder="Enter your last name"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="span"
                              className="error"
                              style={{ color: "red", fontSize: "14px" }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className={styles1.formRow}>
                      <Row className="w-100">
                        <Col sm={12} md={6}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="email">
                              Email
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Enter your email address"
                            />
                            <ErrorMessage
                              name="email"
                              component="span"
                              className="error"
                              style={{ color: "red", fontSize: "14px" }}
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="phone">
                              Phone<span style={{ color: "red" }}>*</span>
                            </label>
                            <Field
                              type="tel"
                              id="phone"
                              name="phone"
                              placeholder="Enter your phone number"
                            />
                            <ErrorMessage
                              name="phone"
                              component="span"
                              className="error"
                              style={{ color: "red", fontSize: "14px" }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className={styles1.inputGroup}>
                      <label htmlFor="message">Message</label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        rows="4"
                      />
                      <ErrorMessage
                        name="message"
                        component="span"
                        className="error"
                        style={{ color: "red" }}
                      />
                    </div>
                    <button type="submit">Submit</button>
                    <ToastContainer />
                  </Form>
                )}
              </Formik>
            </div>
          </Modal.Body>
        </Modal>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default HomeBannerNew;
