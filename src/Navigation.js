import { NavLink } from 'react-router-dom';
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

function Navigation({ currentUser }) {
	/** renders signup / login links */
	function renderLoggedOutLinks() {
		return (
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<NavLink to="/login">Login</NavLink>
					<NavLink to="/signup">Signup</NavLink>
				</Nav>
			</Navbar.Collapse>
		);
	}

	/** Helper method renders NavLinks for logged in user */

	function renderLoggedInLinks() {
		return (
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<NavLink to="/companies">Companies</NavLink>
					<NavLink to="/jobs">Jobs</NavLink>
					<NavLink to="/profile">Profile</NavLink>
					<NavLink to="/logout">Logout</NavLink>
				</Nav>
			</Navbar.Collapse>
		);
	}

	return (
		<Navbar bg="light" expand="lg">
			<NavLink to="/">Jobly</NavLink>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />

			{currentUser !== null ? renderLoggedInLinks() : renderLoggedOutLinks()}
		</Navbar>
	);
}

export default Navigation;
