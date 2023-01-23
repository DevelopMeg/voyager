import flightIcon from "../assets/icons/flight-nav.png";
import hotelsIcon from "../assets/icons/hotels-nav.png";
import carsIcon from "../assets/icons/cars-nav.png";
import popularTripsIcon from "../assets/icons/popular-trips-nav.png";
import tripCreatorIcon from "../assets/icons/trip-creator-nav.png";
import myAccountIcon from "../assets/icons/user-nav.png";
import accountInfoIcon from "../assets/icons/account-info-nav.png";
import accountSettingsIcon from "../assets/icons/account-settings-nav.png";
import travelersIcon from "../assets/icons/travelers-nav.png";
import reservationsIcon from "../assets/icons/reservations-nav.png";
import completedTripsIcon from "../assets/icons/completed-trips-nav.png";
import cartIcon from "../assets/icons/cart-nav.png";

type LoginStatus = "logged" | "noLogged" | "both";

interface IBasicRoute {
  path: string;
  title: string;
  icon: string;
  loginStatus: LoginStatus;
}

export interface IRoute extends IBasicRoute {
  subLinks?: IBasicRoute[];
}

export const searchRoutes: IRoute[] = [
  { path: "/flights", title: "Flights", icon: flightIcon, loginStatus: "both" },
  { path: "/hotels", title: "Hotels", icon: hotelsIcon, loginStatus: "both" },
  { path: "/cars", title: "Cars", icon: carsIcon, loginStatus: "both" },
  {
    path: "/popular-trips",
    title: "Popular Trips",
    icon: popularTripsIcon,
    loginStatus: "both",
  },
];

export const actionRoutes: IRoute[] = [
  {
    path: "/trip-creator",
    title: "Trip Creator",
    icon: tripCreatorIcon,
    loginStatus: "both",
  },
  {
    path: "/login",
    title: "Sign in",
    icon: myAccountIcon,
    loginStatus: "noLogged",
  },
  {
    path: "",
    title: "My account",
    icon: myAccountIcon,
    loginStatus: "logged",
    subLinks: [
      {
        path: "/my-account",
        title: "Account info",
        icon: accountInfoIcon,
        loginStatus: "logged",
      },
      {
        path: "/my-account/settings",
        title: "Account settings",
        icon: accountSettingsIcon,
        loginStatus: "logged",
      },
      {
        path: "/my-account/travelers",
        title: "Travelers",
        icon: travelersIcon,
        loginStatus: "logged",
      },
      {
        path: "/my-account/reservations",
        title: "Reservations",
        icon: reservationsIcon,
        loginStatus: "logged",
      },
      {
        path: "/my-account/completed-trips",
        title: "Completed trips",
        icon: completedTripsIcon,
        loginStatus: "logged",
      },
    ],
  },
  { path: "/cart", title: "Cart", icon: cartIcon, loginStatus: "both" },
];
