import React from 'react';
import '../css/Contact.css';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
    const whatsappNumber = '+919316430528';
    const email = 'studio.araj@gmail.com';
    const instagramHandle = 'studio_araj';

    return (
        <div className='main_container'>
            <div className='content_div'>
                <p className='highlight_main'>
                    It's about <span className="highlight">You</span> & <span className="highlight">We</span>
                </p>
                <p className='description_one'>A company should know its mission, audience & goals. Not only do we help you discover
                    these essential elements, we connect them all through functional & cohesive design.
                    Our job is to help you fully understand your company's personality in order to build the
                    strongest brand.</p>
                <p className='description_one'>The solutions we build go beyond simple design, as they reflect your story & your sincere
                    commitment.
                </p>
                <p className='description_one'>Is your company ready to share the story?
                </p>

                {/* Social Links Section */}
                <div className='contact-links'>
                    {/* WhatsApp Link */}
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='contact-icon whatsapp'
                    >
                        <FaWhatsapp /> WhatsApp
                    </a>
                    {/* Call Link */}
                    <a
                        href={`tel:${whatsappNumber}`}
                        className='contact-icon phone'
                    >
                        <FaPhoneAlt /> Call
                    </a>

                    {/* Email Link */}
                    <a
                        href={`mailto:${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='contact-icon email'
                    >
                        <FaEnvelope /> Email
                    </a>

                    {/* Instagram Link */}
                    <a
                        href={`https://instagram.com/${instagramHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='contact-icon instagram'
                    >
                        <FaInstagram /> Instagram
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Contact;
