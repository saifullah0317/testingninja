import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Selector from "../components/selector";
import { Avatar } from "@mui/material";
import logoNinja from "../images/logoNinja.jpg";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

function GenerateTest() {
  const [isSafeExamBrowser, setIsSafeExamBrowser] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [duration, setDuration] = useState("");
  useEffect(() => {
    const total = hours * 60 + minutes;
    setTotalMinutes(total);
  }, [hours, minutes]);
  const handleHoursChange = (event) => {
    setHours(parseInt(event.target.value, 10));
  };

  const handleMinutesChange = (event) => {
    setMinutes(parseInt(event.target.value, 10));
  };

  // Use useEffect to calculate total minutes whenever hours or minutes change

  const handleToggle = () => {
    setIsSafeExamBrowser(!isSafeExamBrowser);
  };
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            // backgroundColor:"#fcad00"
          }}
          
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            {/* <Typography component="h1" variant="body1">
              Add test category
            </Typography>
            <Box sx={{ minWidth: 250, margin: "0px 20px", display: 'flex', flexDirection: "row" }}>
              <FormControl fullWidth size='small'>
                <InputLabel id="demo-simple-select-label">category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="category"
                >
                  <MenuItem value={10}>General</MenuItem>
                  <MenuItem value={20}>Theoretical</MenuItem>
                  <MenuItem value={30}>Technical</MenuItem>
                </Select>
              </FormControl>
              <Button sx={{ margin: "0px 10px" }} variant="outlined">+</Button>
            </Box>*/}
          </Box>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="small"
              required
              fullWidth
              id="testName"
              label="Test name"
              name="testName"
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Test description"
              type="text"
              id="description"
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="prompt"
              label="Enter prompt for test here.."
              type="text"
              id="prompt"
            />

            <Typography component="h5" sx={{ margin: "10px 0px" }}>
              Number of questions
            </Typography>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography component="h5" variant="body2">
                    Multiple Choices
                  </Typography>
                  <TextField
                    variant="outlined"
                    type="number"
                    inputProps={{ min: "0" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography component="h5" variant="body2">
                    Theoretical
                  </Typography>
                  <TextField
                    variant="outlined"
                    type="number"
                    inputProps={{ min: "0" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography component="h5" variant="body2">
                    Problem Solving
                  </Typography>
                  <TextField
                    variant="outlined"
                    type="number"
                    inputProps={{ min: "0" }}
                  />
                </Box>
              </Grid>
            </Grid>

            <div>
              <div>
                <Typography component="h5" sx={{ margin: "15px 0px" }}>
                  Do you want to post the test on Safe Exam Browser
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between", // To align items side by side
                        alignItems: "center", // To vertically center items
                      }}
                    >
                      <Typography variant="body2">No</Typography>
                      <Switch
                        checked={isSafeExamBrowser}
                        onChange={handleToggle}
                        name="isSafeExamBrowser"
                      />
                      <Typography variant="body2">Yes</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </div>

              {isSafeExamBrowser && ( // Render the duration input only if 'Yes' is selected
                <div>
                  <TextField
                    variant="outlined"
                    label="Hours"
                    type="number"
                    inputProps={{ min: "0" }}
                    value={hours}
                    onChange={handleHoursChange}
                  />
                  <TextField
                    variant="outlined"
                    label="Minutes"
                    inputProps={{ min: "0" }}
                    type="number"
                    value={minutes}
                    onChange={handleMinutesChange}
                  />
                  <div>Total Minutes: {totalMinutes}</div>
                </div>
              )}
            </div>

            {/* <Typography component="h5" sx={{ margin: "10px 0px" }}>
              Number of questions
            </Typography>
            <Grid container spacing={8}>
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography component="h5" variant="body2">
                    Multiple Choices
                  </Typography>
                  <Selector />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography component="h5" variant="body2">
                    Theoretical
                  </Typography>
                  <Selector />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography component="h5" variant="body2">
                    Problem Solving
                  </Typography>
                  <Selector />
                </Box>
              </Grid>
            </Grid>*/}

            {/* <Typography component="h5" sx={{ margin: '10px 0px' }}>Add your branding</Typography>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Typography component="h5" variant='body1'>Logo</Typography>
                  <Avatar sx={{ margin: '0px 20px' }} alt="user" src={logoNinja} />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Typography component="h5" variant='body1'>Name</Typography>
                  <TextField sx={{ margin: '0px 20px' }} size='small' label="Logo name" variant="outlined" />
                </Box>
              </Grid>
            </Grid>*/}
          </Box>
        </Box>
        <Button
          onClick={() => navigate("/modifyTests")}
          size="small"
          sx={{ marginTop: "10px", justifyContent: "end", backgroundColor:"#670f8c" }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Generate
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default GenerateTest;
