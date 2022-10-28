import React, {useState} from "react";
import classes from "./NewUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button";

const NewUser = (props) => {
  //need state to capture user input
  const[enteredUsername, setEnteredUsername] = useState('');
  const[enteredAge, setEnteredAge] = useState('');
  
  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  }
  
  const addUserHandler = (event) => {
    event.preventDefault();
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
