import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./shared/Header";
import Home from "../pages/Home";
import JoinMatching from "../pages/JoinMatching";
import MatchingStatus from "../pages/MatchingStatus";
import SignUp from "../pages/SignUp";


function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join-matching" element={<JoinMatching />} />
        <Route path="/matching-status" element={<MatchingStatus />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;