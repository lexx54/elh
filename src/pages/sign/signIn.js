import React , {useState} from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import AuthService from "../../services/auth.service";

const In = (props) => {
  const [user,setUser]=useState("");
  const [password,setPassword]=useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUser =(e)=>{
    setUser(e.target.value);
  }

  const handlePassword =(e)=>{
    setPassword(e.target.value);
  }

  const sendData = (e) =>{
    e.preventDefault();
    console.log("sending data to log In",{user,password})
    setUser("");
    setPassword("");
    setLoading(true);
    AuthService.login(user,password).then(
      () => {
        props.history.push("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
    setTimeout(()=>{setMessage("")},3000)
  }
  return(
    <Container className="py-3">
    <Form onSubmit={sendData}>
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
            onChange={handleUser} value={user}></Form.Control>
        </InputGroup>
      </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col}>
        <Form.Label >Password </Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
            <i className="fas fa-unlock"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control type="password" 
            onChange={handlePassword} value={password}></Form.Control>
        </InputGroup>
      </Form.Group>
      </Row>
     
      <Button variant="outline-primary" type="submit" className="">
      {loading ? (
                <span className="spinner-border spinner-border-sm  offset-1"></span>
              ):"Sign In"}
      </Button>
      
      {message && (
            <div className="form-group ">
              <div className="alert alert-danger w-50 mx-auto text-center" role="alert">
                {message}
              </div>
            </div>
          )}
      
      
    </Form>
    </Container>
  )
}

export default In;