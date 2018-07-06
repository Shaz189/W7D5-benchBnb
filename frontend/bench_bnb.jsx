import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import configureStore from './store/store';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});

window.store = store;
window.dispatch = store.dispatch;
window.getState = store.getState;
window.login = login;
window.logout = logout;
window.signup = signup;
