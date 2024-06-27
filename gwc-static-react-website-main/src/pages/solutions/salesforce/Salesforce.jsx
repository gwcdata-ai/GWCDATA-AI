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
// import { CaseStudies } from "../../../components/solutions/caseStudies/CaseStudies";
import { DataGovernance } from "../../../components/solutions/dataGovernance/dataGovernance";
import { OurExpertiseSF } from "../../../components/solutions/ourExpertise/ourExpertiseSF";
import SalesForceSlider from "../../../components/SolutionsSalesForce/SalesForceSlider";
import SloutionSalesCard from "../../../components/SolutionsSalesForce/SloutionSalesCard";
import SalesBottom from "../../../components/SolutionsSalesForce/SalesBottom";
import { SalesForm } from "../../../components/SolutionsSalesForce/SalesForm";
import SalesDardCard from "../../../components/SolutionsSalesForce/SalesDardCard";
import SalesHeader from "./SalesHeader";
import { SalesNewSection } from "../../../components/SolutionsSalesForce/SalesNewSection";
import SalesSecondNew from "../../../components/SolutionsSalesForce/SalesSecondNew";
import SalesforceBanner from "./SalesforceBanner";


export const SalesforcePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);
  return (
    <>
      {/* <CommonSectionBanner commonSectionBannerContent={IIOTBannerData} /> */}
      <SalesforceBanner />
      <SalesSecondNew />
      {/* <DataGovernance commonRightSectionContent={IIOTMainDataGovernance} /> */}
      <OurExpertiseSF ourExpertiseContent={IIOTOurExpertise} />
      <SalesHeader />
      <DataGovernanceList dataList={IIOTDataGovernanceList} />
      {/* <SalesBottom /> */}
      {/* <CommonLeftImageComponent commonLeftSectionContent={IIOTDataGovernanceData}/> */}
      {/* <SalesNewSection /> */}
      

      <SalesForm />
      <PuttingDataToWork puttingDataSectionContent={IIOTPuttingDataToWorkData} />
      <ReadyToGetStart ReadyToGetStartContent={IIOTReadyToGetStart} />
      {/* <CaseStudies caseStudiesSectionContent={IIOTCaseStudies} /> */}
      <SloutionSalesCard />
      {/* <SalesDardCard/> */}
      {/* <SalesForceSlider /> */}
    </>
  );
};
