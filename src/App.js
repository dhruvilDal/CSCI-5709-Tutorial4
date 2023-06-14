import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ProfileListing from './components/ProfileListing';
import ProfileDetail from './components/ProfileDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<ProfileListing />} />
          <Route path="/profile/:id" element={<ProfileDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
