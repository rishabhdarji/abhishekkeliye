import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { slugify } from '../utils';
import SEO from '../common/SEO';
import Layout from '../common/Layout';
import BreadcrumbOne from '../common/breadcrumb/BreadcrumbOne';
import SearchOne from '../components/widgets/blog/SearchOne';

import LatestPostOne from '../components/widgets/blog/LatestPostOne';
import TagOne from '../components/widgets/blog/TagOne';
import BannerOne from '../components/widgets/blog/BannerOne';
// import Comment from '../blog/Comment';
import PostData from '../data/blog/PostData.json';
import Comment from '../pages/blog/Comment';
import Slider from 'react-slick';

import CourseTypeTwo from '../components/course/CourseTypeTwo';

import { InstructorCourseSliderParams } from '../utils/script';
  const courses=[
    {
        "id": 1,
        "title": "Competitive Strategy law for all students",
        "image": "course-01.jpg",
        "instructor": "James Carlson",
        "duration": "3h 14m 20s",
        "durationInHour": "3 Hours",
        "durationInHourMinute": "3hr 14min",
        "level": "Intermediate",
        "language": "English",
        "deadline": "25 Dec, 2022",
        "rating": "4.9",
        "student": 763,
        "lesson": 29,
        "quizzes": 12,
        "price": "45.00",
        "oldPrice": "55.00",
        "review": 56,
        "passPercentage": 80,
        "featured": true,
        "certificate": "available",
        "filterParam": "Popularity",
        "categories": ["Language Learning", "Business"],
        "videoLink": ["https://www.youtube.com/watch?v=pNje3bWz7V8"],
        "excerpt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "details": "<h5>Course Description</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><h5>What You’ll Learn From This Course</h5> <ul> <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li><li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</li><li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li><li>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</li></ul> <h5>Certification</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>"
    },
    {
        "id": 2,
        "title": "Machine Learning A-Z: Hands-On Python and java",
        "image": "course-02.jpg",
        "instructor": "Nancy Phipps",
        "duration": "8h 15m 30s",
        "durationInHour": "8 Hours",
        "durationInHourMinute": "8hr 15min",
        "level": "Advanced",
        "language": "English",
        "deadline": "28 Dec, 2022",
        "rating": "4.8",
        "student": 255,
        "lesson": 35,
        "quizzes": 10,
        "price": "55.00",
        "review": 25.00,
        "passPercentage": 90,
        "featured": false,
        "certificate": "available",
        "filterParam": "Trending",
        "categories": ["Business", "Graphics Design"],
        "videoLink": ["https://www.youtube.com/watch?v=pNje3bWz7V8"],
        "excerpt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "details": "<h5>Course Description</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><h5>What You’ll Learn From This Course</h5> <ul> <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li><li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</li><li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li><li>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</li></ul> <h5>Certification</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>"
    },
    {
        "id": 3,
        "title": "Achieving Advanced in Insights with Big",
        "image": "course-03.jpg",
        "instructor": "Linda Bacote",
        "duration": "15h 35m 18s",
        "durationInHour": "15 Hours",
        "durationInHourMinute": "15hr 35min",
        "level": "Beginner",
        "language": "English",
        "deadline": "30 Nov, 2022",
        "rating": "5.0",
        "student": 550,
        "lesson": 40,
        "quizzes": 15,
        "price": "7.00",
        "oldPrice": "99.00",
        "review": 23,
        "passPercentage": 90,
        "featured": true,
        "certificate": "available",
        "filterParam": "Featured",
        "categories": ["App Development", "Marketing"],
        "videoLink": ["https://www.youtube.com/watch?v=pNje3bWz7V8"],
        "excerpt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "details": "<h5>Course Description</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><h5>What You’ll Learn From This Course</h5> <ul> <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li><li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</li><li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li><li>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</li></ul> <h5>Certification</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>"
    },
    {
        "id": 4,
        "title": "Education Makes A Person A Responsible Citizen",
        "image": "course-04.jpg",
        "instructor": "Alice McCoy",
        "duration": "25h 15m 10s",
        "durationInHour": "25 Hours",
        "durationInHourMinute": "25hr 15min",
        "level": "Intermediate",
        "language": "English",
        "deadline": "10 Dec, 2022",
        "rating": "5.0",
        "student": 250,
        "lesson": 55,
        "quizzes": 25,
        "price": "89.00",
        "review": 35,
        "passPercentage": 80,
        "featured": true,
        "certificate": "available",
        "filterParam": "Popularity",
        "categories": ["Marketing", "Business"],
        "videoLink": ["https://www.youtube.com/watch?v=pNje3bWz7V8"],
        "excerpt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "details": "<h5>Course Description</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><h5>What You’ll Learn From This Course</h5> <ul> <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li><li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</li><li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li><li>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</li></ul> <h5>Certification</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>"
    },
    {
        "id": 5,
        "title": "Building A Better World One Student At A Time",
        "image": "course-05.jpg",
        "instructor": "James Carlson",
        "duration": "15h 35m 16s",
        "durationInHour": "15 Hours",
        "durationInHourMinute": "15hr 35min",
        "level": "Beginner",
        "language": "English",
        "deadline": "27 Nov, 2022",
        "rating": "4.7",
        "student": 243,
        "lesson": 58,
        "quizzes": 14,
        "price": "0",
        "review": 19,
        "passPercentage": 80,
        "featured": false,
        "certificate": "available",
        "filterParam": "Trending",
        "categories": ["Web Development", "Language Learning"],
        "videoLink": ["https://www.youtube.com/watch?v=pNje3bWz7V8"],
        "excerpt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "details": "<h5>Course Description</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><h5>What You’ll Learn From This Course</h5> <ul> <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li><li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</li><li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li><li>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</li></ul> <h5>Certification</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>"
    },
    {
        "id": 6,
        "title": "Education is About Forming Faithful Disciples",
        "image": "course-06.jpg",
        "instructor": "Nancy Phipps",
        "duration": "26h 18m 40s",
        "durationInHour": "26 Hours",
        "durationInHourMinute": "26hr 18min",
        "level": "Advanced",
        "language": "English",
        "deadline": "15 Nov, 2022",
        "rating": "4.5",
        "student": 360,
        "lesson": 48,
        "quizzes": 15,
        "price": "19.00",
        "review": 20,
        "passPercentage": 90,
        "featured": true,
        "certificate": "available",
        "filterParam": "Popularity",
        "categories": ["Marketing", "App Development"],
        "videoLink": ["https://www.youtube.com/watch?v=pNje3bWz7V8"],
        "excerpt": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "details": "<h5>Course Description</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p><h5>What You’ll Learn From This Course</h5> <ul> <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li><li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</li><li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li><li>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</li></ul> <h5>Certification</h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>"
    }]
