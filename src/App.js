import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline/Timeline";
import BlogCreate from "./components/Blogs/BlogCreate";
import BlogDetails from "./components/Blogs/BlogDetails";
import ProjectDetails from "./components/Projects/ProjectDetails";
import styled from "styled-components";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/create" element={<BlogCreate />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
`;

export default App;
