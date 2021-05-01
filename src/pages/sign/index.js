import React from 'react';
import Button from 'react-bootstrap/Button';
import { Route,Switch, Link,useRouteMatch} from "react-router-dom"
import In from './signIn';
import Up from './signUp'

const Sign = () =>{
  const {path,url}=useRouteMatch();
  return (
    <div className="sign-container">
      <div className="sign-left">
        <div>
          <Button variant="primary">
            <Link to={`${url}/up`} className="general-link">Sign Up</Link>
          </Button>
          <span></span>
          <Button>
            <Link to={`${url}/in`} className="general-link">Sign In</Link>
          </Button>
        </div>
      </div>

      <div className="sign-right">
      <Switch >
        <Route path={`${path}/up`} component={Up} />
        <Route path={`${path}/in`} component={In} />
      </Switch>

      </div>
    </div>
  )
}
export default Sign ;
