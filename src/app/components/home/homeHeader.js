import React from "react";
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

import './homeHeader.scss';

const HomeHeader = () => {

    const toggleMenu = () => {
        const homeHeader = document.querySelector('.home_header');
        homeHeader.classList.toggle('open');
    };

    return (
        <div className="home_header">
            <div className='navigation_home'>
                <div className='site_title'>
                    <Link to={Routes.HOME} className='site_logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.146 100.549">
                        <g id="Group_36" data-name="Group 36" transform="translate(-100.5 -33.225)">
                            <path id="Subtraction_4" data-name="Subtraction 4" d="M46.823,100.549H8.7V39.628H0L17.709,24.64V4.732h10.5V15.749L46.823,0V100.549Z" transform="translate(100.5 33.225)" fill="#138992"/>
                            <g id="Union_36" data-name="Union 36" transform="translate(147.323 33.225)" fill="#1c9d44">
                            <path d="M 8.20888614654541 10.00514316558838 L 0.4999962449073792 10.00514316558838 L 0.4999962449073792 0.5000035166740417 L 8.208891868591309 0.5000035166740417 L 13.3687858581543 5.252452850341797 L 8.20888614654541 10.00514316558838 Z" stroke="none"/>
                            <path d="M 0.9999961853027344 1.000003814697266 L 0.9999961853027344 9.505143165588379 L 7.40406608581543 9.505143165588379 L 7.40406608581543 1.000003814697266 L 0.9999961853027344 1.000003814697266 M 9.40406608581543 2.280564308166504 L 9.40406608581543 8.224508285522461 L 12.63075542449951 5.252462387084961 L 9.40406608581543 2.280564308166504 M -3.814697265625e-06 3.814697265625e-06 L 8.40406608581543 3.814697265625e-06 L 8.40406608581543 10.50514316558838 L -3.814697265625e-06 10.50514316558838 L -3.814697265625e-06 3.814697265625e-06 Z M 8.40406608581543 3.814697265625e-06 L 14.10681629180908 5.252443313598633 L 8.40406608581543 10.50514316558838 L 8.40406608581543 3.814697265625e-06 Z" stroke="none" fill="#1c9d44"/>
                            </g>
                            <path id="Union_37" data-name="Union 37" d="M14.107,0l5.7,5.252-5.7,5.253ZM0,10.505V0H14.107V10.505Z" transform="translate(147.323 48.233)" fill="#669d1c"/>
                            <path id="Union_38" data-name="Union 38" d="M19.81,0l5.7,5.252-5.7,5.253ZM0,10.505V0H19.81V10.505Z" transform="translate(147.323 63.24)" fill="#b0c12d"/>
                            <path id="Union_39" data-name="Union 39" d="M25.512,0l5.7,5.252-5.7,5.253ZM0,10.505V0H25.512V10.505Z" transform="translate(147.323 78.247)" fill="#eded00"/>
                            <path id="Union_40" data-name="Union 40" d="M31.215,0l5.7,5.252-5.7,5.253ZM0,10.505V0H31.215V10.505Z" transform="translate(147.323 93.255)" fill="#ffc400"/>
                            <g id="Group_5" data-name="Group 5">
                            <rect id="Rectangle_39" data-name="Rectangle 39" width="36.918" height="10.505" transform="translate(147.323 108.262)" fill="#ff8002"/>
                            <path id="Polygon_25" data-name="Polygon 25" d="M5.253,0l5.253,5.7H0Z" transform="translate(189.944 108.262) rotate(90)" fill="#ff8002"/>
                            <path id="Polygon_26" data-name="Polygon 26" d="M5.253,0l5.253,5.7H0Z" transform="translate(195.646 123.27) rotate(90)" fill="#ff1010"/>
                            <rect id="Rectangle_40" data-name="Rectangle 40" width="42.621" height="10.505" transform="translate(147.323 123.269)" fill="#ff1010"/>
                            </g>
                        </g>
                        </svg>
                    </Link>
                    <h1>EPC Vande Voorde</h1>
                    <div className='hamburger_home' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="34" viewBox="0 0 56 34">
                        <g id="Group_39" data-name="Group 39" transform="translate(-591 974.949)">
                            <rect id="Rectangle_63" data-name="Rectangle 63" width="56" height="6" rx="3" transform="translate(591 -974.949)" fill="#138992"/>
                            <rect id="Rectangle_64" data-name="Rectangle 64" width="37" height="6" rx="3" transform="translate(591 -946.949)" fill="#138992"/>
                            <rect id="Rectangle_66" data-name="Rectangle 66" width="44" height="6" rx="3" transform="translate(591 -960.949)" fill="#138992"/>
                        </g>
                        </svg>
                    </div>
                    <div className='close' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35.355" height="35.355" viewBox="0 0 35.355 35.355">
                        <g id="Group_42" data-name="Group 42" transform="translate(-525.322 931.678)">
                            <rect id="Rectangle_66" data-name="Rectangle 66" width="44" height="6" rx="3" transform="translate(525.322 -900.565) rotate(-45)" fill="#fff"/>
                            <rect id="Rectangle_69" data-name="Rectangle 69" width="44" height="6" rx="3" transform="translate(529.565 -931.678) rotate(45)" fill="#fff"/>
                        </g>
                        </svg>
                    </div>
                </div>
                <div className="hamburger_home_small" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="32" viewBox="0 0 44 32">
                    <g id="Group_40" data-name="Group 40" transform="translate(-592 929)">
                        <rect id="Rectangle_66" data-name="Rectangle 66" width="44" height="6" rx="3" transform="translate(592 -916)" fill="#138992"/>
                        <rect id="Rectangle_67" data-name="Rectangle 67" width="44" height="6" rx="3" transform="translate(592 -903)" fill="#138992"/>
                        <rect id="Rectangle_68" data-name="Rectangle 68" width="44" height="6" rx="3" transform="translate(592 -929)" fill="#138992"/>
                    </g>
                    </svg>
                </div>

                <div className="close_home_small" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35.355" height="35.355" viewBox="0 0 35.355 35.355">
                        <g id="Group_41" data-name="Group 41" transform="translate(-525.322 931.678)">
                            <rect id="Rectangle_66" data-name="Rectangle 66" width="44" height="6" rx="3" transform="translate(525.322 -900.565) rotate(-45)" fill="#138992"/>
                            <rect id="Rectangle_69" data-name="Rectangle 69" width="44" height="6" rx="3" transform="translate(529.565 -931.678) rotate(45)" fill="#138992"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="home_header_text">
                <div className="home_header_text_left" >
                    <h2>EPC certificaten laten opmaken? Wij kunnen je helpen.</h2>
                    <h3>Vraag nu een <Link to={Routes.OFFERTE} >offerte</Link> aan.</h3>
                </div>

                <div className="home_header_text_right">
                    <Link to={Routes.HOME}>Home</Link>
                    <Link to={Routes.OFFERTE}>Offerte</Link>
                    <Link className="last" to={Routes.CONTACT}>Contact</Link>
                </div>

                {/* <div className="header_image_small">
                    <img src={header} alt="home image small" />
                </div> */}
            </div>
            <div className='banner'>
                <h4>Heb je nog een vraag?</h4>
                <Link to={Routes.CONTACT} >Contacteer ons</Link>
            </div>
        </div>
    );
};

export default HomeHeader;
