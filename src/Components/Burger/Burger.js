import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const Burger = props => {
  const ingredientArray = Object.keys(props.ingredients)
    .map(type => {
      return [...Array(props.ingredients[type])].map(
        (element, i) => {
          // console.log(type, element, i);
          // we get 'type' from Object.keys (ln.7-8)
          // element doesnt matter, but we need i (index)
          // for unique key & to know how many element we have
          // https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/3501504
          return <BurgerIngredient key={type + i} type={type} />;
        }
      );
    })
    //flatten the array using Array.reduce
    .reduce((accumulator, current) => {
      return accumulator.concat(current);
    }, []);

  // creted burgerMiddle to separate logic from render
  const burgerMiddle = ingredientArray.length ? (
    ingredientArray
  ) : (
    <p> Please start adding ingredients!</p>
  );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {burgerMiddle}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
