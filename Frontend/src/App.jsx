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
import BlogPage1 from "./pages/BlogPage1";
import BlogPage2 from "./pages/BlogPage2";
import BlogPage3 from "./pages/BlogPage3";

import BookACall from "./pages/BookACall";

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

          {/* Blog overview + category/group pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/growth-insights" element={<BlogPage1 />} />
          <Route path="/blog/conversion-playbooks" element={<BlogPage2 />} />
          <Route
            path="/blog/technical-foundations"
            element={<BlogPage3 />}
          />

          {/* Book a Call */}
          <Route path="/book-a-call" element={<BookACall />} />
        </Routes>
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;
