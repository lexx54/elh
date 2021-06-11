import React, {useState,useEffect} from "react";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import AuthService from "./services/auth.service";
import "./styles/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegation from "./components/navegation";
import Members from "./pages/members";
import BoardUser from "./pages/BoardUser";
import BoardTeacher from "./pages/BoardTeacher";
import BoardAdmin from "./pages/BoardAdmin"
import Profile from "./pages/Profile";
import Home from "./pages/home";
import Sign from "./pages/sign";

const App = () =>{
  const [showTeacherBoard, setShowTeacherBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  //componentDidMount
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowTeacherBoard(user.roles.includes("ROLE_TEACHER"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  //function
  const logOut = () => {
    AuthService.logout();
  };

  //render
  return (
  <BrowserRouter>
    <Navegation 
    boards={
      {admin:showAdminBoard,teacher:showTeacherBoard,user:currentUser}
    }
    action={logOut}
    />

    <Switch>
      <Route exact path={["/","/home"]} component={Home} />
      <Route exact path="/members" component={Members} />
      <Route path="/sign" component={Sign} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/user" component={BoardUser} />
      <Route path="/teacher" component={BoardTeacher} />
      <Route path="/admin" component={BoardAdmin} />
    </Switch>
  </BrowserRouter>
)}

export default App;
