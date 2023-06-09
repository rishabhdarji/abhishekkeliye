import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../sectionTitle/SectionTitle';

const CallToActionTwo = () => {
    return (
    
        <div className="edu-newsletter-area newsletter-overlay-to-another">
            <div className="container  bg-color-primary">
                <div className="row align-items-center g-5">
                    <div className="col-lg-7">
                        <div className="inner">
                            <SectionTitle
                                classes = "text-start text-white"
                                slogan = "Get your Dream PTE or IELTS Score"
                                title = "Learn From The Best Tutors"
                            />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="cta-btn text-start text-lg-end">
                            <Link className="edu-btn btn-white" to="#">Learn From Today<i className="icon-arrow-right-line-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToActionTwo;