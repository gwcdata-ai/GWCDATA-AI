import React, { useEffect } from "react";
import CaseStudy from "../../components/caseStudy/CaseStudy";
import CaseStudyBanner from "../../components/caseStudy/CaseStudyBanner";
import { CaseListData } from "../../components/caseStudy/CaseData";
import { Helmet } from "react-helmet-async";

const CaseStudyPage = () => {
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
          content="Digital Skill Training LMS Success Story, Data Analytics Restaurant Experiences, GWC Data.AI Cybersecurity, Salesforce WhatsApp Integration, Salesforce Analytics Studio, ABC-XYZ Inventory Analysis, HR Analytics, Business Intelligence for IT Management, Advanced Analytics Home Furnishing, MicroStrategy to Power BI Migration, Workplace Analytics Manufacturing, Power Apps Success Story, Oil and Gas Data Analysis, GWC Analytics Home Retailer, IoT Production Efficiency, Mobile Manufacturing Demand Forecasting, US Healthcare Insurance Data Analysis, Power Apps Data Auditing, Power Platform Customer Complaint Handling, Salesforce CRM Customization, Teqcertify Academy LMS Development, Financial Performance Analysis"
        />
        <meta
          name="description"
          content="Explore a range of case studies and success stories including digital skill training LMS, data analytics transformations in restaurants, enhanced cybersecurity with WhatsApp and Salesforce, Salesforce Analytics Studio for sales performance, and more. Discover insights into advanced analytics, BI implementations, and data migration strategies across various industries."
        />
      </Helmet>
      <CaseStudyBanner />
      <CaseStudy caseAllData={CaseListData} />
    </>
  );
};

export default CaseStudyPage;
