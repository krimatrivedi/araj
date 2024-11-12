import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Contact.css';

function Contact() {
    const [contacts, setContacts] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/contacts/')
    //         .then(response => setContacts(response.data))
    //         .catch(error => console.log(error));
    // }, []);

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
            </div>

            {/* Bottom section with pink background */}
            <div className="pink-bottom">
                {/* You can add content or leave it as a solid pink background */}
            </div>
        </div>
    );

}

export default Contact;
