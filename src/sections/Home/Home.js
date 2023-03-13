import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import BannerFive from './BannerFive';
import LogoOne from '../../components/logos/LogoOne';
import HomeFiveCategories from '../../components/home-five/HomeFiveCategories';
import HomeFiveProgress from '../../components/home-five/HomeFiveProgress';
import FooterOne from '../../common/footer/FooterOne';
import AboutSix from '../../components/about/AboutSix';
import CallToActionOne from '../../components/cta/CallToActionOne';
import HomeTwoService from '../../components/home-two/HomeTwoService';
import InstructorPageOne from './InstructorPageOne';
import AboutFour from './AboutFour';
import HomeOneInstructor from '../../components/home-one/HomeOneInstructor';
const HomeFive = () => {
    return (
        <>
            <SEO title="Home 5" />

            <HeaderTwo styles="header-transparent header-style-2" searchDisable buttonStyle="bg-color-white" />
            
            <BannerFive />

            <AboutSix/>

            <HomeFiveCategories />

            <CallToActionOne/>

            <HomeTwoService />
            
            <HomeFiveProgress />

            <CallToActionOne/>

            <AboutFour/>

            <InstructorPageOne/>

            <LogoOne/>
            
            <HomeOneInstructor/>

            <AboutSix/>

            <FooterOne />
        </>
    )
}

export default HomeFive;