import React, { useState } from 'react'
import Slider from 'react-slick';
import BreadcrumbOne from '../common/breadcrumb/BreadcrumbOne';
import Layout from '../common/Layout';
import SEO from '../common/SEO';
import BannerTwo from '../components/banner/BannerTwo';
import CategoryThree from '../components/category/CategoryThree';
import CourseTypeFilter from '../components/course/CourseTypeFilter';
import HomeThreeService from '../components/home-three/HomeThreeService';
import PostOne from '../components/post/PostOne';
import { BlogCarouselParams } from '../utils/script';
import PostData from '../data/blog/PostData.json';

import HomeFiveCategories from '../components/home-five/HomeFiveCategories';
import HomeTwoService from '../components/home-two/HomeTwoService';
import CategoryTwo from '../components/category/CategoryTwo';
import CallToActionTwo from '../components/cta/CallToActionTwo';
import Faq from '../pages/innerpages/Faq';
import { FAQQQQQ } from './FAQQQQQ';
import InstructorOne from '../components/instructor/InstructorOne';
import InstructorData from '../data/instructor/InstructorData.json';

const PrevArrow = ( props ) => {
    const { onClick } = props;
    return <button className="slide-arrow prev-arrow" onClick={ onClick }><i className="icon-arrow-left-line"></i></button>
}

