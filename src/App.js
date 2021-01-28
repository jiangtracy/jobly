import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Navigation from './Navigation';
import JoblyApi from './api';
import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import jwt from 'jsonwebtoken';
import useLocalStorage from './localStorageHook';

/** Bootstrap Components*/  
import Container from 'react-bootstrap/Container';


/** App renders list of routes for Jobly frontend
 * Using token at top level and passing down as props to let
 * Components know if user is logged in / if it should render
 *
 * props: none
 *
 * state: 
 * - token: (string) representing logged in user
 * - currentUserData: obj like 
 *    { username, firstName, lastName, email, isAdmin, jobs }
 * - username: string
 * 
 * 
 * App -> Navigation
 *        Routes
 **/
function App() {
  const [token, setToken ] = useLocalStorage();
  const [username, setUsername ] = useState( () => {
    if (token) {
      const name = jwt.decode(token).username;
      return name;
    } 
    return null;
  });
  const [currentUserData, setCurrentUserData] = useState(null);

  console.debug("currentUserData", currentUserData);
  console.debug("token :", token);
  console.debug("Checking localstorage on App render ", localStorage.getItem("token"));

  /** Every time token is updated,
   *  update API token and then fetch current user
   * 
   * Functionality: token on mount is loaded from localStorage and is either null 
   * or string.
   * on login/signup, token is updated, currentUser is decoded and set, 
   * and token is set back to null
   * useLocalStorage hook will store token in localStorage only if it is not null
   **/
  useEffect(
    function fetchCurrentUserOnTokenChange() {
      async function _fetchCurrentUser() {
        // using jwt to get username
        const usernameObj = jwt.decode(token);
        const user = await JoblyApi.getUser(usernameObj.username);
        setCurrentUserData(user);
        
        // on login, username set again so nav bar is updated
        // NOTE: smelly, we have two pieces of state right now but it's because
        // while we want to just watch the token, we need to set it to null
        // in order to not re-render every time.
        // TODO: Ask if there's a better way to avoid flickering
        // without keeping separate state for the username
        setUsername(usernameObj.username);

        // reset token in frontend to null so effect doesn't run
        // again until another user logs in / signs up
        setToken(null);
      }

      if (token === null ) {
        console.debug("token in effect: ", token);
        JoblyApi.token = null;
      } else {
        console.debug("token is not null? ", token);
        JoblyApi.token = token;
        _fetchCurrentUser();
      }
        // cannot set currentUser to null here because it is
        // erasing our current user after effect function runs
        // where token is to null
      // }
    },
    [token]
  );

  /** signup user with form data and API call */
  async function signup(userFormData) {
    let token;
    try {
      token = await JoblyApi.register(userFormData);
      setToken(token);
      return {
        success: true,
      };
    } catch (err) {
      return {
        success: false,
        errors: err,
      };
    }
  }
  /** login user using form data and API call */
  async function login(userFormData) {
    let newToken;
    try {
      newToken = await JoblyApi.login(userFormData);
      setToken(newToken);
      return {
        success: true,
      };
    } catch (err) {
      return {
        success: false,
        errors: err,
      };
    }
  }

  /** Logout current user, reset state,
   *  and reset token in localStorage to null */
  async function logout() {
    setToken(null);
    localStorage.setItem("token", null);
    setCurrentUserData(null);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Navigation currentUser={currentUserData} logout={logout} username={username} />
          <Routes
            username={username}
            currentUser={currentUserData}
            login={login}
            signup={signup}
          />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
