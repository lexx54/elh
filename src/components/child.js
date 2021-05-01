import {useParams} from 'react-router-dom';
import Practice from "./exercise";

const Child = ({user,list}) => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const levelName = user.level.name.replace(/^\w/,(l)=>l.toUpperCase());
  let formNumber="";
  let answerNumber=0;
  if (levelName==="Introductory" || levelName==="Intermediate"){
    switch (id) {
      case "1-2":formNumber="Form1";answerNumber=0;
      break;
      case "3-4":formNumber="Form2";answerNumber=1;
      break;
      default: console.log("do not exist")
      break;
    }
  } else if (levelName==="Basic"){
    switch(id){
      case "1":formNumber="Form1";
      break;
      default: console.log("do not exist")
      break;
    }
  } else {
    switch(id){
      case "1-4":formNumber="Form1";
      break;
      case "5-8":formNumber="Form2";
      break;
      case "9-12":formNumber="Form3";
      break;
      case "13-16":formNumber="Form4";
      break;
      case "16-20":formNumber="Form5";
      break;
      default: console.log("do not exist")
      break;
    }
  }
  const Component =  Practice[levelName][formNumber];

  return (
    <>
      <h3>Lesson {id}</h3>
      <Component answerList={list[answerNumber]} />
    </>
  );
}

export default Child;