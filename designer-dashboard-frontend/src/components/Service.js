// src/Services.js
import '../css/Services.css';
import React, { useEffect, useRef } from 'react';

function Services() {
    const hrRefs = useRef([]);

    useEffect(() => {
        hrRefs.current.forEach((hr, index) => {
        const relatedTitle = hr.previousElementSibling;
        if (relatedTitle) {
        var titleLength = relatedTitle.textContent.length
            // Set the width of the <hr> based on the <p> text width
            hr.style.width = `${titleLength * 20}px`; // Adjust "+20px" as needed
        }
        });
    }, []);

    const addToRefs = (el) => {
        if (el && !hrRefs.current.includes(el)) {
        hrRefs.current.push(el);
        }
    };

    return (
        <div className="service-container">
            <p className='service_title heading'>BRANDING</p>
            <hr class="new1" ref={addToRefs}></hr>
            <p className='service_description'>Logo Design | Visiting Card | Letterhead | Envelope | Company Profile
            Brochure | ID Card | Presentation Slide | Corporate Gifting</p>
            <p className='service_title'>PRODUCT PACKAGING</p>
            <hr class="new1" ref={addToRefs}></hr>
            <p className='service_description'>Box Packaging | Label / Sticker | Bottle Packaging | Tags | Tube Packaging
            Foil Packaging | Sachet Packaging | Tape | Gift Wrap | Paper Bag</p>
            <p className='service_title'>STATIONARY</p>
            <hr class="new1" ref={addToRefs}></hr>
            <p className='service_description'>Diary | Calendar | To-do Lists | Note-pads | Planner | Bookmarks</p>
            <p className='service_title'>EVENT & EXHIBITION</p>
            <hr class="new1" ref={addToRefs}></hr>
            <p className='service_description'>Stall Flex / Banner | Standee Design | Sign-board | Hoarding</p>
            <p className='service_title'>OTHERS</p>
            <hr class="new1" ref={addToRefs}></hr>
            <p className='service_description'>Greeting Card | Poster | Flyer | Book Cover | Menu Card | Magazine
            Photo-Album</p>
            <p className='service_title'>DIGITAL SERVICES</p>
            <hr class="new1" ref={addToRefs}></hr>
            <p className='service_description'>Website Development | Web Banner | Content Writing
            Newsletter | Birthday Mailer | Festival Mailer</p>
            <p className='service_title'>SOCIAL MEDIA</p>
            <hr class="new1" ref={addToRefs}></hr>
            <p className='service_description'>Festival Post | Post For All Social Media Platforms | Cover Photo
            WhatsApp Status | Instagram Story | Youtube Thumbnail</p>
            <p className='service_title'>MOTION GRAPHICS</p>
            <hr class="new1" ref={addToRefs}></hr>
            <p className='service_description'>Corporate Video | Advertisement | Motion Reel | Animated Infographic</p>
            <p className='service_title'>PHOTOGRAPHY</p>
            <hr class="new1" ref={addToRefs}></hr>
            <p className='service_description'>Product Photography | Product Videography | Drone Shoot</p>
            <p className='service_title'>WEDDING ESSENTIALS</p>
            <hr class="new1" ref={addToRefs}></hr>
            <p className='service_description'>Bride-groom Name Logo | Invitation Card | Save The Date Card
            Thank You Card | Brides-maid / Groomsmen Card | Welcome Board
            Gift Tag | Gift Hamper | Envelope (Favor) | Other Printables</p>
        </div>
    );
}

export default Services;
