import * as React from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Copyright from "../dashboard/internals/components/Copyright";
import ChartUserByCountry from "../dashboard/components/ChartUserByCountry";
import CustomizedTreeView from "../dashboard/components/CustomizedTreeView";
import CustomizedDataGrid from "../dashboard/components/CustomizedDataGrid";
import HighlightedCard from ".//HighlightedCard";
import PageViewsBarChart from "../dashboard/components/PageViewsBarChart";
import SessionsChart from "../dashboard/components/SessionsChart";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import StatCard, { StatCardProps } from "../dashboard/components/StatCard";
import { PAGE_NAME, PAGE_PATH } from "../utils/const";

const data: StatCardProps[] = [
  {
    title: "Users",
    value: "14k",
    interval: "Last 30 days",
    trend: "up",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: "Conversions",
    value: "325",
    interval: "Last 30 days",
    trend: "down",
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600,
      820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300,
      220,
    ],
  },
  {
    title: "Event count",
    value: "200k",
    interval: "Last 30 days",
    trend: "neutral",
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510,
      530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

const menus = [
  {
    title: PAGE_NAME.DASHBOARD,
    description: "Velit labore enim elit aliqua labore aliqua sint ad officia.",
    btnTitle: "Go to dashboard",
    icon: <StorageRoundedIcon />,
    path: PAGE_PATH.DASHBOARD,
  },
  {
    title: PAGE_NAME.ANALYTICS,
    description: "Velit labore enim elit aliqua labore aliqua sint ad officia.",
    btnTitle: "Go to ANALYTICS",
    icon: <InsightsRoundedIcon />,
    path: PAGE_PATH.ANALYTICS,
  },
  {
    title: PAGE_NAME.REPORTS,
    description: "Velit labore enim elit aliqua labore aliqua sint ad officia.",
    btnTitle: "Go to REPORTS",
    icon: <EditNoteRoundedIcon />,
    path: PAGE_PATH.REPORTS,
  },
];
export default function MainGrid() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Quick Menu
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        <Grid
          container
          spacing={2}
          columns={12}
          sx={{ mb: (theme) => theme.spacing(2) }}
        >
          {menus.map((menu, index) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <HighlightedCard {...menu} key={index} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* TODO : Add overview ex) how many store were closed. */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
      {/* <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Details
      </Typography>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <CustomizedDataGrid />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Stack gap={2} direction={{ xs: "column", sm: "row", lg: "column" }}>
            <CustomizedTreeView />
            <ChartUserByCountry />
          </Stack>
        </Grid>
      </Grid> */}
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
