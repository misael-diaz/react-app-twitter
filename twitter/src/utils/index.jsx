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

const utils = {
  hasWhitespace,
  isInvalidName,
  isInvalidEmail,
  isInvalidPassword,
  isWeakPassword
};

export default utils;

/*

source: index.jsx						April 20, 2023
author: @misael-diaz

Synopsis:
Defines the Utilities of the React Twitter App.
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
