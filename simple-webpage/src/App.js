import logo from './logo.svg';
//import './App.css';
import React, { useState } from 'react';
import LoginPage from './component/pages/LoginPage'

function App() {

  const [user, setUser] = useState({email: "", userName: "", password: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = () => {
    console.log("Logout");
  }


  return (
    <div className="App">
      {(user.password != "") ? (
        <div className="greeting">
          <h2>Greetings, <span>{user.userName}</span></h2>
          <button>Logout</button>
        </div>

      ) : (
        <LoginPage />
      )}

  
    </div>
  );
}

export default App;
