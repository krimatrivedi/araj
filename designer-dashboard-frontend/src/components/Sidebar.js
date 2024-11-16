// src/Sidebar.js
import React, { useState } from 'react';
import '../css/Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isOpen ? '☰' : '☰'}
            </button>
            {isOpen && (
                <ul className="menu">
                    <li className="menu_item"><Link to ="/dashboard">Dashboard</Link></li>
                    <li className="menu_item"><Link to="/services">Services</Link></li>
                    <li className="menu_item"><Link to="/testimonial">Testimonials</Link></li>
                    <li className="menu_item"><Link to="/contact">Contact</Link></li>
                </ul>
            )}
        </div>
    );
}

export default Sidebar;
