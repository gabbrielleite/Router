import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Links from './components/Links';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>        
        <Route exact path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
}