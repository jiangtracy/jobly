import { useState } from "react";
import { useHistory } from "react-router-dom";

/* 
* Renders the Login form
*
* props:
* - login: fn to be called in parent
* - errors: array, string errors
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

function LoginForm({ login, errors }){
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
  
    /** Handle submitting the Login Form */  
    // TODO: Consider all ajax-y stuff to be handled in effects
    async function handleSubmit(evt) {
      evt.preventDefault();
      const result = await login(formData);
      setFormData(initialFormData);

      if (result.success === true) {
        history.push("/companies") 
      } else {
        // will change to something more presentable
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
      <button disabled={notDone()} >Submit</button>
    </form>
  )
}

export default LoginForm;