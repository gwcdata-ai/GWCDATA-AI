import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Card,
  FormGroup,
  Button,
} from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

// CSS
import styles from "../SolutionsSalesForce/slider.module.css";
import formImg from "../../assets/images/Hero section/Products_Server_Hero_0.png";
import AOS from "aos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
AOS.init({
  duration: 1000,
});

const SERVICEID = "service_mx7onts";
const TEMPLATEID = "template_eje0hgg";
const PUBLICID = "TWyAOLdix7PMCK_bW";

export const TrablueForm = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed")
      .required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid phone number")
      .required("Phone Number is required"),
    companyName: Yup.string().required("Company Name is required"),
    message: Yup.string()
      .max(250, "Message must be at most 250 characters")
      .required("Message is required"),
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

  const handleSubmit = (values, { resetForm }) => {
    const data = {
      from_name: values.fullName,
      from_email: values.email,
      from_number: values.phoneNumber,
      from_message: values.message,
      from_company: values.companyName,
    };
    emailjs.send(SERVICEID, TEMPLATEID, data, PUBLICID).then(
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
    <Container fluid className="pt-2 pb-5">
      <section className="">
        <Container className="mt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col lg={7} md={6} className="">
              <div className="">
                <p className={styles?.title}>Derive Key Insights from Data</p>
                <p className={styles?.text}>
                  GWC is a{" "}
                  <h2 className={styles?.text} style={{ display: "inline" }}>
                    Tableau expert{" "}
                  </h2>{" "}
                  with a proven track record in transforming complex data into
                  insightful visualizations for informed decision-making. You
                  can start your journey with us in moulding your data and
                  getting the best insights out of it in just a few clicks away.
                </p>
                <img src={formImg} alt="" className="w-75 h-50" />
              </div>
            </Col>
            <Col lg={5} md={6} className="text-center">
              <Card className="p-3   border_title">
                <div className={` ${styles?.form_title}  mx-2 mb-3`}>
                  Request Free <br /> Tableau Demo
                </div>
                {/* <div className="form_heading">
                  Globally Trusted & Secure Cloud CRM
                </div> */}

                <Formik
                  initialValues={{
                    fullName: "",
                    email: "",
                    phoneNumber: "",
                    companyName: "",
                    message: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <FormGroup>
                        <Field
                          type="text"
                          name="fullName"
                          placeholder="Full Name*"
                          className={`blogform mb-3 ${
                            errors.fullName && touched.fullName
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {errors.fullName && touched.fullName ? (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                              marginBottom: "15px",
                              marginTop: "-10px",
                              color: "white",
                            }}
                          >
                            <strong> {errors.fullName} </strong>
                          </div>
                        ) : null}
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email Address*"
                          className={`blogform mb-3 ${
                            errors.email && touched.email ? "is-invalid" : ""
                          }`}
                        />
                        {errors.email && touched.email ? (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                              marginBottom: "15px",
                              marginTop: "-10px",
                              color: "white",
                            }}
                          >
                            <strong> {errors.email} </strong>
                          </div>
                        ) : null}
                        <Field
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number*"
                          className={`blogform mb-3 ${
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
                              marginTop: "-10px",
                              color: "white",
                            }}
                          >
                            <strong> {errors.phoneNumber} </strong>
                          </div>
                        ) : null}
                        <Field
                          type="text"
                          name="companyName"
                          placeholder="Company Name*"
                          className={`blogform mb-3 ${
                            errors.companyName && touched.companyName
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {errors.companyName && touched.companyName ? (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                              marginBottom: "15px",
                              marginTop: "-10px",
                              color: "white",
                            }}
                          >
                            <strong> {errors.companyName}</strong>
                          </div>
                        ) : null}
                        <Field
                          as="textarea"
                          name="message"
                          placeholder="Your Message Here*"
                          className={`blogform mb-3 ${
                            errors.message && touched.message
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        {errors.message && touched.message ? (
                          <div
                            className="invalid-feedback"
                            style={{
                              textAlign: "left",
                              marginBottom: "15px",
                              marginTop: "-10px",
                              color: "white",
                            }}
                          >
                            <strong> {errors.message}</strong>
                          </div>
                        ) : null}
                      </FormGroup>
                      <Button
                        type="submit"
                        className="submit_btn mb-2"
                        style={{ width: "100%" }}
                      >
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <ToastContainer />
    </Container>
  );
};
