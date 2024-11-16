// Filename - Footer.js

import React from "react";
import '../css/Footer.css';

import { Footer } from "flowbite-react";

const Footers = () => (
    <div className="footer_container">
        <Footer container>
        {/* <Footer.Copyright href="#" by="Flowbite™" year={2022} /> */}
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        {/* <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup> */}
        </Footer>
    </div>
);

export default Footers;
