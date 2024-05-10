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

    return () => { };
  }, []);
  return (
    <>
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
