import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";


export function Main(){
   
    return(
        <div>
            <div className="mainKonten">
                 
                <h1>List Of Cpu & Gpu Specs</h1>
                <h4>AMD GPU's, NVIDIA GPU's, and Intel GPU's </h4>
                <h5><a href="https://youtube.com/c/AHDHAN16Bruh">THE COMPLETE LIST HERE</a></h5>
            </div>
            <div className="subKonten">
                
                <div className="card1">
                    <h1>NVIDIA GEFORCE GPU</h1>
                    <p>G Series, GT Series, GTX Series, RTX Series</p>
                    <Link className="butto" to="nvd">See More</Link>
                </div>
                <div className="card1">
                    <h1>AMD RADEON GPU</h1>
                    <p>Radeon HD, Radeon Rx, Radeon Vega</p>
                    <Link className="butto" to="amd">See More</Link>
                </div>
                <div className="card1">
                    <h1>INTEL ARC GPU</h1>
                    <p>Intel New Arc Series GPU</p>
                    <Link className="butto" to="intel">See More</Link>
                </div>
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,64L60,90.7C120,117,240,171,360,186.7C480,203,600,181,720,181.3C840,181,960,203,1080,192C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    )
}

export default Main