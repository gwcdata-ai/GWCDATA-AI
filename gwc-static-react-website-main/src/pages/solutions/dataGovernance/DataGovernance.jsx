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
import { OurExpertiseDG } from "../../../components/solutions/ourExpertise/ourExpertiseDG";
import HomeBottomGov from "./HomeBottomGov";
import { Helmet } from "react-helmet-async";

export const DataGovernancePage = () => {
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
          content="Data Classification & Sensitivity, Data Quality Management, Data Lineage, Data Access & Authorization, Data Privacy Compliance, Data Governance Policies, Metadata Management, Training & Awareness, Data Risk Management, Audit & Monitoring, Business Glossary, Active Metadata, Intelligent Automation, Compliance Management, Frictionless Collaboration with Business Data, Data-Based Decision Confidence"
        />

        <title>{"GWC DATA.AI - Data Governance"}</title>
        <meta
          name="description"
          content="Explore comprehensive data governance strategies to ensure data integrity, compliance, and security. Learn best practices for managing data quality, implementing governance frameworks, and driving business value through effective data management."
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
      <OurExpertiseDG ourExpertiseContent={BiMigrationOurExpertise} />
      <PuttingDataToWork
        puttingDataSectionContent={BiMigrationPuttingDataToWorkData}
      />
      {/* <ReadyToGetStart ReadyToGetStartContent={BiMigrationReadyToGetStart} /> */}
      {/* <CaseStudies caseStudiesSectionContent={BiMigrationCaseStudies} /> */}
      {/* <HomeBottom /> */}
      <HomeBottomGov />
    </>
  );
};
