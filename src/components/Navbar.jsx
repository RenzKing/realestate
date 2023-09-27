import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="" id="navbar">
          <div className="h-20 grid-cols-2 bg-red-700" id="navbar-container">
            <div>
              <Link to="/home">
                <img
                  src="public\img\salamino.jpg"
                  className="h-20 w-20 cursor-pointer p-2"
                  alt="Renz King Gayacao"
                  id="navbar-logo"
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
