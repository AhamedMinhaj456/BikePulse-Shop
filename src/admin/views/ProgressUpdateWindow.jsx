import React, { useEffect, useState } from "react";
import "./ProgressUpdateWindow.css";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import Navbar from '../../components/navbar';
import Footer from '../../components/Footer';

const ProgressUpdateWindow = () => {
  const [progressClicked, setProgressClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  const [acceptedReservations, setAcceptedReservations] = useState([]);
  const [selectedReservationId, setSelectedReservationId] = useState("");
  const [reservationDetails, setReservationDetails] = useState({
    id: 0,
    customerName: "",
    location: "",
    serviceType: "",
    phoneNumber: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    // Retrieve acceptedReservations from local storage
    const storedAcceptedReservations = localStorage.getItem(
      "acceptedReservations"
    );
    if (storedAcceptedReservations) {
      setAcceptedReservations(JSON.parse(storedAcceptedReservations));
    }
  }, []);

  const handleSelectChange = (event) => {
    setSelectedReservationId(event.target.value);
  };

  const handleNextButtonClick = () => {
    setNextClicked(true);
    const selectedReservation = acceptedReservations.find(
      (reservation) => reservation.id === parseInt(selectedReservationId)
    );
    if (selectedReservation) {
      const originalDate = new Date(selectedReservation.date);

      // Calculate the new date (14 days ahead)
      const newDate = new Date(originalDate);
      newDate.setDate(newDate.getDate() + 14);
      const formattedDate = `${newDate.getFullYear()}-${(newDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${newDate.getDate().toString().padStart(2, "0")}`;

      // Update the state with the new date and time
      setReservationDetails({
        ...selectedReservation,
        date: formattedDate,
      });
    }
  };

  const handleProgressButtonClick = () => {
    setProgressClicked(true);
  };

  return (
    <div className="progress-update-main1">
      <Navbar/>
    <div className="progress-update-main">
      <LeftSidebar />
      <div className="progress-update-management">
        <h2>Progress Update</h2>

        <div className="progress-update-management-content">
          <div className="topic-1">
            <p className="tt-1"><b>Reservation ID</b></p>
          </div>
          <select
            className="dropID"
            value={selectedReservationId}
            onChange={handleSelectChange}
          >
            <option value="">Select ID</option>
            {acceptedReservations.map((reservation) => (
              <option key={reservation.id} value={reservation.id}>
                {reservation.id}
              </option>
            ))}
          </select>

          <button className="next-button" onClick={handleNextButtonClick}>
            Next
          </button>

          {nextClicked === true ? (
            <div>
              <div className="topic-1">
                <p className="tt-2">
                  Reservation Schedule <br /> {reservationDetails.customerName}'s appointment is Scheduled for:{" "}
                </p>
              </div>

              <div className="set-1">
                <p className="tt-3"> <b>Date</b></p>
                <p className="tt-4">{reservationDetails.date}</p>
              </div>
              <div className="set-1">
                <p className="tt-5"><b>Time</b></p>
                <p className="tt-6">{reservationDetails.time}</p>
              </div>
              <div className="set-1">
                <p className="tt-7"><b>Service Location</b></p>
                <p className="tt-8">{reservationDetails.location}</p>
              </div>
              <button
                className="progress-button"
                onClick={handleProgressButtonClick}
              >
                Progress
              </button>
              {progressClicked === true ? (
                <div>
                  <div className="topic-1">
                    <p className="tt-9">Progress Tracker </p>
                  </div>

                  <div className="progress-tracker">
                    <div className="progress-bar-container">
                      <div className="progress-bar">
                        <div className="progress-segment-container">
                          <div className="progress-segment inspection">
                            Inspection
                          </div>
                          <div className="progress-segment repairs">
                            Repairs
                          </div>
                          <div className="progress-segment quality-check">
                            Quality Check
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="save-button">Save</button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <RightSidebar />
    </div>
    <Footer/>
    </div>
  );
};

export default ProgressUpdateWindow;
