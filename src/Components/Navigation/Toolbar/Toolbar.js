import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavList from "../NavList/NavList";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <NavList />
      </nav>
    </header>
  );
};

export default Toolbar;
