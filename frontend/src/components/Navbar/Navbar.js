import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "@mui/material";
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



const settings = [
  {
    link: "/profile",
    name: "Profile",
  },
  {
    link: "/userinfo",
    name: "Dashboard",
  },
  {
    link: "/",
    name: "Logout",
  },
];

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
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

  const handleCloseUserMenu = (e) => {
    if (e.name === "Logout") {
      localStorage.clear();
    }
    setAnchorElUser(null);
  };
  
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#fffcf2",
        boxShadow: "none",
        display:'flex',
        justifyContent:'space-between'
      }}
    >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "inherit",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", mx: "auto" },
              }}
            >
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "inherit",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          
           
          
          {user? <Box sx={{ flexGrow: 0, marginLeft: 'auto', alignItems:"flex-end" }}>
            <Tooltip title="Open settings">
              <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar  alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link 
                  href={setting.link}
                  sx={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem key={setting}  onClick={() =>
                  {
                    handleCloseUserMenu(setting)
                  }}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>: 
          <Box sx={{ flexGrow: 0, marginLeft: 'auto', alignItems:"flex-end" }}>
              <Link href="/login" sx={{textDecoration:'none'}}>
                <Button
                  sx={{
                    border: 1,
                    fontFamily: "inherit",
                    fontWeight: "500",
                    backgroundColor: "#8330C2",
                    color: "white",
                    borderRadius: "30px",
                    width: "100px",
                    ":hover": {
                      backgroudColor: "white",
                      color: "#8330C2",
                      border: 1,
                      borderColor: "#8330C2",
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
            </Box>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
