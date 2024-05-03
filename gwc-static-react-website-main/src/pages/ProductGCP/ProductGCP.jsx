import React, { useEffect } from "react";
import { ProductGCPBanner } from "../../components/ProductGCP/ProductGCPBanner/ProductGCPBanner";
import { GCPCloud } from "../../components/ProductGCP/GCPCloud/GCPCloud";
import GCPOffering from "../../components/ProductGCP/GCPOffering/GCPOffering";
import { GCPServicesFeature } from "../../components/ProductGCP/GCPServices/GCPServicesFeature/GCPServicesFeature";
import { GCPServicesFeatureList } from "../../components/ProductGCP/GCPServices/GCPServicesFeatureList/GCPServicesFeatureList";
import { GCPServicesFeatureContent } from "../../components/ProductGCP/GCPServices/GCPServicesFeatureContent/GCPServicesFeatureContent";
import { GCPOverview } from "../../components/ProductGCP/GCPOverview/GCPOverview";
import GCPArticles from "../../components/ProductGCP/GCPArticles/GCPArticles";
import { AboutBannerData } from "../../components/ProductGCP/ProductGCPBanner/ProductBannerData";
import { dataExplainedGCPServices } from "../../components/ProductGCP/GCPServices/GCPServicesFeatureList/data";

const ProductGCP = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => { };
  }, []);
  return (
    <>
      <ProductGCPBanner allData={AboutBannerData} />
      {/* <GCPCloud /> */}
      <GCPOffering />
      <GCPServicesFeature />
      <GCPServicesFeatureList dataList={dataExplainedGCPServices} />
      {/* <GCPServicesFeatureContent /> */}
      <GCPOverview />
      {/* <GCPArticles /> */}
    </>
  );
};

export default ProductGCP;
