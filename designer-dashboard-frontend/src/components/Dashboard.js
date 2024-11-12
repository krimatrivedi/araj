import Portfolio from './Portfolio';
// import Service from './Service';
// import Testimonial from './Testimonial';
import Contact from './Contact';
import '../css/Dashboard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get('/api/get_images/')
            .then(response => setImages(response.data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);
    return (
        <div className='main_container'>
            <div className='content_div'>
                <p className='first_title'>STUDIO ARAJ</p>
                <p className='second_title'>speaks fluent Creative</p>
                {/* <h2>Contact Messages</h2> */}
                <p className='description_one'>With the experience of 12 years, ARAJ is a brand creation & design studio rooted in INDIA.</p>
                <p className='description_two'>We act creative with attention and boldness to discover the potential of your brand. The
                    first rule when creating value through design elements is to ensure they look aesthetically
                    appealing. We believe that harmony has enormous impact and only the precise balance of
                    forms will allow this harmony to emerge.</p>
                <p className='highlight_main'> Creativity captures <span class="highlight">Attention</span>.
                    It sparks <span class="highlight">Imagination</span>. From 
                    <span class="highlight">  Big Events</span> to everyday posts.
                </p>
                <p className='description_two'>
                STUDIO ARAJ offers design services in sectors as diverse as Travel & Tourism, Fashion &
                Beauty, Hospitality, Financial Services, Luxury, Entertainment & Food, Healthcare, Education
                & things you ask for</p>
                <div class="wrapper">
                    <div class="gallery">
                        <ul>
                            {images.map((image, index) => (
                                <li key={index}>{image}--
                                    <img src={`${process.env.REACT_APP_API_URL}${image}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom section with pink background */}
            <div className="pink-bottom">
                {/* You can add content or leave it as a solid pink background */}
            </div>
        </div>
    );
}

export default Dashboard;
