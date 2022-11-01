import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

/*
This component is going to take the list items and store them
in a list. This list needs to be dynamically rendered..

The new user will be passed up through props.
*/

const deleteUserHandler = (userId) => {};

const UsersList = (props) => {
  /*need to receive list item first*/
  return (
    <Card>
    <ul className={classes.users}>
      {props.users.map((user) => (
        /*Each list item is going to show a user who has
        been added to the list.
        
        Each user has username and age props
        */
        <li onClick={deleteUserHandler}>{user.name} ({user.age} years old)</li>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;
