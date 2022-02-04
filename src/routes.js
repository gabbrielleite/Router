
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/Home'
import Links from './pages/Links'


function RoutesApp() {
  return (
    <BrowserRouter>
     
        <Route exact={true} path="/" component={Home} />
        <Route path="/links" component={Links} />
      
    </BrowserRouter>
  );
}
export default RoutesApp;


