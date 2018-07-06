import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { HashRouter, Link, Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


const App = () => {
  return (
    <div>
      <section>
        <h1>BenchBnB</h1>
        <GreetingContainer />
      </section>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
    </div>
  );
};

export default App;
