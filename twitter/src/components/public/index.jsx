import { Link } from "react-router-dom";

// Note: using React's logo instead of Twitter's for demo purposes
import logo from "../../assets/img/react-logo.svg";
import whitelogo from "../../assets/img/react-logo.svg";

const Public = () => {

  return (
    <main className="index-container">
      <div className="left">
	<img
	  className="big-logo"
	  src={ whitelogo }
	  alt="react-logo"
	/>
      </div>
      <div className="rigth">
	<div>
	  <header>
	    <p className="center">
	      <img
		className="logo main-logo"
		src={ logo }
		alt="react-logo"
	      />
	    </p>
	    <h1 className="subtitle">Welcome to Twitter</h1>
	  </header>
	  <section>
	    <p><Link to="/login" className="secondary-button">Login Now</Link></p>
	    <p>
	      Don't have an account?
	      <Link to="/signup" className="link"> Join free today </Link>
	    </p>
	    <p>
	      <Link to="/signup" className="secondary-button smaller-vspace">
		Sign Up
	      </Link>
	    </p>
	  </section>
	</div>
      </div>
    </main>
  );
};

export default Public;

/*

source: index.jsx						March 23, 2023
author: @misael-diaz

Synopsis:
Defines the Public Component of the React Twitter App.
Based on @jestrade's front-end development course and GitHub repository (reference [0]).

Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

References:
[0] https://github.com/jestrade/cec-twitter

*/
