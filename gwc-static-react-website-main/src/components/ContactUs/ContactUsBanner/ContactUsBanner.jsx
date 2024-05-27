import React, { useState, useEffect } from "react";
import styles from "../../../commoncss/ContactUs.module.css";
import styles1 from "./ContactUsBanner.module.css";
import backgroundImg from "../../../assets/images/ContactUs/contactUsBanneer.webp";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SERVICEID = "service_j0am06q";
const TEMPLATEID = "template_8alinxd";
const PUBLICID = "Kit_Tx2oUWPxLk7vs";

const ContactUsBanner = () => {
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
    
    const formData={
      applicant_name: values.firstName,
      last_name: values.lastName,
      applicant_email: values.email,
      applicant_phone: values.phone,
      message: values.message

    }
    console.log(formData);
    emailjs.send(SERVICEID, TEMPLATEID, formData, PUBLICID).then(
      (response) => {
        console.log('res from emailjs',response);
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
    // <div className={styles.contactContainer}>
    <>
      <div className={` ${styles.rectangleParent} mt-5 mt-lg-3 `}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src={backgroundImg} />
        <div className={styles.groupInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.getInTouchContainer}>
          <div>Get in touch</div>
          <span className={styles.span}>{` `}</span>
          <div className="">with us</div>
        </div>
        <div className={styles.haveAnInquiryContainer}>
          <p className={styles.fillOutThis}>
            Have an inquiry or some feedback fo us?
          </p>
          <p className={styles.fillOutThis}>
            Fill out this form to contact our team. 
          </p>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles1.formContainer}>
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
                            placeholder=""
                          /> 
                          <ErrorMessage
                            name="firstName"
                            component="span"
                            className="error"
                            style={{ color: "red" }}
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
                            placeholder=""
                          />
                          <ErrorMessage
                            name="lastName"
                            component="span"
                            className="error"
                            style={{ color: "red" }}
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
                            Email Address<span style={{ color: "red" }}>*</span>
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder=""
                          />
                          <ErrorMessage
                            name="email"
                            component="span"
                            className="error"
                            style={{ color: "red" }}
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
                            placeholder=""
                          />
                          <ErrorMessage
                            name="phone"
                            component="span"
                            className="error"
                            style={{ color: "red" }}
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
                      rows="8"
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
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent}>
            <div className={styles.buttonBase}>
              <div className={styles.text46}>Home / Contact Us</div>
            </div>
            {/* <div className={styles.headingWrapper}>
              <b className={styles.heading}>Contact Us</b>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsBanner;
