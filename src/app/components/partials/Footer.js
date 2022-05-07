import React from "react";
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="contact">
                <div className="contact_info">
                    <h5>Contact:</h5>
                    <a href="tel:0475428757">0475/42.87.57</a>
                    <a href="mailto:info@epcvandevoorde.be" >info@epcvandevoorde.be</a>
                </div>
                <Link to={Routes.CONTACT} className="contact_button">
                    Contacteer ons
                </Link>
            </div>
            <div className="offerte">
                Vraag een <Link to={Routes.OFFERTE}>offerte</Link> aan.
            </div>
        </div>
    );
};

export default Footer;