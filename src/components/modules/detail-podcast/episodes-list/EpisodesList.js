import {Card, Grid, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {format} from "date-fns";
import {useNavigate} from "react-router-dom";
import {duration} from "../../../utils/format";

export const EpisodesList = ({episodes}) => {
  const navigate = useNavigate();

  const handleClick = (podcastId, episodeId) => {
    navigate(`/podcast/${podcastId}/episode/${episodeId}`);
  }

  return (
    <Grid sx={{padding: 2}}>
      <Card
        sx={{
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', textAlign: 'left'
        }}
      >
        <Table size='small'>
          <TableHead>
            <TableRow>
              <TableCell key='title'>
                <strong>Title</strong>
              </TableCell>
              <TableCell key='releaseDate'>
                <strong>Date</strong>
              </TableCell>
              <TableCell key='duration' align="right">
                <strong>Duration</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {episodes.map((episode, index) => (
              <TableRow key={index} sx={{
                '&:nth-of-type(odd)': {
                  backgroundColor: '#f3f3f3',
                }
              }} >
                <TableCell data-testid='episodeLink' sx={{ cursor: 'pointer', color:'#3d79b4' }} onClick={() => handleClick(episode.collectionId, episode.trackId)}>
                  {episode.trackName}
                </TableCell>
                <TableCell>
                  {format(episode.releaseDate, 'dd/MM/yyyy')}
                </TableCell>
                <TableCell align="right">
                  {duration(episode.trackTimeMillis)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Grid>
  );
}
