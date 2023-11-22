import React, { useEffect, useState } from 'react';
import SpendWise from './img/works/SpendWise.png';
import Jobber from './img/works/Jobber.png';
import Countdown from './img/works/New_Years_Countdown.png';
import Github from './img/works/github-user-board.png';
import Shopping from './img/works/shopping-list.png';
import Movie from './img/works/movie-searcher.png';
import Exchange from './img/works/Exchange_Rate_Calculator.png';
import { FaGithub } from 'react-icons/fa';

const Works = () => {
  const works = [
    {
      name: 'SpendWise',
      imageSrc: SpendWise,
      link: 'https://github.com/banban-22/spendWise_new',
      stack: ['HTML', 'Tailwind', 'React.js', 'Rails'],
      gitHubLink: 'https://github.com/banban-22/spendWise_new',
    },
    {
      name: 'Jobber',
      imageSrc: Jobber,
      link: 'https://github.com/banban-22/job_finder',
      stack: ['HTML', 'Bootstrap', 'Ruby', 'Rails'],
      gitHubLink: 'https://github.com/banban-22/job_finder',
    },
    {
      name: 'New Journey Countdown',
      imageSrc: Countdown,
      link: 'https://banban-22.github.io/newJourney-Countdown/',
      stack: ['HTML', 'CSS3', 'JavaScript'],
      gitHubLink: 'https://github.com/banban-22/newJourney-Countdown',
    },
    {
      name: 'Github User Dashboard',
      imageSrc: Github,
      link: 'https://github-user-board.netlify.app',
      stack: ['HTML', 'CSS', 'ReactJS'],
      gitHubLink: 'https://github.com/banban-22/github-user-searcher',
    },
    {
      name: 'Shopping List Creator',
      imageSrc: Shopping,
      link: 'https://shopping-list-organizer.netlify.app/',
      stack: ['HTML', 'CSS', 'ReactJS'],
      gitHubLink: 'https://github.com/banban-22/shopping-list',
    },
    {
      name: 'Movie Searcher',
      imageSrc: Movie,
      link: 'https://movie-search-re.netlify.app/',
      stack: ['HTML', 'Tailwindcss', 'ReactJS'],
      gitHubLink: 'https://github.com/banban-22/movie-books-recorder',
    },
    {
      name: 'Exchange Rate Calculator',
      imageSrc: Exchange,
      link: 'https://banban-22.github.io/exchange_rate_calculator/',
      stack: ['HTML', 'CSS3', 'JavaScript'],
      gitHubLink: 'https://github.com/banban-22/exchange_rate_calculator',
    },
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
      } px-10 mx-auto w-10/12 text-center `}
      id="works"
    >
      <p className="title">My Works</p>
      <div className="sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-3  lg:grid-cols-3 md:col-auto w-100 mx-10 my-auto mt-8 md:mt-[5rem] justify-between">
        {works.map((work, index) => (
          <div className="w-full h-full flex flex-col pb-20" key={index}>
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              <img
                src={work.imageSrc}
                alt={work.name}
                className="object-cover h-48 w-full"
              />
            </a>
            <p className="pt-4 text-xl font-bold">{work.name}</p>
            <ul className="text-sm flex flex-row justify-center text-center w-full pt-4">
              {work.stack.map((tech, techIndex) => (
                <li className={techIndex === 0 ? '' : 'ml-6'} key={techIndex}>
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={work.gitHubLink}
              className="w-full text-center cursor-pointer inline-flex justify-center text-3xl mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="github" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
