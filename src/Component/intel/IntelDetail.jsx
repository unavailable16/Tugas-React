import React from "react";

const IntelDetail = (props) => {
  const { intel } = props;

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img src={intel.image} alt={intel.nama} className="rounded" />
          <section className="section-dark">
            <h2 className="strong">
              <strong>{intel.nama}</strong>
            </h2>
            <p>Compute Unit Count : {intel.cu}</p>
            <p>Core Boost Frequency : {intel.bf}</p>
            <p>Core Count : {intel.core}</p>
            <p>TMU Count : {intel.tu}</p>
            <p>Transistor Count : {intel.tc}</p>
            <p>VRAM "Video Ram": {intel.vr}</p>
            <p>Bus Width : {intel.bw}</p>
            <p>Bus Interface : {intel.pc}</p>
            
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntelDetail;
