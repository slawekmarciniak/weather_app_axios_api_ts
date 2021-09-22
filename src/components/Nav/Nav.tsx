import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

interface NavProps {}

const Nav: FC<NavProps> = () => {
  return (
    <div className="navContainer">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/openweather">openweather</NavLink>
          </li>
          <li>
            <NavLink to="/accuweather">accuweather</NavLink>
          </li>
          <li>
            <NavLink to="/weatherbit">weatherbit</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
