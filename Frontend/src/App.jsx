// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import OurProjects from "./pages/OurProjects";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";

import CustomService from "./pages/CustomService";
import EcommerceService from "./pages/EcommerceService";

import Blog from "./pages/Blog";
import BookACall from "./pages/BookACall"; // <-- NEW PAGE

import SmoothScrollProvider from "./components/SmoothScrollProvider";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      {/* Always reset scroll on route change */}
      <ScrollToTop />

      <SmoothScrollProvider>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Projects overview + case studies */}
          <Route path="/projects" element={<OurProjects />} />
          <Route path="/projects/konarcard" element={<Project1 />} />
          <Route path="/projects/azzurra" element={<Project2 />} />

          {/* Services */}
          <Route path="/services/custom" element={<CustomService />} />
          <Route path="/services/ecommerce" element={<EcommerceService />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />

          {/* Book a Call */}
          <Route path="/book-a-call" element={<BookACall />} />  {/* <-- ADDED */}
        </Routes>
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;
