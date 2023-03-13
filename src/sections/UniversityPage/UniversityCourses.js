import React from 'react';
import CourseTypeThree from '../../components/course/CourseTypeThree';
import CourseData from '../../data/course/CourseData.json';
import UniversitiesCourse from './UniversitiesCourse';

function UniversityCourses() {
    const CourseItems = CourseData.slice(0, 4);

  return (
    <div>
        <div className="edu-course-area edu-section-gap bg-color-white">
        <div className="container">
        Browse Courses
        <div className="row g-5 mt--10">
            { 
                CourseItems.map((item) => (
                    <div className="col-12 col-lg-6" key={ item.id }>
                        <UniversitiesCourse data={item} />
                    </div>
                ) )
            }
        </div>
        <div className="row text-center mt--60">
                        <div className="col-lg-12">
                    
                            <button 
                                className="edu-btn"
                                //onClick={ handleLoadMoreBtn }
                                //disabled={ noMorePost ? 'disabled' : null }
                            >
                            <span>View all courses</span>
                            </button>
                        
                        </div>
                    </div>
        </div>
        </div>
    </div>
  )
}

export default UniversityCourses