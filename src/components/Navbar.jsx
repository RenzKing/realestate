import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="" id="navbar">
          <div className="bg-gray-300 px-20 py-1 " id="navbar-container">
            {/* // */}
            <div
              className="relative flex items-center justify-between"
              id="header"
            >
              {/*  */}

              <Link to="/home">
                <img
                  src="public\img\Renz gayacao.png"
                  className="h-20 w-20 cursor-pointer p-2"
                  alt="Renz King Gayacao"
                  id="navbar-logo"
                />
              </Link>

              {/*  */}
              <ul className="flex gap-12 text-xl text-white">
                <Link to="/about">
                  <li className=" hover:text-sky-700">About</li>
                </Link>
                <Link to="/gallery">
                  <li className="hover:text-sky-700">Gallery</li>
                </Link>
                <Link to="/services">
                  <li className="hover:text-sky-700">Services</li>
                </Link>
                <Link to="/contact">
                  <li className="hover:text-sky-700">Contact</li>
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
