import React from "react";
import classes from "./NewUser.js";

const NewUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />

      <label htmlFor="age">Age (Years)</label>
      <input type="number" id="age" />

      <button type="submit">Add User</button>
    </form>
  );
};

export default NewUser;
