import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

const HomePage = lazy(() => import("./HomePage"));
const FlightsPage = lazy(() => import("./FlightsPage"));
const HotelsPage = lazy(() => import("./HotelsPage"));
const CarsPage = lazy(() => import("./CarsPage"));
const PopularTripsPage = lazy(() => import("./PopularTripsPage"));
const TripCreatorPage = lazy(() => import("./TripCreatorPage"));
const CartPage = lazy(() => import("./CartPage"));
const LoginPage = lazy(() => import("./LoginPage"));
const RegisterPage = lazy(() => import("./RegisterPage"));
const AccountInfoPage = lazy(() => import("./AccountInfoPage"));
const Settings = lazy(() => import("../components/MyAccount/Settings"));
const Travelers = lazy(() => import("../components/MyAccount/Travelers"));
const Reservations = lazy(() => import("../components/MyAccount/Reservations"));
const CompletedTrips = lazy(() =>
  import("../components/MyAccount/CompletedTrips")
);
const NotFoundPage = lazy(() => import("./NotFoundPage"));

export const RootRoutes = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/flights' element={<FlightsPage />} />
        <Route path='/hotels' element={<HotelsPage />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/popular-trips' element={<PopularTripsPage />} />
        <Route path='/trip-creator' element={<TripCreatorPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/my-account'>
          <Route index element={<AccountInfoPage />} />
          <Route path='settings' element={<Settings />} />
          <Route path='travelers' element={<Travelers />} />
          <Route path='reservations' element={<Reservations />} />
          <Route path='completed-trips' element={<CompletedTrips />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
