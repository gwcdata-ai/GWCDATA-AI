import React, { useState } from "react";
import { Link } from "react-router-dom";
import commonstyles from "../../commoncss/Home.module.css";
import styles from "../home/HomeBlog/homebottom.module.css";
import styles1 from "../ContactUs/ContactUsBanner/ContactUsBanner.module.css";

import AOS from "aos";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
AOS.init({
  duration: 1500,
});

const SERVICEID = "service_tq3fxn1";
const TEMPLATEID = "template_emjv7mm";
const PUBLICID = "_M_x6ZxOlDwyjQYJ6";

const CareerBottom = () => {
  const [fileName, setFileName] = useState("");
  const [successupload, setSuccessUplaod] = useState("");
  const [jobDescription, setJobDescription] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

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

  const notifyFailure = () => {
    toast.warning("Warning: Applicant must upload resume before submit", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
    job_title: Yup.string().required("Job title is required"),
    applicant_skills:Yup.string().required("Skills is required")
  });

  const uploadResume = async (e) => {
    setSuccessUplaod("Please Wait, Your resume is being uploading...");
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios
      .post(
        `https://apiapartment.projectzerozilla.com/api/v1/common/upload-document-gwc`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        // console.log(response.data.data.filePath);
        setFileName(response.data.data.filePath);
        setSuccessUplaod(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (values, { resetForm }) => {
    const data = {
      applicant_name: values?.firstName,
      last_name: values?.lastName,
      applicant_email: values?.email,
      applicant_phone: values?.phone,
      applicant_resume_url: fileName,
      job_title: values?.job_title,
      applicant_skills:values?.applicant_skills
      //   job_location: selectedData?.location?.location,
      //   job_type: selectedData?.type?.type,
    };
    // console.log(data);

    if (
      data?.applicant_resume_url === "" ||
      data?.applicant_resume_url === null ||
      data?.applicant_resume_url === undefined
    ) {
      notifyFailure();
    } else {
      emailjs.send(SERVICEID, TEMPLATEID, data, PUBLICID).then(
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
    }
  };

  return (
    <div className={commonstyles.frameParent9}>
      <div className={commonstyles.frameParent10}>
        <Container className={styles.banner_img} data-aos="fade-left">
          <Row className="d-flex">
            <Col lg={7} className="py-lg-3 px-0">
              <h1 className={`${styles.banner_title} mb-4`}>
                Explore More Opportunities
              </h1>
              <p className={`${styles.banner_para} mb-4`}>
                Couldn't find your ideal job? Build a profile, and let us assist
                you in your job search.
              </p>
              <Button
                className={`${styles.banner_button}`}
                onClick={() => setShowModal(true)}
              >
                {" "}
                Sign Up{" "}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className={styles.supportingText35}>
            Enquire for Opportunities
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* <p>
              {" "}
              Choosen For the Job Title{" "}
              <b className={` ${styles.team_para} mb-4  mb-xs-3`}>
                {selectedData?.jobRole}, {selectedData?.type?.type}{" "}
              </b>{" "}
              located in{" "}
              <b className={` ${styles.team_para} mb-4  mb-xs-3`}>
                {" "}
                {selectedData?.location?.location}.{" "}
              </b>
            </p> */}
            <p> </p>
          </div>
          <div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                applicant_skills:'',
                email: "",
                phone: "",
                message: "",
                job_title: "",
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
                  <div>
                    <Row className="w-100">
                      <Col sm={6}>
                        <div className={styles1.inputGroup}>
                          <label htmlFor="job_title">
                            Job Title<span style={{ color: "red" }}>*</span>
                          </label>
                          <Field
                            type="text"
                            id="job_title"
                            name="job_title"
                            placeholder="Enter job title"
                          />
                          <ErrorMessage
                            name="job_title"
                            component="span"
                            className="error"
                            style={{ color: "red", fontSize: "14px" }}
                          />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className={styles1.inputGroup}>
                          <label htmlFor="applicant_skills">
                             Technical Skills<span style={{ color: "red" }}>*</span>
                          </label>
                          <Field
                            type="text"
                            id="applicant_skills"
                            name="applicant_skills"
                            placeholder="Enter your skills set"
                          />
                          <ErrorMessage
                            name="applicant_skills"
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
                      <Col sm={12} md={12}>
                        <div className={styles1.inputGroup}>
                          <label htmlFor="resume">
                            Resume (Allowed only Pdf, Doc)
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <Field
                            type="file"
                            id="resume"
                            name="resume"
                            accept=".pdf, .doc, .docx"
                            onChange={uploadResume}
                          />
                          <ErrorMessage
                            name="resume"
                            component="span"
                            className="error"
                            style={{ color: "red", fontSize: "14px" }}
                          />
                          {/* <label style={{ color: "red", fontSize: "14px" }}>
                            {" "}
                            * Make sure you have uploaded the Resume before
                            Submit
                          </label> */}
                          <label style={{ color: "green", fontSize: "14px" }}>
                            {" "}
                            {successupload}{" "}
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className={styles1.inputGroup}>
                    <label htmlFor="message"> Message </label>
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
    </div>
  );
};

export default CareerBottom;
