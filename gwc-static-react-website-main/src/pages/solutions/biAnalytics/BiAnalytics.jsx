import React, { useState, useEffect } from "react";

// COMPONENTS
import { CommonSectionBanner } from "../../../commoncomponents/banner/CommonBanner";

// JSON DATA
import {
  BiMigrationBannerData,
  BiMigrationDataGovernanceData,
  BiMigrationDataGovernanceList,
  BiMigrationMainDataGovernance,
  BiMigrationPuttingDataToWorkData,
  BiMigrationOurExpertise,
  BiMigrationReadyToGetStart,
  BiMigrationCaseStudies,
} from "./data";
import { CommonLeftImageComponent } from "../../../commoncomponents/leftSideImageSection/LestSideImageComponent";
import { DataGovernanceList } from "../../../components/solutions/dataGovernancelist/DataGovernanceList";
import { PuttingDataToWork } from "../../../components/solutions/puttingDataToWork/PuttingDataToWork";
import { ReadyToGetStart } from "../../../components/solutions/readyToGetStart/ReadyToGetStart";
import { CaseStudies } from "../../../components/solutions/caseStudies/CaseStudies";
import { DataGovernance } from "../../../components/solutions/dataGovernance/dataGovernance";
import HomeBottom from "../../../components/home/HomeBlog/HomeBottom";
import { OurExpertiseBIA } from "../../../components/solutions/ourExpertise/ourExpertiseBIA";
import BiAnalyticsBottomSection from "./BiAnalyticsBottomSection";
import { Helmet } from "react-helmet-async";

export const BiAnalyticsPage = () => {
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
          content="Business Intelligence & Analytics Solutions, Data Collection, Data Exploration, Dashboard & Report Design, Data Analysis, Data Presentation, Performance Monitoring, Data Interpretation & Insight Generation, Collaboration & Knowledge Sharing, Integration with Business Processes, Iterative Analysis & Refinement, Comprehensive Data Visualization, Advanced Analytics Integration, Real-time Reporting & Dashboards, Data-driven Strategy Development, Solving Problems Using BI Tools"
        />

        <title>{"GWC DATA.AI - Business Intelligence and Analytics "}</title>
        <meta
          name="description"
          content="Unlock the power of Business Intelligence and Analytics to drive informed decision-making. Discover tools, techniques, and best practices for transforming data into actionable insights, enhancing operational efficiency, and boosting business performance."
        ></meta>
      </Helmet>
      <CommonSectionBanner commonSectionBannerContent={BiMigrationBannerData} />
      <DataGovernance
        commonRightSectionContent={BiMigrationMainDataGovernance}
      />
      <DataGovernanceList dataList={BiMigrationDataGovernanceList} />
      {/* <CommonLeftImageComponent
        commonLeftSectionContent={BiMigrationDataGovernanceData}
      /> */}
      <OurExpertiseBIA ourExpertiseContent={BiMigrationOurExpertise} />
      <PuttingDataToWork
        puttingDataSectionContent={BiMigrationPuttingDataToWorkData}
      />
      {/* <ReadyToGetStart ReadyToGetStartContent={BiMigrationReadyToGetStart} /> */}
      {/* <CaseStudies caseStudiesSectionContent={BiMigrationCaseStudies} /> */}
      {/* <HomeBottom /> */}
      <BiAnalyticsBottomSection />
    </>
  );
};
