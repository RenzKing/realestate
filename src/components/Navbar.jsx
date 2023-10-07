import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div>
        <nav className="" id="navbar">
          <div className="py-0.2 bg-gray-500 px-20 " id="navbar-container">
            {/* // */}
            <div
              className="relative flex items-center justify-between"
              id="header"
            >
              {/*  */}

              <Link to="/home">
                <img
                  src="/img/Renz gayacao.png"
                  className=" h-20 w-20 cursor-pointer p-2"
                  alt="Renz King Gayacao"
                  id="navbar-logo"
                />
              </Link>

              {/*  */}
              <ul className="flex gap-12 text-xl text-zinc-300">
                <Link to="/home">
                  <li className=" font-large drop-shadow-2xl hover:text-lime-600">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li className=" font-large drop-shadow-2xl hover:text-lime-600">
                    About
                  </li>
                </Link>
                <Link to="/gallery">
                  <li className=" font-large drop-shadow-2xl hover:text-lime-600">
                    Gallery
                  </li>
                </Link>
                <Link to="/services">
                  <li className="font-large drop-shadow-2xl hover:text-lime-600">
                    Services
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="hover:text-lime-600">Contact</li>
                </Link>
              </ul>
              {/*  */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

// CENTURY BG
// src="https://www.century-properties.com/wp-content/uploads/2022/09/CP-WE-2022-0620-CC-timelapse-edit-01.mp4"
