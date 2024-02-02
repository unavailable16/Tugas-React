import React from "react";

const NvDetail = (props) => {
  const { nvidia } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img src={nvidia.image} alt={nvidia.nama} className="rounded" />
          <section className="section-dark">
            <h2 className="strong">
              <strong>{nvidia.nama}</strong>
            </h2>
            <p>Compute Unit Count : {nvidia.cu}</p>
            <p>Core Boost Frequency : {nvidia.bf}</p>
            <p>Core Count : {nvidia.core}</p>
            <p>TMU Count : {nvidia.tu}</p>
            <p>Transistor Count : {nvidia.tc}</p>
            <p>VRAM "Video Ram": {nvidia.vr}</p>
            <p>Bus Width : {nvidia.bw}</p>
            <p>Bus Interface : {nvidia.pc}</p>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default NvDetail;
