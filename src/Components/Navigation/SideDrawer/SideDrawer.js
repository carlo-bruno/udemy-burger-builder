import React from "react";

import classes from "./SideDrawer.module.css";
import Logo from "../../Logo/Logo";
import NavList from "../NavList/NavList";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const SideDrawer = props => {
  // let attachedClasses = [classes.SideDrawer, classes.Closed];
  // if (props.open) {
  //   attachedClasses = [classes.SideDrawer, classes.Open];
  // }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div
        className={[
          classes.SideDrawer,
          props.open ? classes.Open : classes.Closed
        ].join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavList />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
