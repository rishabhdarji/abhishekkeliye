import React from 'react';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import FooterTwo from '../../common/footer/FooterTwo';
import HeaderOne from '../../common/header/HeaderOne';
import SEO from '../../common/SEO';
import AboutUsOneService from '../../components/about-us-one/AboutUsOneService';
import AboutUsOneTeam from '../../components/about-us-one/AboutUsOneTeam';
import AboutOne from '../../components/about/AboutOne';
import AboutSeven from '../../components/about/AboutSeven';
import AboutSix from '../../components/about/AboutSix';
import HomeTwoTestimonial from '../../components/home-two/HomeTwoTestimonial';


const AboutUs = () => {
    return (
        <>
            <SEO title="About Us 1" />

            <HeaderOne />

            <BreadcrumbOne 
                title="About Us"
                rootUrl="/"
                parentUrl="Home"
                currentUrl="About Us"
            />

            <AboutSeven />
            
            <AboutUsOneService />

            <AboutSix />

            <AboutOne />

            <AboutUsOneTeam />

            <HomeTwoTestimonial />

            <FooterTwo />
        </>
    )
}

export default AboutUs;