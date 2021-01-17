import React from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../routes/mainRoutes";
import { NavigationList } from "./styleNavigation";

const Navigation = () => {
  return (
    <>
      <NavigationList>
        <li>
          <NavLink
            to={mainRoutes.home}
            className="navLink"
            activeClassName="aktiveNavLink"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={mainRoutes.movies}
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
