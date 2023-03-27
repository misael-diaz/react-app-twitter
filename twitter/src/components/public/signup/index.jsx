import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Note: using React's logo instead of Twitter's for demo purposes
import logo from "../../../assets/img/react-logo.svg";

const Signup = () => {

  const [user, setUser] = useState(
    {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmation: "",		// password-confirmation
      login: false
    }
  );

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

  const hasWhitespace = (str) => {

    const regex = /\s/;
    const match = (str.match(regex) || []);
    const spaces = match.length;
    return (spaces !== 0);

  };

  const isInvalidName = (str) => {

    const regex = /([A-Z][a-z]+)/;
    const match = (str.match(regex) || [[]]);
    return (match[0].length !== str.length);

  };

  const isInvalidPassword = (str) => {

    // eslint-disable-next-line
    const regex = /([-\.\w]+)/;
    const match = (str.match(regex) || [[]]);
    return (match[0].length !== str.length);

  };

  const isWeakPassword = (str) => {
    // checks for minimum password requirements

    const numbers = (str.match(/(?:[0-9])/g) || []).length;
    const symbols = (str.match(/(?:[-\._])/g) || []).length;	// eslint-disable-line
    const capital = (str.match(/(?:[A-Z])/g) || []).length;

    return (numbers === 0 || symbols === 0 || capital === 0)? true : false;

  };

  const isInvalidEmail = (str) => {
    // Returns true if the email does not have the form:
    //
    // 		firstName[.lastName][0-9]*@emailProvider.com[.country]
    //
    // where the .lastName, the digits, and the .country are optional sub-strings.
    // Note: see reference [5] for a more general regular expression

    const email = str.toLowerCase();
    // eslint-disable-next-line
    const re = /([a-z]+([-\._][a-z]+){0,1}[0-9]*@([a-z]+\.)+[a-z]{3}(\.[a-z]{2}){0,1})/;
    const match = (email.match(re) || [[]]);
    return (match[0].length !== str.length);

  };

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

      if (prop !== "confirmation" && prop !== "login")
      {

	if ( hasWhitespace(user[prop]) )
	{
	  const cls = "error";
	  const msg = `${prop} has whitespace`;
	  setMessage({ class: cls, content: msg });
	  return;
	}

      }

    }

    if (isInvalidName(user.name))
    {
      const cls = "error";
      const msg = "Name is not capitalized or has numbers and/or special characters";
      setMessage({ class: cls, content: msg });
      return;
    }

    if (isInvalidEmail(user.email))
    {
      const cls = "error";
      const msg = "invalid email, consider the following valid examples: " +
	"firstName@gmail.com, firstName17@gmail.com, firstName.lastName@gmail.com, " +
	"firstName-lastName@gmail.com, firstName_lastName@gmail.com, " +
	"firstName.lastName17@gmail.com, firstName.lastName@university.edu.co";
      setMessage({ class: cls, content: msg });
      return;
    }

    if (isInvalidPassword(user.password))
    {
      const cls = "error";
      const msg = "passwords can only contain alpha numeric characters, " +
	"underscores (_), periods (.), and hyphens (-)";
      setMessage({ class: cls, content: msg });
      return;
    }

    if (isWeakPassword(user.password))
    {
      const cls = "error";
      const msg = "passwords must contain capital letters, numbers, and " +
	"at least a period (.), an underscore (_), or a hyphen (-)";
      setMessage({ class: cls, content: msg });
      return;
    }

    if (user.password.length < 8 || user.password.length > 16)
    {
      const cls = "error";
      const msg = "passwords must be at least 8 and at most 16 characters long"
      setMessage({ class: cls, content: msg });
      return;
    }

    const { password, confirmation } = user;

    if (password !== confirmation)
    {
      const cls = "error";
      const msg = "passwords do not match";
      setMessage({ class: cls, content: msg });
      return;
    }

    const cls = "success";
    const msg = "account has been been created";
    setMessage({ class: cls, content: msg });

    localStorage.setItem("user", JSON.stringify(user));

    const delay = 2500;
    setTimeout( () => {
      window.location = "/login";
    }, delay);

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
		      ...user,
		      name: event.target.value
		    }
		  )
		}
	      />
	    </p>
	    <p className="email">
	      <label>Email</label>
	      <input
		type="email"
		className="input"
		placeholder="Email"
		onChange={
		  (event) => setUser(
		    {
		      ...user,
		      email: event.target.value
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
		      ...user,
		      username: event.target.value
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
		      ...user,
		      password: event.target.value
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
		      ...user,
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
[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
[2] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
[3] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[4] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags
[5] https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

*/
