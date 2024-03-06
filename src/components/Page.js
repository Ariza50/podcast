import {forwardRef} from 'react';
import {Box} from "@mui/material";

const Page = forwardRef(({ children, title = '', ...other }, ref) => {
  return (
    <Box ref={ref} {...other}>
      {children}
    </Box>
  );
});

export default Page;
