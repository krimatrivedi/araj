// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './components/Dashboard';

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Dashboard />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

function App() {
    return (
      <Router>
        <div className="App">
            <Sidebar />
            <div className="content">
              <Routes>
                {/* <h1>Welcome to the Dashboard</h1> */}
                {/* Add other main content here */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/services" element={<Service />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
        </div>
      </Router>
    );
}

export default App;
