import {Card, Divider, Grid, Typography} from "@mui/material";
import {trimLabel} from "../../../utils/format";

export const PodcastBanner = ({collectionName, artworkUrl600: image, artistName, feedUrl}) => {
  return (
    <Grid sx={{padding: 2}}>
      <Card
        sx={{
          height: 450,
          width: 250,
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left'
        }}
      >
        <Grid p={2}>
          <Grid container flexDirection="column" justifyContent="center" alignItems="center" mb={2}>
            <Grid item>
              <img
                alt={collectionName}
                style={{ width: 150, height: 150, borderRadius: '5%'}}
                src={image}
                loading="lazy"
              />
            </Grid>
            <Grid item pt={1}>
              <Divider />
            </Grid>
          </Grid>
          <Grid item>
            <Typography><strong>{trimLabel(collectionName, 22)}</strong></Typography>
            <Typography mb={2} fontStyle="italic" color="gray">by {trimLabel(artistName, 20)}</Typography>
            <Divider />
          </Grid>
          <Grid item mt={2}>
            <Typography><strong>Description:</strong></Typography>
            <Typography fontStyle="italic" color="gray">{feedUrl}</Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
