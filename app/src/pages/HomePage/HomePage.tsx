import * as React from "react";
import SearchBox from "./SearchBox";
import SliderOffers from "./SliderOffers";
import PopularTrips from "./PopularTrips";
import ContactForm from "./ContactForm";
import homePageImage from "../../assets/images/home-page.jpg";
import tripCreatorImage from "../../assets/images/trip-creator.jpg"
import * as S from "./HomePage.styled";

const HomePage = (): JSX.Element => {
  return (
    <>
      <S.BoxImage image={homePageImage} />

      <SearchBox />

      <S.TitleOffer>
        <S.TitleOfferPageName>
          VOYAGER
        </S.TitleOfferPageName>
        is page where you can book flights, hotels and rent a car on your dream trip. You can also use our trip creator to plan your
        journey. Also you can get inspired check the most popular tours.
      </S.TitleOffer>

      <SliderOffers />

      <S.OfferTripCreator image={tripCreatorImage}>
        <S.OfferTripCreatorTitle>
          check our trip creator
        </S.OfferTripCreatorTitle>

        <S.OfferTripCreatorSubtitle>
          plan perfect journey
        </S.OfferTripCreatorSubtitle>

        <S.OfferTripCreatorLink to="/trip-creator">
          check trip creator
        </S.OfferTripCreatorLink>
      </S.OfferTripCreator>

      <PopularTrips />

      <ContactForm />
    </>
  );
};

export default HomePage;
