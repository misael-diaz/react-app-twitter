import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Note: using React's logo instead of Twitter's for demo purposes
import logo from "../../../assets/img/react-logo.svg";

const Login = () => {

  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState({});

  useEffect( () => {

    const item = localStorage.getItem("user");

    if (item != null)
    {

      const storedUser = JSON.parse(item);
      const { login } = storedUser;

      if (login)
      {
	window.location = "/home";
      }

    }

  }, []);

  const handleClick = () => {

    const { username, password } = user;

    if (username === "" || password === "")
    {
      const cls = "error";
      const msg = "user must input their username and password";
      setMessage({ class: cls, content: msg });
      return;
    }

    const item = localStorage.getItem("user");

    if (item == null)
    {
      const cls = "error";
      const msg = "invalid credentials";
      setMessage({ class: cls, content: msg });
      return;
    }

    const storedUser = JSON.parse(item);

    if (username === storedUser.username && password === storedUser.password)
    {
      const cls = "success";
      const msg = `welcome back ${username}!`;
      setMessage({ class: cls, content: msg });

      storedUser.login = true;
      localStorage.setItem("user", JSON.stringify(storedUser));

      const delay = 2500;
      setTimeout( () => {
	window.location = "/home";
      }, delay);

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
		      password: (user.password)? user.password : ""
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
	    Don't have an account?
	  <Link to="/signup" className="link"> Join free today </Link>
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
[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

*/


/*

TODO:
[x] add signup page
[ ] add password recovery page
[ ] link login page to [x] signup and [ ] password-recovery pages
[x] add the following temporary features for testing:
    [x] save the user credentials in the local storage (during signup)
    [x] read stored user credentials in the local storage for validating user input
[ ] fetch user credentials from the back-end (implies removing them from local storage)

*/
