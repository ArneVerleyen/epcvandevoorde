import React from "react";

import residentieel from '../../_static/icon/residentieel.svg';
import niet_residentieel from '../../_static/icon/niet_residentieel.svg';
import gemeenschappelijk from '../../_static/icon/gemeenschappelijke_delen.svg';


import './homeContent.scss';

const HomeContent = () => {

    return (
        <div className="home_content">
            <div className="residentiele" >
                <img src={residentieel} alt="residentiële gebouwen" />
                <div className="text">
                    <h4>
                        EPC residentiële gebouwen
                    </h4>
                    <p>
                        Wenst u een woning, appartement of studio te verhuren of te verkopen? Dan heeft u een energieprestatiecertificaat nodig. Sinds 2009 is het energieprestatiecertificaat bij verkoop of verhuur van residentiële woningen verplicht. Deze certificaten blijven 10 jaar geldig.
                        Opgelet! Vanaf 1 januari 2022 is er bij verkoop van woningen een EPC nodig dat is opgemaakt vanaf 1 januari 2019. Dit geldt voor alle notariële akten die vanaf 2022 verleden worden, ook indien de compromis werd getekend in 2021 met een EPC van voor 2019!
                    </p>
                </div>
            </div>
            <div className="niet_residentiele" >
                <div className="text">
                    <h4>
                        EPC niet-residentiële gebouwen
                    </h4>
                    <p>
                        Bij verkoop of verhuur van een kantoor, handelsruimte, horecazaak, winkel, praktijkruimte, B&B en andere niet-residentiële bestemmingen met een (bruto) bruikbare vloeroppervlakte t.e.m. 500 m² moet er sinds 2020 ook een energieprestatiecertificaat aanwezig zijn. Deze certificaten blijven 10 jaar geldig.
                    </p>
                </div>
                <img src={niet_residentieel} alt="niet residentiële gebouwen" />
            </div>
            <div className="gemeenschappelijke" alt="gemeenschappelijke delen" >
                <img src={gemeenschappelijk} alt="Foto gemeenschappelijke delen" />
                <div className="text">
                    <h4>
                        EPC gemeenschappelijke delen
                    </h4>
                    <p>
                        Vanaf 2022 moet er voor gebouwen met 15 of meer appartementen een energieprestatiecertificaat voor de gemeenschappelijke delen bestaan. Ongeacht of er een verkoop of verhuur plaatsvindt. Vanaf 2023 geldt deze verplichting ook voor gebouwen met 5 tot 14 appartementen en vanaf 2024 geldt het EPC voor gemeenschappelijke delen voor alle appartementsgebouwen. Ook deze certificaten blijven 10 jaar geldig.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;