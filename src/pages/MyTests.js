import * as React from "react";
import TestCard from "../components/testCard";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
function MyTests() {
  const [tests, setTests] = useState([]);
  useEffect(() => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
        credentials:'include'
      };

      fetch("http://localhost:8080/test", requestOptions)
        .then((response) => response.text())
        .then((result) => setTests(JSON.parse(result)))
        .catch((error) => console.log("error", error));
  }, [setTests]);
  return (
    // <div style={{backgroundColor:"#fcad00"}}>
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        // bgcolor: '#f9f9f9'
      }}
    >
      <Box
        sx={{
          marginTop: "40px",
          width: "75%",
          display: "flex",
          justifyContent: "start",
        }}
      >
        <Typography variant="h6" component="h2">
          My Tests{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "10px",
          width: "75%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <TextField
            id="search"
            label="Search by name"
            maxRows={1}
            size="small"
            sx={{ width: "350px" }}
          />
          <SearchIcon sx={{ fontSize: "30px", color: "#2196f3" }} />
        </Box>
      </Box>
      {tests.map((test, index) => {
        return (
          <TestCard
            key={index}
            name={test.title}
            description={test.description}
            questions={test.mcqs + test.questions + test.problems}
            date={test.createdAt}
          />
        );
      })}
    </Box>
    // </div>
  );
}

export default MyTests;
