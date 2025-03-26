import React from 'react';
import './Services.css'
import dalga from '../../assets/ati_dalga.svg'
import Services_Data from '../../models/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={dalga} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service, index) => {
                return <div key={index} className="services-format">
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  );
};

export default Services;