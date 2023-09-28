import React from 'react';
import MainContainer from './redux/containers/MainContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './redux/components/login/Login.jsx'
import { useSelector } from "react-redux";

const App = () => {
  let isLoggedIn = true;

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
