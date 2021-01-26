import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import JoblyApi from "./api";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Companies from "./Companies";
import Jobs from "./Jobs";
import ProfileForm from "./ProfileForm";
import Homepage from "./Homepage";

/**
 * Routes for Jobly
 *
 * props: 
 * -updateSignupForm: fn to be called in App
 * -updateLoginForm: fn to be called in App
 * -userAuthData: an object like {token, username}
 * 
 * state: none
 *
 * App -> Routes ->
 *    ProfileForm, LoginForm, SignupForm
 *    HomePage
 *    Companies
 *    CompanyDetail
 *    Jobs
 *
 * TODO: Add routes above as we implement features
 **/

function Routes({updateSignupForm, updateLoginForm, userAuthData}) {

  const [ currentUserData, setCurrentUserData ] = useState(null);

  //Every time token changes, fetch currentUserData
	useEffect(
		function fetchCurrentUserOnTokenUpdate() {
			async function fetchCurrentUser() {
        const user = await JoblyApi.getUser(userAuthData.username);
        setCurrentUserData(user);
      }
      if(userAuthData) fetchCurrentUser();
		},
		[]
	);
    //add a redirect
  return (
   
      <Switch>
        <Route exact path="/signup">
          <SignupForm updateSignupForm={updateSignupForm} />
        </Route>
        <Route exact path="/login">
          <LoginForm updateLoginForm={updateLoginForm} />
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/profile">
          <ProfileForm userData={currentUserData}/>
        </Route>
        <Route exact path="/">
          <Homepage userAuthData={userAuthData}/>
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
   
  );
}

export default Routes;
