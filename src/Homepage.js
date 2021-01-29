import { Link } from 'react-router-dom';
import "./Homepage.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

 function Homepage({ currentUser }) {

  return (
    currentUser ?
    (
      <Container className="Homepage align-center">
        <h4>Hello {currentUser.username} </h4>
      </Container>
    )
    :
    (
      <Container className="Homepage align-center">
      
        <h3>Welcome to Jobly</h3>

        <Row className="Homepage-row">
          <Col>
            <Button variant="outline-primary">
              <Link to="/login">Login</Link>
            </Button>
          </Col>
          <Col>
            <Button variant="outline-primary">
              <Link to="/signup">Signup</Link>
            </Button>
          </Col>
        </Row>
        

       

      </Container>)
  )
 }

 export default Homepage;