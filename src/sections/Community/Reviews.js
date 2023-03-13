import React from 'react'

function Reviews() {
  return (
    <div className="course-details-card mt--40">
                    <div className="course-details-two-content">
                      {/* <CurriculumContent /> */}
                      {/* <div className="feature-style-6 mt--20">
                                                <div className="edu-feature-list color-variation-1">
                                                    <div className="icon">
                                                        <img src="/images/about/about-05/student.png" alt="Icons Images" />
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Industry Expert Instructor</h6>
                                                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna aliqua.</p>
                                                    </div>
                                                </div>
                                            </div> */}
                      <div className="edu-comment">
                        <div className="thumbnail">
                          <img
                            src="/images/course/student-review/student-1.png"
                            alt="Student Thumb"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="comment-top">
                            <h6 className="title">Elen Saspita</h6>
                            <div className="rating eduvibe-course-rating-stars">
                              <i className="icon-Star"></i>
                              <i className="icon-Star"></i>
                              <i className="icon-Star"></i>
                              <i className="icon-Star"></i>
                              <i className="icon-Star"></i>
                            </div>
                          </div>
                          <span className="subtitle">
                            “ Outstanding Course ”
                          </span>
                          <p>
                            As Thomas pointed out, Chegg’s survey appears more
                            like a scorecard that details obstacles and
                            challenges that the current university undergraduate
                            student population is going through in their
                            universities and countries.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
  )
}

export default Reviews