import { NavLink } from 'react-router-dom';

/** 
 * Navigation renders list of NavLinks to different routes of Jobly
 * 
 * props:
 * - currentUser: obj like, 
 *   { username, firstName, lastName, email, isAdmin, jobs }
 * 
 * state: none
 * 
 * App -> Navigation
 * */  

 //use active class 

function Navigation({currentUser}) {

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
      { currentUser !== null ?
        renderLoggedInLinks() :
        renderLoggedOutLinks()
      }
    </nav>
  );
}

 export default Navigation;