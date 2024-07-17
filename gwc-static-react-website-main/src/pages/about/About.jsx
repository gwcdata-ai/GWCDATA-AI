import React, { useState, useEffect } from "react";
import AOS from "aos";
// COMPONENTS
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";
import { CommonLeftImageComponent } from "../../commoncomponents/leftSideImageSection/LestSideImageComponent";
import { CommonRightImageComponent } from "../../commoncomponents/rightSideImageSection/rightSideImageComponent";
import { OurStrengths } from "../../components/about/ourStrengths/ourStrengths";
import { WhyChooseGwc } from "../../components/about/whyChooseGwc/whyChooseGwc";
import { WorkFromHomeBanner } from "../../components/about/workFromHome/WorkFromHomeBanner";
import { CommonRightSideImgWIthBannerBg } from "../../commoncomponents/rightSideImgWithBanner/RightSideImgWithBanner";
import { OurFuture } from "../../components/about/ourFuture/OurFuture";
import { AboutRecognitions } from "../../components/about/recognitions/Recognitions";

// JSON DATA
import {
  AboutBannerData,
  AboutOverViewData,
  AboutWorkingWithGWCData,
  AboutLeadershipData,
  AboutOurStrengthData,
  AboutWhyChooseGwc,
  AboutWhyChooseGwcEmployees,
  AboutWorkFromHomeData,
  AboutOurCulture,
  AboutOurFutureData,
  AboutRecognitionsData,
} from "../../components/about/data";
import News from "../../components/about/News/News";
import WorkCulture from "../../components/about/workCulture/WorkCulture";
import NewsNewSection from "../../components/about/News/NewsNewSection";
import { Helmet } from "react-helmet-async";

export const AboutPage = () => {
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
          content="
          NASSCOM member,data analytics, artificial intelligence, solution matters,GWC Data.AI founder & CEO,GWC  COO,GWC  Chief Technology Officer, 
          GWC CTO,GWC Chief Data Officer,GWC CDO,GWC Chief Innovation Officer,GWC CIO, VP, data-engineering,GWC associate director, 
          GWC Head of People Operations,proven ROI, pioneering innovation, Great Place to Work 2024 , Top 10 CEO under 40, 
          10 Best Data & AI Startups,GWC DATA.AI, about us, data solutions, data analytics, company mission, technology innovation, our values, team, leadership, data-driven insights"
        />
        <meta
          name="description"
          content="Learn about GWC DATA.AI, a leader in data solutions and analytics. Discover our mission, values, and the innovative team driving our success in transforming data into actionable insights."
        />

        <title>GWC DATA.AI - About Us</title>
      </Helmet>
      <CommonSectionBanner commonSectionBannerContent={AboutBannerData} />
      <CommonLeftImageComponent commonLeftSectionContent={AboutOverViewData} />
      <OurFuture ourFutureContent={AboutOurFutureData} />
      <WorkCulture />
      {/* <CommonRightSideImgWIthBannerBg
        rightSideImgwithBgBanner={AboutOurCulture}
      /> */}
      <CommonLeftImageComponent
        commonLeftSectionContent={AboutWorkingWithGWCData}
      />
      {/* <WorkFromHomeBanner workFromHomeBannerContent={AboutWorkFromHomeData} /> */}
      <CommonRightImageComponent
        commonRightSectionContent={AboutLeadershipData}
      />
      <OurStrengths strengthsData={AboutOurStrengthData} />
      <WhyChooseGwc
        dataWhyChooseGwc={AboutWhyChooseGwc}
        dataEmployees={AboutWhyChooseGwcEmployees}
      />
      <AboutRecognitions recognitionsContent={AboutRecognitionsData} />
      <News />
      <NewsNewSection />
    </>
  );
};
