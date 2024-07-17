import React, { useEffect } from "react";
// import WorkBanner from '../../components/workhome/WorkBanner'
import { WfhBannerData, WfhTeamData } from "../../components/career/data";
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";
import { CommonLeftImageComponent } from "../../commoncomponents/leftSideImageSection/LestSideImageComponent";
import WorksCard from "../../components/workhome/WorksCard";
import HometownCard from "../../components/workhome/HometownCard";
import { Helmet } from "react-helmet-async";

const WorkHomePage = () => {
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
          content="work from hometown, remote jobs, flexible work, GWC DATA.AI, work-life balance, telecommute, data jobs, remote opportunities, home office"
        />
        <meta
          name="description"
          content="Discover the flexibility of working from your hometown at GWC DATA.AI. Explore remote job opportunities that empower you to balance your career and personal life while contributing to innovative data solutions."
        />

        <title>GWC DATA.AI - Work from Hometown</title>
      </Helmet>
      <CommonSectionBanner commonSectionBannerContent={WfhBannerData} />
      <CommonLeftImageComponent commonLeftSectionContent={WfhTeamData} />
      <WorksCard />
      <HometownCard />
    </>
  );
};

export default WorkHomePage;
