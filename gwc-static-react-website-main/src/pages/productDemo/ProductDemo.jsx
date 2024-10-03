import { useEffect, useState } from "react";
import DomoUse from "../../components/ProductDemo/DomoUse/DomoUse";
import DomoSolutions from "../../components/ProductDemo/DomoSolutions/DomoSolutions";
import DomoArticles from "../../components/ProductDemo/DomoArticles/DomoArticles";
import React from "react";
import { ProductBanner } from "../../components/ProductDemo/ProductBanner/ProductBanner";
import { ProductCompany } from "../../components/ProductDemo/ProductCompany/ProductCompany";
import ProductPlatform from "../../components/ProductDemo/ProductPlatform/ProductPlatform";
import { DomoOverview } from "../../components/ProductDemo/DomoOverview/DomoOverview";
import { DomoAnalysis } from "../../components/ProductDemo/DomoAnalysis/DomoAnalysis";
import { WhyDomo } from "../../components/ProductDemo/WhyDomo/WhyDomo";
import DomoAnalytics from "../../components/ProductDemo/DomoAnalytics/DomoAnalytics";
import { PrincipalDomoFeatureList } from "../../components/ProductDemo/PrincipalDomo/PrincipalDomoFeatureList/PrincipalDomoFeatureList";
import { PrincipalDomoFeature } from "../../components/ProductDemo/PrincipalDomo/PrincipalDomoFeature/PrincipalDomoFeature";
import { PricipalDomoFeatureContent } from "../../components/ProductDemo/PrincipalDomo/PricipalDomoFeatureContent/PricipalDomoFeatureContent";
import DomoAdvantages from "../../components/ProductDemo/DomoAdvantages/DomoAdvantages";
import HomeBottom from "../../components/home/HomeBlog/HomeBottom";
import DemoPlatform from "./DemoPlatform";
import { DomoNewSection } from "../../components/ProductDemo/DomoNew/DomoNewSection";
import Domoproductinfo from "./DomoProductionPage/Domoproductinfo";
import DomoDashboard from "../../components/ProductDemo/DomoSolutions/DomoDashboard";
import DomoNewCards from "../../components/ProductDemo/DomoSolutions/DomoNewCards";
import { CommonLeftImageComponent } from "../../commoncomponents/leftSideImageSection/LestSideImageComponent";
import creditUtilization from "../../assets/images/ProductDemo/creditUtilization.webp";
import { Button, Col, Row } from "react-bootstrap";
import GetStartedComponent from "./GetStarted/GetStartedComponent";
import { CommonRightImageComponent } from "../../commoncomponents/rightSideImageSection/rightSideImageComponent";
import { Helmet } from "react-helmet-async";
// import { DomoWhyChooseGwc } from "./DomoProductionPage/domoData";

import styles from "../../commoncss/Home.module.css";
import Cricket_Poster from "../../assets/images/Banner/cricket.png";
import useMedia from "../../hooks/useMedia";

const ProductDemo = () => {
  const isMobile = useMedia("(max-width:500px)"); // Mobile Banner
  const [isVisible, setIsVisible] = useState(false);
  // console.log("state", isVisible);
  const toggleVisibility = (e) => {
    setIsVisible(!isVisible);
    // console.log("clicked");
  };
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
          content=" DOMO ,data, data experience, GWC and domo, consulting, Domo Consulting, solutions, industry, AI-powered, analytics, domo consulting,  Domo Partner, Domo partnership, Trusted Domo Partner, Domo Trusted Partner, Domo Licensing Partner, Domo Licensing Authorized Partner and Licensed Reseller, Domo AI, Domo Graph, Domo analytics, Domo solutions"
        />

        <title>GWC DATA.AI - Domo Data Experience Platform | Domo </title>
        <meta
          name="description"
          content="As the exclusive implementation partner for DOMO, we take pride in delivering end-to-end data analytics services. Our expertise extends beyond implementation, ensuring clients receive a comprehensive solution tailored to their unique needs, covering the entire spectrum of data analytics."
        ></meta>
      </Helmet>

      <ProductBanner />
      <DomoNewSection />
      <DomoAnalytics />
      <ProductCompany />
      <ProductPlatform />
      <DomoOverview />
      <DomoAnalysis />
      <WhyDomo />
      <DemoPlatform />
      <PrincipalDomoFeature />
      <PrincipalDomoFeatureList />
      {/* <PrincipalDomoFeatureList /> */}

      {/* <PricipalDomoFeatureContent /> */}
      <DomoAdvantages />
      <DomoUse />
      {/* <Domoproductinfo /> */}
      <DomoSolutions />
      <DomoNewCards />
      <CommonRightImageComponent
        commonRightSectionContent={{
          rightImg: creditUtilization,
          // sub_title: 'Analytics',
          title: "How Execution Credits Works",
          list: [
            "Purchase a credit package tailored to your needs.",
            "Utilize Domo's features with confidence, knowing that credits are deducted only when you use them.",
            "Easily monitor credit consumption through our built-in utilization report, ensuring transparency and control over your usage.",
          ],
        }}
      />
      <GetStartedComponent />
      <DomoDashboard />
      <HomeBottom />
      {/* <DomoArticles/> */}
    </>
  );
};

export default ProductDemo;
