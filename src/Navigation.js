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

function Navigation() {

  /** Helper method renders NavLinks for logged in user */  
  function renderLoggedInComponents() {
    return (
      <ul>
        <NavLink exact to="/companies">
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
  function renderLoggedOutComponents() {
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

      </div>
      {renderLoggedOutComponents()}
    </nav>
  );
}

 export default Navigation;