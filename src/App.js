import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./components/HomePage";
import TestimonialsPage from "./components/TestimonialsPage";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <Router> {/* ← no basename needed */}
      <ScrollToTop />

      <div className="font-content text-neutral-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/apply" element={<Form />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