const Content = () => {
    const { id } = useParams();
    const blogId = parseInt(id, 10);
    const dataItem = PostData.filter(blog => blog.id === blogId);
    const data = dataItem[0];
    return (
        <>
            <SEO title= "Blog" />
            <Layout>
                <BreadcrumbOne 
                    title= "Blog"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog Details"
                />
                <div className="edu-blog-details-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-8">
                                <div className="blog-details-1 style-variation2">
                                    <div className="content-blog-top">
                                        <div className="thumbnail">
                                            <img className="radius-small w-100 mb--30" src={`${process.env.PUBLIC_URL}/images/blog/blog-details-02/${data.image}`} alt="Blog Thumb" />
                                        </div>
                                        {/* <ul className="blog-meta">
                                            <li className="blog-author"><img src="/images/blog/author/author-small/author.png" alt="Blog Images" /> <Link to={process.env.PUBLIC_URL + `/author/${slugify( data.author ) }`}>{data.author}</Link></li>
                                            <li><i className="icon-calendar-2-line"></i>{ data.date }</li>
                                            <li><i className="icon-discuss-line"></i>{ data.comment }</li>
                                            <li><i className="icon-time-line"></i>{ data.readingTime }</li>
                                        </ul> */}
                                       
                                    </div>

                                    <div className="blog-main-content">
                                    <h4 className="title">Latest Articles</h4>
                                    <Slider 
                                                    className="instructor-profile-courses course-activation course-activation-item-2 slick-gutter-15 edu-slick-button"
                                                    { ...InstructorCourseSliderParams }
                                                >
                                                    {
                                                        courses.map( ( course ) => (
                                                            <div key={ course.id } className="eduvibe-course-two-single">
                                                                <CourseTypeTwo data={ course } />
                                                            </div>
                                                        ) )
                                                    }
                                                </Slider>
                                 
                                    </div>
                                    <br></br>
                                    <br></br>

                                    <div className="blog-main-content">
                                    <h4 className="title">Latest Articles</h4>
                                    <Slider 
                                                    className="instructor-profile-courses course-activation course-activation-item-2 slick-gutter-15 edu-slick-button"
                                                    { ...InstructorCourseSliderParams }
                                                >
                                                    {
                                                        courses.map( ( course ) => (
                                                            <div key={ course.id } className="eduvibe-course-two-single">
                                                                <CourseTypeTwo data={ course } />
                                                            </div>
                                                        ) )
                                                    }
                                                </Slider>
                                 
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div className="blog-main-content">
                                    <h4 className="title">Latest Articles</h4>
                                    <Slider 
                                                    className="instructor-profile-courses course-activation course-activation-item-2 slick-gutter-15 edu-slick-button"
                                                    { ...InstructorCourseSliderParams }
                                                >
                                                    {
                                                        courses.map( ( course ) => (
                                                            <div key={ course.id } className="eduvibe-course-two-single">
                                                                <CourseTypeTwo data={ course } />
                                                            </div>
                                                        ) )
                                                    }
                                                </Slider>
                                 
                                    </div>
                                    <br></br>
                                    <br></br>

                                    <div className="blog-main-content">
                                    <h4 className="title">Latest Articles</h4>
                                    <Slider 
                                                    className="instructor-profile-courses course-activation course-activation-item-2 slick-gutter-15 edu-slick-button"
                                                    { ...InstructorCourseSliderParams }
                                                >
                                                    {
                                                        courses.map( ( course ) => (
                                                            <div key={ course.id } className="eduvibe-course-two-single">
                                                                <CourseTypeTwo data={ course } />
                                                            </div>
                                                        ) )
                                                    }
                                                </Slider>
                                 
                                    </div>
                                  <br></br>
                                  <br></br>
                                    <div className="edu-comment-form mt--50">
                                        <Comment 
                                            url=""
                                            id={data.id}
                                            title={data.title}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="edu-blog-sidebar">
                                    <SearchOne style2="enable" />
                                    {/* <CategoryOne extraClass="mt--50" style2="enable" /> */}
                                    <LatestPostOne extraClass="mt--50" style2="enable" />
                                    <LatestPostOne extraClass="mt--50" style2="enable" />
                                    <LatestPostOne extraClass="mt--50" style2="enable" />
                                    <BannerOne extraClass="mt--50" />
                                    <TagOne extraClass="mt--50" style2="enable" />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default Content;
