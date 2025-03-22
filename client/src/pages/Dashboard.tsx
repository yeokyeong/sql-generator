import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CustomizedDataGrid from "../components/CustomizedDataGrid";
import { getBusinessOpenCloseStats } from "../services/api";

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  const [fetchedData, setFetchedData] = useState([]);
  const [limit, setLimit] = useState<number>(20);
  const [offset, setOffset] = useState<number>(1);

  async function fetchData(queryString: any) {
    const res = await getBusinessOpenCloseStats(queryString);
    const fetched = await res.json();
    setFetchedData(fetched);
  }
  // componentDidMount
  useEffect(() => {
    fetchData({
      offset: offset,
      limit: limit,
    });
  }, []);

  useEffect(() => {
    let queryString = {
      offset: offset,
      limit: limit,
    };
    fetchData(queryString);
  }, [offset, limit]);

  function onChangePagination(size: number, offset: number) {
    setLimit(size);
    setOffset(offset);
  }

  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Dashboard
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid
            fetchedData={fetchedData}
            onChangePagination={onChangePagination}
            limit={limit}
            offset={offset}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
