import React, { useState } from "react";
import classes from "./NewUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Wrapper from "../Helpers/Wrapper";

const NewUser = (props) => {
  //need state to capture user input
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setMessage] = useState("");

  /*
  Could check to see if entered username in empty,
  in which case we could make the label and input
  appear red. We can simply return if the user 
  entered nothing, and then return the entered username
  if the field is valid.
  */
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setMessage("Please enter a username or age!");
      setIsModalVisible(true);
      return;
    }

    /*
    enteredAge was collected from an input and is 
    therefore a string. JS allows you to compare strings
    and numbers, but it's a better practice to force-
    convert to a number so we're comparing two values
    of the same type.
    */
    if (+enteredAge < 1) {
      setMessage("Age cannot be less than 1!");
      setIsModalVisible(true);
      return;
    }

    /*Now pass it up to App.js through props.
    We have to pass to App.js because that's this
    component's direct parent. App.js is where we
    actually create the object.
    */
    props.onSaveUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const closeModalHandler = () => {
    setIsModalVisible(false);
  };

  //only display modal if isModalVisible
  return (
    <Wrapper>
      {isModalVisible && (
        <Modal title="Error!" message={message} onClose={closeModalHandler} />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />

          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default NewUser;
