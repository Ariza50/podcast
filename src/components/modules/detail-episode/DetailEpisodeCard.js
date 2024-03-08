import {Card, Divider, Grid, Typography} from "@mui/material";

export const DetailEpisodeCard = ({ episode }) => {
  return (
    <Card
      sx={{
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left'
      }}
    >
      <Grid p={2}>
        <Grid>
          <Typography variant="h6" fontWeight="bold">{episode.trackName}</Typography>
        </Grid>
        <Grid mb={2}>
          <div
            style={{marginTop: '15px'}}
            dangerouslySetInnerHTML={{__html: episode.description}}
          />
        </Grid>
        <Divider/>
        <Grid mt={2}>
          <audio data-testid='audio' src={episode.episodeUrl} controls style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Card>
  )
}
