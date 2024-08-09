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
import { Helmet } from "react-helmet-async";

export const ArtificialInteligencePage = () => {
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
          content="AI Strategy, Generative AI, Conversational AI, Natural Language Processing (NLP), Computer Vision, Image Processing, Machine Learning Operations, Creative Data Synthesis, Predictive Modeling Evolution, Adaptive Decision-Making, Innovative Problem Solving, Ethical AI, Strong Data Governance Foundation, Cost-Effective, Retail & E-commerce AI, Manufacturing AI, Logistics & Supply Chain AI, Finance & Banking AI, Healthcare AI"
        />

        <title>{"GWC DATA.AI - Artificial Intelligence "}</title>
        <meta
          name="description"
          content=" Explore the world of Artificial Intelligence and its transformative impact on industries. Learn about AI technologies, applications, and best practices for leveraging machine learning, natural language processing, and automation to drive innovation and enhance decision-making."
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
