import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';
import PostOne from '../post/PostOne';
import PostData from '../../data/blog/PostData.json';
import { BlogCarouselParams } from '../../utils/script';
import Slider from 'react-slick';





const items = [
    {
        title: 'Flexible Classes',
        info: 'It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.',
        icon: 'icon-Hand---Book'
    },
    {
        title: 'Learn From Anywhere',
        info: 'It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.',
        icon: 'icon-Campus'
    }
];

const HomeOneAbout = () => {
    return (
        <Element
            name="about-us"
            className="edu-about-area about-style-1 edu-section-gap bg-color-white"
        >
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="image-1" src="/images/about/about-09/about-image-01.jpg" alt="About Main Thumb" />
                            <div className="image-2">
                                <img src="/images/about/about-09/about-image-02.jpg" alt="About Parallax Thumb" />
                            </div>
                            <div className="badge-inner">
                                <img className="image-3" src="/images/about/about-09/badge.png" alt="About Circle Thumb" />
                            </div>
                            <div className="shape-image shape-image-1">
                                <img src="/images/shapes/shape-04-01.png" alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="inner">
                            <SectionTitle
                                slogan="About Us"
                                title=" E-Books for learner"
                            />
                            <div className="edu-rating rating-default">
                                <div className="rating eduvibe-course-rating-stars">
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                </div>
                                <span className="rating-count">({ } Review)</span>
                            </div>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                className="read-more-btn"
                                animateOnce={true}
                            >
                                <Link className="edu-btn" to="/about-us-1">Know About Us<i className="icon-arrow-right-line-right"></i></Link>
                            </ScrollAnimation>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}
                            >
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
                                    null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra.</p>
                            </ScrollAnimation>


                            {items && items.length > 0 &&
                                <div className="about-feature-list">
                                    {items.map((data, i) => (
                                        <ScrollAnimation
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            className="our-feature"
                                            animateOnce={true}
                                            key={i}
                                        >
                                            <div className="our-feature">
                                                <div className="icon">
                                                    <i className={data.icon}></i>
                                                </div>
                                                <div className="feature-content">
                                                    <h6 className="feature-title">{data.title}</h6>
                                                    <p className="feature-description">{data.info}</p>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    ))}
                                </div>
                            }

                            <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
                                <img src="/images/shapes/shape-07.png" alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-wrapper pt--40">
                    <div className="section-title">
                        <h5 className="mb--25">Reviews</h5>
                    </div>
                    <div className="edu-comment">
                        <div className="thumbnail">
                            <img src="/images/course/student-review/student-1.png" alt="Student Thumb" />
                        </div>
                        <div className="comment-content">
                            <div className="comment-top">
                                <h6 className="title">Elen Saspita</h6>
                                <div className="rating eduvibe-course-rating-stars">
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                </div>
                            </div>
                            <span className="subtitle">“ Outstanding Course ”</span>
                            <p>As Thomas pointed out, Chegg’s survey appears more like a scorecard that details obstacles and challenges that the current university undergraduate student population is going through in their universities and countries.</p>
                        </div>
                    </div>
                </div>

                <div className="comment-wrapper pt--40">
                    <div className="section-title">
                        <h5 className="mb--25">Reviews</h5>
                    </div>
                    <div className="edu-comment">
                        <div className="thumbnail">
                            <img src="/images/course/student-review/student-1.png" alt="Student Thumb" />
                        </div>
                        <div className="comment-content">
                            <div className="comment-top">
                                <h6 className="title">Elen Saspita</h6>
                                <div className="rating eduvibe-course-rating-stars">
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                </div>
                            </div>
                            <span className="subtitle">“ Outstanding Course ”</span>
                            <p>As Thomas pointed out, Chegg’s survey appears more like a scorecard that details obstacles and challenges that the current university undergraduate student population is going through in their universities and countries.</p>
                        </div>
                    </div>
                </div>
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
            </div>
        </Element>
    )
}

export default HomeOneAbout;