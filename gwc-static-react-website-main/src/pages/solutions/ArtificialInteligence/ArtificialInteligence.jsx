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
import { OurExpertiseAI } from "../../../components/solutions/ourExpertise/ourExpertiseAI";
import AiINdustries from "./AiINdustries";
import AiBottomSection from "./AiBottomSection";

export const ArtificialInteligencePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);
  return (
    <>
      <CommonSectionBanner commonSectionBannerContent={BiMigrationBannerData} />
      <DataGovernance
        commonRightSectionContent={BiMigrationMainDataGovernance}
      />
      <DataGovernanceList dataList={BiMigrationDataGovernanceList} />
      {/* <CommonLeftImageComponent
        commonLeftSectionContent={BiMigrationDataGovernanceData}
      /> */}
      <OurExpertiseAI ourExpertiseContent={BiMigrationOurExpertise} />
      <PuttingDataToWork
        puttingDataSectionContent={BiMigrationPuttingDataToWorkData}
      />
      {/* <ReadyToGetStart ReadyToGetStartContent={BiMigrationReadyToGetStart} /> */}
      {/* <CaseStudies caseStudiesSectionContent={BiMigrationCaseStudies} /> */}
      {/* <HomeBottom /> */}

      <AiINdustries />
      <AiBottomSection />
    </>
  );
};
