import { useState } from "react";
import { useHistory } from "react-router-dom";

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

  const [formData, setFormData ] = useState(initialFormData);
  const history = useHistory();

    /** Handle input changes and show them on input */  

    function handleChange(evt) {
      const { name, value  } = evt.target;
      setFormData( prevFormData => {
        return {
          ...prevFormData,
          [name] : value,
        }
      });
    }
  
    /** Handle submitting the Signup Form */  
    async function handleSubmit(evt) {
      evt.preventDefault();
      const result = await signup(formData);
      setFormData(initialFormData);
      
      if (result.success === true) {
        history.push("/companies") 
      } else {
        // TODO: need to change to something more presentable
        alert(result.errors.join(""));
      }
    }

    /* Helper function for form validation */

    function notDone() {
      const invalidInputArr = Object.keys(formData).filter( key => {
        return formData[key].length  < 1;
      });

      return invalidInputArr.length > 0;
    }

  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input 
          name="username" 
          id="username"
          value={formData.username}
          onChange={handleChange}
          required 
        />
      <label htmlFor="password">Password</label>
      <input 
          name="password" 
          id="password"
          value={formData.password}
          type="password"
          onChange={handleChange}
          required  
        />
      <label htmlFor="firstName">First Name</label>
      <input 
          name="firstName" 
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required  
        />
      <label htmlFor="lastName">Last Name</label>
      <input 
          name="lastName" 
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required  
        />
      <label htmlFor="email">Email</label>
      <input 
          name="email"
          type="email" 
          id="email"
          value={formData.email}
          onChange={handleChange}
          required  
        />
      <button disabled={notDone()} >Submit</button>
    </form>
  )
}

export default SignupForm;