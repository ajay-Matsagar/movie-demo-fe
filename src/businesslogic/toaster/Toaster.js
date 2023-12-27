import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toaster = () => {
  const isOpen = useSelector((state) => state.toaster);
  const { open, onClose, message, severity, anchorOrigin, autoHideDuration } =
    isOpen || {};

  const getSnackbarColor = (severity) => {
    switch (severity) {
      case "success":
        return "#4CAF50";
      case "error":
        return "#F44336";
      case "warning":
        return "#FFC107";
      default:
        return "#2196F3";
    }
  };

  return (
    <>
      {isOpen && (
        <Snackbar
          open={open}
          autoHideDuration={autoHideDuration || 6000}
          onClose={onClose}
          anchorOrigin={
            anchorOrigin || { vertical: "top", horizontal: "right" }
          }
        >
          <Alert
            onClose={onClose}
            severity={severity || "info"}
            style={{ backgroundColor: getSnackbarColor(severity) }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Toaster;
