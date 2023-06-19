import { Fragment, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  const getScreenSize = () => {
    const screenSize = window.innerWidth;
    return screenSize;
  };

  const handleMenuItemClick = () => {
    getScreenSize() < 1100 && handleClick();
    document.getElementById("menuTogglerCheckboc").checked = false;
  };
  return (
    <Fragment>
      <div className="navigation-container">
        <div className="logo-container">
          <span>LOGO</span>
        </div>
        <div
          className={
            menuOpened ? "routes-container menu-opened" : "routes-container"
          }
        >
          <NavLink to="/" onClick={handleMenuItemClick}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={handleMenuItemClick}>
            About Us
          </NavLink>
          <NavLink to="/buy-ticket" onClick={handleMenuItemClick}>
            Join Us
          </NavLink>
          <div className="donate-link">
            <Link to="/buy-ticket" onClick={handleMenuItemClick}>
              Donate Now
            </Link>
          </div>
        </div>
        <div className="hamburger-menu-toggler">
          <label className="hamburger">
            <input
              id="menuTogglerCheckboc"
              type="checkbox"
              onClick={handleClick}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
