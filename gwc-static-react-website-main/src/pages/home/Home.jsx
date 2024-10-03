import React, { useState, useEffect, useRef } from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeSolutions from "../../components/HomeSolutions/HomeSolutions";
import styles from "../../commoncss/Home.module.css";
import HomeClients from "../../components/HomeClients/HomeClients";
import HomeApproach from "../../components/HomeApproach/HomeApproach";
import HomeIndustries from "../../components/HomeIndustries/HomeIndustries";
import HomePartners from "../../components/HomePartners/HomePartners";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import HomeTestimonials from "../../components/HomeTestimonials/HomeTestimonials";
import HomeBottom from "../../components/home/HomeBlog/HomeBottom";
import HomeBannerNew from "../../components/HomeBanner/HomeBannerNew";
import useMedia from "../../hooks/useMedia";
import { Helmet } from "react-helmet-async";
// import FixedScroll from "../../components/HomePartners/fixedScroll";
import HomePartners2 from "../../components/HomePartners/PartnersHome";
import Cricket_Poster from "../../assets/images/Banner/cricket.png";

const HomePage = () => {
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
    <div className={styles.Home}>
      <Helmet>
        <title>GWC DATA.AI</title>
        <meta
          name="description"
          content="Welcome to GWC DATA.AI, where we empower business with data & AI insights to drive informed action and  transform data into actionable insights. Explore our innovative solutions in data analytics, research, and technology that empower businesses to thrive in a digital world."
        />
        <meta
          name="keywords"
          content="Leading data strategy consulting, Innovative data engineering solutions, Transformative data strategy, Engineering data solutions, Advanced BI solutions, Analytics for business growth, Powerful BI dashboards, Business insights analytics, Robust data governance solutions, Data compliance expertise, Governance for data security, Effective data governance, Seamless BI migration, Modernizing BI systems, BI platform migration, Upgrading BI infrastructure, IIoT solutions innovation, Industrial IoT integration, IIoT for operational efficiency, Advancing IIoT technologies, Cloud transformation experts, Accelerating cloud migration, Cloud solutions architect, Transforming with cloud technology, AI solutions for enterprises, Harnessing AI capabilities, AI strategy and implementation, Leading AI innovations, Salesforce deployment excellence, Customizing Salesforce CRM, Implementing Salesforce solutions, Salesforce integration expertise, Data analytics excellence, Advanced data analysis, Analytics-driven insights, Transforming with data analytics, Cutting-edge AI solutions, AI innovation leadership, AI-driven business solutions, Deploying AI technologies, Leveraging GCP advantages, GCP cloud solutions, GCP for scalable solutions, Google Cloud expertise, DOMO analytics empowerment, DOMO dashboard solutions, DOMO for real-time insights, Mastering DOMO capabilities, Snowflake data warehouse, Snowflake for modern data, Harnessing Snowflake power, Scalable Snowflake solutions, Salesforce CRM excellence, Salesforce for business growth, Salesforce customization, Optimizing Salesforce benefits, Fivetran data integration, Seamless Fivetran solutions, Fivetran for data connectivity, Automating with Fivetran, DBT for data modeling, Data transformation with DBT, Harnessing DBT capabilities, Advanced data modeling, Looker for visual analytics, Looker dashboard solutions, Looker insights visualization, Looker data exploration, Alation data cataloging, Alation for data governance, Alation insights discovery, Collaborative data catalog, Tableau data visualization, Tableau for interactive dashboards, Transforming with Tableau, Powerful Tableau analytics, Advancing BI technologies, Analytics-driven solutions, Innovating with advanced BI, BI for strategic insights, Boomi integration excellence, Seamless Boomi solutions, Boomi for data connectivity, Mastering Boomi integration, Tailored business solutions, Innovative solution consulting, Solutions that drive success, Business technology solutions,Data Strategy & Engineering,Business Intelligence & Analytics,Data Governance,BI Migration & Modernization,Industrial Internet of Things (IIoT),Cloud Transformation,Artificial Intelligence,Salesforce Implementation,data analytics,AI solutions,GCP,DOMO,Snowflake,Salesforce,Fivetran,DBT,Looker,Alation,Tableau,our advanced BI and analytics,Boomi,Solution Matters"
        />
      </Helmet>
      {isMobile ? <HomeBanner /> : <HomeBannerNew />}
      <HomeSolutions />
      <HomeClients />
      <HomeApproach />
      <HomeIndustries />
      {/* <HomePartners /> */}
      <HomePartners2 />
      {/* <FixedScroll /> */}
      {/* <HomeBlog /> */}
      <HomeTestimonials />
      <HomeBottom />
    </div>
  );
};

export default HomePage;
