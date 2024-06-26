import React, { useState } from "react";
import "./PartsCategoryManagementWindow.css";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const PartsCategoryManagementWindow = () => {
  const [partsList, setPartsList] = useState([
    {
      id: 1,
      name: "Part 1",
      brand: "Brand 01",
      price: "100",
      description: "Description of Part 1",
    },
    {
      id: 2,
      name: "Part 2",
      brand: "Brand 02",
      price: "150",
      description: "Description of Part 2",
    },
    {
      id: 3,
      name: "Part 3",
      brand: "Brand 03",
      price: "200",
      description: "Description of Part 3",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPart, setSelectedPart] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // Find the selected part from the partsList
      const part = partsList.find(
        (part) => part.name.toLowerCase() === searchQuery.toLowerCase()
      );
      if (part) {
        setSelectedPart(part);
      }
    }
  };

  const handleInsertButtonClick = () => {
    setShowPopover(!showPopover); // Toggle the state
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSaveButtonClick = () => {
    // Create a new part object with the entered details
    const newPart = {
      id: partsList.length + 1, // Generate a unique ID
      name: document.getElementById("partName").value,
      brand: document.getElementById("partBrand").value,
      price: document.getElementById("partPrice").value,
      description: document.getElementById("partDescription").value,
    };

    // Update the parts list state by adding the new part
    setPartsList([...partsList, newPart]);

    // Close the popover
    setShowPopover(false);

    // Reset the selected file
    setSelectedFile(null);
  };

  return (
    <div className="parts-Category-main1">
      <Navbar/>
    <div className="parts-Category-main">
      <LeftSidebar />
      <div className="parts-category-management">
        <h2>Parts Category Management</h2>

        <div className="parts-category-management-content">
          <div className="search-wrapper">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              placeholder="Search parts..."
            />
            {selectedPart && (
              <div className="category-1">
                <h3>
                  <b>{selectedPart.name}</b>
                </h3>
                <div className="group-1">
                  <p className="text-1">
                    <strong>Brand:</strong> {selectedPart.brand}
                  </p>
                </div>
                <div className="group-1">
                  <p className="text-1">
                    <strong>Price:</strong> {selectedPart.price}
                  </p>
                </div>
                <div className="group-1">
                  <p className="text-1">
                    <strong>Description:</strong> {selectedPart.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          <button className="insert-button" onClick={handleInsertButtonClick}>
            Insert
          </button>

          <br />
          <br />

          {showPopover && (
            <div className="popover">
              <div className="popover-content">
                <div className="popover-header-container">
                  <div className="popover-header">Item Details</div>
                </div>
                <div className="popover-body">
                  <input type="text" id="partName" placeholder="Name" />
                  <input type="text" id="partBrand" placeholder="Brand" />
                  <input type="text" id="partPrice" placeholder="Price" />
                  <input
                    type="text"
                    id="partDescription"
                    placeholder="Description"
                  />
                  <div className="upload-wrapper">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                    {selectedFile && (
                      <div>
                        <p>Selected Image:</p>
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected"
                        />
                      </div>
                    )}
                  </div>
                  <button
                    className="popover-button"
                    onClick={handleSaveButtonClick}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <RightSidebar />
    </div>
    <Footer/>
    </div>
  );
};

export default PartsCategoryManagementWindow;
