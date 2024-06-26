import React, { useState, useEffect } from "react";
import "./CompletedServicesDetails.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CompletedServicesDetails = ({ reservationId }) => {
  const navigate = useNavigate();

  const [reservationDetails, setReservationDetails] = useState({
    reservationId: 0,
    customerName: "",
    motorbikeNumber: "",
    serviceType: "",
    phoneNumber: "",
    reservationDate: "",
    reservationTime: "",
    processStatus: ""
  });

  const [processStatus, setProcessStatus] = useState("");
  const processStatusOptions = [
    "pending",
    "on_hold",
    "in_progress",
    "completed",
    "cancelled",
    "delayed"
  ];

  useEffect(() => {
    if (reservationId) {
      fetchReservationDetails();
    }
  }, [reservationId]);

  
  const fetchReservationDetails = async () => {
    const response = await axios.get(
      `http://localhost:8095/reservation/reservation/${reservationId}`
    );
    setReservationDetails(response.data);
    console.log(response.data);
  };

  const handleProcessStatusChange = (status) => {
    if (
      window.confirm(
        `Are you sure you want to change the process status to ${status.toUpperCase()}?`
      )
    ) {
      setProcessStatus(status);
    }
  };

  return (
    <div className="service-process-details-management1">
      <div className="service-process-details-management-content">
        <div className="service-process-details-heading">
          <h3>
            {reservationDetails.reservationId} Completed Service Details
          </h3>
        </div>
        
        <div className="service-process-details-list">
          <div className="service-process-details-item">
            <p>
              <strong>Reservation ID:</strong>
              <span>{reservationDetails.reservationId}</span>
            </p>
            <p>
              <strong>Customer Name:</strong>
              <span>{reservationDetails.customerName}</span>
            </p>
            <p>
              <strong>Motorbike Number:</strong>
              <span>{reservationDetails.motorbikeNumber}</span>
            </p>
            <p>
              <strong>Service Type:</strong>
              <span>{reservationDetails.serviceType}</span>
            </p>
            <p>
              <strong>Phone Number:</strong>
              <span>{reservationDetails.phoneNumber}</span>
            </p>
            <p>
              <strong>Reservation Date:</strong>
              <span>{reservationDetails.reservationDate}</span>
            </p>
            <p>
              <strong>Reservation Time:</strong>
              <span>{reservationDetails.reservationTime}</span>
            </p>
            <p>
              <strong>Payment Status:</strong>
              <span>{reservationDetails.paymentStatus}</span>
            </p>
            
          </div>
        </div>
        <div>
          <Link to={"/CompletedServices"}>
            <button
              className="back-button"
              onClick={() => window.location.reload()}
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompletedServicesDetails;
