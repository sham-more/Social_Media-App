import React, { useContext } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { DarkModeContex } from "../../contex/darkModeContex";
import { AuthContex } from "../../contex/authContext";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContex);
  const { currentUser } = useContext(AuthContex);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social</span>
        </Link>
        <HomeOutlinedIcon className="icon" />
        {darkMode ? (
          <WbSunnyOutlinedIcon className="icon" onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon className="icon" onClick={toggle} />
        )}
        <GridViewOutlinedIcon className="icon" />

        <div className="search">
          <SearchOutlinedIcon className="icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon className="icon" />
        <EmailOutlinedIcon className="icon" />
        <NotificationsNoneOutlinedIcon className="icon" />
        <div className="user">
          <img src={currentUser.profile} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
