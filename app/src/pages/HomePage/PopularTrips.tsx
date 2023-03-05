import * as React from "react";
import popularTripNetherlands from "../../assets/images/popular-trip-amsterdam.jpg"
import popularTripUK from "../../assets/images/popular-trip-london.jpg"
import popularTripIreland from "../../assets/images/popular-trip-ireland.jpg"
import popularTripItaly from "../../assets/images/popular-trip-rome.jpg"
import popularTripFrance from "../../assets/images/popular-trip-paris.jpg"
import popularTripCzech from "../../assets/images/populat-trip-prague.jpg"
import * as S from "./HomePage.styled";

interface IPopularTrip {
  image: string;
  name: string;
  link: string;
  position: string;
}

interface IPopularTripItem {
  trip: IPopularTrip
}

const popularTripsTop: IPopularTrip[] = [
  {
    image: popularTripNetherlands,
    name: "Netherlands",
    link: "/popular-trips/netherlands",
    position: "center"
  },
  {
    image: popularTripUK,
    name: "United Kingdom",
    link: "/popular-trips/united-kingdom",
    position: "top"
  },
  {
    image: popularTripIreland,
    name: "Ireland",
    link: "/popular-trips/ireland",
    position: "center"
  }
]

const popularTripsBottom: IPopularTrip[] = [
  {
    image: popularTripItaly,
    name: "Italy",
    link: "/popular-trips/italy",
    position: "bottom"
  },
  {
    image: popularTripFrance,
    name: "France",
    link: "/popular-trips/france",
    position: "bottom"
  },
  {
    image: popularTripCzech,
    name: "Czech Republic",
    link: "/popular-trips/czech-republic",
    position: "center"
  }
]

const PopularTripItem = ({ trip }: IPopularTripItem): JSX.Element => {
  const { link, image, name, position } = trip;

  return <S.PopularTrip image={image} name={name} position={position} to={link} />
}

const PopularTrips = (): JSX.Element => {
  return (
    <S.PopularTripsSection>
      <S.PopularTripsTitle>Popular destination</S.PopularTripsTitle>

      <S.PopularTripsTop>
        {popularTripsTop.map((trip, i) =>
          <PopularTripItem key={i} trip={trip} />
        )}
      </S.PopularTripsTop>

      <S.PopularTripsBottom>
        {popularTripsBottom.map((trip, i) =>
          <PopularTripItem key={i} trip={trip} />)}
      </S.PopularTripsBottom>

      <S.PopularTripBtn to="/popular-trips">all popular destination</S.PopularTripBtn>
    </S.PopularTripsSection>
  );
};

export default PopularTrips;