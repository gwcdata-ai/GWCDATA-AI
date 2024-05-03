import React, { useEffect } from "react";
import JobPost from '../../components/career/jobPost';
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

const Career = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);

  return (
    <>
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
  )
}

export default Career
