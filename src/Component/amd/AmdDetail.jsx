import React from "react";

const AmdDetail = (props) => {
  const { amd } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img src={amd.image} alt={amd.nama} className="rounded" />
          <section className="section-dark">
          <h2 className="strong">
              <strong>{amd.nama}</strong>
            </h2>
            <p>Compute Unit Count : {amd.cu}</p>
            <p>Core Boost Frequency : {amd.bf}</p>
            <p>Core Count : {amd.core}</p>
            <p>TMU Count : {amd.tu}</p>
            <p>Transistor Count : {amd.tc}</p>
            <p>VRAM "Video Ram": {amd.vr}</p>
            <p>Bus Width : {amd.bw}</p>
            <p>Bus Interface : {amd.pc}</p>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default AmdDetail;
