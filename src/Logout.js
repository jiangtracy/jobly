import { useHistory, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

/*
 * Renders the Logout Component
 *
 * props:
 * -logout: fn to be called in parent
 * - username: string of user's name
 *
 * state: none
 *
 *
 * Navigation -> Logout
 */

function Logout({ logout, username }) {
  const history = useHistory();

  /** Calls parent fn to logout current user */  
  async function handleClick() {
    await logout();
    history.push("/");
  }

  return (
    <Nav.Link as="div">
      <NavLink to="/" onClick={handleClick}>Logout {username}</NavLink>
    </Nav.Link>
  );
}

export default Logout;
