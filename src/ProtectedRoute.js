import { Redirect } from 'react-router-dom';

/** Either render Children or a Redirect */  
function ProtectedRoute({children, currentUser}) {
  return currentUser ? children  : <Redirect to="/" />

}