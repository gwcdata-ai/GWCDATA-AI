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
