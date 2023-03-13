import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import { getUniqueValues, formatPrice } from '../../utils';

const Filters = () => {
    const {
        filters: {
            coursesortby,
            filterbyprice,
            filterbylevel,
            min_price,
            price,
            max_price
        },
        updateFilters,
        clearFilters,
        all_courses
    } = useFilterContext()

    const levels = getUniqueValues( all_courses, 'level' );

    return (
        <aside className="edu-course-sidebar">
            <form onSubmit={ (e) => e.preventDefault() }>

                <div className="edu-course-widget widget-shortby">
                    <div className="inner">
                        <h5 className="widget-title">Destination</h5>
                        <div className="content">
                            <div className="edu-form-check">
                                <input type="checkBox" id="none" value="none" name="coursesortby"  onChange={ updateFilters } />
                                <label htmlFor="none">UK</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="name-a" value="name-a" name="coursesortby"  onChange={ updateFilters } />
                                <label htmlFor="name-a">Canada</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="name-z" value="name-z" name="coursesortby"  onChange={ updateFilters } />
                                <label htmlFor="name-z">USA</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="featured" value="featured" name="coursesortby"  onChange={ updateFilters } />
                                <label htmlFor="featured">Australia</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="featuredd" value="featuredd" name="coursesortby"  onChange={ updateFilters } />
                                <label htmlFor="featuredd">New Zealand</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="featureddd" value="featureddd" name="coursesortby"  onChange={ updateFilters } />
                                <label htmlFor="featureddd">Germany</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="edu-course-widget widget-shortby mt--40">
                    <div className="inner">
                        <h5 className="widget-title">Tests</h5>
                        <div className="content">
                            <div className="edu-form-check">
                                <input type="checkBox" id="no-filter-price" value="no-filter-price" name="filterbyprice"  onChange={ updateFilters } />
                                <label htmlFor="no-filter-price">Spoken English</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="price-lowest" value="price-lowest" name="filterbyprice" onChange={ updateFilters } />
                                <label htmlFor="price-lowest">IELTS</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="price-highest" value="price-highest" name="filterbyprice"  onChange={ updateFilters } />
                                <label htmlFor="price-highest">GMAT</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="a" value="a" onChange={ updateFilters } />
                                <label htmlFor="a">GRE</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="price-highestt" value="price-highestt" name="filterbyprice"  onChange={ updateFilters } />
                                <label htmlFor="price-highestt">SAT</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="price-highesttt" value="price-highesttt" name="filterbyprice"  onChange={ updateFilters } />
                                <label htmlFor="price-highesttt">ACT</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="free" value="free" name="filterbyprice"  onChange={ updateFilters } />
                                <label htmlFor="free">TOEFL</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="paidd" value="paidd" name="filterbyprice"  onChange={ updateFilters } />
                                <label htmlFor="paidd">PTE</label>
                            </div>
                            <div className="edu-form-check">
                                <input type="checkBox" id="paid" value="paid" name="filterbyprice"  onChange={ updateFilters } />
                                <label htmlFor="paid">Duolingo</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="edu-course-widget widget-shortby mt--40">
                    <div className="inner">
                        <h5 className="widget-title">Others</h5>
                        <div className="content">
                            { levels.map( ( levelItem, index ) => {
                                return (
                                    <div className="edu-form-check" key={ index }>
                                        <input 
                                            type="checkBox" 
                                            id={ levelItem } 
                                            value={ levelItem } 
                                            name="filterbylevel" 
                                           // checked={ filterbylevel === levelItem ? "checked" : '' }
                                            onChange={ updateFilters } 
                                        />
                                        <label 
                                            htmlFor={ levelItem }
                                            className={ `${
                                                filterbylevel === levelItem ? 'text-capitalize active' : 'text-capitalize'
                                                }` }
                                        >
                                            { levelItem }
                                        </label>
                                    </div>
                                )
                            } ) }
                        </div>
                    </div>
                </div>

                {/* <div className="edu-course-widget widget-shortby mt--40">
                    <div className="inner eduvibe-course-price-filter">
                        <h5 className="widget-title">Filter By Price</h5>
                        <div className="content">
                            <div className="price_filter s-filter clear">
                                <input
                                    type='range'
                                    name='price'
                                    min={ min_price }
                                    max={ max_price }
                                    onChange={ updateFilters }
                                    value={ price }
                                />
                                <div className="price__output--wrap">
                                    <div className="price--output">
                                        <span>Price :</span>{ formatPrice( price ) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </form>

            <button type='button' className="edu-btn btn-medium mt--40" onClick={ clearFilters }>
                Reset All Filters
            </button>
        </aside>
    )
}


export default Filters