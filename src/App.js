import "./App.css";
import Routes from "/Routes";
import Navigation from "./Navigation";
import JoblyApi from "./api";
import { useState, useEffect } from 'react';

/** App renders list of routes for Jobly frontend
 * NOTE: Using token at top level and passing down as props to let
 * Components know if user is logged in / if it should render
 *
 * props: none
 *
 * state: 
 * token - (string) representing logged in user
 * userFormData - obj like { username, password, firstName, lastName, email }
 * 
 * 
 * App -> Navigation
 *        Routes
 **/
function App() {
  const [token, setToken ] = useState(null);
  const [signupFormData, setSignupFormData] = useState(null);

  useEffect(function fetchTokenOnSignup(userFormData) {
    
    if (signupFormData !== null) {
      const token = await JoblyApi.register(userFormData);
      setToken(token);

      // reset signupFormData so effect doesn't run again 
      // until next signup form submission
      setSignupFormData(null);
    }

  }, [signupFormData]);

  /** updateSignup updates user form data to be used in API call */
  function updateSignupForm(userFormData) {
    setSignupFormData({...userFormData});
  }  
  
  return (
    <div className="App">
      <Navigation token={token}/>
      <Routes token={token}/>
    </div>
  );
}

export default App;
