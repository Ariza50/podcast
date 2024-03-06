import {Avatar, Card, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {trimLabel} from "./utils/format";

export const PodcastCard = ({podcast}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/podcast/${podcast.id.attributes['im:id']}`);
  }

  return (
    <Grid data-testid='cardLink' item sx={{ m: 2}} onClick={handleClick}>
      <Grid container sx={{ height: 220, width: 250, flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }} >
        <Avatar
          sx={{
            height: 150,
            width: 150,
            position: 'absolute',
            top: 0,
            left: '20%'
          }}
          src={podcast['im:image'][2].label}
          alt={podcast['im:image'][2].label}
        />
        <Card
          sx={{
            height: 160,
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center'
          }}
        >
          <Typography><strong>{trimLabel(podcast['im:name'].label, 22).toUpperCase()}</strong></Typography>
          <Typography color="gray">Author: {trimLabel(podcast['im:artist'].label, 20)}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}
