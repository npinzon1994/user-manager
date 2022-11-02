import React, { useState, useRef } from "react";
import classes from "./NewUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Wrapper from "../Helpers/Wrapper";

const NewUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setMessage] = useState("");


  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredNameValue = nameInputRef.current.value;
    const enteredAgeValue = ageInputRef.current.value;
    if (enteredNameValue.trim().length === 0 || enteredAgeValue.trim().length === 0) {
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
    if (+enteredAgeValue < 1) {
      setMessage("Age cannot be less than 1!");
      setIsModalVisible(true);
      return;
    }

    /*Now pass it up to App.js through props.
    We have to pass to App.js because that's this
    component's direct parent. App.js is where we
    actually create the object.
    */
    props.onSaveUser(enteredNameValue, enteredAgeValue);

    //can manipulate DOM directly to reset inputs, but not usually a good idea
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

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
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
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
