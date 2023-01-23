import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { actionRoutes, IRoute, searchRoutes } from "./routes";

interface INavBarItem {
  route: IRoute;
}

interface ISingleLink {
  path: string;
  title: string;
  icon: string;
}

const NavBar = (): JSX.Element => {
  return (
    <header>
      <h1>
        <Link to='/'>voyager</Link>
      </h1>
      <nav>
        <ul>
          {searchRoutes.map(route => (
            <NavBarItem key={route.path} route={route} />
          ))}
        </ul>

        <ul>
          {actionRoutes.map(route => (
            <NavBarItem key={route.path} route={route} />
          ))}
        </ul>
      </nav>

      {/* add image ? */}
    </header>
  );
};

export default NavBar;

const NavBarItem = ({ route }: INavBarItem): JSX.Element => {
  const { path, icon, title, subLinks, loginStatus } = route;

  const subLink = subLinks && subLinks.length !== 0;

  // add better handle login/no login navlinks
  const login = false;

  if (login) {
    if (loginStatus === "noLogged") return <></>;
  } else {
    if (loginStatus === "logged") return <></>;
  }

  return (
    <>
      <SingleLink path={path} title={title} icon={icon} />

      {subLink && (
        <ul>
          {subLinks.map(route => (
            <SingleLink
              key={route.path}
              path={path}
              title={title}
              icon={icon}
            />
          ))}
        </ul>
      )}
    </>
  );
};

const SingleLink = ({ path, title, icon }: ISingleLink): JSX.Element => {
  return (
    <li>
      {path ? (
        <NavLink to={path}>
          {title}
          <img src={icon} />
        </NavLink>
      ) : (
        <>
          {title}
          <img src={icon} />
        </>
      )}
    </li>
  );
};
