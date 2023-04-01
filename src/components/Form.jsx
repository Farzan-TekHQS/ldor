import { Button } from "@mui/material";
import { border } from "@mui/system";
import React from "react";
import FormModule from "./Form.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FolderIcon from "@mui/icons-material/Folder";

const sampleCategories = ["All Categories", "cat 1", "cat 2", "cat 3"];

function Form() {
  return (
    <div>
      <form className={FormModule.form}>
        <SearchIcon
          style={{
            display: "-ms-flexbox",
            marginTop: "22px",
            display: "inline",
            float: "left",
          }}
        />
        <input
          type={"text"}
          placeholder="Job title or keywords"
          style={{
            border: "none",
            outline: "none",
            background: "white",
            paddingLeft: "15px",
            fontSize: 15,
          }}
        />
        <FolderIcon
          style={{
            display: "inline",
            marginTop: "22px",
            display: "inline",
            float: "",
          }}
        />
        <select
          style={{ border: "none", outline: "none", background: "white" }}
        >
          {sampleCategories.map((catg) => {
            return <option>{catg}</option>;
          })}
        </select>
        <Button
          sx={{
            ml: 5,
            my: 2,
            color: "white",
            "&:hover": { backgroundColor: "none" },
            backgroundColor: "#35554d",
            borderRadius: 16,
            pl: 3,
            pr: 3,
            pt: 1,
            pb: 1,
          }}
        >
          Search
        </Button>
      </form>
    </div>
  );
}

export default Form;
