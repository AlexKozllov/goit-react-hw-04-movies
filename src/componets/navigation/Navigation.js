import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationList } from "./styleNavigation";
import routes from "../routes/routes";

const Navigation = () => {
  return (
    <>
      <NavigationList>
        <li>
          <NavLink
            to={routes.home}
            className="navLink"
            activeClassName="aktiveNavLink"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={routes.movies}
            className="navLink"
            activeClassName="aktiveNavLink"
          >
            Movies
          </NavLink>
        </li>
      </NavigationList>
    </>
  );
};

export default Navigation;
