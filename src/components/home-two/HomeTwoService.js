import React from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import CategoryTwo from '../../components/category/CategoryTwo';

const HomeTwoService = () => {
    return (
        <div className="sercice-area eduvibe-service-four edu-section-gap bg-color-white">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                   
                </div>

                <CategoryTwo />

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-11-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-02-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-20.png" alt="Shape Thumb" />
                    </div>
            </div>
            </div>
        </div>
    )
}

export default HomeTwoService;