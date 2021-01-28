import { useHistory } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

/*
 * Renders the Logout Component
 *
 * props:
 * -logout: fn to be called in parent
 *
 * state: none
 *
 *
 * Navigation -> Logout
 */

function Logout({ logout, currentUser }) {
  const history = useHistory();

  /** Calls parent fn to logout current user */  
  async function handleClick() {
    await logout();
    history.push("/");
  }

  return (
    <Nav.Link href="/" onClick={handleClick}>Logout {currentUser.username}</Nav.Link>
  );
}

export default Logout;
