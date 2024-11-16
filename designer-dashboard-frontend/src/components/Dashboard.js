// import Portfolio from './Portfolio';
// import Service from './Service';
// import Testimonial from './Testimonial';
import Footers from './Footer'; // Note: Changed Footer to Footers as per your Footer.js component name
import '../css/Dashboard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [images, setImages] = useState([]);
    console.log('API URL:', process.env.REACT_APP_API_URL);

    useEffect(() => {
        axios.get('/api/get_images/')
            .then(response => setImages(response.data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);

    return (
        <div className='main_container'>
            {/* Main Content */}
            <div className='content_div'>
                <p className='first_title'>STUDIO ARAJ</p>
                <p className='second_title'>speaks fluent Creative</p>
                <p className='description_one'>
                    With the experience of 12 years, ARAJ is a brand creation & design studio rooted in INDIA.
                </p>
                <p className='description_two'>
                    We act creative with attention and boldness to discover the potential of your brand. The
                    first rule when creating value through design elements is to ensure they look aesthetically
                    appealing. We believe that harmony has enormous impact and only the precise balance of
                    forms will allow this harmony to emerge.
                </p>
                <p className='highlight_main'>
                    Creativity captures <span className="highlight">Attention</span>. It sparks <span className="highlight">Imagination</span>. From 
                    <span className="highlight"> Big Events</span> to everyday posts.
                </p>
                <p className='description_two'>
                    STUDIO ARAJ offers design services in sectors as diverse as Travel & Tourism, Fashion &
                    Beauty, Hospitality, Financial Services, Luxury, Entertainment & Food, Healthcare, Education
                    & things you ask for.
                </p>
                <div className="wrapper">
                    <div className="gallery">
                        <ul>
                            {images.map((image, index) => (
                                <li key={index}>
                                    <img src={`${process.env.REACT_APP_API_URL}${image.replace(/\\/g, '/')}`} alt={`Client ${index}`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <Footers />
        </div>
    );
}

export default Dashboard;
