import React, { useEffect } from 'react'
import { CommonSectionBanner } from '../../commoncomponents/banner/CommonBanner'
import { SalesBannerData, SalesListData } from '../../components/salesForce/data'
import WhatSales from '../../components/salesForce/WhatSales'
import SalesList from '../../components/salesForce/SalesList'
import SalesHeading from '../../components/salesForce/SalesHeading'
import SalesCustomer from '../../components/salesForce/SalesCustomer'
import Salestry from '../../components/salesForce/Salestry'
import SalesCard from '../../components/salesForce/SalesCard'
import SalesProducts from '../../components/salesForce/salesProduct/SalesProducts'
import SalesDo from '../../components/salesForce/salesTabs/SalesDo'
import SalesBanner from '../../components/salesForce/SalesBanner'

const SalesForcePage = () => {

    // console.log(SalesListData, "datalist");
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        return () => { };
    }, []);

    return (
        <>
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
    )
}

export default SalesForcePage
