import {Outlet} from "react-router-dom";
import {Box, Container, Divider, Typography} from "@mui/material";

export default function MainLayout() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" component="h1" color="#67A4CE" sx={{ mb: 2, fontWeight: 'bold' }}>
          Podcaster
        </Typography>
        <Divider />
        <Outlet />
      </Box>
    </Container>
  );
}
