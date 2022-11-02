import React, { useState, Fragment } from "react";
import NewUser from "./components/Users/NewUser";
import UsersList from "./components/Users/UsersList";

/*
This component contains the form for creating a new
user, as well as the list of users added.

We need a state to determine whether or not usersList
should be displayed.
*/

/*
We need to get the entered values from NewUser.js, put them
into an array of objects, and copy all the previous values
back in afterwards (with unShift function).

we can create an array that holds these values, which we
can feed into UsersList? YES but this needs to be a state
since the list will be updated with each user added to it.
*/

function App() {
  //this state will communicate with child to receive new user
  const [usersList, setUsersList] = useState([]);

  const saveUserHandler = (userName, userAge) => {
    /*This wil take user data passed into
    this function (from NewUser.js)
    
    In this case, userData is the newUser object
    from NewUser.js. Now we need to extract those
    props from userData into a new object, and 
    add it to usersList array, along with all previous
    items.
    */

    setUsersList((previousUsers) => {
      /*We actually create the object here, since it
      is being added to UsersList, with which we can 
      communicate here DIRECTLY.
      
      We need to directly communicate with UsersList since
      we're adding a key prop to each new object we create
      here. This key prop ultimately needs to end up in the
      actual <li> elements being generated in UsersList.js.

      We will be sending this object down to UsersList.js
      through the return statement below (along with all
      previous entries), since we're inside the state
      update function. The state gets fed back into
      usersList's users prop, which feeds it through its
      map function again and THAT is where we actually inject
      the key into the list item.
      */
      return [
        ...previousUsers,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <NewUser onSaveUser={saveUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
