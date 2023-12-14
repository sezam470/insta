import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages, components, styles
import Nav from "./components/Nav";
import Container from "./styles/Container";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import DetailedPost from "./pages/DetailedPost";
import EditProfile from "./pages/EditProfile";

const Routing = () => {
  return (
    <Router>
      <Nav />
      <Container>
        <Routes>
          <Route path="/explore" component={Explore} />
          <Route path="/p/:postId" component={DetailedPost} />
          <Route path="/accounts/edit" component={EditProfile} />
          <Route path="/:username" component={Profile} />
          <Route path="/" component={Home} />
        </Routes>
      </Container>
    </Router>
  );
};

export default Routing;
