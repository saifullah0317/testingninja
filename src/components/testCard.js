import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff';

function TestCard(props) {
    return (
        <>
            <Card elevation={3} sx={{ maxWidth: "75%", marginTop: "20px" }}>
                <CardHeader
                    action={
                        <Button sx={{ margin: "0px 10px", color: '#880e4f' }} size='small' variant='text'><OpenInNewOffIcon /></Button>
                    }
                    title= {`created on: ${props.date}`}
                />
                <CardContent>
                    <Typography variant='h6'>
                        {props.name}
                    </Typography>
                    <Typography variant='body1'>
                        {props.description}
                    </Typography>
                    <Typography sx={{ marginTop: '10px' }} variant='body1'>
                        ({props.questions} questions)
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default TestCard;