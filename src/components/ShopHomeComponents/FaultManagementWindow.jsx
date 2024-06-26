import React, { useState } from 'react';
import './FaultManagementWindow.css'; 
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const FaultManagementWindow = () => {
  const [faults, setFaults] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      name: `Fault ${index + 1}`,
      option1: '',
      option2: '',
      option3: '',
    }))
  );

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (id, field, value) => {
    setFaults((prevFaults) =>
      prevFaults.map((fault) => (fault.id === id ? { ...fault, [field]: value } : fault))
    );
  };

  const handleSave = () => {
    setEditMode(false);
    alert('Faults saved!');
  };

  return (
    <div className="fault-management">
      <LeftSidebar />
     {/*

      <div className="fault-management-content">
        <h2>Fault Category Management</h2>
        {faults.map((fault) => (
          <div key={fault.id} className="fault-item">
            <form className="fault-form">
              <label>{`Fault ${fault.id}:`}</label>
              <input
                type="text"
                value={fault.name}
                onChange={(e) => handleInputChange(fault.id, 'name', e.target.value)}
                readOnly={!editMode}
              />
              <br />
              <label>Option 1:</label>
              <input
                type="text"
                value={fault.option1}
                onChange={(e) => handleInputChange(fault.id, 'option1', e.target.value)}
                readOnly={!editMode}
              />
              <br />
              <label>Option 2:</label>
              <input
                type="text"
                value={fault.option2}
                onChange={(e) => handleInputChange(fault.id, 'option2', e.target.value)}
                readOnly={!editMode}
              />
              <br />
              <label>Option 3:</label>
              <input
                type="text"
                value={fault.option3}
                onChange={(e) => handleInputChange(fault.id, 'option3', e.target.value)}
                readOnly={!editMode}
              />
            </form>
          </div>
        ))}
        <div className="fault-management-buttons">
          <button
            className={`edit-button ${editMode ? 'active' : ''}`}
            onClick={() => setEditMode(!editMode)}
          >
            Edit
          </button>
          <button className="save-button" onClick={handleSave} disabled={!editMode}>
            Save
          </button>
        </div>
      </div>
        */}

      <RightSidebar />
    </div>
  );
};

export default FaultManagementWindow;
