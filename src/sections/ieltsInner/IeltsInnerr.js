import React from 'react';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import Layout from '../../common/Layout';
import SEO from '../../common/SEO';
import PostOne from '../../components/post/PostOne';
import PostData from '../../data/blog/PostData.json';
import { CoursesProvider } from '../../context/courses_context';
import { FilterProvider } from '../../context/filter_context';



const IeltsInnerr = () => {
    return (
        <>
            <SEO title="Courses Filter Sidebar" />
            <Layout>
                <BreadcrumbOne
                    // title="Study Abroad eBooks"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="eBooks"
                />
                <CoursesProvider>
                    <FilterProvider>
                        <div className="edu-course-area  bg-color-white"style={{marginBottom:"100px"}}>
                            <div className="container">
                                <div className="row g-5">
                                    
                                    
                                    <div className="edu-elements-area bg-color-white">
                                        <div className="container">
                                            <div className="row g-5">
                                                <div className="col-lg-12">
                                                    <div className="row g-5">
                                                        {
                                                            PostData.slice(0, 12).map((item) => (
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

                                    {/* <FaqIELTS /> */}

                                 

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

export default IeltsInnerr;