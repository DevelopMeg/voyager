import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  actionRoutesForNoLogged,
  actionRoutesForLogged,
  IRoute,
  searchRoutes,
} from "../routes";
import * as S from "./NavBar.styled";

interface INavBarItem {
  route: IRoute;
  handleShowMobileMenu: (value: boolean) => void;
}

interface INavBarLink {
  path: string;
  title: string;
  icon: string;
}

const NavBar = (): JSX.Element => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  // add better handle login/no login navlinks
  const login = true;

  const actionRoutes: IRoute[] = login
    ? actionRoutesForLogged
    : actionRoutesForNoLogged;

  const handleShowMobileMenu = (value: boolean): void =>
    setShowMobileMenu(value);

  return (
    <>
      <S.Header>
        <S.MainTitle>
          <Link to="/">voyager</Link>
        </S.MainTitle>

        <S.ButtonBurgerBox
          onClick={() => handleShowMobileMenu(!showMobileMenu)}
        >
          <S.ButtonBurger showMobileMenu={showMobileMenu} />
        </S.ButtonBurgerBox>

        <S.NavSearchRoutes showMobileMenu={showMobileMenu}>
          <S.NavSearchList>
            {searchRoutes.map((route, id) => (
              <NavBarItem
                key={id}
                route={route}
                handleShowMobileMenu={handleShowMobileMenu}
              />
            ))}
          </S.NavSearchList>
        </S.NavSearchRoutes>

        <S.NavActionRoutes>
          <S.NavActionList>
            {actionRoutes.map((route, id) => (
              <NavBarItem
                key={id}
                route={route}
                handleShowMobileMenu={handleShowMobileMenu}
              />
            ))}
          </S.NavActionList>
        </S.NavActionRoutes>
      </S.Header>
      {/* add image ? */}
    </>
  );
};

const NavBarItem = ({ route, handleShowMobileMenu }: INavBarItem) => {
  const { path, icon, title, subLinks, hide } = route;

  const hasSubLinks: boolean = subLinks.length !== 0;

  return (
    <S.NavBarItem
      hide={hide}
      onClick={() => handleShowMobileMenu(false)}
    >
      <NavBarLink path={path} title={title} icon={icon} />

      {hasSubLinks && (
        <S.NavBarSubList>
          {subLinks.map((route, id) => (
            <li key={id}>
              <NavBarLink
                path={route.path}
                title={route.title}
                icon={route.icon}
              />
            </li>
          ))}
        </S.NavBarSubList>
      )}
    </S.NavBarItem>
  );
};

const NavBarLink = ({
  path,
  title,
  icon,
}: INavBarLink): JSX.Element => {
  return (
    <>
      <S.NavBarLinkBox to={path}>
        <S.NavBarLinkIcon src={icon} />
        {title && <S.NavBarLinkTitle>{title}</S.NavBarLinkTitle>}
      </S.NavBarLinkBox>
    </>
  );
};

export default NavBar;
