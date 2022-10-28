import React from "react";
import classes from "./Button.module.css";

/*
for the type prop, we added || 'button as a fallback
in case the user doesn't specify the type. This way,
the type will be set to 'button' if the user forgets.
We can do this because we're working inside the curly
braces {}, which can accept JS logic.
*/

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
