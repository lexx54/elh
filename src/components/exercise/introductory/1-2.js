import {useState} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Functions from "../../../functions"

const Form1 = ({answerList}) => {
  const [answer1,setAnswer1]=useState("");
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
    a0:(v)=>{setCheck1(v)},
    a1:(v)=>{setCheck2(v)},
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
          <option value="i">I</option>
          <option value="the">The</option>
          <option value="this">This</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      is a car
      </Col>
      {check1 && <i className="fas fa-check-circle"></i>}
        
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">2-</Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer2}
        id="answer2" onChange={(e)=>Functions.handleValue(e,setAnswer2)}>
          <option value=""></option>
          <option value="we">I</option>
          <option value="that">That</option>
          <option value="the">The</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      is the Key
      </Col>
      {check2 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2 mb-2">
      <Col xs="auto">3-</Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer3}
          id="answer3" onChange={(e)=>Functions.handleValue(e,setAnswer3)}>
          <option value=""></option>
          <option value="he">He</option>
          <option value="that">That</option>
          <option value="i">I</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      am a teacher
      </Col>
      {check3 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">4-</Col>
      <Col xs="auto">
      That is
      </Col>
      <Col xs="3" sm="2">
        <Form.Control value={answer4} id="answer4" 
          onChange={(e)=>Functions.handleValue(e,setAnswer4)}>
        </Form.Control>
      </Col>
      <Col xs="auto">
        animal
      </Col>
      {check4 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">5-</Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer5} 
          id="answer5" onChange={(e)=>Functions.handleValue(e,setAnswer5)}>
            <option value=""></option>
          <option value="this">This</option>
          <option value="she">She</option>
          <option value="those">Those</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      are tigers
      </Col>
      {check5 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">6-</Col>
      <Col xs="auto">You</Col>
      <Col xs="3" sm="2">
        <Form.Control value={answer6} id="answer6" 
        onChange={(e)=>Functions.handleValue(e,setAnswer6)} />
      </Col>
      
      <Col xs="auto">
      students
      </Col>
      {check6 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">7-</Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer7}
          id="answer7" onChange={(e)=>Functions.handleValue(e,setAnswer7)}>
            <option value=""></option>
          <option value="she">She</option>
          <option value="tha">That</option>
          <option value="we">We</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      are men
      </Col>
      {check7 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">8-</Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer8} 
          id="answer8" onChange={(e)=>Functions.handleValue(e,setAnswer8)}> 
          <option value=""></option>
          <option value="these">These</option>
          <option value="that">That</option>
          <option value="you">You</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      are airplanes
      </Col>
      {check8 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">9-</Col>
      <Col xs="auto">He</Col>
      <Col xs="3" sm="2">
        <Form.Control value={answer9} id="answer9" 
        onChange={(e)=>Functions.handleValue(e,setAnswer9)} />
      </Col>
      <Col xs="auto">
      a lawyer
      </Col>
      {check9 && <i className="fas fa-check-circle"></i>}  
    </Form.Row>

    <Form.Row className="align-items-center mb-2">
      <Col xs="auto">10-</Col>
      <Col xs="auto">She is</Col>
      <Col xs="auto">
        <Form.Control as="select" value={answer10} 
          id="answer10" onChange={(e)=>Functions.handleValue(e,setAnswer10)}>
            <option value=""></option>
          <option value="that">That</option>
          <option value="the">The</option>
          <option value="is">Is</option>
        </Form.Control>
      </Col>
      <Col xs="auto">
      singer
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

export default Form1;