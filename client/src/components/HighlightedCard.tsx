import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function HighlightedCard(props: any) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { title, description, btnTitle, icon, path } = props;

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        {icon}
        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: "600" }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: "8px" }}>
          {description}
        </Typography>
        <Link to={path}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            endIcon={<ChevronRightRoundedIcon />}
            fullWidth={isSmallScreen}
          >
            {btnTitle}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
