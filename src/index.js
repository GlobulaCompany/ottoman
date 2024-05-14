import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Blog from './pages/Blog';
import FAQs from './pages/Faqs';
import Security from './pages/Security';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import SecurityAuditReport from './pages/SecurityAuditReport';
import IncidentAuditReport from './pages/IncidentAuditReport';


ReactDOM.render(
  <Router>
    <Routes>
  <Route exact path="/" element={<App />} />
  <Route path="/about" element={<About />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/faqs" element={<FAQs />} />
  <Route path="/security" element={<Security />} />
  <Route path="/services" element={<Services />} />
  <Route path="/team" element={<Team />} />
  <Route path="/testimonials" element={<Testimonials />} />
  <Route path="/security-audit-report" element={<SecurityAuditReport />} />
  <Route path="/incident-audit-report" element={<IncidentAuditReport />} />
  {/* Add more routes for other modules */}
</Routes>

  </Router>,
  document.getElementById('root')
);
