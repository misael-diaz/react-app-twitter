import { Link } from "react-router-dom";
import { useState } from "react";

// Note: using React's logo instead of Twitter's for demo purposes
import logo from "../../../assets/img/react-logo.svg";

const Signup = () => {

  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmation: ""		// password-confirmation
    }
  );

  const [message, setMessage] = useState({});

  const handleClick = () => {

    for (const prop in user)
    {

      if (user[prop] === "")
      {

	let msg = "";
	if (prop !== "confirmation")
	{
	  msg = `${prop} was not given`;
	}
	else
	{
	  msg = "password confirmation was not given";
	}

	const cls = "error";
	setMessage({ class: cls, content: msg });
	return;

      }

    }

    const cls = "success";
    const msg = "account has been been created";
    setMessage({ class: cls, content: msg });

  };

  return (
    <main className="container">
      <div>
	<header>
	  <p>
	    <Link to="/" className="link">
	      <img
		className="logo"
		src={ logo }
		alt="twitter-logo"
	      />
	    </Link>
	  </p>
	  <h1 className="title">Twitter</h1>
	  <h2 className="subtitle">Create an account</h2>
	</header>
	<section>
	  <form className="form">
	    <p className="name">
	      <label>Name</label>
	      <input
		type="text"
		className="input"
		placeholder="Name"
		onChange={
		  (event) => setUser(
		    {
		      name: event.target.value,
		      email: (user.email)? user.email : "",
		      username: (user.username)? user.username : "",
		      password: (user.password)? user.password : "",
		      confirmation: (user.confirmation)? user.confirmation : ""
		    }
		  )
		}
	      />
	    </p>
	    <p className="email">
	      <label>Username</label>
	      <input
		type="email"
		className="input"
		placeholder="Email"
		onChange={
		  (event) => setUser(
		    {
		      name: (user.name)? user.name : "",
		      email: event.target.value,
		      username: (user.username)? user.username : "",
		      password: (user.password)? user.password : "",
		      confirmation: (user.confirmation)? user.confirmation : ""
		    }
		  )
		}
	      />
	    </p>
	    <p className="username">
	      <label>Username</label>
	      <input
		type="text"
		className="input"
		placeholder="Username"
		onChange={
		  (event) => setUser(
		    {
		      name: (user.name)? user.name : "",
		      email: (user.email)? user.email : "",
		      username: event.target.value,
		      password: (user.password)? user.password : "",
		      confirmation: (user.confirmation)? user.confirmation : ""
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
		      name: (user.name)? user.name : "",
		      email: (user.email)? user.email : "",
		      username: (user.username)? user.username : "",
		      password: event.target.value,
		      confirmation: (user.confirmation)? user.confirmation : ""
		    }
		  )
		}
	      />
	    </p>
	    <p className="password-confirmation">
	      <label>Password Confirmation</label>
	      <input
		type="password"
		className="input"
		placeholder="Password Confirmation"
		onChange={
		  (event) => setUser(
		    {
		      name: (user.name)? user.name : "",
		      email: (user.email)? user.email : "",
		      username: (user.username)? user.username : "",
		      password: (user.password)? user.password : "",
		      confirmation: event.target.value
		    }
		  )
		}
	      />
	    </p>
	  </form>
	</section>
	<footer>
	  {
	    // informs user if the signup has been successful
	  }
	  <div className={ message.class }>{ message.content }</div>
	  <p>
	    <button
	      type="button"
	      className="button"
	      onClick={ handleClick }
	    >
	      Sign Up
	    </button>
	  </p>
	  <p className="helper-text center">
	    Already have an account? <Link to="/login" className="link">Login</Link>
	  </p>
	</footer>
      </div>
    </main>
  );
};

export default Signup;

/*

source: index.jsx						March 24, 2023
author: @misael-diaz

Synopsis:
Defines the SignUp Component of the React Twitter App.
Based on @jestrade's front-end development course and GitHub repository (reference [0]).

Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

References:
[0] https://github.com/jestrade/cec-twitter

*/
