import { Link } from "react-router-dom";
import { useState } from "react";

// Note: using React's logo instead of Twitter's for demo purposes
import logo from "../../../assets/img/react-logo.svg";

// temporary user credentials for testing
const USERNAME = "admin";
const PASSWORD = "4dm1n";

const Login = () => {

  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState({});

  const handleClick = () => {

    const { username, password } = user;

    if (username === "" || password === "")
    {
      const cls = "error";
      const msg = "user must input their username and password";
      setMessage({ class: cls, content: msg });
      return;
    }

    if (username === USERNAME && password === PASSWORD)
    {
      const cls = "success";
      const msg = `welcome back ${username}!`;
      setMessage({ class: cls, content: msg });
    }
    else
    {
      const cls = "error";
      const msg = "invalid credentials";
      setMessage({ class: cls, content: msg });
    }

  };

  return (
    <main className="container">
      <div>
	<header>
	  <p>
	    <Link to="/">
	      <img
		className="logo"
		src={ logo }
		alt="twitter-logo"
	      />
	    </Link>
	  </p>
	  <h1 className="title">Twitter</h1>
	  <h2 className="subtitle">Login</h2>
	</header>
	<section>
	  <form className="form">
	    <p className="username">
	      <label>Email or Username</label>
	      <input
		type="text"
		className="input"
		placeholder="Username"
		onChange={
		  (event) => setUser(
		    {
		      username: event.target.value,
		      password: ""
		    }
		  )
		}
	      />
	    </p>
	    <p className="password">
	      <label>Password</label>
	      <input
		type="password"
		className="input"
		placeholder="Password"
		onChange={
		  (event) => setUser(
		    {
		      username: (user.username)? user.username : "",
		      password: event.target.value
		    }
		  )
		}
	      />
	    </p>
	  </form>
	</section>
	<footer>
	  {
	    // add link to password recovery page here
	  }
	  <p className="helper-text">Forgot Password?</p>
	  {
	    // informs user if the login has been successful
	  }
	  <div className={ message.class }>{ message.content }</div>
	  <p>
	    <button
	      type="button"
	      className="button"
	      onClick={ handleClick }
	    >
	      Login
	    </button>
	  </p>
	  {
	    // add link to sign up page here
	  }
	  <p className="helper-text center">
	    Don't have an account? Join free today
	  </p>
	</footer>
      </div>
    </main>
  );
};

export default Login;

/*

source: index.jsx						March 24, 2023
author: @misael-diaz

Synopsis:
Defines the Login Component of the React Twitter App.
Based on @jestrade's front-end development course and GitHub repository (reference [0]).

Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

References:
[0] https://github.com/jestrade/cec-twitter

*/


/*

TODO:
[ ] add signup page
[ ] add password recovery page
[ ] link login page to signup and password-recovery pages
[ ] add the following temporary features for testing:
    [ ] save the user credentials in the local storage (during signup)
    [ ] read stored user credentials in the local storage for validating user input
[ ] fetch user credentials from the back-end (implies removing them from local storage)

*/
