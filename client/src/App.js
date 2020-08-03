import React from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "./components/navbar/Navbar";
import Home from "./components/screens/Home";
import Profile from "./components/screens/Profile";
import Signin from "./components/screens/auth/Signin";
import Signup from "./components/screens/auth/Signup";
import CreatePost from "./components/screens/Post/CreatePost"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/post" component={CreatePost} />
        <Route path="**" />
        
      </Switch>
    </BrowserRouter>

  );
}

export default App;
