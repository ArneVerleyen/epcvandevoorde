import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {Link} from 'react-router-dom';
import * as Routes from '../../routes';

import './offerteForm.scss';

const OfferteForm = () => {

    const form = useRef();
    const check = useRef();


    const [sent, setSent] = useState(false);
    const [privacyCheck, setPrivacyCheck] = useState(false);


    const sendEmail = (e) => {
      e.preventDefault();
  
      if (check.current.checked) {

        emailjs.sendForm('service_kan1got', 'template_ghzf0e5', form.current, '8EzDOtFdmDw7hVE5V')
        .then((result) => {
            console.log(result);
            if(result.status === 200) {
                setSent(true);
            };
        }, (error) => {
            console.log(error.text);
        });
      } else {
          setPrivacyCheck(true);
      }
    };

    return (
        <div className="offerte_form">
            <h3>
                Offerte
            </h3>
            <p>Hebt u vragen? Aarzel niet om contact op te nemen.</p>
            <a href="mailto:info@epcvandevoorde.be" className="mail">
                <p>
                    Mail: info@epcvandevoorde.be
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="49.657" height="37.243" viewBox="0 0 49.657 37.243">
                    <path id="envelope-solid-2" d="M48.716,76.3a.584.584,0,0,1,.941.456V96.588A4.657,4.657,0,0,1,45,101.243H4.655A4.657,4.657,0,0,1,0,96.588V76.763a.58.58,0,0,1,.941-.456C3.113,78,5.994,80.139,15.886,87.325c2.046,1.494,5.5,4.636,8.942,4.617,3.462.029,6.983-3.181,8.952-4.617C43.673,80.139,46.544,77.986,48.716,76.3ZM24.829,88.829c2.25.039,5.489-2.832,7.119-4.015,12.87-9.34,13.85-10.155,16.818-12.482a2.321,2.321,0,0,0,.892-1.833V68.655A4.657,4.657,0,0,0,45,64H4.655A4.657,4.657,0,0,0,0,68.655V70.5a2.335,2.335,0,0,0,.892,1.833C3.86,74.649,4.84,75.474,17.71,84.813c1.629,1.183,4.869,4.054,7.119,4.015Z" transform="translate(0 -64)" fill="#157784"/>
                </svg>
            </a>
            <a href="tel:0475428757" className="phone">
                <p>
                    Telefoon: 04 754 287 57
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="43.315" height="43.315" viewBox="0 0 43.315 43.315">
                    <path id="phone-solid" d="M41.731,2.071l-8.8-2.03a2.043,2.043,0,0,0-2.326,1.176l-4.061,9.475a2.025,2.025,0,0,0,.584,2.369l5.127,4.2A31.353,31.353,0,0,1,17.265,32.247l-4.2-5.127a2.028,2.028,0,0,0-2.369-.584L1.226,30.6A2.055,2.055,0,0,0,.041,32.933l2.03,8.8A2.03,2.03,0,0,0,4.051,43.3,39.249,39.249,0,0,0,43.3,4.051,2.028,2.028,0,0,0,41.731,2.071Z" transform="translate(0.01 0.011)" fill="#157784"/>
                </svg>
            </a>
            {!sent && 
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form_title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48.536" height="48.551" viewBox="0 0 48.536 48.551">
                            <path id="paper-plane-solid" d="M45.137.276,1.194,25.627a2.277,2.277,0,0,0,.209,4.1l10.078,4.228L38.719,9.946a.568.568,0,0,1,.815.787L16.7,38.559v7.632a2.275,2.275,0,0,0,4.029,1.5l6.02-7.329,11.813,4.949a2.282,2.282,0,0,0,3.129-1.725L48.513,2.627A2.276,2.276,0,0,0,45.137.276Z" transform="translate(-0.01 0.031)" fill="#157784"/>
                        </svg>
                        <h3>Stuur een mailtje</h3>
                    </div>
                    <div>
                        <label>Naam*</label>
                        <input required type="text" name="user_name" />
                    </div>
                    <div>
                        <label>Email*</label>
                        <input required type="email" name="user_email" />
                    </div>
                    <div>
                        <label>Straatnaam, nummer, bus*</label>
                        <input type="text" name="address" />
                    </div>
                    <div>
                        <label>Postcode & plaats*</label>
                        <input type="text" name="place" />
                    </div>
                    <div>
                        <label>Type woning*</label>
                        <select name="offerte_type">
                            <option>Appartement of studio tem. 75m²</option>    
                            <option>Appartement vanaf 76 m2 t.e.m. 100 m²</option>    
                            <option>Dakappartement</option>    
                            <option>Duplex of appartement {">"} 100 m²</option>    
                            <option>Rijwoning</option>    
                            <option>Open of halfopen bebouwing {"<"} 200 m²</option>    
                            <option>Woningen groter dan 200 m²</option>    
                            <option>Niet-residentiële gebouwen t.e.m. 100 m²</option>    
                            <option>Niet-residentiële gebouwen van 101 t.e.m. 250 m²</option>    
                            <option>Niet-residentiële gebouwen van 251 t.e.m. 500 m²</option>    
                            <option>Gemeenschappelijke Delen van een appartementsgebouw 2 t.e.m. 4</option>    
                            <option>Gemeenschappelijke Delen van een appartementsgebouw 4 t.e.m. 14</option>    
                            <option>Gemeenschappelijke Delen van een appartementsgebouw 15 en meer</option>    
                        </select>
                    </div>
                    <div>
                        <label>Boodschap*</label>
                        <textarea rows="5" name="message" />
                    </div>
                    <div className="privacy">
                        <input type="checkbox" ref={check} name="privacy-policy" />
                        <p>Ik ga akkoord met de <Link to={Routes.PRIVACY} className="privacy-link">privacy policy</Link>*</p>
                    </div>
                    {
                        privacyCheck &&
                        <div>
                            <p>Je moet akkoord gaan met de privacy policy.</p>
                        </div>
                    }
                    <input type="submit" value="Verstuur" />
                </form>
            }
            <p>Kleine onderneming onderworpen aan de vrijstellingsregeling van belasting. Btw niet toepasselijk</p>
            {
                sent && <h3 className="message_sent">Offerte aangevraagd.</h3>
            }
        </div>
    );
};

export default OfferteForm;