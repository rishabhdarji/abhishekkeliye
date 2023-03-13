import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import Filters from '../../components/course/Filters';
import CourseItemsForFilter from '../../components/course/CourseItemsForFilter';
import { CoursesProvider } from '../../context/courses_context';
import { FilterProvider } from '../../context/filter_context';
// import HomeTwoEvents from '../../components/home-two/HomeTwoEvents';
import Events from './Event';

const Course = () => {
    return (
        <>
            <SEO title="Courses" />
            <Layout>
                <BreadcrumbOne 
                    title="Courses"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Courses"
                />
                <CoursesProvider>
                    <FilterProvider>
                        <div className="edu-course-area edu-section-gap bg-color-white">
                            <div className="container">
                                <div className="row g-5">
                                    <div className="col-lg-9">
                                        {/* <CourseItemsForFilter /> */}
                                        <Events/>
                                    </div>
                                    <div className="col-lg-3">
                                        <Filters />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FilterProvider>
                </CoursesProvider>
            </Layout>
        </>
    )
}

export default Course;