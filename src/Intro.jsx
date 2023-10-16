import React from 'react';
import Typewriter from 'typewriter-effect';

const Intro = () => {
  return (
    <div
      className="flex flex-col text-center w-full bg-brownishGray text-offWhite"
      id="aboutme"
    >
      <p className="text-7xl font-bol my-10">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Welcome to my website!')
              .pauseFor(1000)
              .deleteAll()
              .typeString("I'm Ayaka")
              .pauseFor(1000)
              .deleteChars(5)
              .typeString('Full-stack Web Developer')
              .pauseFor(1000)
              .deleteChars(24)
              .typeString('Problem Solver')
              .pauseFor(1000)
              .deleteChars(14)
              .typeString('Sports Lover')
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
        />
      </p>
      <p className="text-xl my-10 w-8/12 jusitfy-center text-center mx-auto">
        I'm really excited to create websites and web applicaitons with readable
        and clean programs by using the up-to-date skills. My biggest passion to
        create websites/apps is leading people happy with their visiting
        experiences!
      </p>
    </div>
  );
};

export default Intro;
