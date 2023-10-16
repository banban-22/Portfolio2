import React, { useEffect, useState } from 'react';
import Typescript from './img/typescript_article.png';

const Articles = () => {
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
      } flex text-center justify-around align-center flex-col w-full my-0 mt-[8rem] pb-[7rem] bg-[#EBEBEB]`}
      id="article"
    >
      <p className="title">Articles</p>
      <div className="flex flex-col justify-evenly text-center lg:text-left w-10/12 mx-auto mt-8 md:mt-[5rem]">
        <div className="flex flex-col lg:flex-row justify-evenly mx-auto content-center">
          <a href="https://dev.to/banaya53662508/5-difficulties-of-typescript-as-a-beginner-how-to-deal-with-it-4f2m">
            <img
              src={Typescript}
              alt="typescript article"
              className="w-96 sm:mx-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Articles;
