import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import BannerBgImg from "../../../assets/images/career/bannerimg.png";
// CSS
import commonStyles from "../../../commoncss/common.module.css";
import styles from "./detail.module.css";
import { Link } from "react-router-dom";
import { DetailCareerData } from "./DetailData";
import { jobCareerData, jobLocations, jobType } from "../data";
import { useParams } from "react-router-dom";

// Form
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles1 from "../../ContactUs/ContactUsBanner/ContactUsBanner.module.css";
import axios from "axios";

const SERVICEID = "service_j0am06q";
const TEMPLATEID = "template_5xhcagh";
const PUBLICID = "Kit_Tx2oUWPxLk7vs";

const CareerDetail = () => {
  const [successupload, setSuccessUplaod] = useState("");
  const [fileName, setFileName] = useState("");
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);
  const { jobId } = useParams();

  const [jobData, setJobData] = useState([]);
  const jobIdToFind =
    "team-lead-or-sales-magager-digital-transformation-10-years";

  useEffect(() => {
    // Assuming jobData is your array of job objects

    // Filter the jobData based on the provided jobID
    // console.log('jobCareerData',jobCareerData);
    // console.log('jobId',jobId);

    const filteredJob = jobCareerData?.find((job) => job.jobID === jobId);
    // console.log('filteredJob',filteredJob);


    // Update the state with the filtered job object
    setJobData(filteredJob);
  }, [jobIdToFind, jobData]);

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
    applicant_skills: Yup.string().required("Skills is required"),
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
        console.log(response);
        setFileName(response.data.data.filePath);
        setSuccessUplaod(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit =async (values, { resetForm }) => {
    // Check if fileName is empty

    const data = {
      applicant_name: values?.firstName,
      last_name: values?.lastName,
      applicant_email: values?.email,
      applicant_phone: values?.phone,
      applicant_resume_url: '',
      job_title: jobData?.jobRole,
      job_location: jobData?.location?.location,
      job_type: jobData?.type?.type,
      applicant_skills: values?.applicant_skills,
      applicant_message:values?.message,
    };
    console.log('data is ',data);


     await emailjs.send(SERVICEID, TEMPLATEID, data, PUBLICID).then(
        (response) => {
          console.log('res from emailjs',response);
          notify();
          resetForm();
          setSuccessUplaod("")
          // handleClose();
        },
        (err) => {
          console.log(
            `Hello!, there is some network issue please check your internet connection and re-submit the request`
          );
        }
      );
    

    // if (
    //   data?.applicant_resume_url === "" ||
    //   data?.applicant_resume_url === null ||
    //   data?.applicant_resume_url === undefined
    // ) {
    //   // notifyFailure();
    // } else {
    //  await emailjs.send(SERVICEID, TEMPLATEID, data, PUBLICID).then(
    //     (response) => {
    //       notify();
    //       resetForm();
    //       setSuccessUplaod("")
    //       // handleClose();
    //     },
    //     (err) => {
    //       console.log(
    //         `Hello!, there is some network issue please check your internet connection and re-submit the request`
    //       );
    //     }
    //   );
    // }
  };

  return (
    <>
      <Container
        fluid
        className={`${commonStyles.banner_container_img} py-lg-5 mt-sm-5 mt-5 pt-5`}
        style={{
          backgroundImage: `url(${BannerBgImg})`,
        }}
      >
        <section className="pt-3">
          <Container className="py-4 mt-md-0 mt-4">
            <Row className="d-flex">
              <Col lg={7} md={6} className="py-lg-5">
                <p className={`${styles.breadcrumbs} mb-4`}>
                  <span>
                    <a href="/" className={`${styles.breadcrumbs} mb-3`}>
                      Home
                    </a>
                    <span> / </span>
                  </span>
                  <a href="/career" className={`${styles.breadcrumbs} mb-3`}>
                    Career
                  </a>
                  <span> / </span>
                  <span>Details</span>
                </p>

                <h1 className={`${styles.banner_title} mb-4`} />
                <p className={`${styles.banner_title} mb-4`}>
                  {jobData?.jobRole}
                </p>

                <div className="div">
                  <div className="d-flex justify-content-spacebetween gap-4 mt-4">
                    <p className={`${styles.banner_sub_title} mb-2`}>
                      {jobData?.location?.location}
                    </p>
                    <p className={`${styles.banner_sub_title} mb-2`}>|</p>
                    <p className={`${styles.banner_sub_title} mb-2`}>
                      {jobData?.experience}
                    </p>
                    <p className={`${styles.banner_sub_title} mb-2`}>|</p>
                    <p className={`${styles.banner_sub_title} mb-2`}>
                      {jobData?.type?.type}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-spacebetween gap-5 mt-4">
                  <a href="#more-details">
                    <Button className={`${styles.banner_button}`}>
                      Apply Now
                    </Button>
                  </a>

                  {/* <p className={`${styles.banner_sub_title3} mt-3`}>SAVE JOB</p> */}
                  {/* <p className={`${styles.banner_sub_title3} mt-3`}>
                    JOB ALERTS
                  </p>
                  <p className={`${styles.banner_sub_title3} mt-3`}>SHARE</p> */}
                </div>
              </Col>
              <Col lg={5} md={6}></Col>
            </Row>
          </Container>
        </section>
      </Container>

      <Container className="my-5">
        <Row className="d-flex">
          <Col lg={7}>
            <div className="div">
              <h3 className={` ${styles?.title} mt-2`}>Job Description</h3>
            </div>

            {jobData?.jobdescription?.map((item) => {
              return (
                <div key={item?.title} className="div">
                  <p className={` ${styles?.all_list} mt-1`}>{item?.para} </p>
                  <h6 className={` ${styles?.job_title} mt-2`}>
                    {item?.title}{" "}
                  </h6>
                  <h6 className={` ${styles?.job_title2} mt-2`}>
                    {item?.subtitle}{" "}
                  </h6>
                  <p className={` ${styles?.all_list} mt-1 mb-2`}>
                    {item?.para1}{" "}
                  </p>
                  <p className={` ${styles?.all_list} mt-1 mb-2`}>
                    {item?.para2}{" "}
                  </p>
                  <p className={` ${styles?.all_list} mt-1 mb-2`}>
                    {item?.para3}{" "}
                  </p>
                  <p className={` ${styles?.all_list} mt-1 mb-4`}>
                    {item?.para4}{" "}
                  </p>
                  <ul className={` ${styles?.job_list} mt-0`}>
                    {item?.list?.map((item) => {
                      return (
                        <li key={item} className={` ${styles?.all_list} mt-1`}>
                          {" "}
                          {item}{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </Col>
          <Col lg={5} id="more-details">
            <Card className={styles.detail_card_form}>
              <div>
                <p className={` ${styles?.main_para2} mb-0`}>
                  Fill the form given below{" "}
                </p>
              </div>
              <Formik
                initialValues={{
                  firstName: "",
                  applicant_skills: "",
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
                        <Col md={12}>
                          <div className={styles1.inputGroup}>
                            <label
                              htmlFor="firstName"
                              style={{ color: "white" }}
                            >
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
                        <Col md={12}>
                          <div className={styles1.inputGroup}>
                            <label
                              htmlFor="lastName"
                              style={{ color: "white" }}
                            >
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
                        <Col sm={12} md={12}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="email" style={{ color: "white" }}>
                              Email Address
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
                        <Col sm={12} md={12}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="phone" style={{ color: "white" }}>
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
                        <Col md={12}>
                          <div className={styles1.inputGroup}>
                            <label
                              htmlFor="applicant_skills"
                              style={{ color: "white" }}
                            >
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
                        <Col sm={12} md={12}>
                          <div className={styles1.inputGroup}>
                            <label htmlFor="resume" style={{ color: "white" }}>
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
                            <label style={{ color: "red", fontSize: "14px" }}>
                              {" "}
                              {/* * Make Sure You Have Uploaded The Resume Before Submitting, */}
                            </label>
                            <label style={{ color: "white", fontSize: "14px" }}>
                              {" "}
                              {successupload}{" "}
                            </label>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className={styles1.inputGroup}>
                      <label htmlFor="message" style={{ color: "white" }}>
                        Message
                      </label>
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
                    <button
                      style={{ backgroundColor: "white", color: "#6f2b8c" }}
                      type="submit"
                    >
                      Submit
                    </button>
                    <ToastContainer />
                  </Form>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CareerDetail;
