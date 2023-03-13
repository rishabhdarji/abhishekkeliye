import React from 'react';
import EventTwo from '../../components/event/EventTwo';
import EventData from '../../data/event/EventData.json';

function Similar_Uni() {
    const EventItems = EventData.slice(0, 2);
  return (
    <div className="edu-elements-area edu-section-gap bg-color-white">
        <div className="container">
            <div className="row g-5">
                {
                EventItems.map( ( item ) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={item.id}>
                    <EventTwo data={item} />
                </div>
                ) )
                }
            </div>
        </div>
    </div>
  )
}

export default Similar_Uni