import React, {useState} from "react";
import classes from "./NewUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button";

const NewUser = (props) => {
  //need state to capture user input
  const[enteredUsername, setEnteredUsername] = useState('');
  const[enteredAge, setEnteredAge] = useState('');

  /*
  Could check to see if entered username in empty,
  in which case we could make the label and input
  appear red. We can simply return if the user 
  entered nothing, and then return the entered username
  if the field is valid.
  */
  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  }

  
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return;
    }
    
    /*
    enteredAge was collected from an input and is 
    therefore a string. JS allows you to compare strings
    and numbers, but it's a better practice to force-
    convert to a number so we're comparing two values
    of the same type.
    */
    if(+enteredAge < 1){
      return;
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };


  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>

        <Button type="submit" onClick={addUserHandler}>Add User</Button>
      
      </form>
    </Card>
  );
};

export default NewUser;
