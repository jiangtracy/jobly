import Logout from './Logout';
import jwt from "jsonwebtoken";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

/** 
 * Navigation renders list of NavLinks to different routes of Jobly
 * 
 * props:
 * - currentUser: obj like, 
 *   { username, firstName, lastName, email, isAdmin, jobs }
 * - username, string of user's name
 * 
 * state: none
 * 
 * App -> Navigation
 * */

//use active class

function Navigation({ logout, username }) {

	/** renders signup / login links */
	function renderLoggedOutLinks() {
		return (
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/login">Login</Nav.Link>
					<Nav.Link href="/signup">Signup</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		);
	}

	/** Helper method renders NavLinks for logged in user */

	function renderLoggedInLinks(username) {
		return (
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/companies">Companies</Nav.Link>
					<Nav.Link href="/jobs">Jobs</Nav.Link>
					<Nav.Link href="/profile">Profile</Nav.Link>
					<Logout logout={logout} username={username}/>
				</Nav>
			</Navbar.Collapse>
		);
  }
  
  /** Helper method checks for a user and decides which links to render */
  function elementsToRender() {
    console.debug("username in nav :", username);
    if (username !== null) {
        return renderLoggedInLinks(username);
    } else {
      return renderLoggedOutLinks();
    }
  }  

	return (
		<Navbar bg="light" expand="lg">
			<Nav.Link href="/">Jobly</Nav.Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
      {elementsToRender()}
			{/* {currentUser !== null ? renderLoggedInLinks() : renderLoggedOutLinks()} */}
		</Navbar>
	);
}

export default Navigation;
