import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Functions from "../../../functions"

const Form2 = ({answerList}) => {
  const [answer1,setAnswer1]=useState("")
  const [answer2,setAnswer2]=useState("");
  const [answer3,setAnswer3]=useState("");
  const [answer4,setAnswer4]=useState("");
  const [answer5,setAnswer5]=useState("");
  const [answer6,setAnswer6]=useState("");
  const [answer7,setAnswer7]=useState("");
  const [answer8,setAnswer8]=useState("");
  const [answer9,setAnswer9]=useState("");
  const [answer10,setAnswer10]=useState(""); 

  const [check1,setCheck1]=useState(undefined);
  const [check2,setCheck2]=useState(undefined);
  const [check3,setCheck3]=useState(undefined);
  const [check4,setCheck4]=useState(undefined);
  const [check5,setCheck5]=useState(undefined);
  const [check6,setCheck6]=useState(undefined);
  const [check7,setCheck7]=useState(undefined);
  const [check8,setCheck8]=useState(undefined);
  const [check9,setCheck9]=useState(undefined);
  const [check10,setCheck10]=useState(undefined);

  const [message,setMessage]=useState("");
  const [pass,setPass]=useState(false);

const compareAnswers = ()=>{
  const answerValues = [answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10];
  const checkValues = {
    a0:(v)=>setCheck1(v),
    a1:(v)=>setCheck2(v),
    a2:(v)=>setCheck3(v),
    a3:(v)=>setCheck4(v),
    a4:(v)=>setCheck5(v),
    a5:(v)=>setCheck6(v),
    a6:(v)=>setCheck7(v),
    a7:(v)=>setCheck8(v),
    a8:(v)=>setCheck9(v),
    a9:(v)=>setCheck10(v)
  };
let countCorrect=0;

  for (let i = 0 ; i<=9; i++){
    if (answerList[i]===answerValues[i]){
      checkValues[`a${i}`](true)
      countCorrect++;
    } else{
      checkValues[`a${i}`](false)
    }
  }
  if (countCorrect===10){
    setMessage("You did it, All answers are correct");
    setPass(true);
  } else{
    setMessage(`Almost there you fail ${10-countCorrect}`);
    setPass(false);
  }
}



const handleSubmit = e =>{
  e.preventDefault();
  console.log({answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10})
  compareAnswers()
}

  return (
  <Form className="container" onSubmit={handleSubmit}>
  {message && <Alert variant={pass?"success":"danger"}>{message}</Alert>}
    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">1-</Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer1}
          id="answer1" onChange={(e)=>Functions.handleValue(e,setAnswer1)}>
          <option value=""></option>
          <option value="it">It</option>
          <option value="what">What</option>
          <option value="who">Who</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      is he?
      </Col>
      {check1 && <i className="fas fa-check-circle"></i>}
        
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">2-</Col>
      <Col xs="auto">
      Maria is a
      </Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer2}
        id="answer2" onChange={(e)=>Functions.handleValue(e,setAnswer2)}>
          <option value=""></option>
          <option value="female">Female</option>
          <option value="cat">Cat</option>
          <option value="lawyer">Lawyer</option>
        </Form.Control>
      </Col>
      {check2 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2 mb-2">
      <Col xs="auto">3-</Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer3}
          id="answer3" onChange={(e)=>Functions.handleValue(e,setAnswer3)}>
          <option value=""></option>
          <option value="who">Who</option>
          <option value="what">What</option>
          <option value="that">That</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      is a mailman?
      </Col>
      {check3 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">4-</Col>
      <Col xs="auto">
      I am
      </Col>
      <Col xs="3" sm="2">
        <Form.Control value={answer4} id="answer4" 
          onChange={(e)=>Functions.handleValue(e,setAnswer4)}>
        </Form.Control>
      </Col>
      <Col xs="auto">
        Venezuela
      </Col>
      {check4 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">5-</Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer5} 
          id="answer5" onChange={(e)=>Functions.handleValue(e,setAnswer5)}>
            <option value=""></option>
          <option value="i">I</option>
          <option value="you">You</option>
          <option value="she">She</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      are Colombian
      </Col>
      {check5 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">6-</Col>
      <Col xs="3" sm="2">
        <Form.Control as="select" value={answer6} id="answer6" 
          onChange={(e)=>Functions.handleValue(e,setAnswer6)}>
          <option value=""></option>
          <option value="what nationality"> What nationality</option>
          <option value="where">Where</option>
          <option value="this"> This</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      is Donald trump?
      </Col>
      {check6 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">7-</Col>
      <Col xs="auto">
      My cousin is
      </Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer7}
          id="answer7" onChange={(e)=>Functions.handleValue(e,setAnswer7)}>
            <option value=""></option>
          <option value="young">Young</option>
          <option value="brazilian">Brazilian</option>
          <option value="he">He</option>
        </Form.Control>
      </Col>
      
      {check7 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">8-</Col>
      <Col xs="auto">we</Col>
      <Col xs="3" sm="2">
        <Form.Control value={answer8}  
          id="answer8" onChange={(e)=>Functions.handleValue(e,setAnswer8)}> 
        </Form.Control>
      </Col>
      <Col xs="auto">
      from Canada
      </Col>
      {check8 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">9-</Col>
      <Col xs="auto">What is your favourite color?</Col>
      <Col xs="auto">my favourite color is</Col>
      <Col xs="auto">
        <Form.Control value={answer9} id="answer9"  
          onChange={(e)=>Functions.handleValue(e,setAnswer9)} as="select">
          <option value=""></option>
          <option value="red">Red</option>
          <option value="dog">Dog</option>
          <option value="she">She</option>
        </Form.Control>
      </Col>

      {check9 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">10-</Col>
      
      <Col xs="auto">
        <Form.Control as="select" value={answer10} 
          id="answer10" onChange={(e)=>Functions.handleValue(e,setAnswer10)}>
            <option value=""></option>
          <option value="that">That</option>
          <option value="the">The</option>
          <option value="what">What</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      nationality are they?
      </Col>
      {check10 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="pb-2">
      <Col className="offset-8">
        <Button type="submit">Send</Button>
      </Col>
    </Form.Row>
  </Form>
)}

export default Form2;