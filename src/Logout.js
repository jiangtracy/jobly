import { useHistory } from "react-router-dom";

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
    <a onClick={handleClick}>Logout {currentUser.username}</a>
  );
}

export default Logout;
