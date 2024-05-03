import React, { useEffect } from 'react'
import BoomiBanner from '../../components/boomi/BoomiBanner'
import BoomiWhat from '../../components/boomi/BoomiWhat'
import BoomiTabs from '../../components/boomi/BoomiTabs'
import BoomiSolutions from '../../components/boomi/boomiSolutions'
import { BoomiListData } from '../../components/boomi/boomiData'
import BoomiCustomers from '../../components/boomi/BoomiCustomers'
import BoomiFaq from '../../components/boomi/BoomiFaq'
import BoomiHeading from '../../components/boomi/BoomiHeading'

const BoomiPage = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        return () => { };
    }, []);


    return (
        <>
            <BoomiBanner />
            <BoomiWhat />
            <BoomiFaq />
            <BoomiTabs />
            <BoomiCustomers />
            <BoomiHeading />
            <BoomiSolutions dataLists={BoomiListData} />
        </>
    )
}

export default BoomiPage
