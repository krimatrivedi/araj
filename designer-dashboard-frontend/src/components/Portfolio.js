import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Portfolio() {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        axios.get('/api/portfolio/')
            .then((response) => setPortfolio(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h2>Portfolio</h2>
            <ul>
                {portfolio.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Portfolio;
