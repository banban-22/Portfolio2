import React, { useEffect, useState } from 'react';
import HTML from './img/tools/HTML-icon.png';
import CSS from './img/tools/CSS-icon.png';
import JavaScript from './img/tools/JS-icon.png';
import ReactJS from './img/tools/React-icon.png';
import Tailwind from './img/tools/tailwind-icon.png';
import NodeJS from './img/tools/nodejs-icon.png';
import Ruby from './img/tools/ruby-icon.png';
import Rails from './img/tools/rails-icon.png';
import Typescript from './img/tools/Typescript-icon.png';
import Sass from './img/tools/Sass.png';
import Bootstrap from './img/tools/Bootstrap-icon.png';
import Bulma from './img/tools/Bulma-icon.png';
import WordPress from './img/tools/wordpress-icon.png';
import VSCode from './img/tools/VScode-icon.png';
import Github from './img/tools/github.png';
import Photoshop from './img/tools/photoshop-icon.png';
import Illustrator from './img/tools/illustrator-icon.png';
import Figma from './img/tools/figma-icon.png';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: HTML, alt: 'HTML5' },
    { name: 'CSS3', icon: CSS, alt: 'CSS3' },
    { name: 'JavaScript', icon: JavaScript, alt: 'JavaScript' },
    { name: 'ReactJS', icon: ReactJS, alt: 'ReactJS' },
    {
      name: 'TailwindCSS',
      icon: Tailwind,
      alt: 'TailwindCSS',
    },
    { name: 'NodeJS', icon: NodeJS, alt: 'NodeJS' },
    { name: 'Ruby', icon: Ruby, alt: 'Ruby' },
    {
      name: 'Ruby on Rails',
      icon: Rails,
      alt: 'Ruby on Rails',
    },
    {
      name: 'Typescript',
      icon: Typescript,
      alt: 'Typescript',
    },
    { name: 'Sass', icon: Sass, alt: 'Sass' },
    {
      name: 'Bootstrap',
      icon: Bootstrap,
      alt: 'Bootstrap',
    },
    { name: 'Bulma', icon: Bulma, alt: 'Bulma' },
    {
      name: 'WordPress',
      icon: WordPress,
      alt: 'WordPress',
    },
    { name: 'VS code', icon: VSCode, alt: 'VS code' },
    { name: 'gitHub', icon: Github, alt: 'gitHub' },
    {
      name: 'Photoshop',
      icon: Photoshop,
      alt: 'Photoshop',
    },
    {
      name: 'Illustrator',
      icon: Illustrator,
      alt: 'Illustrator',
    },
    { name: 'Figma', icon: Figma, alt: 'Figma' },
  ];
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setFadeIn(true);
    }, 1500);

    return () => clearTimeout(fadeInTimer);
  }, []);

  return (
    <div
      className={`${
        fadeIn ? 'fadein scroll-in' : 'fadein'
      } flex text-center justify-around align-center flex-col w-full my-0 mt-20 md:mt-[8rem] pb-14 md:pb-[7rem] bg-[#EBEBEB]`}
      id="skills"
    >
      <p className="title">Skills and Tools</p>
      <div className="flex flex-row flex-wrap text-center justify-around content-center w-8/12 mx-auto mt-8 md:mt-[5rem]">
        {skills.map((skill, index) => (
          <div className="flex flex-col items-center p-5" key={skill.name}>
            <img
              src={skill.icon}
              alt={skill.alt}
              className="w-20 h-20 mx-auto mb-2"
            />
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
