import { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";



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
};

const DEMO_USER = {
  username: "testuser",
  password: "password",
};

function LoginForm({ login }) {
  const [formData, setFormData] = useState(initialFormData);
  const history = useHistory();

  /** Handle input changes and show them on input */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  /** Handle submitting the Login Form */
  // TODO: Consider all ajax-y stuff to be handled in effects
  async function handleSubmit(evt) {
    evt.preventDefault();
    const result = await login(formData);
    setFormData(initialFormData);

    if (result.success === true) {
      history.push("/companies");
    } else {
      // TODO: need to change to something more presentable
      alert(result.errors.join(""));
    }
  }

  /** Helper to quickly login a demo user on click, currently
   * a little bugged */
  async function handleDemo(evt) {
    evt.preventDefault();
    setFormData(DEMO_USER);
    const result = await login(formData);

    if (result.success === true) {
      history.push("/companies");
    } else {
      // will change to something more presentable
      // alert(result.errors.join(""));
    }
  }

  /* Helper function for form validation */
  function notDone() {
    const invalidInputArr = Object.keys(formData).filter((key) => {
      return formData[key].length < 1;
    });

    return invalidInputArr.length > 0;
  }

  return (
    <Container>

        <h2 className="my-4">Log In</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group controlId="username" 
                    className=" d-flex align-items-center justify-content-center">
          <Form.Label className="px-2">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            defaultValue="testuser"
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

        <Button variant="primary" type="submit" disabled={notDone()}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
