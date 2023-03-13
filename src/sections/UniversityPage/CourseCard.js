import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ data, classes, bgWhite }) => {
    return (
        <div className={`edu-card card-type-1 radius-small ${ classes ? classes : '' } ${bgWhite === 'enable' ? 'bg-white' : '' }`}>
            <div className="inner">
                
                <div>
                    12th Science with PCMB in Architecture (BSA)
                </div>
                
                <div>
                    fee:<b>USD 55,000$</b><br/>
                    Duration:<b>48 Months</b><br/>
                    Qualification:<b>IELTS:7 </b>
                </div>
                <div>
                    Course level:Bachelors<br/>
                    Mode of Degree:On Campus<br/>
                    Intakes:Sep 
                </div>
                
                {/* view course button */}
                <div className="read-more-btn">
                    <Link className="edu-btn" to="#" 
                        style={{width:'100%', textAlign:'center'}}
                    >View Course <i className="icon-arrow-right-line-right"></i>
                    </Link>
                </div>
                {/* end view course button */}
                
            </div>
        </div>
    )
}

export default CourseCard;