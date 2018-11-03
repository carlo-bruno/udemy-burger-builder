import React from "react";

import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavList from "../NavList/NavList";

const SideDrawer = props => {
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavList />
      </nav>
    </div>
  );
};

export default SideDrawer;
