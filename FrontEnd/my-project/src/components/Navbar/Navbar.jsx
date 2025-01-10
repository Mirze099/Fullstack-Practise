import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={`${styles.headers}`}>
      <header
        className={`flex items-center justify-between px-12 py-4 flex-col md:flex-row ${styles.header}`}
      >
        <div className="header-left">
          <p>
            We believe we helps people
            <br />
            for happier lives
          </p>
        </div>
        <div className="header-center hidden md:flex">
          <img
            src="https://preview.colorlib.com/theme/immigration/img/logo.png"
            alt=""
          />
        </div>
        <div className="header-right flex items-center justify-between gap-3">
          <p>+880 123 12 658 439</p>
          <IconButton
            sx={{
              backgroundColor: "red",
              color: "white",
            }}
          >
            <LocalPhoneIcon />
          </IconButton>
        </div>
      </header>
      <nav className={`${styles.navbar} flex items-center justify-center px-12 py-5`}>
        <ul className="flex items-center justify-center px-12 gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/addproduct">Add Product</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
