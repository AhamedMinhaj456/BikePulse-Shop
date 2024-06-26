import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HistoryDetails from "./HistoryDetails";
import { useSelector } from 'react-redux';

const ReservationHistory = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const customerId = useSelector((state) => state.customers);
  const [reservationDetails, setReservationDetails] = useState([]);
  const [selectedReservationId, setSelectedReservationId] = useState(null);

  // Function to fetch reservation data from the API
  const fetchReservations = async () => {
    try {
      const response = await fetch(`http://localhost:8095/reservation/customer/${customerId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      setReservationDetails(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  // Fetch reservation data when the component mounts
  useEffect(() => {
    fetchReservations();
  }, []);

  // Filter reservations to include only those with processStatus = 'completed'
  const completedReservations = reservationDetails.filter(
    (reservation) => reservation.processStatus === 'completed'
  );

  const columns = [
    { field: "reservationId", headerName: "Reservation ID", flex: 1 },
    {
      field: "customerName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "motorbikeNumber",
      headerName: "Motorbike Number",
      flex: 1,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "serviceType",
      headerName: "Service Type",
      flex: 1,
    },
    {
      field: "shopName",
      headerName: "Shop Name",
      flex: 1,
    },
    {
      field: "reservationDate",
      headerName: "Reservation Date",
      flex: 2,
    },
    {
      field: "reservationTime",
      headerName: "Reservation Time",
      flex: 2,
    },
    {
      field: "reservationAddress",
      headerName: "Reservation Address",
      flex: 2,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSelectedReservationClick(params.row.reservationId)}
        >
          {params.row.processStatus} 
        </Button>
      ),
      flex: 2,
    },
  ];

  const handleSelectedReservationClick = (reservationId) => {
    setSelectedReservationId(reservationId);
  };

  return (
    <Box m="20px">
      <Header title="Reservation History" subtitle="Managing Completed Reservations" />
      {selectedReservationId ? (
        <Box m="20px">
          <HistoryDetails reservationId={selectedReservationId} />
        </Box>
      ) : (
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid 
          rows={completedReservations} 
          columns={columns}
          getRowId={(row) => row.reservationId} 
        />
      </Box>
      )}
    </Box>
  );
};

export default ReservationHistory;
