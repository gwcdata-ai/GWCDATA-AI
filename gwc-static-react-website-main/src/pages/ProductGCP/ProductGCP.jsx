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
import { Helmet } from "react-helmet-async";

const ProductGCP = () => {
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
          content="Application Modernization, Data Engineering, BI Modernization, Machine Learning Operations, FinOps, GCP environment, cloud operations, Google Compute Engine, Google Kubernetes Engine, Google Cloud Storage, BigQuery, Google App Engine, Looker Studio, Vertex AI, Migration Tools, IoT integration with Google Cloud"
        />

        <meta
          name="description"
          content="Meet your business challenges head on with cloud computing services from Google, including data management, hybrid & multi-cloud, and AI & ML."
        />

        <title>GWC DATA.AI - Cloud Computing Services | Google Cloud</title>
      </Helmet>
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
