import { Route, Switch, BrowserRouter } from "react-router-dom";

/**
 * Routes for Jobly
 *
 * props: token? updateToken?
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

function Routes() {

  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup">
          <SignupForm updateSignupForm={updateSignupForm} />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
