import React, { useState, useEffect } from "react";

// COMPONENTS
import { CommonSectionBanner } from "../../../commoncomponents/banner/CommonBanner";

// JSON DATA
import {
  IIOTBannerData,
  IIOTDataGovernanceData,
  IIOTDataGovernanceList,
  IIOTMainDataGovernance,
  IIOTPuttingDataToWorkData,
  IIOTOurExpertise,
  IIOTReadyToGetStart,
  IIOTCaseStudies,
} from "./data";
import { CommonLeftImageComponent } from "../../../commoncomponents/leftSideImageSection/LestSideImageComponent";
import { DataGovernanceList } from "../../../components/solutions/dataGovernancelist/DataGovernanceList";
import { PuttingDataToWork } from "../../../components/solutions/puttingDataToWork/PuttingDataToWork";
import { ReadyToGetStart } from "../../../components/solutions/readyToGetStart/ReadyToGetStart";
import { CaseStudies } from "../../../components/solutions/caseStudies/CaseStudies";
import { DataGovernance } from "../../../components/solutions/dataGovernance/dataGovernance";
import HomeBottom from "../../../components/home/HomeBlog/HomeBottom";
import { OurExpertiseIIOT } from "../../../components/solutions/ourExpertise/ourExpertiseIIOT";
import IotBottomSection from "./IotBottomSection";
import { Helmet } from "react-helmet-async";

export const IiotPage = () => {
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
        {/* <meta
          name="keywords"
          content="
          
          Business Intelligence,Data Analytics,Data Visualization,BI Tools,Predictive Analytics,Data-Driven Decision Making,Performance Metrics,Reporting Solutions,Data Management,Analytics Strategies

          "
        /> */}
        <title>{"GWC DATA.AI - Industrial IOT "}</title>
        <meta
          name="description"
          content=" Unlock the future of manufacturing with Industrial IoT (IIoT). Explore how connected devices, smart sensors, and advanced analytics improve operational efficiency, reduce downtime, and drive innovation. Transform your industry with IIoT solutions for enhanced productivity and sustainability."
        ></meta>
      </Helmet>
      <CommonSectionBanner commonSectionBannerContent={IIOTBannerData} />
      <DataGovernance commonRightSectionContent={IIOTMainDataGovernance} />
      <DataGovernanceList dataList={IIOTDataGovernanceList} />
      {/* <CommonLeftImageComponent
        commonLeftSectionContent={IIOTDataGovernanceData}
      /> */}
      <OurExpertiseIIOT ourExpertiseContent={IIOTOurExpertise} />
      <PuttingDataToWork
        puttingDataSectionContent={IIOTPuttingDataToWorkData}
      />
      {/* <ReadyToGetStart ReadyToGetStartContent={IIOTReadyToGetStart} /> */}
      {/* <CaseStudies caseStudiesSectionContent={IIOTCaseStudies} /> */}
      {/* <HomeBottom /> */}
      <IotBottomSection />
    </>
  );
};
