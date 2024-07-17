import React, { useEffect } from "react";
import { ProductGCPBanner } from "../../components/ProductGCP/ProductGCPBanner/ProductGCPBanner";
import { GCPServicesFeatureList } from "../../components/ProductGCP/GCPServices/GCPServicesFeatureList/GCPServicesFeatureList";
import { LookerBannerData } from "../../components/ProductGCP/ProductGCPBanner/ProductBannerData";
import { LookerdataExplainedGCPServices } from "../../components/ProductGCP/GCPServices/GCPServicesFeatureList/data";
import { LookersServiceHeader } from "../../components/lookers/LookersServiceHeader";
import LookerOfferings from "../../components/lookers/LookerOfferings";
import { LookerOverview } from "../../components/lookers/LookerOverview";
import LookerBanner from "../../components/lookers/LookerBanner";
import { Helmet } from "react-helmet-async";

const LookerPage = () => {
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
        <title>
          {
            "GWC DATA.AI -  Looker business intelligence platform embedded analytics | Google Cloud"
          }
        </title>
        <meta
          name="description"
          content="Looker is an enterprise platform for BI, data applications, and embedded analytics that helps you explore and share insights in real time."
        ></meta>
      </Helmet>
      {/* <ProductGCPBanner allData={LookerBannerData} /> */}
      <LookerBanner />
      <LookerOfferings />
      <LookersServiceHeader />
      <GCPServicesFeatureList dataList={LookerdataExplainedGCPServices} />
      <LookerOverview />
    </>
  );
};

export default LookerPage;
