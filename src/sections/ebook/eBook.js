import React from 'react';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import Layout from '../../common/Layout';
import SEO from '../../common/SEO';
import CourseItemsForFilter from '../../components/course/CourseItemsForFilter';
import Filters from '../../components/course/Filters';
import { CoursesProvider } from '../../context/courses_context';
import { FilterProvider } from '../../context/filter_context';
import CourseItemFilter from './courseItemFilter';


const EBook = () => {
    return (
        <>
            <SEO title="Courses Filter Sidebar" />
            <Layout>
                <BreadcrumbOne 
                    title="Study Abroad eBooks"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="eBooks"
                />
                <CoursesProvider>
                    <FilterProvider>
                        <div className="edu-course-area edu-section-gap bg-color-white">
                            <div className="container">
                                <div className="row g-5">
                                    <div className="col-lg-8">
                                        <CourseItemFilter />
                                    </div>
                                    <div className="col-lg-4">
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

export default EBook;