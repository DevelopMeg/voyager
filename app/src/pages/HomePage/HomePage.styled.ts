import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SlideArrowType } from "./SliderOffers";

interface IBoxImage {
  image: string;
}

interface ISearchButton {
  isActive: boolean;
}

interface IOfferTripCreator {
  image: string;
}

interface ISlideImage {
  image: string;
}

interface ISliderDot {
  isActive: boolean;
}

interface ISlideWidth {
  slideWidth: number;
}

interface ISlides extends ISlideWidth {
  countSlides: number;
  currentSlideId: number;
}

interface ISlideArrowBtn {
  typeArrow: SlideArrowType;
}

// image

export const BoxImage = styled.div<IBoxImage>`
  width: 100%;
  height: 350px;
  background-image: url(${(p) => p.image});
  background-position: center;
  background-size: cover;

  @media(min-width: 1000px) {
    height: 450px;
    background-position: 0 60%;
  }
`;

// search offer

export const SearchBox = styled.div`
  margin: -125px auto 0;
  border: 1px solid ${p => p.theme.colors.gray.medium};
  display: flex;
  flex-direction: column;
  width: 85%;
  background-color: ${p => p.theme.colors.gray.light};
  border-radius: 4px;

  @media(min-width: 1000px) {
    margin-top: -150px;
    width: 82%;
    flex-direction: row;
  }

  @media(min-width: 1200px) {
    width: 80%;
  }
`;

export const SearchButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media(min-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const SearchButton = styled.button<ISearchButton>`
  padding: 10px 15px;
  border: none;
  background-color: ${(p) => (p.isActive ? p.theme.colors.gray.light : p.theme.colors.basicBlue)};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s;

  &:nth-of-type(1) {
    border-top-left-radius: 4px;
  }

  &:nth-of-type(2) {
    border-left: 1px solid ${p => p.theme.colors.gray.light};
    border-right: 1px solid ${p => p.theme.colors.gray.light};
  }

  &:nth-of-type(3) {
    border-top-right-radius: 4px;
  }

  @media(min-width: 1000px) {
    &:nth-of-type(2) {
      border-left: none;
      border-right: none;
      border-top: 1px solid ${p => p.theme.colors.gray.light};
      border-bottom: 1px solid ${p => p.theme.colors.gray.light};
    }

    &:nth-of-type(3) {
      border-top-right-radius: 0;
      border-bottom-left-radius: 4px;
    }
  }
`;

export const SectionSearch = styled.section`
  padding: 20px 30px;

  @media(min-width: 1000px) {
    padding: 22px 45px;
  }
`

export const SectionSearchTitle = styled.h3`
  margin: 0;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.6rem;
  color: ${p => p.theme.colorsTxt.basicBlue};

  @media(min-width: 1000px) {
    font-size: 1.7rem;
  }
`

// title

export const TitleOffer = styled.h2`
  margin: 70px auto 0;
  width: 85%;
  text-align: center;
  font-weight: 300;
  font-style: italic;
  font-size: 1.8rem;
  line-height: 2.1rem;
  font-family: 'Roboto Condensed', sans-serif;

  @media(min-width: 700px) {
    font-size: 2rem;
    line-height: 2.6rem;
  }

  @media(min-width: 900px) {
    width: 70%;
  }

  @media(min-width: 1100px) {
    font-size: 2.1rem;
    line-height: 3rem;
  }
`

export const TitleOfferPageName = styled.span`
  margin-right: 5px;
  font-style: normal;
  color: ${p => p.theme.colorsTxt.basicBlue};
  font-weight: 400;
  letter-spacing: 5px;
`

// slider 

export const SliderOffers = styled.div`
  padding: 20px 0;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 320px;  
  background-color: ${p => p.theme.colors.basicBlue};
  border-radius: 10px;
  gap: 2rem;
 
  @media(min-width: 700px) {
    width: 720px;
  }
`

export const SlideArrowBtn = styled.button<ISlideArrowBtn>`
  border: none;
  padding: 0;
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 4rem;
  color: ${p => p.theme.colors.brightBasicBlue};
  background-color: transparent;
  cursor: pointer;
  ${p => p.typeArrow === "prev" ? `left: 0` : `right: 0`};

  &:disabled {
    color: ${p => p.theme.colors.mediumBasicBlue};
    cursor: default;
  }

  @media(min-width: 700px) {
    ${p => p.typeArrow === "prev" ? `left: 2%` : `right: 2%`};
  }
`

export const SlidesBox = styled.div<ISlideWidth>`
  width: ${p => p.slideWidth / 2}px;
  overflow: hidden;

  @media(min-width: 700px) {
    width: ${p => p.slideWidth}px;
  }
`

export const Slides = styled.div<ISlides>`
  display: flex;
  width: ${p => (p.slideWidth / 2) * p.countSlides}px;
  transform: translateX(${p => -(p.currentSlideId * (p.slideWidth / 2))}px);
  transition: transform ease-out 0.3s;

  @media(min-width: 700px) {
    width: ${p => p.slideWidth * p.countSlides}px;
    transform: translateX(${p => -(p.currentSlideId * p.slideWidth)}px);
  }
`

export const Slide = styled.div<ISlideWidth>`
  width: ${p => p.slideWidth / 2}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media(min-width: 700px) {
    width: ${p => p.slideWidth}px;
    padding: 20px 0;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const SlideImage = styled.div<ISlideImage>`
  width: 230px;
  height: 300px;
  background-image: url(${(p) => p.image});
  background-position: bottom;
  background-size: cover;

  @media(min-width: 700px) {
    height: 280px;
  }
`

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 700px) {
    width: 40%;
    gap: 2rem;
  }
`

export const SlideTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2rem;

  @media(min-width: 700px) {
    font-size: 2.4rem;
  }
`

export const SlideText = styled.p`
  text-align: center;
  line-height: 2.2rem;
  font-size: 1.5rem;

  @media(min-width: 700px) {
    font-size: 1.6rem;
  }
`

export const SlideButton = styled(NavLink)`
  padding: 10px 30px;
  margin: 0 auto;
  display: block;
  width: max-content;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.brighterBasicBlue}; 
  border-radius: 25px;
  font-size: 1.4rem;

  @media(min-width: 700px) {
    font-size: 1.6rem;
  }
`

export const SliderDots = styled.div`
  display: flex;
  gap: 1rem;
`

export const SliderDot = styled.div<ISliderDot>`
  width: ${p => p.isActive ? 18 : 10}px;
  height: 10px;
  background-color: ${p => p.theme.colors.brightBasicBlue};
  border-radius: 25px;
  cursor: pointer;
  transition: width 0.2s;
`

// offer trip creator 

export const OfferTripCreator = styled.div<IOfferTripCreator>`
  padding: 45px 0;
  background-image: url(${(p) => p.image});
  background-position: 0% 22%;
  background-size: cover;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
`

export const OfferTripCreatorTitle = styled.h3`
  margin: 0; 
  font-weight: 400;
  font-size: 2.8rem;
`

export const OfferTripCreatorSubtitle = styled.p`
  margin: 8px 0 0;
  font-size: 1.8rem;
  font-weight: 300;
`

export const OfferTripCreatorLink = styled(NavLink)`
  margin: 24px auto 0;
  display: block;
  width: max-content;
  padding: 12px 20px;
  background-color: ${p => p.theme.colors.brightBasicBlue};
  color: ${p => p.theme.colorsTxt.darkBlue};
  border-radius: 25px;
  font-size: 1.4rem;
`