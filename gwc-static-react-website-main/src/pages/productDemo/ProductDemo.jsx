import { useEffect } from "react";
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

const ProductDemo = () => {
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
          content="IT Company in Hosur,GWC Office Location,IT Company in Banglore,IT Company in Salem,IT Company in coimbatore,IT Company in chennai,IT Company in tirupattur,IT Company near karnataka,Engineering internships near me, Entry-level engineering jobs, Engineering student opportunities, Engineering intern responsibilities, Company culture at GWC, Employee testimonials GWC, What employees say about working at GWC, Benefits of working at GWC, Career opportunities at GWC, Jobs that support our people, Why work for GWC, Employee benefits GWC, GWC company mission, How GWC supports its mission, Purpose-driven careers at GWC, Digital services careers, Consulting jobs in digital transformation, Digital services consultant roles, Career in digital consulting, Graduate job opportunities, Recent graduate jobs GWC, Jobs for recent graduates, Experienced professional jobs, Senior roles at GWC, Experienced hire opportunities, Professional development at GWC, GWC internships, Internship programs GWC, Student opportunities at GWC, Career restart opportunities, Rejoining the workforce GWC, Transition back to work GWC, GWC jobs in India, Opportunities near Bangalore at GWC, Local job openings GWC, Job opportunities by location GWC, Life at GWC company culture, GWC employee experiences, Day in the life at GWC, GWC work-life balance, GWC office culture, GWC work environment, Life as an employee at GWC, Perks of working at GWC, GWC career development, What to expect working at GWC, Career growth opportunities GWC, Learning and development at GWC, Advancement opportunities GWC, Ambitions at GWC careers, Join GWC workforce, Join GWC talent pool, Apply to GWC, Joining GWC careers, GWC team opportunities, Apply for a job at GWC, GWC team openings, GWC employee profiles, GWC team testimonials, GWC employee stories, Meet the team GWC, GWC future of work initiatives, Innovation at GWC, GWC workplace trends, Future workplace GWC, GWC international job opportunities, Global career at GWC, GWC global offices, International opportunities GWC, GWC employee experience, GWC employee satisfaction, Innovation careers at GWC, GWC innovation initiatives, Future-focused careers GWC, Innovating at GWC, GWC careers for college graduates, GWC entry-level positions, College graduate jobs GWC, Recent grad opportunities GWC, Remote jobs GWC, GWC work from home opportunities, Virtual jobs at GWC, Telecommuting roles GWC, GWC Data.AI careers, Data.AI job opportunities GWC, Life at GWC Data.AI team, Careers in Data.AI at GWC, GWC hiring process, Hiring criteria GWC, How to get a job at GWC, GWC recruitment process, What to expect in GWC interviews, GWC career pathways, GWC job categories, Opportunities at GWC, GWC job listings, GWC Office contact number, Apply Jobs in GWC, GWC HR Contact, Work From Home Town, Young entrepreneurs"
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
