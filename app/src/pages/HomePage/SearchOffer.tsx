import * as React from "react";
import { useState } from "react";
import { SearchCars, SearchFlights, SearchHotels } from "../../components/SearchOffer";
import { IoAirplane } from "react-icons/io5";
import { FaBed, FaCar } from "react-icons/fa";
import * as S from "./HomePage.styled";

type typeOfSearch = "flights" | "hotels" | "cars";

interface ISearchTypes {
  name: typeOfSearch;
  icon: JSX.Element;
}

const searchTypes: ISearchTypes[] = [
  {
    name: "flights",
    icon: <IoAirplane />,
  },
  {
    name: "hotels",
    icon: <FaBed />,
  },
  {
    name: "cars",
    icon: <FaCar />,
  },
];

const SearchOffer = (): JSX.Element => {
  const [currentTypeOfSearch, setCurrentTypeOfSearch] = useState<typeOfSearch>("flights");

  const getTypeOfSearchComponent = (): JSX.Element => {
    switch (currentTypeOfSearch) {
      case "flights":
        return <SearchFlights />;
      case "hotels":
        return <SearchHotels />;
      case "cars":
        return <SearchCars />;
      default:
        return <SearchFlights />;
    }
  };

  const searchButtons: JSX.Element[] = searchTypes.map((searchType) => {
    const buttonIsActive: boolean = searchType.name === currentTypeOfSearch;

    return (
      <S.SearchButton
        key={searchType.name}
        isActive={buttonIsActive}
        onClick={() => setCurrentTypeOfSearch(searchType.name)}>
        {searchType.icon}
      </S.SearchButton>
    );
  });

  return (
    <S.SearchBox>
      <S.SearchButtons>{searchButtons}</S.SearchButtons>

      <S.SectionSearch>
        <S.SectionSearchTitle>
          {`search ${currentTypeOfSearch} for your travel`}
        </S.SectionSearchTitle>
        {getTypeOfSearchComponent()}
      </S.SectionSearch>
    </S.SearchBox>
  );
};

export default SearchOffer;
