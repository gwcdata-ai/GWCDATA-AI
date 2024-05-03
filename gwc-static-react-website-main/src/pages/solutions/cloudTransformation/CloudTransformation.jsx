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

export const CloudTransformationPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);
  return (
    <>
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
