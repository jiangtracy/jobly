import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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

function Navigation({ currentUser, logout }) {
  console.debug("currentUser in navigation= ", currentUser);

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

	function renderLoggedInLinks() {
		return (
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/companies">Companies</Nav.Link>
					<Nav.Link href="/jobs">Jobs</Nav.Link>
					<Nav.Link href="/profile">Profile</Nav.Link>
					<Logout logout={logout} currentUser={currentUser}/>
				</Nav>
			</Navbar.Collapse>
		);
	}

	return (
		<Navbar bg="light" expand="lg">
			<Nav.Link href="/">Jobly</Nav.Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />

			{currentUser !== null ? renderLoggedInLinks() : renderLoggedOutLinks()}
		</Navbar>
	);
}

export default Navigation;
