import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="" id="navbar">
          <div className="bg-slate-300 px-8 py-1" id="navbar-container">
            {/* // */}
            <div
              className="relative flex items-center justify-between"
              id="header"
            >
              {/*  */}

              <Link to="/home">
                <img
                  src="public\img\salamino.jpg"
                  className="h-20 w-20 cursor-pointer p-2"
                  alt="Renz King Gayacao"
                  id="navbar-logo"
                />
              </Link>

              {/*  */}
              <ul className="flex gap-4 ">
                <Link to="/">
                  <li className="hover:text-sky-700">About</li>
                </Link>
                <Link to="/">
                  <li className="hover:text-sky-700">Gallery</li>
                </Link>
                <Link to="/">
                  <li className="hover:text-sky-700">Services</li>
                </Link>
                <Link to="/">
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
