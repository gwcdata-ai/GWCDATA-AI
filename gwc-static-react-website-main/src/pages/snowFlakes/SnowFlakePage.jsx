import React, { useEffect } from "react";
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";
import { SnowBannerData, SnowList } from "../../components/snowflake/data";
import Platform from "../../components/snowflake/Platform";
import OfferingCard from "../../components/snowflake/OfferingCard";
import Collaberation from "../../components/snowflake/Collaberation";
import SnowOverflow from "../../components/snowflake/SnowOverflow";
import { DataGovernanceList } from "../../components/solutions/dataGovernancelist/DataGovernanceList";
import ServiceHead from "../../components/snowflake/ServiceHead";
import SnowflakeBanner from "./SnowflakeBanner";
import { Helmet } from "react-helmet-async";

const SnowFlakePage = () => {
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
          content="snowflake, what is snowflake, snowflake database, snowflake inc, snowflake data, snowflake software, snowflake company, snowflakes, snowflake db, snowflake computing, snowflake cloud, snowflake data cloud, snowflake technology, snowflake login, snowflake inc., snowflake platform, snowflake tool, snowflake products, snowflake tech, what is snowflake database, snowflake analytics, snowflake system, data snowflake, snowflake services, snowflake data storage"
        />
        <title>
          {
            " GWC DATA.AI - Snowflake AI Data Cloud - Mobilize Data, Apps, and AI "
          }
        </title>
        <meta
          name="description"
          content="Snowflake enables organizations to learn, build, and connect with their data-driven peers. Collaborate, build data apps & power diverse workloads in the AI Data Cloud."
        ></meta>
      </Helmet>
      {/* <CommonSectionBanner commonSectionBannerContent={SnowBannerData} /> */}
      <SnowflakeBanner />
      <Platform />
      <OfferingCard />
      {/* <Collaberation /> */}
      <SnowOverflow />
      <ServiceHead />
      <DataGovernanceList dataList={SnowList} />
    </>
  );
};

export default SnowFlakePage;
