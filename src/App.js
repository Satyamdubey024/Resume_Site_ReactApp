import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Satyam Devendra Dubey</h1>
      <p>Phone: 7021032236</p>
      <p>Email: satyamdubey024@gmail.com</p>
      <h2>Technical Skills</h2>
      <ul>
        <li>AWS (EC2, S3, Lambda, etc.)</li>
        <li>CI/CD: Jenkins, GitHub Actions</li>
        <li>Docker, Kubernetes (basic)</li>
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Projects</h2>
      <h3>1. 3-Tier AWS Deployment</h3>
      <p>Used EC2, RDS, and Load Balancer to deploy a scalable app.</p>

      <h3>2. Serverless Web Page</h3>
      <p>Built with S3, Lambda, API Gateway, and CloudFront.</p>

      <h3>3. CI/CD Pipeline</h3>
      <p>Jenkins + GitHub Actions + Docker + Kubernetes.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;