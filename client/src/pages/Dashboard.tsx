import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CustomizedDataGrid from "../components/CustomizedDataGrid";
import { getBusinessOpenCloseStats } from "../services/api";

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  const [data, setData] = useState([]);
  async function fetchData() {
    const res = await getBusinessOpenCloseStats();
    const fetched = await res.json();
    setData(fetched.response);
  }
  // componentDidMount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Dashboard
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid data={data} />
        </Grid>
      </Grid>
    </Box>
  );
}
