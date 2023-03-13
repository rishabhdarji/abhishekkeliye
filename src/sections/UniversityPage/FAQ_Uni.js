import {React, useState, useContext} from 'react';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';

function FAQ_Uni() {

    const onlineEducation = {
        leftColumn: [
            {
                id: 1,
                title: 'U of T Lester B. Pearson International Scholarship',
                body: 'This merit-based scholarship is one of the most competitive scholarships for international students, the scholarship covers costs like tuition fee, incidental fee, books and full residential costs for the four year duration of the program.  The scholarship is awarded to those students who have been nominated by their high school for displaying academic excellence and exceptional leadership skills. '
            },
            {
                id: 2,
                title: 'University of Toronto Scholars Program',
                body: 'University of Toronto Scholars Program'
            },
            {
                id: 3,
                title: 'Presidents Scholars of Excellence Program',
                body: 'Awarded to meritorious international students, this scholarship award is automatically offered to selected students who are applying to University Of Torontos Engineering programs.'
            },
            {
                id: 4,
                title: 'Is There Any Prerequisites To Learn Python?',
                body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
            }
        ]
    }

    const [activeId1, setActiveId1] = useState( '0' );
    const [activeId2, setActiveId2] = useState( '0' );

    const CustomToggle = ({ children, eventKey }) => {
        const { activeEventKey } = useContext( AccordionContext );
        const decoratedOnClick = useAccordionButton( eventKey );
        const isCurrentEventKey = activeEventKey === eventKey;
        return <button type="button" onClick={ decoratedOnClick } aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{ children }</button>
    }

    function toggleActive1( id ) {
        if (activeId1 === id) {
            setActiveId1(null);
        } else {
            setActiveId1(id);
        }
    }

    function toggleActive2( id ) {
        if (activeId2 === id) {
            setActiveId2(null);
        } else {
            setActiveId2(id);
        }
    }

  return (
    <div className="edu-course-area edu-section-gap bg-color-white">
    <div className="container">
        <h6>FAQs</h6>
        <div className="row g-5 align-items-center mt--20">
            <div className="col-lg-12">
                <div className="accordion-style-1">
                    <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                        {
                        onlineEducation.leftColumn.map( ( accordion, i ) => (
                            <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive1(i.toString())} bsPrefix={`edu-accordion-item ${activeId1 === i.toString() ? 'active-item' : ''}`}>
                                <div className="edu-accordion-header">
                                    <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                                </div>
                                <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                            </Accordion.Item>
                        ) )
                        }
                    </Accordion>
                </div>
            </div>
                                
        </div>
        <br></br>
        <br></br>
        <br></br>

        <h6>Studying in USA</h6>
        <div className="row g-5 align-items-center mt--20">
            <div className="col-lg-12">
                <div className="accordion-style-1">
                    <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                        {
                        onlineEducation.leftColumn.map( ( accordion, i ) => (
                            <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive1(i.toString())} bsPrefix={`edu-accordion-item ${activeId1 === i.toString() ? 'active-item' : ''}`}>
                                <div className="edu-accordion-header">
                                    <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                                </div>
                                <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                            </Accordion.Item>
                        ) )
                        }
                    </Accordion>
                </div>
            </div>
                                
        </div>

    </div>
    </div>
  )
}

export default FAQ_Uni