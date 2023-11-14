import React from "react";
import "../sass/_main.scss";
import Headers from "../component/Header";
import Footer from "../component/footer";
import Cards from "../component/card";
import pict from "../assets/gedeon.jpg";
import president from "../assets/kagame.jpeg"
import uburezi from "../assets/uburezi.jpeg"
import amavubi from "../assets/amavubi.jpeg"


function Wellcome(){
    return (
        <div className="wellcome-container">
            <Headers/>
            <div className="card-containner">
                <Cards photo={pict} name="TWIZERIMAN Gedeon" 
                destinate="Gedeon arakangurira abantu bobse batuye inkambi no hanze yazo kuza kwiga cording kwiyandikisha ni ubuntu"/>
                <Cards photo={president} name="President : Poul Kagame" 
                destinate="Yatangaje ko azayobora indi manda ikurikiyeho kugirango akomeze gufasha abanyarwanda mu iterambere"/>
                <Cards photo={uburezi} name="Minister of education" 
                destinate="Minister yari mubiganiro nabanyeshuri ubwo yasuraga ikigo cya Fawe bungurana ibitekerezo kumyigire "/>
                <Cards photo={amavubi} name="Ikipe y'igihugu Amavubi"
                destinate="Umutoza w'ikipe yigihugu amavubi yahamagaye 25 bagomba kwitabira irushanwa"/>
                <Cards/>
                <Cards/>
            </div>
            <Footer/>
        </div> 
     )
}
export default Wellcome