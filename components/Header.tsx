import React from 'react';

const CharityHeader = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-end items-center bg-blue-600 text-white p-4">
          <li className="mr-4">
            <a href="#home">Home</a>
          </li>
          <li className="mr-4">
            <a href="#about">About Us</a>
          </li>
          <li className="mr-4">
            <a href="#donate">Donate</a>
          </li>
          <li className="mr-4">
            <a href="#volunteer">Volunteer</a>
          </li>
          <li className="mr-4">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="bg-blue-700 p-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
          Helping Those in Need
        </h1>
        <p className="text-sm">Your donation can make a difference.</p>
        <a
          href="#donate"
          className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 mt-2 rounded-full inline-block font-semibold"
        >
          Donate Now
        </a>
      </div>
    </header>
  );
};

export default CharityHeader;
