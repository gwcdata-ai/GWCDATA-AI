import React, { useEffect } from "react";
import { CommonSectionBanner } from "../../commoncomponents/banner/CommonBanner";
import { FiveBannerData } from "../../components/fiveTran/data";
import FivePlatform from "../../components/fiveTran/FivePlatform";
import FiveInsights from "../../components/fiveTran/FiveINsights";
import FiveStrategy from "../../components/fiveTran/FiveStrategy";
import FiveTabs from "../../components/fiveTran/fivetabs/FiveTabs";
import FiveOperations from "../../components/fiveTran/fiveoperation/FiveOperations";
import FivetranBanner from "./FivetranBanner";
import { Helmet } from "react-helmet-async";

const FiveTranPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);

  return (
    <>
      {/* <CommonSectionBanner commonSectionBannerContent={FiveBannerData} /> */}
      <Helmet>
        <meta
          name="keywords"
          content="Fivetran Nando's builds, with Fivetran Nando's, hours with Fivetran, Fivetran Dropbox cuts, Fivetran data movement, with Fivetran, dbt labs, data ingestion, data readiness, using Fivetran’s, partners Domo, Fivetran handles, data transformation"
        />

        <meta
          name="description"
          content="Effortlessly centralize all the data you need so your team can deliver better insights, faster. Start for free."
        />

        <title>GWC DATA.AI - Fivetran | Automated data movement platform</title>
      </Helmet>
      <FivetranBanner />
      <FivePlatform />
      <FiveTabs />
      <FiveOperations />
      {/* <FiveInsights /> */}
      <FiveStrategy />
    </>
  );
};

export default FiveTranPage;
