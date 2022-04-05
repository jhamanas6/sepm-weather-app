import React from 'react';

const About = () => {
  return (
    <>
      <section
        className="shadow-lg rounded-lg max-w-3xl pt-2 mt-12 mx-auto h-auto mb-64"
        style={{ backgroundPositionY: '100%' }}
      >
        <div className="p-4 text-gray-500">
          <h3 className="text-gray-600 text-xl font-medium font-sans">
            About Elemnts
          </h3>
          <p className="pt-4">
            Elements is a beautiful weather app built on top of the{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://openweathermap.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenWeatherMap API
            </a>
            .
          </p>
          <p className="pt-4">
            It is made with ❤️ by a group of 2nd year students Suritam, Manas,
            Aniket.
          </p>
          <p className="pt-4">
            It uses{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://erikflowers.github.io/weather-icons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Erik Flowers' weather icons
            </a>{' '}
            and is hosted on{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://sepm-weather.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
            . If you like the project, please fork it on{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Suritam-Nandy/sepm-weather-app"
            >
              GitHub
            </a>{' '}
            and leave a star!
          </p>
          <p className="pt-4">
            Thanks for swinging by. Enjoy the rest of your day!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
