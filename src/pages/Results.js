import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ResultGrid from '../components/resultGrid';

const database = [
    {
        name : "DSA Test",
        category : "analysis",
        email : "xyz@gmail.com",
        score : "78%",
        attemptDate : "1-12-2023",
        timeTaken : "54:44"
    },
    {
        name : "OOP Test",
        category : "coding",
        email : "xyz@gmail.com",
        score : "90%",
        attemptDate : "25-11-2022",
        timeTaken : "9:00"
    },
    {
        name : "SQL Test",
        category : "designing",
        email : "xyz@gmail.com",
        score : "67%",
        attemptDate : "2-2-2020",
        timeTaken : "1:25"
    }
]


function MyTests() {
    return (
        <>
            <Box
                sx={{
                    marginTop: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: '#f9f9f9'

                }}
            >
                <Box sx={{ marginTop: "10px", width: '75%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography varient='body1'>
                            Group results by
                        </Typography>
                        <FormControl size='small' sx={{ width: '200px', margin: '0px 10px' }}>
                            <InputLabel id="demo-simple-select-label">Test Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={""}
                                label="category"
                            >
                                <MenuItem value={10}>Date</MenuItem>
                                <MenuItem value={20}>Length</MenuItem>
                                <MenuItem value={30}>Dummy</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography varient='body1'>
                            Sort by
                        </Typography>
                        <FormControl size='small' sx={{ width: '200px', margin: '0px 10px' }}>
                            <InputLabel id="demo-simple-select-label">Attempt Date</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={""}
                                label="sort"
                            >
                                <MenuItem value={10}>latest</MenuItem>
                                <MenuItem value={20}>xyz</MenuItem>
                                <MenuItem value={30}>xyz</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Card elevation={3} sx={{ minWidth: "75%", marginTop: "20px" }}>
                    <CardHeader
                        action={
                            <Button sx={{ margin: "0px 10px", backgroundColor:"#670f8c" }} size='small' variant='contained' endIcon={<OpenInNewOffIcon />}>Export</Button>
                        }
                        title="Totla records (3)"
                    />
                    <CardContent>
                        <Divider sx={{ marginBottom: "10px", backgroundColor:"#670f8c" }} />
                        <Grid container spacing={2} >
                            <Grid item xs={2}>
                                <Typography component="h5" variant='body1'>Test Name</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography component="h5" variant='body1'>Test Category</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography component="h5" variant='body1'>Email</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography component="h5" variant='body1'>Score</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography component="h5" variant='body1'>Attempt Date</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography component="h5" variant='body1'>Time Taken</Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ margin: "10px 0px", bgcolor: '#670f8c' }} />
                        {
                            database.map((data)=>{
                                return <>
                                    <ResultGrid name={data.name} category={data.category} email={data.email} score={data.score} attemptDate={data.attemptDate} timeTaken={data.timeTaken}/>
                                    <Divider sx={{ margin: "10px 0px" }} />
                                </>
                            })
                        }
                    </CardContent>
                </Card>

            </Box>
        </>
    );
}

export default MyTests;