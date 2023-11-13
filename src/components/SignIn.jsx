import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

const Details = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      phone: data.get("password"),
    });
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Title text={"Sign In Here"} textAlign={"center"} />
      <Paragraph
        text={
          "If you are interested to create test contact us we will help you. \
                Shortly to fulfill you requirements ."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          py: 2,
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoFocus
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            console.log("email from click: ",email);
            console.log("password: ",password);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            // myHeaders.append("Cookie", "user_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQ5ZjVhZmYwNzAxMTUzOTBmOWVlMjciLCJpYXQiOjE2OTk3MDM5OTQsImV4cCI6MTY5OTcwNzU5NH0.xEoPT8ed8MhusgJJUDKXIXYDaWuNzwhfna1X5331HMY");

            var raw = JSON.stringify({
              email: email,
              password: password
            });

            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };

            fetch("http://localhost:8080/auth/login", requestOptions)
              .then((response) => response.text())
              .then((result) => {
                console.log("result on frontend: ",result);
                // Cookies.set("user_token",JSON.parse(result).token)
                navigate("/myTests");
              })
              .catch((error) => console.log("error", error));
          }}
          variant="contained"
          fullWidth
          type="submit"
          size="medium"
          sx={{
            fontSize: "0.9rem",
            textTransform: "capitalize",
            py: 2,
            mt: 3,
            mb: 2,
            borderRadius: 0,
            backgroundColor: "#670f8c",
            "&:hover": {
              backgroundColor: "#510173",
            },
          }}
        >
          Sign In
        </Button>
      </Box>
    </Stack>
  );
};

export default Details;
