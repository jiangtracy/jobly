import { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

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
    <Container>
      <h2 className="my-4">Sign Up</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username"
                    className=" d-flex align-items-center justify-content-center">
          <Form.Label className="px-2">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-50"
            required
          />
        </Form.Group>

        <Form.Group controlId="password"
                    className=" d-flex align-items-center justify-content-center">
          <Form.Label className="px-2">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            defaultValue="password"
            className="w-50"
            required
          />
        </Form.Group>

        <Form.Group controlId="firstName"
                    className=" d-flex align-items-center justify-content-center">
          <Form.Label className="px-2">First name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            defaultValue="test"
            className="w-50"
            required
          />
        </Form.Group>

        <Form.Group controlId="lastName"
                    className=" d-flex align-items-center justify-content-center">
          <Form.Label className="px-2">Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            defaultValue="test"
            className="w-50"
            required
          />
        </Form.Group>

        <Form.Group controlId="email"
                    className=" d-flex align-items-center justify-content-center">
          <Form.Label className="px-2">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            defaultValue="test@test.com"
            className="w-50"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={notDone()}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SignupForm;