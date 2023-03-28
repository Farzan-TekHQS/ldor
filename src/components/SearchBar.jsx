import { FormControl, OutlinedInput } from "@mui/material";
import React from "react";
import SearchModule from "./Search.module.css";

function SearchBar() {
  return (
    <React.Fragment>
      <div className={SearchModule.search}>
        <FormControl sx={{ width: "25ch", "& fieldset": { border: "none" } }}>
          <OutlinedInput placeholder="Jobs Title or Keywords" />
        </FormControl>
      </div>
    </React.Fragment>
  );
}

export default SearchBar;
