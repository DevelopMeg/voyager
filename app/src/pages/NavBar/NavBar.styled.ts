import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HideRoute } from "../routes";

interface IHide {
  hide: HideRoute;
}

interface IShowMobileMenu {
  showMobileMenu: boolean;
}


export const Header = styled.header`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${p => p.theme.colors.white};
  height: 60px;
  width: 100%;
  z-index: 1;

  @media (min-width: 1100px) {
    height: auto;
    padding: 16px 30px;
    display: grid;
    grid-template-columns: 1fr 30% 1fr;
    position: static;
  }

  @media (min-width: 1300px) {
    padding: 20px 0;
  }
`;

export const MainTitle = styled.h1`
  order: 2;
  margin: 0;
  letter-spacing: 10px;
  margin-right: -10px;
  font-size: 2.5rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 400px) {
    font-size: 3.2rem;
  }
`;

export const ButtonBurgerBox = styled.button`
  padding: 0;
  border: none;
  position: relative;
  height: 22px;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 1100px) {
    display: none;
  }
`;

export const ButtonBurger = styled.span<IShowMobileMenu>`
  display: block;
  width: 30px;
  height: ${(p) => (p.showMobileMenu ? 0 : 4)}px;
  border-radius: 4px;
  background-color: ${p => p.theme.colors.darkBasicBlue};

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: ${p => p.theme.colors.darkBasicBlue};
    transform-origin: left;
    transition: transform 0.5s;
  }

  &::before {
    top: 0;
    ${(p) => p.showMobileMenu && `transform: rotate(45deg)`}
  }

  &::after {
    bottom: 0;
    ${(p) => p.showMobileMenu && `transform: translateY(3.2px) rotate(-45deg)`}
  }
`;

export const NavSearchRoutes = styled.nav<IShowMobileMenu>`
  order: 1;
  padding: 25px 34px 0;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: ${p => p.theme.colors.brighterBasicBlue};
  transform: translateX(${(p) => (p.showMobileMenu ? 0 : -100)}%);
  visibility: ${(p) => (p.showMobileMenu ? "visible" : "hidden")};
  transition: transform 0.3s, visibility 0.3s;
  ${(p) => p.showMobileMenu && `border-top: 1px solid ${p.theme.colors.mediumBasicBlue}`};

  @media (min-width: 550px) {
    width: auto;
  }

  @media (min-width: 1100px) {
    padding: 0;
    display: flex;
    align-items: center;
    height: auto;
    position: relative;
    top: 0;
    transform: translateX(0);
    background-color: transparent;
    visibility: visible;
  }
`;

export const NavActionRoutes = styled.nav`
  order: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const NavList = styled.ul`
  margin: 0;
  display: flex;
`;

export const NavSearchList = styled(NavList)`
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 1100px) {
    flex-direction: row;
    gap: 2.5rem;
  }
`;

export const NavActionList = styled(NavList)`
  gap: 2rem;
`;

export const NavBarItem = styled.li<IHide>`
  display: ${(p) => (p.hide === "mobile" ? "none" : "block")};
  font-size: 1.5rem;
  white-space: nowrap;
  cursor: pointer;

  &:hover > ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 1100px) {
    display: ${(p) => (p.hide === "desktop" ? "none" : "block")};
  }
`;

export const NavBarSubList = styled.ul`
  margin-top: 10px;
  padding: 8px 10px;
  border: 1px solid ${p => p.theme.colors.basicBlue};
  display: none;
  position: absolute;
  right: 0;
  list-style: none;
  background-color: ${p => p.theme.colors.brighterBasicBlue};
  border-radius: 4px;
`;

export const NavBarLinkBox = styled(NavLink)`
  display: flex;
  align-items: flex-end;
  transition: color 0.3s, -webkit-filter 0.3s;

  &:hover {
    color: ${p => p.theme.colors.darkBasicBlue};
  }

  &:hover > img {
    filter: invert(53%) sepia(5%) saturate(2996%) hue-rotate(159deg)
      brightness(92%) contrast(89%);
  }
`;

export const NavBarLinkIcon = styled.img`
  width: 22px;
  height: 22px;
`;

export const NavBarLinkTitle = styled.span`
  margin-left: 15px;

  @media (min-width: 1100px) {
    margin-left: 10px;
  }
`;
