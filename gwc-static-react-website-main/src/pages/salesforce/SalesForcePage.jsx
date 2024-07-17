import React, { useEffect } from "react";
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";
import {
  SalesBannerData,
  SalesListData,
} from "../../components/salesForce/data";
import WhatSales from "../../components/salesForce/WhatSales";
import SalesList from "../../components/salesForce/SalesList";
import SalesHeading from "../../components/salesForce/SalesHeading";
import SalesCustomer from "../../components/salesForce/SalesCustomer";
import Salestry from "../../components/salesForce/Salestry";
import SalesCard from "../../components/salesForce/SalesCard";
import SalesProducts from "../../components/salesForce/salesProduct/SalesProducts";
import SalesDo from "../../components/salesForce/salesTabs/SalesDo";
import SalesBanner from "../../components/salesForce/SalesBanner";

const SalesForcePage = () => {
  // console.log(SalesListData, "datalist");
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
        <meta
          name="description"
          content="Meet your business challenges head on with cloud computing services from Google, including data management, hybrid & multi-cloud, and AI & ML."
        />

        <title>GWC DATA.AI - Salesforce</title>
      </Helmet>
      {/* <CommonSectionBanner commonSectionBannerContent={SalesBannerData} /> */}
      <SalesBanner />
      <WhatSales />
      <SalesDo />
      <SalesHeading />
      <SalesList dataLists={SalesListData} />
      <SalesCustomer />
      <Salestry />
      <SalesCard />
      <SalesProducts />
    </>
  );
};

export default SalesForcePage;
