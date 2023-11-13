import React from "react";
import { Box, Button, Typography } from "@mui/material";
import oops from "../images/oops.png";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <img src={oops} alt="" width={400} height={150} />

      <Typography variant="h1">
        404
      </Typography>
      <Typography variant="h6">
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        style={{ marginTop: 60, backgroundColor: "#670f8c" }}
        onClick={() => navigate("/")}
      >
        Back Home
      </Button>
    </Box>
  );
}
