import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import Layout from '../../common/Layout';
import FilterData from '../../data/gallery/FilterData.json';
import InstructorData from '../../data/instructor/InstructorData.json';
import FAQ from '../UniversityPage/FAQ_Uni';
import Similar_Uni from '../UniversityPage/Similar_Uni';
import UniversityCourses from '../UniversityPage/UniversityCourses';
import Universityranking from './Universityranking';

// const items = [
//     {
//         title: 'Flexible Classes',
//         info: 'It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.',
//         icon: 'icon-Hand---Book'
//     },
//     {
//         title: 'Learn From Anywhere',
//         info: 'It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.',
//         icon: 'icon-Campus'
//     }
// ];

function UniversityPage() {

    const [activeFilter, setActiveFilter] = useState( '' );
    const TeamMembers = InstructorData.slice(0, 3);
  return (
    <>
        <Layout>
        <Element
            name="about-us"
            className="edu-about-area about-style-1 edu-section-gap bg-color-white"
        >
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="about-image-gallery">
                            <img className="image-1" src="/images/about/about-09/about-image-01.jpg" alt="About Main Thumb" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        
                        <div className="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end">
                            {FilterData.map((filter) => (
                                <button
                                //onClick={handleChange}
                                key={filter.id}
                                className={
                                    filter.text.toLowerCase() === activeFilter
                                    ? "is-checked"
                                    : " "
                                }
                                >
                                {filter.text}
                                </button>
                            ))}
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                AI University Course Finder
                            </div>
                            <div>
                            See personalized recommendations basis your profile and preferences from Massachusetts Institute of Technology (MIT) & similar universities.
                            </div>
                        </div>
                        <UniversityCourses/>
                        <Universityranking/>
                        <FAQ/>
                        <Similar_Uni/>
                    </div>
                </div>
            </div>
        </Element>
        </Layout>
    </>
  )
}

export default UniversityPage