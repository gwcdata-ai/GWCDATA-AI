import React, { useEffect } from "react";
import DbtBanner from "../../components/dbtPatner/DbtBanner";
import WhatDbt from "../../components/dbtPatner/WhatDbt";
import DbtSoulutions from "../../components/dbtPatner/dbtSolutionsButton/DbtSoulutions";
import {
  DbtListData,
  KeyFeaturesDbt,
} from "../../components/dbtPatner/dbtSolutionsButton/buttonData";
import DbtTab from "../../components/dbtPatner/dbtTabs/DbtTab";
import DbtWorks from "../../components/dbtPatner/DbtWorks";
import DbtCard from "../../components/dbtPatner/dbtcardslider/DbtCard";
import DbtHeading from "../../components/dbtPatner/DbtHeading";
import { OurExpertiseSF } from "../../components/solutions/ourExpertise/ourExpertiseSF";
import { IIOTOurExpertise } from "../solutions/salesforce/data";
import { Helmet } from "react-helmet-async";

const DbtPage = () => {
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
          content="analytics engineering, analytics code, built-in testing, transformation workflows, dbt's support, data stack, dbt's focus, dbt allows, SQL Queries, Incremental Builds, DDL/DML, dbt’s pre-packaged, Data Services, Foster collaboration, Data Modernization, Governance, Data Vault, dbt Mesh, Data Processing, Cost Optimization, zero-waste analytics, dbt Cloud, data practices"
        />

        <title>
          {"GWC DATA.AI -  DBT Labs | Transform Data in Your Warehouse"}
        </title>
        <meta
          name="description"
          content="Use dbt to build reliable data models quickly and collaboratively—featuring version control, automated documentation, and integrated testing."
        ></meta>
      </Helmet>
      <DbtBanner />
      <WhatDbt />
      <OurExpertiseSF ourExpertiseContent={KeyFeaturesDbt} />
      {/* <DbtWorks /> */}
      <DbtTab />
      <DbtCard />
      <DbtHeading />
      <DbtSoulutions dataLists={DbtListData} />
    </>
  );
};

export default DbtPage;
