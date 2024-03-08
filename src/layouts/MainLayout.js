import {Outlet, useNavigate} from "react-router-dom";
import {Box, CircularProgress, Container, Divider, Grid, Typography} from "@mui/material";
import {useSelector} from "../redux/store";

export default function MainLayout() {
  const { isLoading } = useSelector((state) => state.podcast);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Grid container sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Box sx={{ cursor: 'pointer' }} onClick={handleClick}>
            <Typography variant="h5" component="h1" color="#67A4CE" sx={{ mb: 2, fontWeight: 'bold' }}>
              Podcaster
            </Typography>
          </Box>
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
