import React from "react";
import NewUser from "./components/Users/NewUser";
import UsersList from "./components/Users/UsersList";

/*
This component contains the form for creating a new
user, as well as the list of users added.

Since we start off with no users in the list, the list
shouldn't be visible. It should only be visible after
adding a user. Because of this, we need a state which
will know whether or not to show the list, depending
on whether or not its length is equal to zero.

For this, we can just set up a ternary expression that will
only display the list if the state is equal to true.
*/

/*
We need to get the entered values from NewUser.js, put them
into an array of objects, and copy all the previous values
back in afterwards (with unShift function).

We can
*/

function App() {
  return (
    <div>
      <NewUser />
      <UsersList users={[]}/>
    </div>
  );
}

export default App;
