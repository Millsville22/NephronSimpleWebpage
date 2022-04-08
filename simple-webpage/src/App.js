import React, { useState } from 'react';
import LoginPage from './component/pages/LoginPage'

function App() {

  // Credentials to login with
  const adminUser = {
    email: "nephron@pharma.com",
    password: "nephron803"
  }

  const [user, setUser] = useState({email: "", userName: "", password: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        email: details.email,
        userName: details.userName
      });
    }
    else {
      console.log("Wrong email and/or password");
      setError("Wrong email and/or password");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ email: "", userName: "" });
  }


  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="greeting">
          <h2>Greetings, <span>{user.userName}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>

      ) : (
        <LoginPage Login={Login} error={error}/>
      )}

  
    </div>
  );
}

export default App;