const NextArrow = (props) => {
    const { onClick } = props;
    return <button className="slide-arrow next-arrow" onClick={ onClick }><i className="icon-arrow-right-line"></i></button>
}
const Destination = ({ wrapperClass } ) => {
    const [selectedItem, setSelectedItem] = useState( 'online-education' );
    const [contentTab, setContentTab] = useState( 'overview' );
    const handleTab = ( content ) => {
        if ( content === 'overview' ) {
            setContentTab( 'overview' );
        } else if ( content === 'curriculum' ) {
            setContentTab( 'curriculum' );
        } else if ( content === 'instructor' ) {
            setContentTab( 'instructor' );
        } else if ( content === 'reviews' ) {
            setContentTab( 'reviews' );
        }
    }

    const faqCategories = [
        {
            id: 1,
            slug: 'online-education',
            label: 'Online Education'
        },
        {
            id: 2,
            slug: 'payment-method',
            label: 'Payment Method'
        },
        {
            id: 3,
            slug: 'pricing-plan',
            label: 'Pricing Plan'
        }
    ];
    const TeamMembers = InstructorData.slice(0, 8);
    const sliderSettings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            }, 
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    arrows: false
                }
            }
        ]
    };
  return (
    <>
    
    <SEO title="Destination" />
            <Layout>
                <BreadcrumbOne 
                    title="Destination"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Study In UK"
                />
                    <div className="edu-course-area course-three-wrapper edu-section-gap bg-color-white position-relative">
                        <div className="container">
                        <div className='course-details-content'>
                                    <ul className="edu-course-tab nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <button
                                                className={contentTab === 'overview' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Overview"
                                                onClick={() => handleTab('overview')}
                                            >
                                                Overview
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={contentTab === 'curriculum' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Curriculum"
                                                onClick={() => handleTab('curriculum')}
                                            >
                                                Curriculum
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={contentTab === 'instructor' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Instructor"
                                                onClick={() => handleTab('instructor')}
                                            >
                                                Instructor
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={contentTab === 'reviews' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Reviews"
                                                onClick={() => handleTab('reviews')}
                                            >
                                                Reviews
                                            </button>
                                        </li>
                                       
                                        
                                    </ul>

                               

                                    </div>
                            {/* <CourseTypeFilter itemToShow="9" /> */}
                            <CategoryTwo />
                           
                            <div>
                                <div style={{fontWeight:"bolder",fontSize:"40px",paddingTop:"20px"}}> What’s Trending? </div>
                            <Slider 
                                    className="eduvibe-post-one-carousel-wrapper mt--40 mb--50 edu-slick-button"
                                    { ...BlogCarouselParams }
                                >
                                    { 
                                        PostData.slice( 0, 6 ).map((item) => (
                                            <div className="eduvibe-post-one-carousel-item" key={ item.id }>
                                                <PostOne data={item} />
                                            </div>
                                        ) )
                                    }
                                </Slider>
                                <HomeFiveCategories />
                                <CategoryThree />
                             
                                </div>
                                <div style={{paddingTop:"230px"}}>
                                <CallToActionTwo />
                               </div>

                         <div style={{fontWeight:"bolder",fontSize:"40px",color:"black",marginTop:"12px"}}>
                               Admission Timeline
                               <FAQQQQQ/> 
                               </div>
                               <div  style={{paddingTop:"80px",fontWeight:"bolder",fontSize:"40px",color:"black"}}>
                               Careers + Work Opportunities
                               <p>Studying in the UK offers a variety of experiences. The cultural and traditional values of the UK attract several international students every year. The popular areas of employment in UK are as follows:</p>
                                </div>  
                               <div style={{paddingTop:"80px",fontWeight:"bolder",fontSize:"40px",color:"black"}}>
                               Explore More Destinations
                              
                               <Slider 
                                    className={ wrapperClass || 'team-activation-01 edu-slick-arrow-top edu-slick-button slick-gutter-15 mt--60 mb--50 mb_dec--20 pb--40' }
                                    { ...sliderSettings }
                                >
                                    { 
                                        InstructorData.slice(0, 6).map( ( item ) => (
                                            <InstructorOne key={ item.id } data={ item } classes='instructor-one-each-slide' />
                                        ) )
                                    }
                                </Slider>
                                <br></br>
                                {/* <div style={{backgroundColor:"var(--color-primary)",paddingTop:"20px",color:"white",fontSize:"34px",padding:"20px"}}>
                                    <> Why Study In United Kingdom ?</>
                                    <p style={{color:"white",fontSize:"14px"}}>The United Kingdom is home to the world’s most esteemed universities and is among the popular destinations for studying abroad. Ranked as the best education systems in the world, the British Education System provides a plethora of courses in various subjects including Business, Engineering, Medicine, Arts, and Design delivered through exceptional teaching styles. The curriculum is designed in a flexible way which helps students customize their courses depending on their unique interests. The United Kingdom is among the top countries for advanced research and has contributed consistently to groundbreaking discoveries.

Apart from ranking high in academic excellence, the UK is known for its multicultural ethos that attracts many students globally. Famed for its heritage sites and art, students can also indulge a dynamic culture which makes their stay merrier. Being the global hub of Europe, the country has a high-income economy making it the best place to find various job opportunities. <img style={{float:"right",marginTop:"21px",opacity:"0.2"}} class="quote-image" src="/images/icons/quote.png" alt="Quote Images"/></p>


                                </div> */}
                                     <blockquote className="blockquote-style-1" style={{background:"#FFFFFF",borderRadius:"5px",borderTop:"3px solid var(--color-primary)",color:"var(--color-primary)",boxShadow:"0px 8px 25px rgba(0, 0, 0, 0.06)",textAlign:"center",padding: "25px 68px",fontWeight:"bolder"}}> <h1 style={{fontSize:"30px",color:"var(--color-primary)"}}>Why Study In United Kingdom ? </h1><br></br>
                                                  
                                     The United Kingdom is home to the world’s most esteemed universities and is among the popular destinations for studying abroad. Ranked as the best education systems in the world, the British Education System provides a plethora of courses in various subjects including Business, Engineering, Medicine, Arts, and Design delivered through exceptional teaching styles. The curriculum is designed in a flexible way which helps students customize their courses depending on their unique interests. The United Kingdom is among the top countries for advanced research and has contributed consistently to groundbreaking discoveries.

Apart from ranking high in academic excellence, the UK is known for its multicultural ethos that attracts many students globally. Famed for its heritage sites and art, students can also indulge a dynamic culture which makes their stay merrier. Being the global hub of Europe, the country has a high-income economy making it the best place to find various job opportunities.
                                            <img className="quote-image" src="/images/icons/quote-2.png" alt="Quote Images" />
                                        </blockquote>
                               
                                </div>  
                                <div style={{fontWeight:"bolder",fontSize:"40px",color:"black",marginTop:"12px"}}>
                                FAQ
                                <FAQQQQQ/>    
                                </div>          
                        </div>
                    </div>
            </Layout>
    
    </>
  )
}

export default Destination ;
