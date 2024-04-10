import React from 'react';
import './App.css';
import Router from './Router/Router';
import { useSelector } from 'react-redux';
import LoginPage from './Pages/Login/LoginPage';

function App() {
  console.log(process.env.REACT_APP_REDIRECT_URI)
  const isUserLogin = useSelector(state => state.authReducer.isUserLogin);

  return (
    <div>
      {isUserLogin ? <Router /> : <LoginPage />}
    </div>
  );
}

export default App;
