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
import { OurExpertise } from "../../../components/solutions/ourExpertise/ourExpertise";
import { PuttingDataToWork } from "../../../components/solutions/puttingDataToWork/PuttingDataToWork";
import { ReadyToGetStart } from "../../../components/solutions/readyToGetStart/ReadyToGetStart";
import { CaseStudies } from "../../../components/solutions/caseStudies/CaseStudies";
import { DataGovernance } from "../../../components/solutions/dataGovernance/dataGovernance";
import HomeBottom from "../../../components/home/HomeBlog/HomeBottom";
import StrategyBottomSection from "./StrategyBottomSection";
import { Helmet } from "react-helmet-async";

export const DataStrategyPage = () => {
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
          content="snowflake, what is snowflake, snowflake database, snowflake inc, snowflake data, snowflake software, snowflake company, snowflakes, snowflake db, snowflake computing, snowflake cloud, snowflake data cloud, snowflake technology, snowflake login, snowflake inc., snowflake platform, snowflake tool, snowflake products, snowflake tech, what is snowflake database, snowflake analytics, snowflake system, data snowflake, snowflake services, snowflake data storage"
        /> */}
        <title>{"GWC DATA.AI - Data Stratergy & Engineering "}</title>
        <meta
          name="description"
          content="Discover expert insights on Data Strategy & Engineering to optimize your data management, enhance analytics capabilities, and drive business growth. Learn best practices, tools, and frameworks to effectively harness data for strategic decision-making."
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
      <OurExpertise ourExpertiseContent={BiMigrationOurExpertise} />
      <PuttingDataToWork
        puttingDataSectionContent={BiMigrationPuttingDataToWorkData}
      />
      {/* <ReadyToGetStart ReadyToGetStartContent={BiMigrationReadyToGetStart} /> */}
      {/* <CaseStudies caseStudiesSectionContent={BiMigrationCaseStudies} /> */}
      {/* <HomeBottom /> */}
      <StrategyBottomSection />
    </>
  );
};
