import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from "./admin/Admin";
import ScrollToTop from "./admin/components/common/ScrollTotop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/*"
            element={
              <Admin />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
