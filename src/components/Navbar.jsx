import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { color } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { alignProperty } from "@mui/material/styles/cssUtils";
import NavbarModule from "./Navbar.module.css";

const pages = ["Home", "Jobs", "Companies", "Candidates", "Pages", "Blogs"];
const subPages = ["Sub 1", "Sub 2", "Sub 3"];

const sx = {
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "Inter",
  fontWeight: 700,
  letterSpacing: "inherit",
  color: "inherit",
  textDecoration: "none",
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={NavbarModule.navbar}>
      <AppBar
        position="static"
        elevation={0}
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl" mr={3}>
          <Toolbar disableGutters>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "#555555",
              }}
            />
            <Typography variant="h6" href="/" sx={{ ...sx, color: "#555555" }}>
              LOGO
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                // ":hover": { backgroundColor: "transparent" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#555555",
                    "&:hover": { backgroundColor: "none" },
                  }}
                >
                  {page}
                  <ArrowDropDownIcon />
                </Button>
              ))}
            </Box>

            <Button
              sx={{
                my: 2,
                mr: 2,
                color: "#555555",
                "&:hover": { backgroundColor: "none" },
              }}
            >
              Login
            </Button>
            <Button
              sx={{
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
              Post a Job
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
