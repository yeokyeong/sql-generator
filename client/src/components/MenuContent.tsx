import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import TableViewIcon from "@mui/icons-material/TableView";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { PAGE_NAME, PAGE_PATH } from "../utils/const";
import { Link } from "react-router-dom";

const mainListItems = [
  { text: PAGE_NAME.HOME, icon: <HomeRoundedIcon />, path: PAGE_PATH.HOME },
  {
    text: PAGE_NAME.DASHBOARD,
    icon: <TableViewIcon />,
    path: PAGE_PATH.DASHBOARD,
  },
  {
    text: PAGE_NAME.ANALYTICS,
    icon: <AnalyticsRoundedIcon />,
    path: PAGE_PATH.ANALYTICS,
  },
  {
    text: PAGE_NAME.REPORTS,
    icon: <ReceiptLongIcon />,
    path: PAGE_PATH.REPORTS,
  },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },
  { text: "About", icon: <InfoRoundedIcon /> },
  { text: "Feedback", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleClick(index: number) {
    setSelectedIndex(index);
  }

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem disablePadding sx={{ display: "block" }} key={index}>
            <Link
              to={item.path}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ListItemButton
                selected={index === selectedIndex}
                onClick={() => handleClick(index)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      {/* <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Stack>
  );
}
