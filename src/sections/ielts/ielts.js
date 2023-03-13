import React, { useState } from 'react';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import Layout from '../../common/Layout';
import SEO from '../../common/SEO';
import CategoryThree from '../../components/category/CategoryThree';
import HomeThreeService from '../../components/home-three/HomeThreeService';
import PostOne from '../../components/post/PostOne';
import PostData from '../../data/blog/PostData.json';
import { CoursesProvider } from '../../context/courses_context';
import { FilterProvider } from '../../context/filter_context';
import FaqIELTS from './faqIELTS';

import Slider from 'react-slick';
import { BlogCarouselParams } from '../../utils/script';
import IeltsInner from './ieltsInner';
import IeltSteps from './ieltsSteps';
import IeltsFee from './ieltsfee';


const Ielts = () => {

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
    return (
        <>
            <SEO title="Ielts" />
            <Layout>
                <BreadcrumbOne
                    title="
                    International English Language Testing System (IELTS) Exam"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="IELTS"
                />
                <CoursesProvider>
                    <FilterProvider>
                        <div className="edu-course-area  bg-color-white">
                            <div className="container">
                                <div className="row g-5">
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

                                        <IeltsInner />

                                    </div>
                                    <h3 style={{ fontFamily: "sans-serif", color: "skyblue" }}>About IELTS Exam</h3>
                                    <h5 className="title" style={{ fontFamily: "sans-serif",color:"gray" }}>About Test</h5>
                                    <p style={{ fontFamily: "sans-serif",fontSize:"18px",color:'gray', marginTop: "1px"}}>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur dummy read more elit.Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec that dolocons rsus mal suada and fadolorit to the consectetur elit.</p>
                                    <ul className="list-style-2">
                                            <li>Struggling to sell one multi-million dollar home currently on the market</li>
                                            <li>The point of using Lorem Ipsum is that it has a normal distribution of letters.</li>
                                            <li>Publishing packages and web page editors now use their default model text.</li>
                                            <li>Publishing packages and web page editors now use their default model text.</li>
                                        </ul>

                                    <h5 style={{ fontFamily: "sans-serif", color: "gray" }} >Why Take the Taste?</h5>
                                    <div style={{ fontFamily: "sans-serif", fontSize: "18px", color: 'gray', marginTop: "1px" }}>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur dummy read more elit.Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec that dolocons rsus mal suada and fadolorit to the consectetur elit.</div>
                                    <h3 style={{ fontFamily: "sans-serif", color: "skyblue" }}> IELTS Basics</h3>
                                    <h4 style={{ fontFamily: "sans-serif", marginTop: "2px", color: "gray" }}>Eligibility</h4>
                                    <div className="course-details-card mt--40">
                                        <div className="course-details-two-content">
                                            {/* <CurriculumContent /> */}
                                            <div className="feature-style-6 mt--20">
                                                <div className="edu-feature-list color-variation-1">
                                                    <div className="icon">
                                                        <img src="/images/about/about-05/student.png" alt="Icons Images" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Industry Expert Instructor</h6>
                                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 style={{ fontFamily: "sans-serif", color: "gray" }}>General Facts</h4>
                                    <div className="course-details-card mt--40">
                                        <div className="course-details-two-content">
                                            {/* <CurriculumContent /> */}
                                            <div className="feature-style-6 mt--40">
                                                <div className="edu-feature-list color-variation-1">
                                                    <div className="icon">
                                                        {/* <img src="/images/about/about-05/student.png" alt="Icons Images" /> */}
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Industry Expert Instructor</h6>
                                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="edu-feature-list color-variation-1">
                                                    <div className="icon">
                                                        {/* <img src="/images/about/about-05/student.png" alt="Icons Images" /> */}
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Industry Expert Instructor</h6>
                                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                                <br></br>

                                                <div className="edu-feature-list color-variation-1">
                                                    <div className="icon">
                                                        {/* <img src="/images/about/about-05/student.png" alt="Icons Images" /> */}
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Industry Expert Instructor</h6>
                                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="edu-feature-list color-variation-1">
                                                    <div className="icon">
                                                        {/* <img src="/images/about/about-05/student.png" alt="Icons Images" /> */}
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Industry Expert Instructor</h6>
                                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="edu-feature-list color-variation-1">
                                                    <div className="icon">
                                                        {/* <img src="/images/about/about-05/student.png" alt="Icons Images" /> */}
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Industry Expert Instructor</h6>
                                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 style={{ fontFamily: "sans-serif", color: "gray" }}>sections</h4>
                                    <Slider
                                        className="eduvibe-post-one-carousel-wrapper mt--40 mb--50 edu-slick-button"
                                        {...BlogCarouselParams}
                                    >
                                        {
                                            PostData.slice(0, 6).map((item) => (
                                                <div className="eduvibe-post-one-carousel-item" key={item.id}>
                                                    <PostOne data={item} />
                                                </div>
                                            ))
                                        }
                                    </Slider>

                                    <IeltsFee />
                                    <h4 style={{ fontFamily: "sans-serif", color: "gray" }}>IELTS Exam Registration Process</h4>
                                    <IeltSteps />
                                    <h3 style={{ fontFamily: "sans-serif", color: "skyblue", marginTop: "0px" }}>Prepartion Tips</h3>
                                    <div className="edu-elements-area bg-color-white">
                                        <div className="container">
                                            <div className="row g-5">
                                                <div className="col-lg-12">
                                                    <div className="row g-5">
                                                        {
                                                            PostData.slice(0, 6).map((item) => (
                                                                <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                                                                    <PostOne data={item} />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row text-center mt--60">
                                    <div className="col-lg-12">
                                        <button 
                                            className="edu-btn"
                                            
                                        >
                                            
                                                    <span><a href='/ieltsInner' style={{color:"white"}}>
                                                    Load More 
                                                      
                                                    </a>
                                                         
                                                    </span>
                                                
                                        </button>
                                    </div>
                                </div>

                                    <FaqIELTS />



                                </div>
                            </div>
                        </div>
                    </FilterProvider>
                </CoursesProvider>

                <div >

                </div>
            </Layout>
        </>
    )
}

export default Ielts;