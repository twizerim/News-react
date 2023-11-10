import React from "react";
import "../sass/_main.scss";
import Headers from "../component/Header";
import Footer from "../component/footer";
import Cards from "../component/card";


function Wellcome(){
    return (
        <div className="wellcome-container">
            <Headers/>
            <Cards/>
            <Footer/>
        </div> 
     )
}
export default Wellcome