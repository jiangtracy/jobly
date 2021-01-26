import { NavLink } from 'react-router-dom';

/** 
 * Navigation renders list of NavLinks to different routes of Jobly
 * 
 * props: token? isLoggedIn?
 * 
 * state: none
 * 
 * TODO: Need to figure out how to confirm if user is logged in
 * 
 * App -> Navigation
 * */  

 //use active class 

function Navigation() {

  /** Helper method renders NavLinks for logged in user */  

  function renderLoggedInLinks() {
    return (
      <ul>
        <NavLink to="/companies">
          Companies
        </NavLink>
        <NavLink exact to="/jobs">
          Jobs
        </NavLink>
        <NavLink exact to="/profile">
          Profile
        </NavLink>
        <NavLink exact to="/logout">
          Log Out
        </NavLink>
      </ul>
    );
  }

  /** renders signup / login links */  
  function renderLoggedOutLinks() {
    return (
      <ul>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink exact to="/signup">
          Signup
        </NavLink>
      </ul>
    )
  }

  return (
    <nav>
      <div className="Navigation-Logo">
      <NavLink exact to="/">
          Jobly
        </NavLink>
      </div>
      {renderLoggedInLinks()}
      {renderLoggedOutLinks()}
    </nav>
  );
}

 export default Navigation;