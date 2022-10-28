import React from "react";
import classes from "./NewUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button";

const NewUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" />

        <Button type="submit" onClick={addUserHandler}>Add User</Button>
      </form>
    </Card>
  );
};

export default NewUser;
