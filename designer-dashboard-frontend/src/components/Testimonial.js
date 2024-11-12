// src/Services.js
import '../css/Testimonial.css';
import React, { useEffect, useState,useRef } from 'react';
import axios from 'axios';
function Testimonial() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get('/api/get_testimonials/')
            .then(response => setTestimonials(response.data))
            .catch(error => console.log(error));
    }, []);

    

    return (
        <div className='main_container'>
            {/* <h2>Client Testimonials</h2> */}
            <p className='first_title'>A Legacy of</p>
            <p className='second_title'>Successful Partnerships</p>
            <div className="service-container">
                <div className="image-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="image-item">
                            {testimonial.image ? (
                                <img className='image_items'src={testimonial.image} alt={`Client ${testimonial.id}`} />
                            ) : (
                                <p>No Image Available</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
