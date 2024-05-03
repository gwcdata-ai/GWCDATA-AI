import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  // FormGroup,
  // Form,
  Button,
} from 'react-bootstrap';

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const SERVICEID = "service_tq3fxn1";
const TEMPLATEID = "template_msmv4ui";
const PUBLICID = "_M_x6ZxOlDwyjQYJ6";

// CSS
import styles from './leftSideImageSection.module.css';
import AOS from 'aos';
AOS.init({
  duration: 1000,
});

export const CommonLeftImageComponent = ({ commonLeftSectionContent }) => {

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
    console.log(values);
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

  return (
    <Container fluid className='pt-2'>
      <section className=''>
        <Container className='mt-5'>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col lg={4} md={6} className='px-md-0' data-aos='fade-right'>
              {/* <img
                src={commonLeftSectionContent?.leftImg}
                alt=""
                className="w-100 mx-lg-3 rounded-4"
              /> */}
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
            </Col>
            <Col
              lg={8}
              md={6}
              className='px-md-5 pt-md-0 pt-5'
              data-aos='fade-left'
            >
              <div className=''>
                <p className={styles?.sub_title}>
                  <strong>{commonLeftSectionContent?.sub_title}</strong>
                </p>
                <p className={styles?.title}>
                  {commonLeftSectionContent?.title}
                </p>
                {commonLeftSectionContent?.description && (
                  <p className={styles?.text}>
                    {commonLeftSectionContent?.description}
                  </p>
                )}
                {commonLeftSectionContent?.list && (
                  <ul className={`${styles?.text} px-3`}>
                    {commonLeftSectionContent?.list?.map((item, index) => (
                      <li className='mb-3' key={index}>
                        {' '}
                        {item}{' '}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};
