import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Navigation from './Navigation';
import JoblyApi from './api';
import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import jwt from 'jsonwebtoken';

/** Bootstrap Components*/  
import Container from 'react-bootstrap/Container';


/** App renders list of routes for Jobly frontend
 * NOTE: Using token at top level and passing down as props to let
 * Components know if user is logged in / if it should render
 *
 * props: none
 *
 * state: 
 * - token: (string) representing logged in user
 * - currentUserData: obj like 
 *    { username, firstName, lastName, email, isAdmin, jobs }
 * - username: string
 * - errors: array, error strings
 * 
 * 
 * App -> Navigation
 *        Routes
 **/
function App() {
  const [errors, setErrors] = useState([])
  const [token, setToken] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);

  console.log("currentUserData", currentUserData);

  /** Every time token is updated,
   * update API token and then fetch current user
   **/
  useEffect(
    function fetchCurrentUserOnTokenChange() {
      async function fetchCurrentUser() {
        // using jwt to get username
        const usernameObj = jwt.decode(token);
        const user = await JoblyApi.getUser(usernameObj.username);
        setCurrentUserData(user);

        // reset token in frontend null so effect doesn't run
        // again until another user logs in / signs up
        setToken(null);
      }
      if (token !== null) {
        JoblyApi.token = token;
        fetchCurrentUser();
      } else {
        JoblyApi.token = null;
        // cannot set currentUser to null here because it is
        // erasing our current user after effect function runs
        // where token is to null
      }
    },
    [token]
  );

  /** signup user with form data and API call */
  async function signup(userFormData) {
    const token = await JoblyApi.register(userFormData);
    setToken(token);
  }
  /** login user using form data and API call */
  async function login(userFormData) {
    let newToken;
    try {
      newToken = await JoblyApi.login(userFormData); 
      setToken(newToken);
    } catch (err) {
      setErrors([...err]);
    }
  }

  /** Logout current user */  
  async function logout() {
    setToken(null);
    // NOTE: Moving this out to effect
    setCurrentUserData(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Navigation
            currentUser={currentUserData}  
            logout={logout}
          />
          <Routes
            currentUser={currentUserData}
            login={login}
            signup={signup}
            errors={errors}
          />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
