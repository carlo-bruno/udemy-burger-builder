import React from "react";

import classes from "./NavList.module.css";
import NavItem from "./NavItem/NavItem";

const NavList = () => {
  return (
    <ul className={classes.NavList}>
      <NavItem link="/" active>
        Burger Builder
      </NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  );
};

export default NavList;
