import flightIcon from "../assets/icons/flight-nav.png";
import hotelsIcon from "../assets/icons/hotels-nav.svg";
import carsIcon from "../assets/icons/cars-nav.svg";
import popularTripsIcon from "../assets/icons/popular-trips-nav.png";
import tripCreatorIcon from "../assets/icons/trip-creator-nav.png";
import myAccountIcon from "../assets/icons/user-nav.png";
import accountInfoIcon from "../assets/icons/account-info-nav.png";
import accountSettingsIcon from "../assets/icons/account-settings-nav.png";
import travelersIcon from "../assets/icons/travelers-nav.png";
import reservationsIcon from "../assets/icons/reservations-nav.png";
import completedTripsIcon from "../assets/icons/completed-trips-nav.png";
import cartIcon from "../assets/icons/cart-nav.png";

export type HideRoute = "mobile" | "desktop" | "logged" | "noLogged" | "";

interface IBasicRoute {
  path: string;
  title: string;
  icon: string;
}

export interface IRoute extends IBasicRoute {
  subLinks: IBasicRoute[];
  hide: HideRoute;
}

const myAccountSublinks: IBasicRoute[] = [
  {
    path: "/my-account",
    title: "Account info",
    icon: accountInfoIcon,
  },
  {
    path: "/my-account/settings",
    title: "Account settings",
    icon: accountSettingsIcon,
  },
  {
    path: "/my-account/travelers",
    title: "Travelers",
    icon: travelersIcon,
  },
  {
    path: "/my-account/reservations",
    title: "Reservations",
    icon: reservationsIcon,
  },
  {
    path: "/my-account/completed-trips",
    title: "Completed trips",
    icon: completedTripsIcon,
  },
];

export const searchRoutes: IRoute[] = [
  {
    path: "/flights",
    title: "Flights",
    icon: flightIcon,
    subLinks: [],
    hide: "",
  },
  {
    path: "/hotels",
    title: "Hotels",
    icon: hotelsIcon,
    subLinks: [],
    hide: "",
  },
  {
    path: "/cars",
    title: "Cars",
    icon: carsIcon,
    subLinks: [],
    hide: "",
  },
  {
    path: "/popular-trips",
    title: "Top Trips",
    icon: popularTripsIcon,
    subLinks: [],
    hide: "",
  },
  {
    path: "/trip-creator",
    title: "Trip Creator",
    icon: tripCreatorIcon,
    subLinks: [],
    hide: "desktop",
  },
];

const actionRoutes: IRoute[] = [
  {
    path: "/trip-creator",
    title: "Trip Creator",
    icon: tripCreatorIcon,
    subLinks: [],
    hide: "mobile",
  },
  {
    path: "/login",
    title: "",
    icon: myAccountIcon,
    subLinks: [],
    hide: "noLogged",
  },
  {
    path: "/my-account",
    title: "",
    icon: myAccountIcon,
    subLinks: myAccountSublinks,
    hide: "logged",
  },
  {
    path: "/cart",
    title: "",
    icon: cartIcon,
    subLinks: [],
    hide: "",
  },
];

export const actionRoutesForNoLogged: IRoute[] = actionRoutes.filter(
  (route) => route.hide !== "logged"
);

export const actionRoutesForLogged: IRoute[] = actionRoutes.filter(
  (route) => route.hide !== "noLogged"
);

export const footerRoutes = [
  {
    path: "/flights",
    title: "Flights"
  },
  {
    path: "/hotels",
    title: "Hotels"
  },
  {
    path: "/cars",
    title: "Cars"
  },
  {
    path: "/popular-trips",
    title: "Top Trips"
  },
  {
    path: "/trip-creator",
    title: "Trip Creator"
  },
  {
    path: "/my-account",
    title: "My account"
  },
  {
    path: "/cart",
    title: "Cart"
  },
];

