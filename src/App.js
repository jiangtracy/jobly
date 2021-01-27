import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Navigation from './Navigation';
import JoblyApi from './api';
import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

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
 * 
 * 
 * App -> Navigation
 *        Routes
 * // TODO: decode the token with jwt.decode
 **/
function App() {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [currentUserData, setCurrentUserData] = useState(null);

  /** Every time token is updated,
   * update API token and then fetch current user
   **/
  useEffect(
    function fetchCurrentUserOnTokenChange() {
      async function fetchCurrentUser() {
        // NOTE: Could also use jwt to verify username 
        // but what the best choice? we are adding a state for username
        // for now
        const user = await JoblyApi.getUser(username);
        setCurrentUserData(user);

        // reset token in frontend null so effect doesn't run
        // again until another user logs in / signs up
        setToken(null);
      }
      if (token !== null) {
        JoblyApi.token = token;
        fetchCurrentUser();
      }
    },
    [token]
  );

  /** signup user with form data and API call */
  async function signup(userFormData) {
    const token = await JoblyApi.register(userFormData);
    setUsername(userFormData.username);
    setToken(token);
  }
  /** login user using form data and API call */
  async function login(userFormData) {
    const token = await JoblyApi.login(userFormData);
    setUsername(userFormData.username);
    setToken(token);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Navigation currentUser={currentUserData} />
          <Routes
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
