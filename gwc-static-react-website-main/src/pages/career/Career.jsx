import React, { useEffect, useState } from "react";
import JobPost from "../../components/career/jobPost";
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";
import { CareerBannerData, CareerTeamData } from "../../components/career/data";
import { CommonLeftImageComponent } from "../../commoncomponents/leftSideImageSection/LestSideImageComponent";
import HomeBottom from "../../components/home/HomeBlog/HomeBottom";
import CareerBottom from "../../components/career/CareerBottom";
import CareerWfh from "../../components/career/CareerWfh";
import CareerCard from "../../components/career/CareerCard";
import CareerSlider from "../../components/career/CareerSlider";
import CareerCarousal from "../../components/career/CareerCarousal";
import CareerHire from "../../components/career/CareerHire";
import CareerBanner from "../../components/career/CareerBanner";
import SalesBottom from "../../components/SolutionsSalesForce/SalesBottom";
import { Helmet } from "react-helmet-async";

import styles from "../../commoncss/Home.module.css";
import Cricket_Poster from "../../assets/images/Banner/cricket.png";
import useMedia from "../../hooks/useMedia";

const Career = () => {
  const isMobile = useMedia("(max-width:500px)"); // Mobile Banner
  const [isVisible, setIsVisible] = useState(false);
  // console.log("state", isVisible);
  const toggleVisibility = (e) => {
    setIsVisible(!isVisible);
    // console.log("clicked");
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="careers, job opportunities, GWC DATA.AI, data science, technology jobs, data analytics, data solutions, innovation, workplace culture, business/technical interview,life at GWC Data.AI, work from hometown, our employees, gwc's global presence, welcome to the future of work, join our team, join gwc team, what we offer, life At GWC, student internship, digital services and consulting, open to work, job openings near me, job openings in salem, job openings in banglore, hiring candidates, "
        />
        <meta
          name="description"
          content="Explore exciting career opportunities at GWC DATA.AI. Join our innovative team to drive data solutions and shape the future of technology. Discover a culture of growth, collaboration, and creativity."
        />

        <title>GWC DATA.AI - Careers</title>
      </Helmet>
      {!isVisible && (
        <section>
          <div
            className={`${
              isMobile
                ? styles.poster_section_div_mobile
                : styles.poster_section_div
            }`}
          >
            <div
              onClick={(e) => toggleVisibility(e)}
              className={`${
                isMobile
                  ? styles.poster_svg_parent_mobile
                  : styles.poster_svg_parent
              }`}
            >
              <div
                style={{
                  cursor: "pointer",
                  zIndex: 1,
                  // border: "2px solid blue",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="20"
                  height="19"
                  style={{
                    cursor: "pointer",
                    zIndex: 1,
                  }} // Ensure cursor pointer is applied
                >
                  <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`${
                isMobile
                  ? styles.poster_image_outer_div_mobile
                  : styles.poster_image_outer_div
              }`}
            >
              <img
                src={Cricket_Poster}
                alt="Cricket_Poster"
                className={`${
                  isMobile ? styles.poster_image_mobile : styles.poster_image
                }`}
              />
            </div>
            <div className={`${styles.poster_button_outer_div}`}>
              <button
                className={`${
                  isMobile
                    ? styles.poster_button_div_mobile
                    : styles.poster_button_div
                }`}
              >
                <a
                  href="https://events.mhealth.ai/domo/domo-cxo-cricket-league"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "unset", textDecoration: "none" }} // Ensure link is styled correctly
                >
                  Register Now
                </a>
              </button>
            </div>
          </div>
        </section>
      )}
      {/* <CommonSectionBanner commonSectionBannerContent={CareerBannerData} /> */}
      <CareerBanner />
      <CommonLeftImageComponent commonLeftSectionContent={CareerTeamData} />
      <SalesBottom />
      <JobPost />
      <CareerCard />
      <CareerWfh />
      <CareerSlider />
      <CareerCarousal />
      <CareerHire />
      <CareerBottom />
    </>
  );
};

export default Career;
