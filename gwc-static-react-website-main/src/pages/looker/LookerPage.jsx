import React, { useEffect } from "react";
import { ProductGCPBanner } from "../../components/ProductGCP/ProductGCPBanner/ProductGCPBanner";
import { GCPServicesFeatureList } from "../../components/ProductGCP/GCPServices/GCPServicesFeatureList/GCPServicesFeatureList";
import { LookerBannerData } from "../../components/ProductGCP/ProductGCPBanner/ProductBannerData";
import { LookerdataExplainedGCPServices } from "../../components/ProductGCP/GCPServices/GCPServicesFeatureList/data";
import { LookersServiceHeader } from "../../components/lookers/LookersServiceHeader";
import LookerOfferings from "../../components/lookers/LookerOfferings";
import { LookerOverview } from "../../components/lookers/LookerOverview";
import LookerBanner from "../../components/lookers/LookerBanner";

const LookerPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        return () => { };
    }, []);
    return (
        <>
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