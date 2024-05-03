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

export const IiotPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);
  return (
    <>
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
