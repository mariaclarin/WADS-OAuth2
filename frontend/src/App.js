import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes,useLocation, Navigate } from "react-router-dom";
import Success from './components/Success';
import Register from './components/Register';

const setToken = (token) => {
  localStorage.setItem('key', token);
};
const fetchToken = () => {
  return localStorage.getItem('key');
};

function RequireToken({ children }) {
  let auth = fetchToken();
  let location = useLocation();

  if (!auth) {
    setToken('test');
    return <Navigate to='/' state={{ from: location }} />;
  }

  return children;
}


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/success"
          element={
            <RequireToken>
              <Success />
            </RequireToken>
          }
        />
      </Routes>
    </Router>

  );
};

export default App;
