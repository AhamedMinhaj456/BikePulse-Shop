import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../../../common/LeftSidebar";
import RightSidebar from "../../../common/RightSidebar";
import "./CompletedServices.css";
import axios from 'axios';
import CompletedServicesDetails from "./CompletedServicesDetails";
import Navbar from '../../../../components/navbar';
import Footer from '../../../../components/Footer';
import { useSelector } from "react-redux";

const CompletedServices = () => {
  const shopId = useSelector((state) => state.shops);
  const [reservationRequests, setReservationRequests] = useState([
    {
        reservationId: 1,
        customerName: "John Doe",
        motorbikeNumber: "MB1234",
        phoneNumber: "123-456-7890",
        reservationDate: "2024-05-01",
        reservationTime: "10:00 AM",
        approvedStatus: "approved",
        processStatus: "completed",
        paymentStatus: "pending"
      },
      {
        reservationId: 2,
        customerName: "Jane Smith",
        motorbikeNumber: "MB5678",
        phoneNumber: "234-567-8901",
        reservationDate: "2024-05-02",
        reservationTime: "11:00 AM",
        approvedStatus: "approved",
        processStatus: "completed",
        paymentStatus: "pending"
      },
      {
        reservationId: 3,
        customerName: "Michael Johnson",
        motorbikeNumber: "MB9101",
        phoneNumber: "345-678-9012",
        reservationDate: "2024-05-03",
        reservationTime: "12:00 PM",
        approvedStatus: "approved",
        processStatus: "completed",
        paymentStatus: "pending"
      },
      {
        reservationId: 4,
        customerName: "Emily Brown",
        motorbikeNumber: "MB1121",
        phoneNumber: "456-789-0123",
        reservationDate: "2024-05-04",
        reservationTime: "01:00 PM",
        approvedStatus: "approved",
        processStatus: "completed",
        paymentStatus: "pending"
      },
      {
        reservationId: 5,
        customerName: "David Lee",
        motorbikeNumber: "MB3141",
        phoneNumber: "567-890-1234",
        reservationDate: "2024-05-05",
        reservationTime: "02:00 PM",
        approvedStatus: "approved",
        processStatus: "completed",
        paymentStatus: "pending"
      }
  ]);
  const [selectedReservationId, setSelectedReservationId] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:8095/reservation/shop/${shopId}`);
      setReservationRequests(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const handleReservationClick = (reservationId) => {
    setSelectedReservationId(reservationId);
  };

  return (
    <div className="service-process-management1">
      <Navbar/>
    
    <div className="service-process-management">
      <LeftSidebar />

      <div className="service-process-management-content">
        <h2>
          <b>Completed Services</b>
        </h2>

      

        {reservationRequests.length === 0 ? (
          <p>No Completed reservations found.</p>
        ) : (
          <div className="service-process-reservation-list">
            {reservationRequests
              .map((reservation) => (
                <div key={reservation.reservationId} className="service-process-reservation-item">
                  <p>
                    <br />
                    <b>Customer Name:</b> {reservation.customerName}
                    <br />
                    <b>Reservation Date:</b> {reservation.reservationDate}
                    <br />
                    <b>Reservation Time:</b> {reservation.reservationTime}
                    <br />
                    <b>payment Status:</b> {reservation.paymentStatus}
                  </p>
                  <div>
                    <button
                      className="accept-btn"
                      onClick={() => handleReservationClick(reservation.reservationId)}
                    >
                      Check -{'>'} {reservation.reservationId}
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className="service-process-component-div">
          {/* Render ServiceProcessManagementDetails if a reservation is selected */}
          {selectedReservationId && (
            <CompletedServicesDetails reservationId={selectedReservationId} />
          )}
        </div>
      </div>

      <RightSidebar />
    </div>
    <Footer/>
    </div>
  );
};

export default CompletedServices;
