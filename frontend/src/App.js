import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Collagepredictor from './components/collagePredictor';

const App = () => {
    return (
      <Router>
      <div>
          <Routes>
              <Route path="/collagepredictor" element={<Collagepredictor/>} />
              {/* Add more routes as needed */}
          </Routes>
      </div>
  </Router>
    );
};

export default App;
