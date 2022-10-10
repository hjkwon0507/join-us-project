import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import SignUp from '../pages/SignUp';
import Guide from '../pages/Guide';
import JoinMatching from '../pages/JoinMatching';
import MatchingStatus from '../pages/MatchingStatus';

function App() {
  return (
    <BrowserRouter>    
      <Routes>    
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/guide" element={<Guide />}></Route>
        <Route exact path="/join-matching" element={<JoinMatching />}></Route>
        <Route exact path="/matching-status" element={<MatchingStatus />}></Route>
        <Route exact path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
