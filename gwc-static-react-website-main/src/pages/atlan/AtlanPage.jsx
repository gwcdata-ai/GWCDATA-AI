import React, { useEffect } from 'react'
import AtlanBanner from '../../components/atlanPatners/AtlanBanner'
import AtlanCatalog from '../../components/atlanPatners/AtlanCatalog'
import AtlanPurpose from '../../components/atlanPatners/AtlanPurpose'
import AtlanSlider from '../../components/atlanPatners/AtlanSlider'
import AtlanTab from '../../components/atlanPatners/altanTabs/AtlanTab'
import AtlanCards from '../../components/atlanPatners/AtlanCards'

const AtlanPage = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        return () => { };
    }, []);

    return (
        <>
            <AtlanBanner />
            <AtlanCatalog />
            <AtlanTab />
            <AtlanCards />
            <AtlanPurpose />
            <AtlanSlider />
        </>
    )
}

export default AtlanPage
