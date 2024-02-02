import React from "react";
import { Link } from "react-router-dom";
import "../List.css";

const IntelCard = (props) => {
  const { intel, onEdit, onDelete } = props;

  const handleEditClick = (intelBeingEdited) => {
    onEdit(intelBeingEdited);
  };

  const handleDeleteClick = (intelBeingDeleted) => {
    onDelete(intelBeingDeleted);
  };

  return (
    <div className="card" id="pagecard">
      <img className="img" src={intel.image} alt={intel.nama} />
      <section className="section">
        <Link  className="kard" to={"/intel/" + intel.id}>
          <h5 className="strong">
            <strong>{intel.nama}</strong>
          </h5>
          <p>Core Clock Speed: {intel.bf}</p>
          <p>Vram: {intel.vr}</p>
          <p>Bus Width: {intel.bw}</p>
        </Link>
        <button className="bordered primary" onClick={() => handleEditClick(intel)}>
          <span className="icon-edit"></span>
          Edit
        </button>
        
      </section>
    </div>
  );
};

export default IntelCard;
