import {Card, Grid, Typography} from "@mui/material";

export const EpisodesCounter = ({counter}) => {

  return (
    <Grid sx={{padding: 2}}>
      <Card
        sx={{
          height: 60,
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left'
        }}
      >
        <Typography m={2} variant="h5" fontWeight="bold" >Episodes: {counter}</Typography>
      </Card>
    </Grid>
  );
}
