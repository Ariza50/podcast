import {Grid, TextField, Typography} from "@mui/material";

export const PodcastFilter = ({length, onFilter}) => {

  return (
    <Grid sx={{padding: 2}} container justifyContent="flex-end" alignItems="center">
      <Typography
        sx={{
          mr: 2,
          background: '#3756a6',
          borderRadius: 2,
          py: 0.5,
          px: 1,
          fontWeight: 'bold',
          color: 'white'
        }}
      >
        {length}
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Filter podcasts..."
        onChange={(e) => onFilter(e.target.value)}
      />
    </Grid>
  )
}
