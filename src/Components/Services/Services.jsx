import React from 'react';
import './Services.css';
import dalga from '../../assets/ati_dalga.svg';
import Services_Data from '../../models/services_data.js';
import arrow_icon from '../../assets/arrow_icon.svg';
import { Link } from 'react-scroll';

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={dalga} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service, index) => {
                return (
                  <Link 
                    key={index} 
                    to="contact"
                    smooth={true} 
                    duration={500} 
                    offset={-70}
                    className="services-format"
                  >
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <img src={arrow_icon} alt="" className='arrow'/>
                        <p>Get in Touch</p>
                    </div>
                  </Link>
                );
            })}
        </div>
    </div>
  );
};

export default Services;
