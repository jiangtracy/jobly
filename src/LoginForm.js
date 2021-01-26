/* 
* Renders the Login form
*
* props:
* -updatedLoginForm: fn to be called in parent
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

function LoginForm({ updateLoginForm }){
  return (
    <div>
      Login Form
    </div>
  )
}

export default LoginForm;