import { useEffect } from "react";

const Private = () => {

  useEffect( () => {

    const item = localStorage.getItem("token");

    if (item == null)
    {
      window.location = "/";
    }
    else
    {
      localStorage.setItem("login", true);
    }

  }, []);

  const handleClick = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("login");
    window.location = "/";

  };

  return (
    <>
      <p>Welcome</p>
      <p><button type="button" onClick={ handleClick }>Logout</button></p>
    </>
  );
};

export default Private;

/*

source: index.jsx						March 25, 2023
author: @misael-diaz

Synopsis:
Defines the Private Component of the React Twitter App.
Based on @jestrade's front-end development course and GitHub repository (reference [0]).

Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

References:
[0] https://github.com/jestrade/cec-twitter

*/
