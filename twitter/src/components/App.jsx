import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Public from "./public";
import Login from "./public/login";
import Signup from "./public/signup";

import "../css/style.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Public/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  }
]);

const App = () => {

  return (
    <>
      <RouterProvider router = { router }/>
    </>
  );

};

export default App;

/*

source: App.jsx							March 23, 2023
author: @misael-diaz

Synopsis:
Defines the React Twitter App Component.
Based on @jestrade's front-end development course and GitHub repository (reference [0]).

Copyright (c) 2023 Misael Diaz-Maldonado
This file is released under the GNU General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

References:
[0] https://github.com/jestrade/cec-twitter
[1] https://reactrouter.com/en/main/start/tutorial

*/
