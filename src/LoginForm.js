/* 
* Renders the Login form
*
* props:
* -login: fn to be called in parent
*
* state: 
* - formData {username, password }
* 
* App -> Routes -> LoginForm
*/

const initialFormData = {
  username: "",
  password: "",
}

function LoginForm({ login }){
  return (
    <div>
      Login Form
    </div>
  )
}

export default LoginForm;