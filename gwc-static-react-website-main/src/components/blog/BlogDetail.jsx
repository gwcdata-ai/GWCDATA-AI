// redesigned blog page code

import React from "react";
import linkedin from "../../assets/images/about/linkedin.png";
import { Helmet } from "react-helmet-async";

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
import { useEffect } from "react";
import AOS from "aos";
import useMedia from "../../hooks/useMedia";
AOS.init({
  offset: 400,
  duration: 700,
  easing: "linear",
  delay: 200,
});
AOS.refreshHard();

const SERVICEID = "service_tq3fxn1";
const TEMPLATEID = "template_msmv4ui";
const PUBLICID = "_M_x6ZxOlDwyjQYJ6";

const BlogDetail = () => {
  const isMobile = useMedia("(max-width:600px)");
  const isTablet = useMedia("(max-width:850px)");

  let colClass = "col-xl-2"; // Default to desktop size
  if (isMobile) {
    colClass = "d-none"; // Hide on tablet and mobile screens
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);
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

  let metaTitle = item?.topHeading;
  let metaURL = `https://gwc.anuvicdesigns.in/blogs/${slug}`;
  let metaDescription = item?.description;
  let metaImage = `https://gwc.anuvicdesigns.in${item?.img}`;
  let metaAuthor = item?.Author.name;
  let metaDate = item?.date;

  let metadata={
    metaTitle,metaURL,metaDescription,metaImage,metaAuthor,metaDate
  }
  // console.log("item", item.blogSubHeading);
  // const { title, slug, content, imageUrl } = blog;
  // console.log(metaImage);
  console.log('meta data from blog list', metadata);


  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": metaURL,
    },
    headline: metaTitle,
    description: metaDescription,
    image: metaImage,
    author: {
      "@type": "Person",
      name: metaAuthor,
    },
    publisher: {
      "@type": "Organization",
      name: "",
      logo: {
        "@type": "ImageObject",
        url: "",
      },
    },
    datePublished: metaDate,
  };
  console.log('schema data from object', schemaMarkup);
  

  return (
    <Container
      fluid
      // style={{ backgroundColor: "lightgray" }}
      className={` ${styles.detail_container}`}
    >
      <>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(schemaMarkup)}
          </script>

          {/* <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="Blog" />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:url" content={metaURL} />
          <meta property="og:site_name" content="GWC Data.Ai" />
          <meta property="og:image" content={metaImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="image" property="og:image:type" content="image/png" />
          <meta property="og:description" content={metaDescription} />
          <link rel="canonical" href={metaURL}></link>
          <meta name="twitter:image" content={metaImage}></meta>
          <meta name="twitter:card" content="summary"></meta> */}
        </Helmet>
      </>
      <Container className={`md-5 ${styles.outermost_container}`}>
        <Row
          className=""
          // style={{ border: "2px solid red" }}
        >
          <Col className={`col-xl-12 col-sm-12`}>
            <div className={` ${styles.ThumbImage_parent}`}>
              <img
                src={
                  isMobile
                    ? `${item?.blogTopImg_mobile}`
                    : `${item?.blogTopImg}`
                }
                alt="image"
                className={` ${styles.ThumbImage_Img}`}
              />
            </div>
            <div className="" style={{ width: "99.5%", margin: "auto" }}>
              <p className={` ${styles?.para} mt-3 mb-2`}>{item.date}</p>

              {item.blogSubHeading && (
                <h1 className={`mt-1 ${styles.blog_main_para} mb-4`}>
                  {item.blogSubHeading}
                </h1>
              )}
            </div>
          </Col>

          <Col
            className="col-xl-10 "
            md={9}

            // style={{ border: "2px solid blue" }}
          >
            <Row
              className={
                isMobile ? `${styles.section_mobile}` : `${styles.section}`
              }
            >
              <div className="mt-0">
                {/* <img
                  src={item?.blogTopImg}
                  alt="image"
                  className="w-100 my-4"
                /> */}

                {/* <h3 className={` ${styles.blog_main_para} `}>{item?.blogSubHeading}</h3>
                                <p className={styles.blog_sub_para}>
                                    {item?.blogSubPara}
                                </p> */}

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
                      listId,
                      listHeading,
                      listPara,
                      listSub,
                      listPoints,
                      listPoint,
                      images,
                      Author,
                    } = data;
                    return (
                      <>
                        {/* <li key={id}>
                                                    <h6 className={` ${styles.blog_next_para}`}>{listHeading}</h6>
                                                    <p className={` ${styles.blog_sub_para}`}>{listPara}</p>
                                                </li> */}

                        {isMobile && (
                          <li key={id}>
                            {listHeading && (
                              <h6
                                id={listId}
                                className={`${
                                  isMobile
                                    ? ` ${styles.blog_next_para_Mobile}`
                                    : ` ${styles.blog_next_para}`
                                }`}
                              >
                                {listHeading}
                              </h6>
                            )}
                            {listSub && (
                              <h6 className={` ${styles.blog_sub_para}`}>
                                {listSub}
                              </h6>
                            )}
                            {listPara && (
                              <p className={` ${styles.blog_sub_para}`}>
                                {listPara}
                              </p>
                            )}
                            {listPoints &&
                              listPoints.map((item, i) => (
                                <>
                                  <ul
                                    key={i} // Add a unique key for each item
                                    className={`${styles.blog_sub_para_list} mx-2 my-3 px-0`}
                                    style={{ listStyle: "none" }}
                                  >
                                    <li
                                      className="mt-2 "
                                      // style={{ display: "inline-block" }}
                                    >
                                      <strong style={{ color: "#6f2b8c" }}>
                                        {item?.listPoint_Heading}
                                      </strong>
                                      <span
                                        style={{
                                          color: "#252B33",
                                          lineHeight: "1.7",
                                        }}
                                      >
                                        {item?.listPoint}
                                      </span>
                                    </li>
                                  </ul>
                                  {/* {console.log("vvvv", item)} */}

                                  {item.videos && (
                                    // <img
                                    //   style={{ width: "100%" }}
                                    //   src={item.images}
                                    //   className="w-20 mt-3 mb-5"
                                    // />
                                    <video
                                      // width="100%"
                                      // height="680px"
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="video-element"
                                      style={{
                                        objectFit: "cover",
                                        width: "100%",

                                        padding: "0px",
                                      }}
                                    >
                                      <source
                                        src={item.videos}
                                        type="video/mp4"
                                      />
                                    </video>
                                  )}
                                  {item.images && (
                                    <div style={{ padding: "0px 20px" }}>
                                      <img
                                        style={{
                                          width: "100%",
                                          borderRadius: "10px",
                                        }}
                                        src={item.images}
                                        className="w-20 mt-3 mb-5"
                                      />
                                    </div>
                                  )}
                                </>
                              ))}
                            {listPoint && (
                              <ol style={{ fontFamily: "poppins-regular" }}>
                                {listPoint.map((item, i) => (
                                  <li
                                    key={i} // Add a unique key for each item
                                    className={` mx-2 my-3 px-2`}
                                  >
                                    <span
                                      style={{ color: "black" }}
                                      className="mt-2 mb-3"
                                    >
                                      {" "}
                                      {item?.listPoint_Heading}
                                    </span>
                                  </li>
                                ))}
                              </ol>
                            )}

                            {images?.length === 1 &&
                              images?.map((item) => (
                                <img src={item} className="w-80 mt-3 mb-5" />
                                // change this to w-100 to make img full screen
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
                                    <img
                                      src={item}
                                      className="w-100 mb-5"
                                    />{" "}
                                  </Col>
                                ))}
                            </Row>
                          </li>
                        )}
                        {!isMobile && (
                          <li key={id}>
                            {listHeading && (
                              <h6
                                id={listId}
                                className={`${
                                  isMobile
                                    ? ` ${styles.blog_next_para_Mobile}`
                                    : ` ${styles.blog_next_para}`
                                }`}
                              >
                                {listHeading}
                              </h6>
                            )}
                            {listSub && (
                              <h6 className={` ${styles.blog_sub_para}`}>
                                {listSub}
                              </h6>
                            )}
                            {listPara && (
                              <p className={` ${styles.blog_sub_para}`}>
                                {listPara}
                              </p>
                            )}
                            {listPoints &&
                              listPoints.map((item, i) => (
                                <>
                                  <div
                                    key={i} // Add a unique key for each item
                                    className={`${styles.blog_sub_para_list} mx-2 my-3 px-2`}
                                  >
                                    <span className="mt-2 mb-3">
                                      <strong style={{ color: "#6f2b8c " }}>
                                        {item?.listPoint_Heading}
                                      </strong>
                                    </span>
                                    <span
                                      style={{
                                        color: "#252B33",
                                        lineHeight: "1.7",
                                      }}
                                    >
                                      {item?.listPoint}
                                    </span>
                                  </div>
                                  {/* {console.log("vvvv", item)} */}

                                  {item.videos && (
                                    // <img
                                    //   style={{ width: "100%" }}
                                    //   src={item.images}
                                    //   className="w-20 mt-3 mb-5"
                                    // />
                                    <video
                                      // width="100%"
                                      // height="680px"
                                      autoPlay
                                      muted
                                      loop
                                      playsInline
                                      className="video-element"
                                      style={{
                                        objectFit: "cover",
                                        width: "100%",

                                        padding: "0px",
                                      }}
                                    >
                                      <source
                                        src={item.videos}
                                        type="video/mp4"
                                      />
                                    </video>
                                  )}
                                  {/* {isMobile && (
                                    <img
                                      style={{ width: "100%" }}
                                      src={item.images}
                                      className="w-20 mt-3 mb-5"
                                    />
                                  )} */}
                                </>
                              ))}
                            {listPoint && (
                              <ol style={{ fontFamily: "poppins-regular" }}>
                                {listPoint.map((item, i) => (
                                  <li
                                    key={i} // Add a unique key for each item
                                    className={` mx-2 my-3 px-2`}
                                  >
                                    <span
                                      style={{ color: "black" }}
                                      className="mt-2 mb-3"
                                    >
                                      {" "}
                                      {item?.listPoint_Heading}
                                    </span>
                                  </li>
                                ))}
                              </ol>
                            )}

                            {images?.length === 1 &&
                              images?.map((item) => (
                                <img src={item} className="w-80 mt-3 mb-5" />
                                // change this to w-100 to make img full screen
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
                                    <img
                                      src={item}
                                      className="w-100 mb-5"
                                    />{" "}
                                  </Col>
                                ))}
                            </Row>
                          </li>
                        )}
                      </>
                    );
                  })}
                </ul>

                <h6
                  className={`${
                    isMobile
                      ? ` ${styles.blog_next_para_Mobile}`
                      : ` ${styles.blog_next_para}`
                  }`}
                >
                  {item?.imageHeading}
                </h6>
                {item?.blogImage && (
                  <img
                    src={item?.blogImage}
                    alt="image"
                    className="my-4 w-100"
                  />
                )}

                <h6
                  id={item?.conclusion}
                  className={`${
                    isMobile
                      ? ` ${styles.blog_next_para_Mobile}`
                      : ` ${styles.blog_next_para}`
                  }`}
                >
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
                {/* <p className={` ${styles.last_para} my-2`}>{item?.writtenBy}</p> */}
                <p
                  style={{
                    fontFamily: "poppins-regular",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  className={`  my-2`}
                >
                  <Link
                    style={{ color: "#475467" }}
                    to={`/contact-us`}
                    target="_top"
                  >
                    {"Contact Us Today!"}
                  </Link>
                </p>
              </div>
            </Row>
          </Col>

          {/* rightside contents */}

          <Col
            md={3}
            className={`${colClass} ${isMobile && styles.padding_for_mobile}`}
            style={{ padding: 0 }}
          >
            <Row>
              <div>
                {/* {console.log("imageeeeee", item?.blog_right_image)}
                {console.log("imageeeeeetabb", item?.Harnessing_Tablet)} */}

                {isTablet && (
                  <img
                    src={item?.blog_right_image_Tablet}
                    alt=""
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
                {!isTablet && (
                  <img
                    src={item?.blog_right_image}
                    alt=""
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
              {/* Additional content */}
            </Row>
          </Col>

          {isMobile && (
            <Col
              style={{ backgroundColor: "#eff3f6" }}
              md={12}
              className={`${isMobile ? `px-2 py-4 mt-5` : `px-5 py-4 mt-5`}`}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Row>
                <Col md={8}>
                  <div
                    style={{
                      display: "flex",
                      // gap: "0.8rem",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      src={item?.Author.author_Image}
                      alt={item?.Author.name}
                      className={styles.author_img}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <p className={styles.writtenby}>{"Written by"}</p>
                      {isMobile ? (
                        <p className={styles.author_name_mobile}>
                          {item?.Author?.name}
                        </p>
                      ) : (
                        <p className={styles.author_name}>
                          {item?.Author?.name}
                        </p>
                      )}

                      <p className={styles.writtenby}>
                        {item?.Author?.author_designation}
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <a target="_blank" href={item?.Author?.LinkedIn}>
                        {/* {console.log("auth", item?.Author?.LinkedIn)} */}
                        <img src={Linkedin} alt="" />
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          )}

          {!isMobile && (
            <Col
              style={{ backgroundColor: "#eff3f6" }}
              md={12}
              className={`${isMobile ? `px-2 py-4 mt-5` : `px-5 py-4 mt-5`}`}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <Row>
                <Col md={8}>
                  <div
                    style={{
                      display: "flex",
                      gap: "2rem",
                    }}
                  >
                    <img
                      src={item?.Author.author_Image}
                      alt={item?.Author.name}
                      className={styles.author_img}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <p className={styles.writtenby}>{"Written by"}</p>
                      {isMobile ? (
                        <p className={styles.author_name_mobile}>
                          {item?.Author?.name}
                        </p>
                      ) : (
                        <p className={styles.author_name}>
                          {item?.Author?.name}
                        </p>
                      )}

                      <p className={styles.writtenby}>
                        {item?.Author?.author_designation}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  style={{
                    // border: "1px solid green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  md={4}
                >
                  <a target="_blank" href={item?.Author?.LinkedIn}>
                    {/* {console.log("auth", item?.Author?.LinkedIn)} */}
                    <img src={Linkedin} alt="" />
                  </a>
                </Col>
              </Row>
            </Col>
          )}

          <Col
            className="col-xl-12 mt-4"
            // style={{ border: "2px solid green" }}
          >
            {/* <div className="mb-4">
                            <Form.Control type="search" placeholder="Search" className={styles.search_logo} />
                        </div> */}
            <div>
              <p className={` ${styles?.Recent_heading} mb-0`}>Recent Posts</p>
            </div>
            <Card
              className={` ${styles.card_form} mt-4 mb-5 `}
              data-aos="fade-up"
              // data-aos-anchor-placement="top-bottom"
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "2.5rem",
                  justifyContent: "space-evenly",
                }}
              >
                {BlogCardData3.map((data) => {
                  const {
                    id,
                    date,
                    heading,
                    days,
                    views,
                    img,
                    slug,
                    topHeading,
                  } = data;
                  return (
                    <Col xl={3} md={4} key={id}>
                      <Card className={` ${styles.card_bg} mb-2`}>
                        <Link to={`/blogs/${slug}`} target="_top">
                          <Card.Img variant="top" src={img} />
                          <Card.Text>
                            <div className={` ${styles?.text_section} `}>
                              <h6 className={` ${styles?.main_para} mb-0`}>
                                {topHeading.slice(0, 55)}...
                              </h6>
                              <p className={` ${styles?.para} mb-3`}>{date}</p>

                              {/* <div className={` ${styles?.views_sec} `}>
                                <p className={` ${styles?.para} mb-0 `}>
                                  {days}
                                </p> */}
                              {/* <p className={` ${styles?.para} mb-0 `}>•</p> */}
                              {/* <p className={` ${styles?.para} mb-0 `}>{views}</p> */}
                              {/* </div> */}
                              {/* <div className={styles.hr_line}></div> */}
                              {/* <div className={styles.socialMedia}>
                                <Link
                                  to="https://www.linkedin.com/company/gwcdataai/"
                                  target="_blank"
                                >
                                  <img src={linkedin} alt="Linkedin" />
                                </Link>
                              </div> */}
                            </div>
                          </Card.Text>
                        </Link>
                      </Card>
                    </Col>
                  );
                })}
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BlogDetail;

//old blog page code

// import React from "react";
// import {
//   Card,
//   Container,
//   Row,
//   Col,
//   FormControl,
//   Button,
// } from "react-bootstrap";
// import styles from "./blog.module.css";
// import Facebook from "../../assets/images/Blog/Facebook.svg";
// import Twitter from "../../assets/images/Blog/Twitter.svg";
// import Linkedin from "../../assets/images/Blog/Linkedin.svg";
// import Instagram from "../../assets/images/Blog/Instagram.svg";
// import { BlogCardData, BlogCardData2, BlogCardData3 } from "./data";
// import detailImg from "../../assets/images/Blog/detailImg.png";
// import BlogDetailImg from "../../assets/images/Blog/BlogDetailImg.png";
// import logo from "../../assets/images/Blog/logo.png";
// import { BlogListData } from "../../components/blog/BlogListData";
// import { Link, useParams } from "react-router-dom";

// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import emailjs from "@emailjs/browser";

// const SERVICEID = "service_tq3fxn1";
// const TEMPLATEID = "template_msmv4ui";
// const PUBLICID = "_M_x6ZxOlDwyjQYJ6";

// const BlogDetail = () => {
//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phoneNumber: Yup.string()
//       .matches(/^[0-9]{10}$/, "Invalid phone number")
//       .required("Phone Number is required"),
//     message: Yup.string(),
//   });

//   const notify = () => {
//     toast.success(
//       "Thank You, Got your message! Our team is on standby, and you can expect a response in 24 hours",
//       {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       }
//     );
//   };

//   //   const handleSubmit = (values) => {
//   //     console.log(values); // Handle form submission here
//   //   };

//   const handleSubmit = (values, { resetForm }) => {
//     // console.log(values);
//     emailjs.send(SERVICEID, TEMPLATEID, values, PUBLICID).then(
//       (response) => {
//         notify();
//         resetForm();
//       },
//       (err) => {
//         console.log(
//           `Hello!, there is some network issue please check your internet connection and re-submit the request`
//         );
//       }
//     );
//   };

//   let { slug } = useParams();
//   let item = BlogListData?.find((ele) => {
//     return ele.slug == slug;
//   });

//   // console.log("item", item.blogSubHeading);

//   return (
//     <Container fluid className={` ${styles.detail_container}`}>
//       <Container className="mb-5">
//         <Row className="">
//           <Col md={8}>
//             <Row className="mt-0">
//               <p className={` ${styles?.title2} `}>{item?.topHeading}</p>
//             </Row>
//             <Row>
//               <Col md={8}>
//                 <div className={` ${styles?.logo_para_sec} `}>
//                   <img src={logo} alt="" />
//                   <div>
//                     <p className={` ${styles?.logo_para} mb-0`}>GWC DATA.AI</p>
//                     {/* <p className={` ${styles?.logo_sub_para} mb-0 `}>
//                       110k Views
//                     </p> */}
//                   </div>
//                 </div>
//               </Col>
//               <Col md={4}>
//                 <div className={styles.socialMedia_sec}>
//                   <Link
//                     to="https://www.linkedin.com/company/gwcdataai/"
//                     target="_blank"
//                   >
//                     <img src={Linkedin} alt="Linkedin" />
//                   </Link>
//                 </div>
//               </Col>
//             </Row>
//             <Row className={styles.section}>
//               <div className="mt-0">
//                 <img
//                   src={item?.blogTopImg}
//                   alt="image"
//                   className="w-100 my-4"
//                 />

//                 {/* <h3 className={` ${styles.blog_main_para} `}>{item?.blogSubHeading}</h3>
//                                 <p className={styles.blog_sub_para}>
//                                     {item?.blogSubPara}
//                                 </p> */}
//                 {item.blogSubHeading && (
//                   <h3 className={` ${styles.blog_main_para} mb-3`}>
//                     {item.blogSubHeading}
//                   </h3>
//                 )}

//                 {item.blogSubPara1 && (
//                   <p className={` ${styles.blog_sub_para} mb-3`}>
//                     {item.blogSubPara1}
//                   </p>
//                 )}
//                 {item.blogSubPara2 && (
//                   <p className={` ${styles.blog_sub_para} mb-3`}>
//                     {item.blogSubPara2}
//                   </p>
//                 )}
//                 <ul className={` ${styles.list_section}`}>
//                   {item.blogList.map((data) => {
//                     const {
//                       id,
//                       listHeading,
//                       listPara,
//                       listSub,
//                       listPoints,
//                       images,
//                     } = data;
//                     return (
//                       <>
//                         {/* <li key={id}>
//                                                     <h6 className={` ${styles.blog_next_para}`}>{listHeading}</h6>
//                                                     <p className={` ${styles.blog_sub_para}`}>{listPara}</p>
//                                                 </li> */}

//                         <li key={id}>
//                           {listHeading && (
//                             <h6 className={` ${styles.blog_next_para} mb-3`}>
//                               {listHeading} head
//                             </h6>
//                           )}
//                           {listSub && (
//                             <h6 className={` ${styles.blog_next_para2}`}>
//                               {listSub} subb
//                             </h6>
//                           )}
//                           {listPara && (
//                             <p className={` ${styles.blog_sub_para}`}>
//                               {listPara} para
//                             </p>
//                           )}
//                           {listPoints && (
//                             <ul>
//                               {listPoints?.map((item) => (
//                                 <li
//                                   className={` ${styles.blog_sub_para} mb-3`}
//                                   dangerouslySetInnerHTML={{
//                                     __html: item.replace(/\n/g, ""),
//                                   }}
//                                 />
//                               ))}
//                             </ul>
//                           )}

//                           {images?.length === 1 &&
//                             images?.map((item) => (
//                               <img src={item} className="w-50 mt-3 mb-5" />
//                             ))}
//                           <Row>
//                             {images?.length === 2 &&
//                               images?.map((item) => (
//                                 <Col lg={5}>
//                                   <img src={item} className="w-100 mb-5" />
//                                 </Col>
//                               ))}
//                           </Row>
//                           <Row>
//                             {images?.length === 3 &&
//                               images?.map((item) => (
//                                 <Col lg={4}>
//                                   {" "}
//                                   <img src={item} className="w-100 mb-5" />{" "}
//                                 </Col>
//                               ))}
//                           </Row>
//                         </li>
//                       </>
//                     );
//                   })}
//                 </ul>

//                 <h6 className={` ${styles.blog_next_para} `}>
//                   {item?.imageHeading}
//                 </h6>
//                 {item?.blogImage && (
//                   <img
//                     src={item?.blogImage}
//                     alt="image"
//                     className="my-4 w-100"
//                   />
//                 )}

//                 <h6 className={` ${styles.blog_next_para}`}>
//                   {item?.conclusion}
//                 </h6>
//                 <p className={` ${styles.blog_sub_para}`}>
//                   {item?.conclusionText}
//                 </p>

//                 {/* <div className={` ${styles.socialMedia} my-4 `}>
//                                     <img src={Facebook} alt="facebook" />
//                                     <img src={Twitter} alt="twitter" />
//                                     <img src={Linkedin} alt="Linkedin" />
//                                 </div> */}
//                 <p className={` ${styles.last_para} my-2`}>{item?.writtenBy}</p>
//               </div>
//             </Row>
//           </Col>

//           <Col md={4}>
//             {/* <div className="mb-4">
//                             <Form.Control type="search" placeholder="Search" className={styles.search_logo} />
//                         </div> */}
//             <Card className={styles.detail_card_form}>
//               <div>
//                 <p className={` ${styles?.main_para2} mb-0`}>
//                   Get a free consultation for a winning strategy for your
//                   business!
//                 </p>
//               </div>

//               <Formik
//                 initialValues={{
//                   firstName: "",
//                   lastName: "",
//                   email: "",
//                   phoneNumber: "",
//                   message: "",
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//               >
//                 {({ errors, touched }) => (
//                   <Form>
//                     <Field
//                       type="text"
//                       name="firstName"
//                       placeholder="First Name *"
//                       className={`blogform mb-2 ${
//                         styles?.blogform ? styles.blogform : ""
//                       } ${
//                         errors.firstName && touched.firstName
//                           ? "is-invalid"
//                           : ""
//                       }`}
//                     />
//                     {errors.firstName && touched.firstName ? (
//                       <div
//                         className="invalid-feedback"
//                         style={{
//                           textAlign: "left",
//                           marginBottom: "15px",
//                           marginTop: "-5px",
//                           color: "white",
//                         }}
//                       >
//                         {errors.firstName}
//                       </div>
//                     ) : null}
//                     <Field
//                       type="text"
//                       name="lastName"
//                       placeholder="Last Name *"
//                       className={`blogform mb-2 ${
//                         styles?.blogform ? styles.blogform : ""
//                       } ${
//                         errors.lastName && touched.lastName ? "is-invalid" : ""
//                       }`}
//                     />
//                     {errors.lastName && touched.lastName ? (
//                       <div
//                         className="invalid-feedback"
//                         style={{
//                           textAlign: "left",
//                           marginBottom: "15px",
//                           marginTop: "-5px",
//                           color: "white",
//                         }}
//                       >
//                         {errors.lastName}
//                       </div>
//                     ) : null}
//                     <Field
//                       type="email"
//                       name="email"
//                       placeholder="Email Address *"
//                       className={`blogform mb-2 ${
//                         styles?.blogform ? styles.blogform : ""
//                       } ${errors.email && touched.email ? "is-invalid" : ""}`}
//                     />
//                     {errors.email && touched.email ? (
//                       <div
//                         className="invalid-feedback"
//                         style={{
//                           textAlign: "left",
//                           marginBottom: "15px",
//                           marginTop: "-5px",
//                           color: "white",
//                         }}
//                       >
//                         {errors.email}
//                       </div>
//                     ) : null}
//                     <Field
//                       type="text"
//                       name="phoneNumber"
//                       placeholder="Phone Number *"
//                       className={`blogform mb-2 ${
//                         styles?.blogform ? styles.blogform : ""
//                       } ${
//                         errors.phoneNumber && touched.phoneNumber
//                           ? "is-invalid"
//                           : ""
//                       }`}
//                     />
//                     {errors.phoneNumber && touched.phoneNumber ? (
//                       <div
//                         className="invalid-feedback"
//                         style={{
//                           textAlign: "left",
//                           marginBottom: "15px",
//                           marginTop: "-5px",
//                           color: "white",
//                         }}
//                       >
//                         {errors.phoneNumber}
//                       </div>
//                     ) : null}
//                     <Field
//                       as="textarea"
//                       name="message"
//                       placeholder="Your Message Here"
//                       className={`blogform mb-0 ${
//                         styles?.blogform ? styles.blogform : ""
//                       } ${
//                         errors.message && touched.message ? "is-invalid" : ""
//                       }`}
//                     />
//                     {errors.message && touched.message ? (
//                       <div
//                         className="invalid-feedback"
//                         style={{
//                           textAlign: "left",
//                           marginBottom: "15px",
//                           marginTop: "-5px",
//                           color: "white",
//                         }}
//                       >
//                         {errors.message}
//                       </div>
//                     ) : null}
//                     <Button
//                       type="submit"
//                       className={`mb-0 ${styles?.blog_btn2}`}
//                       style={{ width: "100%", marginTop: "10px" }}
//                     >
//                       Submit
//                     </Button>
//                   </Form>
//                 )}
//               </Formik>
//               <ToastContainer />
//             </Card>

//             <Card className={` ${styles.card_form} mt-4 `}>
//               <div>
//                 <p className={` ${styles?.main_para} mb-0`}>Recent Posts</p>
//               </div>

//               {BlogCardData3.map((data) => {
//                 const { id, date, heading, days, views, img, slug } = data;
//                 return (
//                   <Col md={12} key={id}>
//                     <Card className={` ${styles.card_bg} mb-2`}>
//                       <Card.Img variant="top" src={img} />
//                       <Card.Text>
//                         <div className={` ${styles?.text_section} `}>
//                           <p className={` ${styles?.para} mb-0`}>{date}</p>
//                           <Link to={`/blogs/${slug}`} target="_top">
//                             <h6 className={` ${styles?.main_para} mb-0`}>
//                               {heading}
//                             </h6>
//                           </Link>
//                           <div className={` ${styles?.views_sec} `}>
//                             <p className={` ${styles?.para} mb-0 `}>{days}</p>
//                             {/* <p className={` ${styles?.para} mb-0 `}>•</p> */}
//                             {/* <p className={` ${styles?.para} mb-0 `}>{views}</p> */}
//                           </div>
//                           <div className={styles.hr_line}></div>
//                           <div className={styles.socialMedia}>
//                             <Link
//                               to="https://www.linkedin.com/company/gwcdataai/"
//                               target="_blank"
//                             >
//                               <img src={Linkedin} alt="Linkedin" />
//                             </Link>
//                           </div>
//                         </div>
//                       </Card.Text>
//                     </Card>
//                   </Col>
//                 );
//               })}
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// };

// export default BlogDetail;
