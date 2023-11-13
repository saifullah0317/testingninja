import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function ResultGrid(props) {
    return (
        <>

            <Grid container spacing={2} >
                <Grid item xs={2}>
                    <Typography component="h5" variant='body1'>{props.name}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography component="h5" variant='body1'>{props.category}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography component="h5" variant='body1'>{props.email}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography component="h5" variant='body1'>{props.score}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography component="h5" variant='body1'>{props.attemptDate}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography component="h5" variant='body1'>{props.timeTaken}</Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default ResultGrid;