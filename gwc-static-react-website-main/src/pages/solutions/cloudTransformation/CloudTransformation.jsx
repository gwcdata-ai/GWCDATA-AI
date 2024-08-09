import React, { useState, useEffect } from "react";

// COMPONENTS
import { CommonSectionBanner } from "../../../commoncomponents/banner/CommonBanner";

// JSON DATA
import {
  CloudTransformationBannerData,
  CloudTransformationDataGovernanceData,
  CloudTransformationDataGovernanceList,
  CloudTransformationMainDataGovernance,
  CloudTransformationPuttingDataToWorkData,
  CloudTransformationOurExpertise,
  CloudTransformationReadyToGetStart,
  CloudTransformationCaseStudies,
} from "./data";
import { CommonLeftImageComponent } from "../../../commoncomponents/leftSideImageSection/LestSideImageComponent";
import { DataGovernanceList } from "../../../components/solutions/dataGovernancelist/DataGovernanceList";
import { PuttingDataToWork } from "../../../components/solutions/puttingDataToWork/PuttingDataToWork";
import { ReadyToGetStart } from "../../../components/solutions/readyToGetStart/ReadyToGetStart";
import { CaseStudies } from "../../../components/solutions/caseStudies/CaseStudies";
import { DataGovernance } from "../../../components/solutions/dataGovernance/dataGovernance";
import HomeBottom from "../../../components/home/HomeBlog/HomeBottom";
import { OurExpertiseCT } from "../../../components/solutions/ourExpertise/ourExpertiseCT";
import CloudBottomSection from "./CloudBottomSection";
import { Helmet } from "react-helmet-async";

export const CloudTransformationPage = () => {
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
          content="Data-powered Innovation, Operate & Optimize Dev Capabilities, Transform Cloud Operations, Application Migration, Integrate Hybrid Solutions, Setup & Optimize Security Operations, Compliance Management, Data Governance, Data Migration, Data & Analytics Solutions, Custom AI Solutions, Cloud Migration Efficiency, AI-Infused Cloud Services, Data-Driven Decision Power, Secure Cloud Ecosystems, Skilled Data-driven, Ground-breaking Technology"
        />

        <title>{"GWC DATA.AI - Cloud Transformation"}</title>
        <meta
          name="description"
          content="Discover how Cloud Transformation can revolutionize your business operations. Learn about strategies for migrating to the cloud, optimizing resources, enhancing collaboration, and driving innovation while ensuring security and scalability in your digital transformation journey."
        ></meta>
      </Helmet>
      <CommonSectionBanner
        commonSectionBannerContent={CloudTransformationBannerData}
      />
      <DataGovernance
        commonRightSectionContent={CloudTransformationMainDataGovernance}
      />
      <DataGovernanceList dataList={CloudTransformationDataGovernanceList} />
      {/* <CommonLeftImageComponent
        commonLeftSectionContent={CloudTransformationDataGovernanceData}
      /> */}
      <OurExpertiseCT ourExpertiseContent={CloudTransformationOurExpertise} />
      <PuttingDataToWork
        puttingDataSectionContent={CloudTransformationPuttingDataToWorkData}
      />
      {/* <ReadyToGetStart
        ReadyToGetStartContent={CloudTransformationReadyToGetStart}
      /> */}
      {/* <CaseStudies caseStudiesSectionContent={CloudTransformationCaseStudies} /> */}
      {/* <HomeBottom /> */}
      <CloudBottomSection />
    </>
  );
};
