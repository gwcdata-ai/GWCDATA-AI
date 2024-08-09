import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Form as Form1,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./jobpost.module.css";
import carrerImg from "../../assets/images/career/career2.webp";
import { jobCareerData, jobLocations, jobType } from "./data";

// Form
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles1 from "../ContactUs/ContactUsBanner/ContactUsBanner.module.css";
import axios from "axios";
import useMedia from "../../hooks/useMedia";

const SERVICEID = "service_tq3fxn1";
const TEMPLATEID = "template_emjv7mm";
const PUBLICID = "_M_x6ZxOlDwyjQYJ6";

const JobPost = () => {
  const navigate = useNavigate();
  const isMobile = useMedia("(max-width:600px)");
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    search: "",
  });
  const [selectedData, setSelectedData] = useState({});

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  const handleTypeChange = (e) => {
    setFilters({ ...filters, type: e.target.value });
  };

  const [fileName, setFileName] = useState("");
  const [successupload, setSuccessUplaod] = useState("");
  const [jobDescription, setJobDescription] = useState([]);

  const handleApplyNowClick = (jobDetails) => {
    // Perform actions with the jobDetails, e.g., log to console
    // console.log("Applying for job:", jobDetails);
    setSelectedData(jobDetails);
    // setShowModal(true);
    navigate(`/career-detail/${jobDetails?.jobID}`);
    // You can also make an API request or perform any other actions here
  };
  const handleJobDescription = (jobdescription, jobDetails) => {
    // console.log(jobdescription, "jobdescription");
    setJobDescription(jobdescription);
    setSelectedData(jobDetails);
    setShowModal2(true);
  };

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleClose2 = () => setShowModal2(false);

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
      job_title: selectedData?.jobRole,
      job_location: selectedData?.location?.location,
      job_type: selectedData?.type?.type,
    };
    // console.log(data);

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
  };

  // paginatiuon
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobCareerData
    .filter((data) => {
      const { location, type, jobRole } = data;
      const { location: filterLocation, type: filterType, search } = filters;

      return (
        (filterLocation === "" || Number(filterLocation) === location?.id) &&
        (filterType === "" || Number(filterType) === type?.id) &&
        (search === "" || jobRole.toLowerCase().includes(search.toLowerCase()))
      );
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(jobCareerData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Container fluid style={{ backgroundColor: "#6F2B8C" }} id="job-postings">
      <Container className="mt-5">
        <Row className="mt-0  d-flex align-items-center justify-content-center">
          <Col md={12} className="mb-2 mt-md-0 mt-5">
            {/* <p className={` ${styles?.title_first} mt-5`}>Work with us</p> */}
            <p className={` ${styles?.title} mt-5`}>Explore the Amazingness</p>
            <p className={styles?.sub_main_title}>
              "Empower Your Future: Join Us on the Journey to Professional
              Excellence!"
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-md-4">
            <Form1.Group>
              <Form1.Control
                required
                type="search"
                placeholder="Search Opportunities"
                className={` ${styles?.search_form} mt-4`}
                onChange={handleSearchChange}
              />
            </Form1.Group>
          </Col>
          <Col md={3} className="mb-md-4">
            <Form1.Group>
              <Form1.Select
                defaultValue="Location"
                className={` ${styles?.loc_form} mt-4`}
                onChange={handleLocationChange}
              >
                <option value=""> Select Location</option>
                {jobLocations?.map((item, index) => (
                  <option key={index} value={item?.id}>
                    {item?.location}
                  </option>
                ))}
              </Form1.Select>
            </Form1.Group>
          </Col>
          <Col md={3} className="mb-md-4">
            <Form1.Group>
              <Form1.Select
                defaultValue="Type"
                className={` ${styles?.loc_form} mt-4`}
                onChange={handleTypeChange}
              >
                <option value=""> Select Type</option>
                {jobType?.map((item, index) => (
                  <option key={index} value={item?.id}>
                    {item?.type}
                  </option>
                ))}
              </Form1.Select>
            </Form1.Group>
          </Col>
          <hr className={styles.hr_line} />
        </Row>

        {currentItems?.length === 0 ? (
          <h1 className="text-white text-center py-5">
            {" "}
            {`Sorry, No Results Found :(`}
          </h1>
        ) : (
          <Row>
            <Col md={8} className="mb-md-5 mt-3 mb-3">
              {currentItems.map((filteredData) => {
                const {
                  id,
                  jobRole,
                  type,
                  location,
                  time,
                  jobdescription,
                  experience,
                } = filteredData;
                return (
                  <Card key={id} className="mb-3">
                    <div className={styles.top_sec}>
                      <div className={` ${styles.roel_sec}  `}>
                        <p
                          className={` ${styles.team_para} mb-4  mb-xs-3`}
                          // onClick={() =>
                          //   handleJobDescription(jobdescription, filteredData)
                          // }
                        >
                          {jobRole}
                        </p>
                        {isMobile ? (
                          <div className="d-flex justify-content-center">
                            <span className="mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                              >
                                <g opacity="0.5">
                                  <path
                                    d="M13.6399 7.04077C13.5463 6.06671 13.2021 5.13349 12.6407 4.33198C12.0793 3.53047 11.32 2.88799 10.4366 2.4671C9.55318 2.04621 8.57584 1.86125 7.59973 1.93024C6.62362 1.99923 5.68201 2.31981 4.86659 2.86077C4.16605 3.3292 3.57796 3.94697 3.14455 4.6697C2.71114 5.39243 2.44318 6.20217 2.35992 7.04077C2.27824 7.87388 2.38304 8.71472 2.6667 9.50229C2.95037 10.2899 3.40579 11.0044 3.99992 11.5941L7.53325 15.1341C7.59523 15.1966 7.66896 15.2462 7.7502 15.28C7.83144 15.3139 7.91858 15.3313 8.00659 15.3313C8.09459 15.3313 8.18173 15.3139 8.26297 15.28C8.34421 15.2462 8.41794 15.1966 8.47992 15.1341L11.9999 11.5941C12.5941 11.0044 13.0495 10.2899 13.3331 9.50229C13.6168 8.71472 13.7216 7.87388 13.6399 7.04077ZM11.0666 10.6541L7.99992 13.7208L4.93325 10.6541C4.48131 10.2021 4.13512 9.65566 3.91957 9.05394C3.70401 8.45223 3.62444 7.81023 3.68659 7.1741C3.74913 6.52817 3.95443 5.90421 4.28763 5.34733C4.62084 4.79045 5.07362 4.31458 5.61325 3.9541C6.32055 3.48426 7.15079 3.23363 7.99992 3.23363C8.84905 3.23363 9.67929 3.48426 10.3866 3.9541C10.9246 4.31318 11.3764 4.78696 11.7095 5.3414C12.0426 5.89583 12.2488 6.51717 12.3133 7.16077C12.3774 7.79906 12.2989 8.44362 12.0832 9.0478C11.8676 9.65198 11.5204 10.2007 11.0666 10.6541ZM7.99992 4.62077C7.40658 4.62077 6.82656 4.79672 6.33321 5.12636C5.83986 5.45601 5.45534 5.92454 5.22828 6.47272C5.00122 7.0209 4.94181 7.6241 5.05756 8.20604C5.17332 8.78799 5.45904 9.32253 5.8786 9.74209C6.29816 10.1616 6.83271 10.4474 7.41465 10.5631C7.99659 10.6789 8.59979 10.6195 9.14797 10.3924C9.69615 10.1653 10.1647 9.78083 10.4943 9.28748C10.824 8.79413 10.9999 8.21411 10.9999 7.62077C10.9982 6.82566 10.6815 6.06362 10.1193 5.5014C9.55707 4.93917 8.79503 4.62253 7.99992 4.62077ZM7.99992 9.28744C7.67028 9.28744 7.34805 9.18969 7.07397 9.00655C6.79989 8.82342 6.58627 8.56312 6.46012 8.25858C6.33398 7.95403 6.30097 7.61892 6.36528 7.29562C6.42959 6.97232 6.58832 6.67535 6.82141 6.44226C7.0545 6.20917 7.35147 6.05044 7.67477 5.98613C7.99807 5.92182 8.33318 5.95483 8.63773 6.08097C8.94227 6.20712 9.20257 6.42074 9.3857 6.69482C9.56884 6.9689 9.66659 7.29114 9.66659 7.62077C9.66659 8.0628 9.49099 8.48672 9.17843 8.79928C8.86587 9.11184 8.44195 9.28744 7.99992 9.28744Z"
                                    fill="#22211F"
                                  />
                                </g>
                              </svg>
                              <span className={` ${styles.sub_line_para} mb-0`}>
                                {location?.location}
                              </span>
                            </span>
                            <span className="mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                              >
                                <g opacity="0.5">
                                  <path
                                    d="M12.6663 4.95402H10.6663V4.28735C10.6663 3.75692 10.4556 3.24821 10.0806 2.87314C9.70548 2.49807 9.19677 2.28735 8.66634 2.28735H7.33301C6.80258 2.28735 6.29387 2.49807 5.91879 2.87314C5.54372 3.24821 5.33301 3.75692 5.33301 4.28735V4.95402H3.33301C2.80257 4.95402 2.29387 5.16473 1.91879 5.53981C1.54372 5.91488 1.33301 6.42359 1.33301 6.95402V12.954C1.33301 13.4845 1.54372 13.9932 1.91879 14.3682C2.29387 14.7433 2.80257 14.954 3.33301 14.954H12.6663C13.1968 14.954 13.7055 14.7433 14.0806 14.3682C14.4556 13.9932 14.6663 13.4845 14.6663 12.954V6.95402C14.6663 6.42359 14.4556 5.91488 14.0806 5.53981C13.7055 5.16473 13.1968 4.95402 12.6663 4.95402ZM6.66634 4.28735C6.66634 4.11054 6.73658 3.94097 6.8616 3.81595C6.98663 3.69092 7.1562 3.62069 7.33301 3.62069H8.66634C8.84315 3.62069 9.01272 3.69092 9.13775 3.81595C9.26277 3.94097 9.33301 4.11054 9.33301 4.28735V4.95402H6.66634V4.28735ZM13.333 12.954C13.333 13.1308 13.2628 13.3004 13.1377 13.4254C13.0127 13.5504 12.8432 13.6207 12.6663 13.6207H3.33301C3.1562 13.6207 2.98663 13.5504 2.8616 13.4254C2.73658 13.3004 2.66634 13.1308 2.66634 12.954V9.28735C4.36385 9.96078 6.17347 10.3069 7.99967 10.3074C9.82582 10.3062 11.6353 9.96016 13.333 9.28735V12.954ZM13.333 7.82735C11.6519 8.56587 9.83581 8.94721 7.99967 8.94721C6.16354 8.94721 4.34741 8.56587 2.66634 7.82735V6.95402C2.66634 6.77721 2.73658 6.60764 2.8616 6.48262C2.98663 6.35759 3.1562 6.28735 3.33301 6.28735H12.6663C12.8432 6.28735 13.0127 6.35759 13.1377 6.48262C13.2628 6.60764 13.333 6.77721 13.333 6.95402V7.82735Z"
                                    fill="#22211F"
                                  />
                                </g>
                              </svg>
                              <span className={` ${styles.sub_line_para} mb-0`}>
                                {type?.type}
                              </span>
                            </span>
                            <span className="mx-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                              >
                                <g opacity="0.5">
                                  <path
                                    d="M12.6663 4.95402H10.6663V4.28735C10.6663 3.75692 10.4556 3.24821 10.0806 2.87314C9.70548 2.49807 9.19677 2.28735 8.66634 2.28735H7.33301C6.80258 2.28735 6.29387 2.49807 5.91879 2.87314C5.54372 3.24821 5.33301 3.75692 5.33301 4.28735V4.95402H3.33301C2.80257 4.95402 2.29387 5.16473 1.91879 5.53981C1.54372 5.91488 1.33301 6.42359 1.33301 6.95402V12.954C1.33301 13.4845 1.54372 13.9932 1.91879 14.3682C2.29387 14.7433 2.80257 14.954 3.33301 14.954H12.6663C13.1968 14.954 13.7055 14.7433 14.0806 14.3682C14.4556 13.9932 14.6663 13.4845 14.6663 12.954V6.95402C14.6663 6.42359 14.4556 5.91488 14.0806 5.53981C13.7055 5.16473 13.1968 4.95402 12.6663 4.95402ZM6.66634 4.28735C6.66634 4.11054 6.73658 3.94097 6.8616 3.81595C6.98663 3.69092 7.1562 3.62069 7.33301 3.62069H8.66634C8.84315 3.62069 9.01272 3.69092 9.13775 3.81595C9.26277 3.94097 9.33301 4.11054 9.33301 4.28735V4.95402H6.66634V4.28735ZM13.333 12.954C13.333 13.1308 13.2628 13.3004 13.1377 13.4254C13.0127 13.5504 12.8432 13.6207 12.6663 13.6207H3.33301C3.1562 13.6207 2.98663 13.5504 2.8616 13.4254C2.73658 13.3004 2.66634 13.1308 2.66634 12.954V9.28735C4.36385 9.96078 6.17347 10.3069 7.99967 10.3074C9.82582 10.3062 11.6353 9.96016 13.333 9.28735V12.954ZM13.333 7.82735C11.6519 8.56587 9.83581 8.94721 7.99967 8.94721C6.16354 8.94721 4.34741 8.56587 2.66634 7.82735V6.95402C2.66634 6.77721 2.73658 6.60764 2.8616 6.48262C2.98663 6.35759 3.1562 6.28735 3.33301 6.28735H12.6663C12.8432 6.28735 13.0127 6.35759 13.1377 6.48262C13.2628 6.60764 13.333 6.77721 13.333 6.95402V7.82735Z"
                                    fill="#22211F"
                                  />
                                </g>
                              </svg>
                              <span className={` ${styles.sub_line_para} mb-0`}>
                                {experience}
                              </span>
                            </span>
                          </div>
                        ) : (
                          <div className={` ${styles.detail_line} mb-xs-2`}>
                            <div className={` ${styles.sub_line} mb-0`}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                              >
                                <g opacity="0.5">
                                  <path
                                    d="M13.6399 7.04077C13.5463 6.06671 13.2021 5.13349 12.6407 4.33198C12.0793 3.53047 11.32 2.88799 10.4366 2.4671C9.55318 2.04621 8.57584 1.86125 7.59973 1.93024C6.62362 1.99923 5.68201 2.31981 4.86659 2.86077C4.16605 3.3292 3.57796 3.94697 3.14455 4.6697C2.71114 5.39243 2.44318 6.20217 2.35992 7.04077C2.27824 7.87388 2.38304 8.71472 2.6667 9.50229C2.95037 10.2899 3.40579 11.0044 3.99992 11.5941L7.53325 15.1341C7.59523 15.1966 7.66896 15.2462 7.7502 15.28C7.83144 15.3139 7.91858 15.3313 8.00659 15.3313C8.09459 15.3313 8.18173 15.3139 8.26297 15.28C8.34421 15.2462 8.41794 15.1966 8.47992 15.1341L11.9999 11.5941C12.5941 11.0044 13.0495 10.2899 13.3331 9.50229C13.6168 8.71472 13.7216 7.87388 13.6399 7.04077ZM11.0666 10.6541L7.99992 13.7208L4.93325 10.6541C4.48131 10.2021 4.13512 9.65566 3.91957 9.05394C3.70401 8.45223 3.62444 7.81023 3.68659 7.1741C3.74913 6.52817 3.95443 5.90421 4.28763 5.34733C4.62084 4.79045 5.07362 4.31458 5.61325 3.9541C6.32055 3.48426 7.15079 3.23363 7.99992 3.23363C8.84905 3.23363 9.67929 3.48426 10.3866 3.9541C10.9246 4.31318 11.3764 4.78696 11.7095 5.3414C12.0426 5.89583 12.2488 6.51717 12.3133 7.16077C12.3774 7.79906 12.2989 8.44362 12.0832 9.0478C11.8676 9.65198 11.5204 10.2007 11.0666 10.6541ZM7.99992 4.62077C7.40658 4.62077 6.82656 4.79672 6.33321 5.12636C5.83986 5.45601 5.45534 5.92454 5.22828 6.47272C5.00122 7.0209 4.94181 7.6241 5.05756 8.20604C5.17332 8.78799 5.45904 9.32253 5.8786 9.74209C6.29816 10.1616 6.83271 10.4474 7.41465 10.5631C7.99659 10.6789 8.59979 10.6195 9.14797 10.3924C9.69615 10.1653 10.1647 9.78083 10.4943 9.28748C10.824 8.79413 10.9999 8.21411 10.9999 7.62077C10.9982 6.82566 10.6815 6.06362 10.1193 5.5014C9.55707 4.93917 8.79503 4.62253 7.99992 4.62077ZM7.99992 9.28744C7.67028 9.28744 7.34805 9.18969 7.07397 9.00655C6.79989 8.82342 6.58627 8.56312 6.46012 8.25858C6.33398 7.95403 6.30097 7.61892 6.36528 7.29562C6.42959 6.97232 6.58832 6.67535 6.82141 6.44226C7.0545 6.20917 7.35147 6.05044 7.67477 5.98613C7.99807 5.92182 8.33318 5.95483 8.63773 6.08097C8.94227 6.20712 9.20257 6.42074 9.3857 6.69482C9.56884 6.9689 9.66659 7.29114 9.66659 7.62077C9.66659 8.0628 9.49099 8.48672 9.17843 8.79928C8.86587 9.11184 8.44195 9.28744 7.99992 9.28744Z"
                                    fill="#22211F"
                                  />
                                </g>
                              </svg>
                              <p className={` ${styles.sub_line_para} mb-0`}>
                                {location?.location}
                              </p>
                            </div>

                            <div className={` ${styles.sub_line} mb-0`}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                              >
                                <g opacity="0.5">
                                  <path
                                    d="M12.6663 4.95402H10.6663V4.28735C10.6663 3.75692 10.4556 3.24821 10.0806 2.87314C9.70548 2.49807 9.19677 2.28735 8.66634 2.28735H7.33301C6.80258 2.28735 6.29387 2.49807 5.91879 2.87314C5.54372 3.24821 5.33301 3.75692 5.33301 4.28735V4.95402H3.33301C2.80257 4.95402 2.29387 5.16473 1.91879 5.53981C1.54372 5.91488 1.33301 6.42359 1.33301 6.95402V12.954C1.33301 13.4845 1.54372 13.9932 1.91879 14.3682C2.29387 14.7433 2.80257 14.954 3.33301 14.954H12.6663C13.1968 14.954 13.7055 14.7433 14.0806 14.3682C14.4556 13.9932 14.6663 13.4845 14.6663 12.954V6.95402C14.6663 6.42359 14.4556 5.91488 14.0806 5.53981C13.7055 5.16473 13.1968 4.95402 12.6663 4.95402ZM6.66634 4.28735C6.66634 4.11054 6.73658 3.94097 6.8616 3.81595C6.98663 3.69092 7.1562 3.62069 7.33301 3.62069H8.66634C8.84315 3.62069 9.01272 3.69092 9.13775 3.81595C9.26277 3.94097 9.33301 4.11054 9.33301 4.28735V4.95402H6.66634V4.28735ZM13.333 12.954C13.333 13.1308 13.2628 13.3004 13.1377 13.4254C13.0127 13.5504 12.8432 13.6207 12.6663 13.6207H3.33301C3.1562 13.6207 2.98663 13.5504 2.8616 13.4254C2.73658 13.3004 2.66634 13.1308 2.66634 12.954V9.28735C4.36385 9.96078 6.17347 10.3069 7.99967 10.3074C9.82582 10.3062 11.6353 9.96016 13.333 9.28735V12.954ZM13.333 7.82735C11.6519 8.56587 9.83581 8.94721 7.99967 8.94721C6.16354 8.94721 4.34741 8.56587 2.66634 7.82735V6.95402C2.66634 6.77721 2.73658 6.60764 2.8616 6.48262C2.98663 6.35759 3.1562 6.28735 3.33301 6.28735H12.6663C12.8432 6.28735 13.0127 6.35759 13.1377 6.48262C13.2628 6.60764 13.333 6.77721 13.333 6.95402V7.82735Z"
                                    fill="#22211F"
                                  />
                                </g>
                              </svg>
                              <p className={` ${styles.sub_line_para} mb-0`}>
                                {type?.type}
                              </p>
                            </div>
                            <div className={` ${styles.sub_line} mb-0`}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                              >
                                <g opacity="0.5">
                                  <path
                                    d="M12.6663 4.95402H10.6663V4.28735C10.6663 3.75692 10.4556 3.24821 10.0806 2.87314C9.70548 2.49807 9.19677 2.28735 8.66634 2.28735H7.33301C6.80258 2.28735 6.29387 2.49807 5.91879 2.87314C5.54372 3.24821 5.33301 3.75692 5.33301 4.28735V4.95402H3.33301C2.80257 4.95402 2.29387 5.16473 1.91879 5.53981C1.54372 5.91488 1.33301 6.42359 1.33301 6.95402V12.954C1.33301 13.4845 1.54372 13.9932 1.91879 14.3682C2.29387 14.7433 2.80257 14.954 3.33301 14.954H12.6663C13.1968 14.954 13.7055 14.7433 14.0806 14.3682C14.4556 13.9932 14.6663 13.4845 14.6663 12.954V6.95402C14.6663 6.42359 14.4556 5.91488 14.0806 5.53981C13.7055 5.16473 13.1968 4.95402 12.6663 4.95402ZM6.66634 4.28735C6.66634 4.11054 6.73658 3.94097 6.8616 3.81595C6.98663 3.69092 7.1562 3.62069 7.33301 3.62069H8.66634C8.84315 3.62069 9.01272 3.69092 9.13775 3.81595C9.26277 3.94097 9.33301 4.11054 9.33301 4.28735V4.95402H6.66634V4.28735ZM13.333 12.954C13.333 13.1308 13.2628 13.3004 13.1377 13.4254C13.0127 13.5504 12.8432 13.6207 12.6663 13.6207H3.33301C3.1562 13.6207 2.98663 13.5504 2.8616 13.4254C2.73658 13.3004 2.66634 13.1308 2.66634 12.954V9.28735C4.36385 9.96078 6.17347 10.3069 7.99967 10.3074C9.82582 10.3062 11.6353 9.96016 13.333 9.28735V12.954ZM13.333 7.82735C11.6519 8.56587 9.83581 8.94721 7.99967 8.94721C6.16354 8.94721 4.34741 8.56587 2.66634 7.82735V6.95402C2.66634 6.77721 2.73658 6.60764 2.8616 6.48262C2.98663 6.35759 3.1562 6.28735 3.33301 6.28735H12.6663C12.8432 6.28735 13.0127 6.35759 13.1377 6.48262C13.2628 6.60764 13.333 6.77721 13.333 6.95402V7.82735Z"
                                    fill="#22211F"
                                  />
                                </g>
                              </svg>
                              <p className={` ${styles.sub_line_para} mb-0`}>
                                {experience}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className={` ${styles.btn_sec} d-flex justify-content-center`}
                      >
                        {isMobile ? (
                          <Button
                            style={{ marginTop: 10, fontSize: 12 }}
                            className={` ${styles.arrowbtn}`}
                            onClick={() => handleApplyNowClick(filteredData)}
                          >
                            <svg
                              width="12"
                              height="12"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m21 12-7-9v4.99L3 8v8h11v5l7-9z"></path>
                            </svg>{" "}
                            More Info
                          </Button>
                        ) : (
                          <Button
                            // className={styles.apply_btn}
                            className={styles.arrowbtn}
                            onClick={() => handleApplyNowClick(filteredData)}
                          >
                            <svg
                              width="20"
                              height="20"
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m21 12-7-9v4.99L3 8v8h11v5l7-9z"></path>
                            </svg>
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}

              {/* Pagination controls */}
              <div className="text-center mt-3">
                <Button
                  variant="secondary"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  style={{
                    backgroundColor: "white",
                    color: "#6F2B8C",
                    borderColor: "white",
                  }}
                >
                  Previous
                </Button>
                <span className="mx-2 text-white">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="secondary"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  style={{
                    backgroundColor: "white",
                    color: "#6F2B8C",
                    borderColor: "white",
                  }}
                >
                  Next
                </Button>
              </div>
            </Col>
            <Col md={4} className="mb-5 mt-md-3">
              <img
                src={carrerImg}
                alt="Explore the Amazingness"
                className="w-100 rounded-3"
              />
            </Col>
          </Row>
        )}
      </Container>

      {/* Job Description Model  */}
      <Modal show={showModal2} onHide={handleClose2} size="lg">
        <Modal.Header style={{ backgroundColor: "#6F2B8C", color: "white" }}>
          <Modal.Title>JD - {selectedData?.jobRole}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: 350, overflow: "auto" }}>
          <div>
            <p className={` ${styles.team_para} mb-4  mb-xs-3`}>
              {" "}
              {jobDescription[0]?.title}{" "}
            </p>
            <div>
              <ul style={{ listStyleType: "circle" }}>
                {jobDescription[0]?.list?.map((item, index) => {
                  return <li key={index}> {item} </li>;
                })}
              </ul>
            </div>{" "}
            <hr />
            <p className={` ${styles.team_para} mb-4  mb-xs-3`}>
              {" "}
              {jobDescription[1]?.title}{" "}
            </p>
            <div>
              <ul style={{ listStyleType: "circle" }}>
                {jobDescription[1]?.list?.map((item, index) => {
                  return <li key={index}> {item} </li>;
                })}
              </ul>
            </div>{" "}
            <hr />
            <p className={` ${styles.team_para} mb-4  mb-xs-3`}>
              {" "}
              {jobDescription[2]?.title}{" "}
            </p>
            <div>
              <ul style={{ listStyleType: "circle" }}>
                {jobDescription[2]?.list?.map((item, index) => {
                  return <li key={index}> {item} </li>;
                })}
              </ul>
            </div>{" "}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={handleClose2}
            style={{
              backgroundColor: "#6F2B8C",
              color: "white",
              borderColor: "#6F2B8C",
            }}
          >
            {" "}
            Close{" "}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Form  Model */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className={styles.supportingText35}>
            Apply Now
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>
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
            </p>
            <p> </p>
          </div>
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
                          <label style={{ color: "red", fontSize: "14px" }}>
                            {" "}
                            * Make sure you have uploaded the Resume before
                            Submit
                          </label>
                          <label style={{ color: "green", fontSize: "14px" }}>
                            {" "}
                            {successupload}{" "}
                          </label>
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
    </Container>
  );
};

export default JobPost;
