import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne'
import FooterTwo from '../../common/footer/FooterTwo'
import Layout from '../../common/Layout'
import SEO from '../../common/SEO'
import CourseTypeOne from '../../components/course/CourseTypeOne'
import { ThreeColumnCarousel } from '../../utils/script'
import MainLoadMore from './MainLoadMore'
import CourseData from '../../data/course/CourseData.json';

export const Scholarship = () => {
  return (
    <>
    
    <SEO title="Scholarship" />
            <Layout>
                <BreadcrumbOne 
                    title="Welcome to Scholarship Hub"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Scholarship"
                />
                <br></br>
                <br>
                </br>

<div className="edu-cta-area cta-with-overlay">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="call-action-style-1 bg-color-primary radius-small">
                                    <div className="inner">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-6">
                                                <div className="content">
                                                    <div className="section-title text-white">
                                                        <span className="pre-title">Become A Teacher</span>
                                                        <h5 className="title">Are You Want To Join As A Instructor?</h5>
                                                    </div>
                                                    <div className="read-more-btn mt--30">
                                                        <a className="edu-btn btn-medium btn-white" href="#">Apply Now<i
                                                        className="icon-arrow-right-line-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 d-none d-sm-block">
                                                <div className="thumbnail">
                                                    <img className="main-img" src="/images/footer/cta-image-01.png" alt="Cta images" />
                                                    <div className="shape-image">
                                                        <img src="/images/footer/shape-05.png" alt="Shape Images" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="call-action-style-1 box-layout bg-color-secondary radius-small">
                                    <div className="inner">
                                        <div className="content">
                                            <div className="section-title text-white">
                                                <span className="pre-title">Subscribe Newsletter</span>
                                                <h5 className="title">Be The First know About Courses
                                                    <br />And Event !
                                                </h5>
                                            </div>
                                            <div className="newsletter-form-box mt--25">
                                                <div className="newsletter-style-2">
                                                    <form action="#">
                                                        <input type="text" placeholder="Enter Your Email Address" />
                                                        <div className="subscribe-btn">
                                                            <button className="edu-btn btn-medium btn-dark">Subscribe</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="shape-image-2">
                                                <img src="/images/footer/shape-06.png" alt="Shape Images" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>


                <div className=" eduvibe-home-four-about edu-about-area edu-section-gap about-style-2  bg-color-white">
            <div className="container eduvibe-animated-shape">
                <div className="row row--50">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="eduvibe-about-1-img-wrapper">
                                <img className="image-1" src="/images/about/about-07/about-image-01.png" alt="About Images" />
                                <span className="eduvibe-about-blur">
                                    <img src="/images/about/about-07/about-blur.png" alt="About Blur" />
                                </span>
                            </div>
                            <div className="circle-image-wrapper">
                                <img className="image-2" src="/images/about/about-07/about-image-02.png" alt="About Images" />
                                <div className="circle-image">
                                    <span></span>
                                </div>
                            </div>
                            <div className="finished-session">
                                <div className="inner">
                                    <div className="text">2.98</div>
                                    <span className="finished-title">Finished <br /> Sessions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="inner mt_md--40 mt_sm--40">
                            <div className="section-title text-start">
                                <span className="pre-title">About Us</span>
                                <h3 className="title">Knowledge is power, Information is liberating.</h3>
                            </div>
                            <p className="description mt--40 mt_md--20 mt_sm--20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, venenatis dictum et nec. Fringilla dictum tristique cras pellentesque consequat.</p>
                                <h6 className="subtitle mb--20">People Love To Learn With Us</h6>

                            <div className="about-feature-list">
                                <div className="row g-5">
                                    <div className="col-lg-6">
                                        <div className="feature-style-3">
                                            <div className="feature-content">
                                                <h6 className="feature-title">90%</h6>
                                                <p className="feature-description">90% of students see their course through to completion.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="feature-style-3">
                                            <div className="feature-content">
                                                <h6 className="feature-title">9/10</h6>
                                                <p className="feature-description">9/10 users reported better learning outcomes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="read-more-btn mt--40">
                                <Link className="edu-btn" to="#">Learn More<i className="icon-arrow-right-line-right"></i></Link>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-11-05.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-08-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-30.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape shape-1">
                        <span className="shape-dot"></span>
                    </div>
                </div>
            </div>
             </div>
        
        <MainLoadMore/>
        <div className="edu-elements-area  bg-color-white" style={{marginTop:"38px"}}>
                    <div className="container">
                        <div style={{fontWeight:"bolder",fontSize:"40px",color:"black",marginTop:"12px"}}> Latest Winners</div>
                        Giving wings to their study abroad dream.
                        <div className="row g-5">
                            <div className="col-lg-12">
                             
                                
                                <Slider 
                                    className="mt--40 mb--50 edu-slick-button slick-activation-wrapper eduvibe-course-one-carousel"
                                    { ...ThreeColumnCarousel }
                                >
                                    { 
                                        CourseData.slice( 0, 6 ).map((item) => (
                                            <div className="single-slick-card" key={ item.id }>
                                                <CourseTypeOne data={item} />
                                            </div>
                                        ) )
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>


        

</Layout>
    
    </>
  )
}
