import React , {useState} from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import AuthService from "../../services/auth.service"

const Up = (props) => {
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const [isTeacher,setIsTeacher]=useState(false);
  const [level,setlevel]=useState("");
  const [successful, setSuccessful] = useState(false);
  const [message,setMessage]=useState(undefined);

const handleValues = (e) => {
  switch(e.target.id){
    case "fname": setFirstname(e.target.value);
    break;
    case "lname": setLastname(e.target.value);
    break;
    case "username": setUsername(e.target.value);
    break;
    case "pass": setPassword(e.target.value);
    break;
    case "email": setEmail(e.target.value);
    break;
    case "level": setlevel(e.target.value);
    break;
    case "teacher": setIsTeacher(e.target.checked);
    break;
    default:console.log("do not exist");
    break;
  }
}

  const sendData= (e) =>{
    const teacherRole=isTeacher?["teacher"]:"";
    e.preventDefault();
    console.log("sending data to server");
    console.log(firstname,lastname,username,email,password,level,teacherRole)
    AuthService
      .register(firstname,lastname,username,email,password,level,teacherRole)
      .then((response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  }

  return(
    <Container className="py-3">
      {message && (<div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>)}
    <Form onSubmit={sendData}>
      {!successful && (
        <>
            <Row>
            <Form.Group as={Col}>
              <Form.Label >First Name: </Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fas fa-address-book"></i> 
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control placeholder="e.g Jose" 
                  onChange={handleValues} id="fname" value={firstname}
                  required title="Letters Only" pattern="^[a-zA-Z]+"></Form.Control>
              </InputGroup>
            </Form.Group>
    
            <Form.Group as ={Col}>
              <Form.Label >Last Name: </Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fas fa-address-book"></i> 
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control placeholder="e.g Lopez" 
                  onChange={handleValues} id="lname" value={lastname}
                  required title="Letters Only" pattern="^[a-zA-Z]+"></Form.Control>
              </InputGroup>
            </Form.Group>
          </Row>
    
          <Row>
          <Form.Group as={Col}>
            <Form.Label >User </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                <i className="fas fa-user"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control placeholder="e.g Jos333"
                onChange={handleValues} id="username" value={username}
                required title="Letters and Numbers Only max 10 character" 
                pattern="^[a-zA-Z0-9]{1,10}"></Form.Control>
            </InputGroup>
            <Form.Text className="text-muted">It will be use to Sign In</Form.Text>
          </Form.Group>
    
          <Form.Group as={Col}>
            <Form.Label >Password </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                <i className="fas fa-unlock"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="password"
                onChange={handleValues} id="pass" value={password}
                required title="Letters and Numbers Only max 10 character min 6" 
                pattern="^[a-zA-Z0-9]{6,8}"></Form.Control>
            </InputGroup>
          </Form.Group>
          </Row>
          
          <Row>
          <Form.Group as={Col}>
            <Form.Label>Email: </Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                <i className="fas fa-envelope"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control type="email" placeholder="e.g example@server.com"
                onChange={handleValues} id="email" value={email}
                required title="Follow the email format" 
                pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"></Form.Control>
            </InputGroup>
          </Form.Group>
          {!isTeacher && (<Form.Group as={Col}>
            <Form.Label>Level: </Form.Label>
            <Form.Control as="select" value={level} onChange={handleValues} id="level">
              <option value="">choose one</option>
              <option value="introductory">Introductory</option>
              <option value="basic">Basic</option>
              <option value="intermediate">Intermediate</option>
              <option value="pre-advanced">Pre Advanced</option>
              <option value="advanced">Advanced</option>
              <option value="summit I">Summit 1</option>
              <option value="summit II">Summit 2</option>
            </Form.Control>
          </Form.Group>)}
          </Row>
          <Row>
          
          <Button variant="outline-primary" type="submit" className="col-2 ml-3">
            Sign up
          </Button>
          <Form.Check type="checkbox" label="are you a teacher?" id="teacher"
          inline checked={isTeacher} onChange={handleValues}
          className="ml-2"/>
          </Row>
        </>
      )}
    </Form>
    </Container>
  )
}

export default Up;