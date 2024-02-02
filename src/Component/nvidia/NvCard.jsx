import React from "react";
import { Link } from "react-router-dom";
import "../List.css";

const NvCard = (props) => {
  const { nvidia, onEdit, onDelete } = props;

  const handleEditClick = (nvidiaBeingEdited) => {
    onEdit(nvidiaBeingEdited);
  };

  const handleDeleteClick = (nvidiaBeingDeleted) => {
    onDelete(nvidiaBeingDeleted);
  };

  return (
    <div className="card" id="pagecard">
      <img className="img" src={nvidia.image} alt={nvidia.nama} />
      <section className="section">
        <Link  className="kard" to={"/nvd/" + nvidia.id}>
          <h5 className="strong">
            <strong>{nvidia.nama}</strong>
          </h5>
          <p>Core Clock Speed: {nvidia.bf}</p>
          <p>Vram: {nvidia.vr}</p>
          <p>Bus Width: {nvidia.bw}</p>
        </Link>
        <button className="bordered primary" onClick={() => handleEditClick(nvidia)}>
          <span className="icon-edit "></span>
          Edit
        </button>
        
      </section>
    </div>
  );
};

export default NvCard;
