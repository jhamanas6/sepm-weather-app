import React from 'react';

const Footer = () => {
  return (
    <footer className="items-center mt-28">
      <p className="text-center">
        <span className="text-gray-600">
          Project by{' '}
          <a
            className="text-indigo-600"
            href="https://github.com/Suritam-Nandy/sepm-weather-app"
          >
            Suritam, Manas, Aniket
          </a>
          <span className="ml-4">&copy;2021 - now</span>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
