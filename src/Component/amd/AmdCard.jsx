import React from "react";
import { Link } from "react-router-dom";
import "../List.css";

const AmdCard = (props) => {
  const { amd, onEdit, onDelete } = props;

  const handleEditClick = (amdBeingEdited) => {
    onEdit(amdBeingEdited);
  };

  const handleDeleteClick = (amdBeingDeleted) => {
    onDelete(amdBeingDeleted);
  };

  return (
    <div className="card" id="pagecard">
      <img className="img" src={amd.image} alt={amd.nama} />
      <section className="section">
        <Link className="kard" to={"/amd/" + amd.id}>
          <h5 className="strong">
            <strong>{amd.nama}</strong>
          </h5>
          <p>Core Clock Speed: {amd.bf}</p>
          <p>Vram: {amd.vr}</p>
          <p>Bus Width: {amd.bw}</p>
        </Link>
        <button className="bordered primary" onClick={() => handleEditClick(amd)}>
          <span className="icon-edit"></span>
          Edit
        </button>
      </section>
    </div>
  );
};

export default AmdCard;
