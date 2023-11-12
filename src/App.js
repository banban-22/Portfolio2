import * as React from 'react';
import AnimatedCursor from 'react-animated-cursor';
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
      <AnimatedCursor
        innerSize={16}
        outerSize={40}
        color="37, 73, 69"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
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
