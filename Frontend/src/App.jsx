import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SmoothScrollProvider from "./components/SmoothScrollProvider";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded routes
const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe"));

const OurProjects = lazy(() => import("./pages/OurProjects"));
const Project1 = lazy(() => import("./pages/Project1"));
const Project2 = lazy(() => import("./pages/Project2"));

const CustomService = lazy(() => import("./pages/CustomService"));
const EcommerceService = lazy(() => import("./pages/EcommerceService"));

const Blog = lazy(() => import("./pages/Blog"));
const BlogPage1 = lazy(() => import("./pages/BlogPage1"));
const BlogPage2 = lazy(() => import("./pages/BlogPage2"));
const BlogPage3 = lazy(() => import("./pages/BlogPage3"));

const BookACall = lazy(() => import("./pages/BookACall"));

function App() {
  return (
    <Router>
      <ScrollToTop />

      <SmoothScrollProvider>
        <Suspense fallback={null}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About */}
            <Route path="/about" element={<AboutMe />} />

            {/* Projects overview + case studies */}
            <Route path="/projects" element={<OurProjects />} />
            <Route path="/projects/konarcard" element={<Project1 />} />
            <Route path="/projects/azzurra" element={<Project2 />} />

            {/* Services */}
            <Route
              path="/services/custom"
              element={<CustomService />}
            />
            <Route
              path="/services/ecommerce"
              element={<EcommerceService />}
            />

            {/* Blog */}
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/blog/growth-insights"
              element={<BlogPage1 />}
            />
            <Route
              path="/blog/conversion-playbooks"
              element={<BlogPage2 />}
            />
            <Route
              path="/blog/technical-foundations"
              element={<BlogPage3 />}
            />

            {/* Book a Call */}
            <Route path="/book-a-call" element={<BookACall />} />
          </Routes>
        </Suspense>
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;