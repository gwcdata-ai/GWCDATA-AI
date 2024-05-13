import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import styles from "./footer.module.css";
const SERVICEID = "service_quvyurt";
const TEMPLATEID = "template_8vpi128";
const PUBLICID = "kB1jbCY4R6GgdZlD5";

export const SubscribeForm = () => {
  const notify = () => {
    toast.success(
      "Thank You, Got your message! You will get regular updates to this email ID",
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
    email: Yup.string().email("Invalid Email").required("Email is required"),
  });

  const initialValues = {
    email: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    // console.log("Submitted:", values.email);
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

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <Row className="d-flex align-items-center justify-content-center">
              <Col md={3} className={styles.subscribe_form_text}>
                Newsletter
              </Col>
              <Col md={5} className="mt-md-0 mt-4">
                <Field
                  as={Form.Control}
                  size="sm"
                  type="email"
                  name="email"
                  className={`w-100 ${styles.subscribe_form}`}
                  placeholder="Enter your email"
                />
              </Col>
              <Col md={4} className="mt-md-0 mt-4">
                <Button
                  type="submit"
                  className={`w-100 ${styles.subscribe_btn}`}
                  disabled={isSubmitting}
                >
                  Subscribe
                  <svg
                    className="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M1 8.61035H15M15 8.61035L8 1.61035M15 8.61035L8 15.6104"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </Col>
              <Col xs={12} className="text-start mt-1">
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-light"
                />
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};
