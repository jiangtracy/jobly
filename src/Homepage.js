import { Link } from 'react-router-dom';

/** 
 * Homepage 
 * 
 * props: userAuthData (either null, or an object like {
 * token, username})
 * 
 * state: none
 * 
 * 
 * App -> Routes -> Homepage
 * */

 function Homepage( {userAuthData}) {
  return (
    userAuthData ?
    (<div>Hello {userAuthData.username} </div>)
    :
    (<div>
      <h3>Welcome to Jobly</h3>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </div>)
  )
 }

 export default Homepage;