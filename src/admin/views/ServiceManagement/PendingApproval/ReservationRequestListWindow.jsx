import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "../../../common/LeftSidebar";
import RightSidebar from "../../../common/RightSidebar";
import "./ReservationRequestListWindow.css";
import ReservationDetailsWindow from "./ReservationDetailsWindow";
import axios from "axios";
import Navbar from "../../../../components/navbar";
import Footer from "../../../../components/Footer";
import { useSelector } from "react-redux";

const ReservationRequestListWindow = () => {
  const shopId = useSelector((state) => state.shops);
  const [reservationRequests, setReservationRequests] = useState([
    [
      {
        reservationId: 1,
        customerName: "John Doe",
        motorbikeNumber: "MB1234",
        phoneNumber: "123-456-7890",
        reservationDate: "2024-05-01",
        reservationTime: "10:00 AM",
        approvedStatus: "pending"
      },
      {
        reservationId: 2,
        customerName: "Jane Smith",
        motorbikeNumber: "MB5678",
        phoneNumber: "234-567-8901",
        reservationDate: "2024-05-02",
        reservationTime: "11:00 AM",
        approvedStatus: "pending"
      },
      {
        reservationId: 3,
        customerName: "Michael Johnson",
        motorbikeNumber: "MB9101",
        phoneNumber: "345-678-9012",
        reservationDate: "2024-05-03",
        reservationTime: "12:00 PM",
        approvedStatus: "pending"
      },
      {
        reservationId: 4,
        customerName: "Emily Brown",
        motorbikeNumber: "MB1121",
        phoneNumber: "456-789-0123",
        reservationDate: "2024-05-04",
        reservationTime: "01:00 PM",
        approvedStatus: "pending"
      },
      {
        reservationId: 5,
        customerName: "David Lee",
        motorbikeNumber: "MB3141",
        phoneNumber: "567-890-1234",
        reservationDate: "2024-05-05",
        reservationTime: "02:00 PM",
        approvedStatus: "pending"
      }
    ]
  ]);

  // const [acceptedReservations, setAcceptedReservations] = useState([]);

  // // useEffect to upreservationDate local storage when acceptedReservations changes
  // useEffect(() => {
  //   localStorage.setItem(
  //     "acceptedReservations",
  //     JSON.stringify(acceptedReservations)
  //   );
  //   localStorage.setItem(
  //     "reservationRequests",
  //     JSON.stringify(reservationRequests)
  //   );
  // }, [acceptedReservations]);

  useEffect(() => {
    // Simulating fetching shop data (replace with actual API call)
    const fetchData = async () => {
      // Replace the following line with your actual API call or data fetching logic
      const data = await fetch(
        `http://localhost:8095/reservation/shop/${shopId}`
      ).then((response) => response.json());
      setReservationRequests(data);
    };
    console.log(reservationRequests);

    fetchData();
  }, []);

  const [selectedReservationId, setSelectedReservationId] = useState(null);

  const handleReservationClick = (reservationId) => {
    setSelectedReservationId(reservationId);
    localStorage.setItem(
      "reservationRequests",
      JSON.stringify(reservationRequests)
    );
    <Link to={"/Reservation-details-management"}></Link>;
  };

  return (
    <div className="reservation-management1">
      <Navbar />
      <div className="reservation-management">
        <LeftSidebar />

        <div className="reservation-management-content">
          <h2>
            <b>Reservation Request List</b>
          </h2>

          {reservationRequests.length === 0 ? (
            <p>No pending reservations found.</p>
          ) : (
            <div className="reservation-list">
              {reservationRequests
                .filter(
                  (reservation) => reservation.approvedStatus === "pending"
                )
                .map((reservation) => (
                  <div
                    key={reservation.reservationId}
                    className="reservation-item"
                  >
                    <p>
                      <br />
                      <b>Customer Name:</b> {reservation.customerName}
                      <br />
                      <b>Reservation Date:</b> {reservation.reservationDate}
                      <br />
                      <b>Reservation Time:</b> {reservation.reservationTime}
                      <br />
                      <b>Approved Status:</b> {reservation.approvedStatus}
                    </p>
                    <div>
                      <button
                        className="accept-btn"
                        onClick={() =>
                          handleReservationClick(reservation.reservationId)
                        }
                      >
                        Check -{">"} {reservation.reservationId}
                      </button>
                      {/* <button
                        className="accept-btn"
                        onClick={() => handleAccept(reservation.id)}
                      >
                        Accept
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(reservation.id)}
                      >
                        Delete
                      </button> */}
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div className="reservation-component-div">
            {/* Render ReservationDetailsWindow if a reservation is selected */}
            {selectedReservationId && (
              <ReservationDetailsWindow reservationId={selectedReservationId} />
            )}
          </div>
        </div>

        <RightSidebar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ReservationRequestListWindow;
