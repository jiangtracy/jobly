import './App.css';
import Routes from './Routes';
import Navigation from './Navigation';
import JoblyApi from './api';
import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";


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
  const [ token, setToken] = useState(null);
	const [ userAuthData, setUserAuthData ] = useState(null);
	const [ signupFormData, setSignupFormData ] = useState(null);
	const [ loginFormData, setLoginFormData ] = useState(null);
	

	//Every time SignupForm is submitted, fetch token
	useEffect(
		function fetchTokenOnSignup(userFormData) {
			async function fetchToken() {
				const token = await JoblyApi.register(userFormData);
				setUserAuthData({
          token: token,
          username: userFormData.username,
        });

				// reset signupFormData so effect doesn't run again
				// until next signup form submission
				setSignupFormData(null);
			}
			if (signupFormData !== null) {
				fetchToken();
			}
		},
		[ signupFormData ]
	);

	//Every time LoginForm is submitted, fetch token
	useEffect(
		function fetchTokenOnLogin(userFormData) {
			async function fetchToken() {
				const token = await JoblyApi.login(userFormData);
				setUserAuthData({
          token: token,
          username: userFormData.username,
        });


				// reset LoginFormData so effect doesn't run again
				// until next Login form submission
				setLoginFormData(null);
			}
			if (loginFormData !== null) {
				fetchToken();
			}
		},
		[ loginFormData ]
  );


	/** updateSignup updates user form data to be used in API call */
	function updateSignupForm(userFormData) {
		setSignupFormData({ ...userFormData });
	}
	/** updateLogin updates user form data to be used in API call */
	function updateLoginForm(userFormData) {
		setLoginFormData({ ...userFormData });
	}

	return (
		<div className="App">
			<BrowserRouter>
				<Navigation userAuthData={userAuthData} />
        <Routes 
          userAuthData={userAuthData}
          updateLoginForm={updateLoginForm} 
          updateSignupForm={updateSignupForm} 
        />
			</BrowserRouter>
		</div>
	);
}

export default App;
