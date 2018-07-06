import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  let sessionLink;
  if (props.currentUser) {
    sessionLink = (<Link to="/login">Login</Link>);
  } else {
    sessionLink = (<Link to="/signup">Sign Up</Link>);
  }
  return (
    <div className="greeting-container">
      {sessionLink}
    </div>
  );
};

export default Greeting;
