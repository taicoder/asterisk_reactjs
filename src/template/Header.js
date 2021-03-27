import React, { useState, useRef } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";

//
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

//Dialog
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


import { SearchOutlined, HomeOutlined } from "@material-ui/icons";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    maxWidth: 250,
  },
  fullList: {
    width: "auto",
  },
  customizeToolbar: {
    minHeight: 30,
  },
}));

const Header = (props) => {

  //Dialog
  const [open, setOpen] = useState(false);

  const [_keysearch, setKeySearch] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //End Dialog

  

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
     
    >
       <List>
        <strong
          style={{
            paddingLeft: "5px",
          }}
        >
          <Link
          style={{ textDecoration: "none", color: "black", paddingLeft:'0px'}}
          onClick={() => (window.location = "/freepbx")}
        >
         <HomeOutlined color="primary" style={{fontSize:'30px'}}/>
        </Link>
        </strong>
      </List>
      
      {/* <Divider /> */}
      {/* <List>
        <strong
          style={{
            paddingLeft: "5px",
          }}
        >
         sadsasd
        </strong>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          // to={`/consult`}
          onClick={() => (window.location = "/consult")}
        >
          <ListItem button key="">
           1111
            <ListItemText primary="" />
          </ListItem>
        </Link>
      </List> */}

    
    
    </div>
  );

  return (
    <React.Fragment>
      <div className={classes.grow} style={{ paddingBottom: 35 }}>
        <AppBar
         position="fixed"
          elevation={0}
        >
          <Toolbar className={classes.customizeToolbar}>
            <IconButton
              onClick={toggleDrawer("left", true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`/demo`}
                    >
                    </Link>
                  </td>
                  <td align="center">
                    <span style={{ paddingLeft: "5px", fontSize: "16px" }}>
                    NHÓM 17 
                    <br/>
                     DEMO SIP/VOIP
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
        {/* {renderMobileMenu} */}
        {/* {renderMenu} */}
        <div>
          <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
            {sideList("left")}
          </Drawer>
        </div>
      </div>

    </React.Fragment>
  );
};

export default React.memo(Header);
