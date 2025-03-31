import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Search(props: any) {
  const { handleKeyword, handleKeywordType, keywordType } = props;
  return (
    <>
      <InputLabel id="demo-simple-select-helper-label">keywordType</InputLabel>
      <Select
        type="text"
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={keywordType}
        label="select keyword type"
        onChange={(e) => handleKeywordType(e.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormControl
        sx={{ width: { xs: "100%", md: "25ch" } }}
        variant="outlined"
      >
        <OutlinedInput
          size="small"
          id="search"
          placeholder="Search…"
          sx={{ flexGrow: 1 }}
          onChange={(e) => handleKeyword(e.target.value)}
          startAdornment={
            <InputAdornment position="start" sx={{ color: "text.primary" }}>
              <SearchRoundedIcon fontSize="small" />
            </InputAdornment>
          }
          inputProps={{
            "aria-label": "search",
          }}
        />
      </FormControl>
    </>
  );
}
