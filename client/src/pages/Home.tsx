import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainGrid from "../components/MainGrid";

function Home() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Home
      </Typography>
      <MainGrid />
    </Box>
  );
}

export default Home;
