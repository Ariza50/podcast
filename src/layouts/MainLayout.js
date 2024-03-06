import {Outlet} from "react-router-dom";
import {Box, CircularProgress, Container, Divider, Grid, Typography} from "@mui/material";
import {useSelector} from "../redux/store";

export default function MainLayout() {
  const { isLoading } = useSelector((state) => state.podcast);

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Grid container sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant="h5" component="h1" color="#67A4CE" sx={{ mb: 2, fontWeight: 'bold' }}>
            Podcaster
          </Typography>
          {
            isLoading && (
              <CircularProgress/>
            )
          }
        </Grid>
        <Divider />
        <Outlet />
      </Box>
    </Container>
  );
}
