import React from 'react';
import MainContainer from './redux/containers/MainContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Login from 'ADD BROOKES LOGIN PAGE HERE'
import FakeLogin from './FakeLogin.jsx'
import { useSelector } from "react-redux";

// import Signup from 'ADD BROOKES SIGNUP PAGE HERE'


const App = () => {
  // let isLoggedIn = true
  const isLoggedIn = useSelector( state => state.isLoggedIn)
  console.log('IS LOGGED IN', isLoggedIn)

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path='/' element={<MainContainer />}/>          
        ) : (
          <Route path='/' element={<FakeLogin/>}/>
        )
      }
      </Routes>
    </Router>
  );
};

export default App;
