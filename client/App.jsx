import React from 'react';
import MainContainer from './redux/containers/MainContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './redux/components/login/Login.jsx'
// import FakeLogin from './FakeLogin.jsx'
import { useSelector } from "react-redux";
import LogIn from './redux/components/login/login.jsx';

// import Signup from 'ADD BROOKES SIGNUP PAGE HERE'


const App = () => {
  let isLoggedIn = false
  // const isLoggedIn = useSelector( state => state.isLoggedIn)
  console.log('IS LOGGED IN', isLoggedIn)

  return (
    // <LogIn />
    <MainContainer />
  )
  let isLoggedIn = true
  // // // const isLoggedIn = useSelector( state => state.isLoggedIn)
  // console.log('IS LOGGED IN', isLoggedIn)

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path='/' element={<MainContainer />}/>          
        ) : (
          <Route path='/' element={<Login/>}/>
        )
      }
      </Routes>
    </Router>
  );
};

export default App;
