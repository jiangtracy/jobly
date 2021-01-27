/* 
* Renders the signup form
*
* props:
* -signup: fn to be called in parent
*
* state: 
* - formData {username, password, firstName, lastName, email}
* 
* App -> Routes -> SignupForm
*/

const initialFormData = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
}

function SignupForm({ signup }){
  return (
    <div>
      Signup Form
    </div>
  )
}

export default SignupForm;