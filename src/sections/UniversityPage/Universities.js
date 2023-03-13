import React from 'react';
import SEO from /*'../../common/SEO'*/ '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import UniversitiesCourse from './UniversitiesCourse';
import CourseData from '../../data/course/CourseData.json';
import PaginationOne from '../../components/pagination/PaginationOne';
import SearchOne from '../../components/widgets/blog/SearchOne';
//import { useFilterContext } from '../../context/filter_context';

const Universities = () => {
    const CourseItems = CourseData.slice(0, 9);
    return (
        <>
            <SEO title="Universities in UK" />
            <Layout>
                <BreadcrumbOne 
                    title="Universities in USA"
                    // rootUrl="/"
                    // parentUrl="Home"
                    // currentUrl="Course Style - 3"
                    description="The USA leads the world in terms of economy size, military superiority, administrative excellence, and cultural dominance. 
                        The USA is the country that hosts the greatest proportion of international students worldwide. 
                        It has something to offer to enhance the number of applicants who fly there for higher education, 
                        whether you want to call it the good education system or the different ethnicities. It also boasts the most highly regarded universities overall. 
                        Let's look at your options for studying at the various universities in the USA."
                    btn="read more"
                />

                {/* search course OR filters */}

                <div className="col-lg-4 col-lg-6 col-lg-12" >
                <div className="edu-search-box-wrapper text-start text-md-end mr-50">
                    <div className="edu-search-box col-md-3">
                        <form action="#" >
                            <input
                                type='text'
                                name='searchbycourse'
                                id='searchbycourse'
                                placeholder='Search Course...'
                                className="search-input"
                                //value={ searchbycourse }
                                //onChange={ updateSearch }
                            />
                            <button className="search-button">
                                <i className="icon-search-line"></i>
                            </button>
                        </form>
                    </div>
                    <div className="edu-search-box col-md-6">
                        <form action="#" >
                            <input
                                type='text'
                                name='searchbycourse'
                                id='searchbycourse'
                                placeholder='Search Course...'
                                className="search-input"
                                //value={ searchbycourse }
                                //onChange={ updateSearch }
                            />
                            <button className="search-button">
                                <i className="icon-search-line"></i>
                            </button>
                        </form>
                    </div>
                    <div className="edu-search-box col-md-3">
                        <form action="#" >
                            <input
                                type='text'
                                name='searchbycourse'
                                id='searchbycourse'
                                placeholder='Search Course...'
                                className="search-input"
                                //value={ searchbycourse }
                                //onChange={ updateSearch }
                            />
                            <button className="search-button">
                                <i className="icon-search-line"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
                {/* end filter part */}

                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5 mt--10">
                            { 
                                CourseItems.map((item) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={ item.id }>
                                        <UniversitiesCourse data={item} />
                                    </div>
                                ) )
                            }
                        </div>

                        {/* pagination start here */}

                        <div className="row">
                            <div className="col-lg-12 mt--60">
                                <PaginationOne />
                            </div>
                        </div>                  

                        {/* pagination end here */}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Universities;