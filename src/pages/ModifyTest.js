import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff';

function ModifyTest() {
    return (
        <>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"

                }}
            >
                <Box sx={{ marginTop: "40px", width: '75%' }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            margin: '0px auto',
                            justifyContent: 'space-between',
                            alignItems : 'center'
                        }}
                    >
                        <Typography>Number of questions(2) </Typography>
                        <Typography variant="h6" component="h2">DSA test</Typography>
                        <Button sx={{backgroundColor:"#670f8c"}} size='small' variant="contained" endIcon={<OpenInNewOffIcon /> }>
                            Export
                        </Button>
                    </Box>
                </Box>
                <Card elevation={2} sx={{ maxWidth: "75%", bgcolor: "#eeeeee", marginTop: "20px" }}>
                    <CardHeader
                        action={
                            <>
                                <Button sx={{ margin: "0px 10px", backgroundColor:"#670f8c" }} size='small' variant='contained'>Modify</Button>
                                <Button sx={{ margin: "0px 10px", backgroundColor:"#670f8c" }} size='small' variant='contained'>Remove</Button>
                            </>
                        }
                    />
                    <CardContent>
                        <Typography variant='body1'>
                            Question 1: Which data structure is best suited for implementing a LIFO (Last-In-First-Out) behavior?
                        </Typography>
                        <FormControl>
                            <RadioGroup
                                aria-labelledby="radio-buttons"
                                defaultValue="queue"
                                name="radio-buttons-group"
                                sx={{
                                    "& svg": {
                                        width: "0.7em",
                                        height: "0.7em"
                                    }
                                }}
                            >
                                <FormControlLabel value="queue" control={<Radio />} label="Queue" />
                                <FormControlLabel value="stack" control={<Radio />} label="Stack" />
                                <FormControlLabel value="list" control={<Radio />} label=" Linked List" />
                                <FormControlLabel value="hash" control={<Radio />} label="Hash Table" />
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                </Card>
                <Card elevation={2} sx={{ maxWidth: "75%", bgcolor: "#eeeeee", marginTop: "20px" }}>
                    <CardHeader
                        action={
                            <>
                                <Button sx={{ margin: "0px 10px", backgroundColor:"#670f8c" }} size='small' variant='contained'>Modify</Button>
                                <Button sx={{ margin: "0px 10px", backgroundColor:"#670f8c" }} size='small' variant='contained'>Remove</Button>
                            </>
                        }
                    />
                    <CardContent>
                        <Typography variant='body1'>
                            Question 2: Write a Python function to find the largest element in an array of integers without using any built-in functions or sorting algorithms. The function should have a time complexity of O .n. where n is the number of elements in the array.
                        </Typography>
                    </CardContent>
                </Card>
                <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: "20px" }}>
                    <Button sx={{backgroundColor:"#670f8c"}} variant='contained'>
                        Add more
                    </Button>
                    <Button sx={{ margin: '0px 10px', backgroundColor:"#670f8c" }} variant='contained'>
                        Save
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default ModifyTest;