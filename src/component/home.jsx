import React from "react"
import {Carousel} from "antd"
import Buttom from "./button"
import abany from "../assets/imag.jpeg"
import uburanga from "../assets/radio.jpeg"
import fawe from "../assets/Amakuru.webp"
function Home(){
    return (
        <div className="home-container">
            
            <Carousel autoPlay={true} infinite={true} autoPlaySpeed={3000} >
                <div className="scolwImage">
                    <img src={abany} alt="nayizana" />
                    <p>ftfyuikhfvjgtdjrdxjgvlkuhuhygfydtrsytfuhijoijnihbu</p>
                    <div className="btn">
                        <Buttom name="Read more!!"/>
                    </div>
                </div>
                <div className="scolImage">
                    <img src={uburanga} alt="ntaribi" />
                    <p>ftfyuikhfvjgtdjrdxjgvlkuhuhygfydtrsytfuhijoijnihbu</p>
                    <div className="btn">
                        <Buttom name="Read more!!"/>
                    </div>
                </div>
                <div className="scoImage">
                    <img src={fawe} alt="ok thanks" />
                    <p>ftfyuikhfvjgtdjrdxjgvlkuhuhygfydtrsytfuhijoijnihbu</p>
                    <div className="btn">
                        <Buttom name="Read more!!"/>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
export default Home