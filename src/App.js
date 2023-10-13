import * as React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Router>
        <Routes>
          <Route exact path="/" component={Navbar} />
        </Routes>
      </Router> */}
    </div>
  );
};

export default App;
