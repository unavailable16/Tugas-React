import React, { useState } from "react";
import IntelCard from "./IntelCard";
import IntelForm from "./IntelForm";

const IntelList = ({ Gpuintel, onSave }) => {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (intel) => {
    setProjectBeingEdited(intel);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      {Gpuintel.map((intel) => (
        <div key={intel.id} className="col-row">
          {intel === projectBeingEdited ? (
            <IntelForm onSave={onSave} onCancel={cancelEditing} intel={intel} />
          ) : (
            <IntelCard intel={intel} onEdit={handleEdit} />
          )}
        </div>
      ))}
    </div>
  );
};

export default IntelList;
