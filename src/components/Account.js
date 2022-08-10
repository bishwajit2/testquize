import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/Account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/login">Login</NavLink>
      {/* <button to="/logout" className="material-icons-outlined" title="Logout">
        {" "}
        logout{" "}
      </button> */}
    </div>
  );
}
