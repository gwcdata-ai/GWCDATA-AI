import React, { useState, useEffect } from "react";

// COMPONENTS
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";

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
} from "../solutions/salesforce/data";
import { CommonLeftImageComponent } from "../../commoncomponents/leftSideImageSection/LestSideImageComponent";
import { DataGovernanceList } from "../../components/solutions/dataGovernancelist/DataGovernanceList";
import { PuttingDataToWork } from "../../components/solutions/puttingDataToWork/PuttingDataToWork";
import { ReadyToGetStart } from "../../components/solutions/readyToGetStart/ReadyToGetStart";

import { DataGovernance } from "../../components/solutions/dataGovernance/dataGovernance";
import { OurExpertiseSF } from "../../components/solutions/ourExpertise/ourExpertiseSF";
import SalesForceSlider from "../../components/SolutionsSalesForce/SalesForceSlider";
import SloutionSalesCard from "../../components/SolutionsSalesForce/SloutionSalesCard";
import SalesBottom from "../../components/SolutionsSalesForce/SalesBottom";
import { SalesForm } from "../../components/SolutionsSalesForce/SalesForm";
import SalesDardCard from "../../components/SolutionsSalesForce/SalesDardCard";
// import SalesHeader from "./SalesHeader";
import { TrablueBannerData } from "../solutions/salesforce/data";
import { TrablueForm } from "../../components/trablue/TrablueForm";
import {
  TrablueIIOTDataGovernanceList,
  TrablueIIOTPuttingDataToWorkData,
  TrablueIIOTReadyToGetStart,
  TrablueOurExpertise,
} from "../../components/trablue/trablueData";
import TrablueHeader from "../../components/trablue/TrablueHeader";
import TrablueSalesCard from "../../components/trablue/TrablueSalesCard";
import TabuleaBanner from "../../components/trablue/TabuleaBanner";
import { Helmet } from "react-helmet-async";

export const TrabluePage = () => {
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
          content="DOMO,domo,Domo tools,data,data tools,Data Ai,AI tools,cloud solutions,data solutions,Big data"
        /> */}
        <title>
          {" Business Intelligence and Analytics Software | Tableau"}
        </title>
        <meta
          name="description"
          content="Tableau can help anyone see and understand their data. Connect to almost any database, drag and drop to create visualizations, and share with a click."
        ></meta>
      </Helmet>
      {/* <CommonSectionBanner commonSectionBannerContent={TrablueBannerData} /> */}
      <TabuleaBanner />
      <TrablueForm />
      <OurExpertiseSF ourExpertiseContent={TrablueOurExpertise} />
      <TrablueHeader />
      <DataGovernanceList dataList={TrablueIIOTDataGovernanceList} />

      <ReadyToGetStart ReadyToGetStartContent={TrablueIIOTReadyToGetStart} />
      {/* <TrablueSalesCard /> */}
      <PuttingDataToWork
        puttingDataSectionContent={TrablueIIOTPuttingDataToWorkData}
      />
    </>
  );
};
