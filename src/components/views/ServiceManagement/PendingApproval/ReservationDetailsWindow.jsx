import React, { useState, useEffect } from "react";
import "./ReservationDetailsWindow.css";
import { Link } from "react-router-dom";
import LeftSidebar from "../../../../components/common/LeftSidebar";
import RightSidebar from "../../../../components/common/RightSidebar";
import axios from 'axios';
import Switch from 'react-switch';
import { useNavigate } from 'react-router-dom'; 


const ReservationDetailsWindow = ({ reservationId }) => {

  const navigate = useNavigate();
  const [reservationDetails, setReservationDetails] = useState({
    reservationId: 5,
    customerName: "John Doe",
    motorbikeNumber: "MB 1234",
    serviceType: "Type A",
    phoneNumber: "123-456-7890",
    reservationDate: "2024-03-22",
    reservationTime: "10:00 AM",
  });

  useEffect(() => {
    // Fetch reservation details here
    // Retrieve reservationRequests from local storage
    const storedReservationRequests = localStorage.getItem(
      "reservationRequests"
    );
    if (storedReservationRequests) {
      const parsedReservationRequests = JSON.parse(storedReservationRequests);
      const foundReservation = parsedReservationRequests.find(
        (reservation) => reservation.reservationId === reservationId
      );
      if (foundReservation) {
        setReservationDetails(foundReservation);
      }
    }
  }, [reservationId]);


  //const [reservationId, setShopId] = useState('1');
  // false means "deactive", true means "active"
  const [approvedStatus, setApprovedStatus] = useState('');
  const [currentStatus, setCurrentStatus] = useState({ activeStatus: '', approvedStatus: '' });

  useEffect(() => {
      if (reservationId) {
         fetchUserStatus();
      }
  }, [reservationId]);

  
  useEffect(() => {
      if (reservationId && currentStatus.approvedStatus !== '') {
          axios.put(`http://localhost:8095/reservation/${reservationId}/approved-status`, null, {
              params: { approvedStatus }
          }).then(() => {
             // alert(`Approved status updated to ${approvedStatus}`);
          });
      }
  }, [approvedStatus]);

  const fetchUserStatus = async () => {
      const response = await axios.get(`http://localhost:8095/reservation/reservation/${reservationId}`);
      setCurrentStatus({
          approvedStatus: response.data.approvedStatus,
      });
      setApprovedStatus(response.data.approvedStatus);
  };

  const handleUpdateApprovedStatus = async (status) => {
    if (window.confirm(`Are you sure you want to ${status === 'approved' ? 'approved' : 'reject'} this Reservation?`)) {
        await axios.put(`http://localhost:8095/reservation/${reservationId}/approved-status`, null, {
            params: { approvedStatus: status },
        });
       // alert(`Approved status updated to ${status}`);
        fetchUserStatus(); // Refresh the status after update
        window.location.reload();
    }
};


  return (
    <div className="Reservation-details-management">
     

      <div className="Reservation-details-management-content">
        <h3>{reservationDetails.reservationId} Reservation Details</h3>

        <div className="Reservation-details-list">
          <div className="Reservation-details-item">
            <p>
              <strong>Reservation ID:</strong>
              <span>{reservationDetails.reservationId}</span>
            </p>
            <p>
              <strong>Customer Name:</strong>
              <span>{reservationDetails.customerName}</span>
            </p>
            <p>
              <strong>Phone Number:</strong>
              <span>{reservationDetails.customerPhoneNumber}</span>
            </p>
            {/* <p>
              <strong>Total Cost:</strong>
              <span>{reservationDetails.totalCost}</span>
            </p>
            <p>
              <strong>Payment Method:</strong>
              <span>{reservationDetails.paymentMethod}</span>
            </p> */}
            <p>
              <strong>Customer Address:</strong>
              <span>{reservationDetails.reservationAddress}</span>
            </p>
            <p>
              <strong>Service Type:</strong>
              <span>{reservationDetails.serviceType}</span>
            </p>
            <p>
              <strong>Motorbike Number:</strong>
              <span>{reservationDetails.motorbikeNumber}</span>
            </p>
            
            <p>
              <strong>reservation Date:</strong>
              <span>{reservationDetails.reservationDate}</span>
            </p>
            <p>
              <strong>reservation Time:</strong>
              <span>{reservationDetails.reservationTime}</span>
            </p>
            <p>
              <strong>Current reservation Status :</strong>
              <span>{reservationDetails.approvedStatus}</span>
            </p>
            
            <div>
                    <button onClick={() => handleUpdateApprovedStatus('approved')}>Accept</button>
                    <button onClick={() => handleUpdateApprovedStatus('rejected')}>Reject</button>
                </div>
          </div>

          <div>
                
            </div>
        </div>

          <div>
          
          <Link to={"/reservation-management"}>
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

export default ReservationDetailsWindow;
