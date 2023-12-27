import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

function Loader() {
  const isLoading = useSelector((state) => state.loader);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      {isLoading && <CircularProgress />}
    </Box>
  );
}

export default Loader;
