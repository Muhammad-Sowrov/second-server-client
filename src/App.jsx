import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email}
    console.log(user);
  }

  return (
    <>
      <h1>Users Management</h1>
      <h3>Users:{users.length}</h3>
      <form onSubmit={handleForm}>
        <input type="text" name="name" /> <br />
        <input type="text" name="email" /> <br />
        <input type="submit" value="Submit" />
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id}: {user.name} : {user.email}</p>)
        }
      </div>
    </>
  );
}

export default App;
