import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const items = [
    {
        title: 'Personal Development',
        numberOfCourses: '23 Courses',
        icon: 'icon-Schoolbag',
        link: '#'
    },
    {
        title: 'Human Research',
        numberOfCourses: '39 Courses',
        icon: 'icon-student-read',
        link: '#'
    },
    {
        title: 'Art & Design',
        numberOfCourses: '45 Courses',
        icon: 'icon-Pencil',
        link: '#'
    },
    
   
    
];

const IeltsFee = ( { wrapperClass, styleClass } ) => {
    return (
        <>
        <h4 style={{ fontFamily: "sans-serif",color:"gray"}}>Fees</h4>
        <div className={ `row ${ wrapperClass || 'g-5 mt--10' }` }>
            { items.map( ( data , i) => (
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    className={ `col-lg-4 col-md-6 col-12 ${ styleClass ? styleClass : '' }` }
                    animateOnce={ true }
                    key={ i }
                >
                    <div className="service-card service-card-5">
                        <div className="inner">
                            <div className="icon">
                                <i className={ data.icon }></i>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href={ data.link }>{ data.title }</a></h6>
                                <p className="description">{ data.numberOfCourses }</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            ) ) }
        </div>
        </>
    )
}

export default IeltsFee;