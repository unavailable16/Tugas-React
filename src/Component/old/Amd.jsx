import React from "react";
import { GpuAmd } from './Data';
import "./List.css";

const Amd = () => {
    return(
        <div>
        <h1>AMD Radeon Gpu's</h1>
        <ul className="ul">
            {GpuAmd.map(item =>(
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

export default Amd