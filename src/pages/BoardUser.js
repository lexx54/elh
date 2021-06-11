import React, { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Dropdown from "react-bootstrap/Dropdown";
import {Switch,Route,useRouteMatch} from "react-router-dom";
import Footer from "../components/footer";

import UserService from "../services/user.service";

//testing 
import AuthService from "../services/auth.service";
import Functions from "../functions";
import Child from "../components/child"
const currentUser = AuthService.getCurrentUser();

const BoardUser = () => {
  const [content, setContent] = useState("");
  const [exercisesTitle,setExercisesTitle]=useState([]);
  const [answers,setAnswers]=useState([]);
  const size = Functions.useWindowSize();
  const {url,path} = useRouteMatch()
  //testing
  

  useEffect(() => {
    const bringData = async ()=>{
      try{
        const response = await UserService.getUserBoard(currentUser.level.id);
        for (const obj of response){
          setExercisesTitle(prev=>[...prev,obj.lesson]);
          setAnswers(prev=>[...prev,obj.answers]);
        }
      } catch(error){
        const _content = (error.response && error.response.data && error.response.data.message) 
          || error.message 
          ||error.toString();
        
        setContent(_content);
      }
    }

    bringData();
  },[]);


  return (
      <>
    <main className="container-fluid p-0 m-0 exercise-panel">
      
      <div className="row g-0 mr-0">
        <section className="col-9 col-sm-10 p-0 ">
        <h3 className="bg-dark p-3 text-center text-primary">{currentUser.level.name.replace(/^\w/,(l)=>l.toUpperCase())}</h3>

        <article className="ml-3 ml-md-5 px-md-5" >
          <Switch>
            <Route path={`${url}/:id`}>
              <Child user={currentUser} list={answers} />
            </Route> 
          </Switch>
        </article>
        </section>
        {
          size.width < 720 
          ? (
          <Dropdown className="col p-0 bg-dark">
            <Dropdown.Toggle className="w-100 align-items-center pt-4 pb-3">
            <i className="fas fa-bars"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {
                exercisesTitle.map((title,id)=><Dropdown.Item key={id} href={`${path}/${title}`}>Exercises {title}</Dropdown.Item>)
              }
            </Dropdown.Menu>
          </Dropdown>
            ) 
          : (
          <Nav as="nav" className=" col flex-column p-0 bg-dark" aria-label="exam" >
            {
              exercisesTitle.map(
                (title,id)=>
                  <Nav.Item key={id} >
                    <Nav.Link href={`${path}/${title}`}>
                    Exercises {title}
                    </Nav.Link>
                  </Nav.Item>)
            }
        </Nav>)
        }
      </div>
    </main>
    <Footer /> 
    </>
    
  );
};

export default BoardUser;



