import React from "react";
import { GpuIntel } from './Data';
import "./List.css";

const Intel = () => {
    return(
        <div>
            <h1>Intel ARC Gpu's</h1>
            <ul className="ul">
                {GpuIntel.map(item =>(
                    <li className="li">
                        <p>{item.nama}</p>
                        <img src={item.image} alt="" />
                        <p>Compute unit: {item.cu}</p>
                        <p>Boost Frequency: {item.bf}</p>
                        <p>Core Count: {item.core}</p>
                        <p>Tmu: {item.tu}</p>
                        <p>Transistor Count: {item.tc}</p>
                        <p>Vram: {item.vr}</p>
                        <p>Bandwith: {item.bw}</p>
                        <p>PCIe Interfaces: {item.pc}</p>
                    </li>
                ))}
            </ul>
    </div>
    )
}

export default Intel