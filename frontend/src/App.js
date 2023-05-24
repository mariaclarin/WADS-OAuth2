import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Success from './components/Success';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/success" element={<Success />} />
      </Routes>
    </Router>

  );
};

export default App;
