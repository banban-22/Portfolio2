import * as React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Intro from './Intro';
import Main from './Main';
import Skills from './Skills';
import Works from './Works';
import Articles from './Articles';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Main />
      <Skills />
      <Works />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
