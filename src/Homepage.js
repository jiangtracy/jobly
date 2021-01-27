import { Link } from 'react-router-dom';

/** 
 * Homepage 
 * 
 * props: 
 * - currentUser: either null or obj like,
 *     { username, firstName, lastName, email, isAdmin, jobs }
 * 
 * state: none
 * 
 * 
 * App -> Routes -> Homepage
 * */

 function Homepage( {currentUser}) {
  return (
    currentUser ?
    (<div>Hello {currentUser.username} </div>)
    :
    (<div>
      <h3>Welcome to Jobly</h3>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </div>)
  )
 }

 export default Homepage;