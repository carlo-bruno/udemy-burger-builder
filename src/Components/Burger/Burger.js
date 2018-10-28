import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const Burger = props => {
  const ingredientArray = Object.keys(props.ingredients).map(
    type => {
      return [...Array(props.ingredients[type])].map(
        (element, i) => {
          console.log(type, element, i);
          // we get 'type' from Object.keys (ln.7-8)
          // element doesnt matter, but we need i (index)
          // for unique key & to know how many element we have
          return <BurgerIngredient key={type + i} type={type} />;
        }
      );
    }
  );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientArray}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
