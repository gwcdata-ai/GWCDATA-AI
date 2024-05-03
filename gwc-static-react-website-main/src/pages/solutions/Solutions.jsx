import React, { useState, useEffect } from "react";

// COMPONENTS
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";

// JSON DATA
import {
  SolutionBannerData,
  SolutionDataGovernanceData,
  SolutionDataGovernanceList,
  SolutionMainDataGovernance,
  SolutionPuttingDataToWorkData,
  SolutionsOurExpertise,
  SolutionsReadyToGetStart,
  SolutionsCaseStudies,
} from "../../components/solutions/data";
import { CommonLeftImageComponent } from "../../commoncomponents/leftSideImageSection/LestSideImageComponent";
import { DataGovernanceList } from "../../components/solutions/dataGovernancelist/DataGovernanceList";
import { OurExpertise } from "../../components/solutions/ourExpertise/ourExpertise";
import { PuttingDataToWork } from "../../components/solutions/puttingDataToWork/PuttingDataToWork";
import { ReadyToGetStart } from "../../components/solutions/readyToGetStart/ReadyToGetStart";
import { CaseStudies } from "../../components/solutions/caseStudies/CaseStudies";
import { DataGovernance } from "../../components/solutions/dataGovernance/dataGovernance";

export const SolutionsPage = () => {
  return (
    <>
      <CommonSectionBanner commonSectionBannerContent={SolutionBannerData} />
      <DataGovernance commonRightSectionContent={SolutionMainDataGovernance} />
      <DataGovernanceList dataList={SolutionDataGovernanceList} />
      <CommonLeftImageComponent
        commonLeftSectionContent={SolutionDataGovernanceData}
      />
      <OurExpertise ourExpertiseContent={SolutionsOurExpertise} />
      <PuttingDataToWork
        puttingDataSectionContent={SolutionPuttingDataToWorkData}
      />
      <ReadyToGetStart ReadyToGetStartContent={SolutionsReadyToGetStart} />
      <CaseStudies caseStudiesSectionContent={SolutionsCaseStudies} />
    </>
  );
};
