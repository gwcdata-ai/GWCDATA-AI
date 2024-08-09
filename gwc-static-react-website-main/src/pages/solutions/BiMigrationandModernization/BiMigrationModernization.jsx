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
import { OurExpertiseBIM } from "../../../components/solutions/ourExpertise/ourExpertiseBIM";
import BiBottomSection from "./BiBottomSection";
import { Helmet } from "react-helmet-async";

export const BiMigrationModernizationPage = () => {
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
          content="BI Landscape, Assessment & Planning, Data Inventory & Analysis, Data Migration, Report & Dashboard Migration, Integration with Existing Systems, Security & Access Control, Training & Change Management, Testing & Quality Assurance, Deployment, Post-Migration Optimization, GWC Data Migration Accelerator, Advanced Data Integration, Cloud-Based BI Solutions, AI-Infused Analytics, Migrate For Modernization, Migrate in Shorter Time Span, BI Migration Best Practices"
        />

        <title>{"GWC DATA.AI - BI Migration and Modernization"}</title>
        <meta
          name="description"
          content="Explore BI Migration and Modernization strategies to seamlessly transition your business intelligence systems to the cloud. Discover best practices for enhancing data accessibility, improving analytics capabilities, and maximizing ROI while ensuring a smooth migration process."
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
      <OurExpertiseBIM ourExpertiseContent={BiMigrationOurExpertise} />
      <PuttingDataToWork
        puttingDataSectionContent={BiMigrationPuttingDataToWorkData}
      />
      {/* <ReadyToGetStart ReadyToGetStartContent={BiMigrationReadyToGetStart} /> */}
      {/* <CaseStudies caseStudiesSectionContent={BiMigrationCaseStudies} /> */}
      {/* <HomeBottom /> */}
      <BiBottomSection />
    </>
  );
};
