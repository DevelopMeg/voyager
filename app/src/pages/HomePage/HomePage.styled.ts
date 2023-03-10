import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SlideArrowType } from "./SliderOffers";

interface ISrcImage {
  image: string;
}

interface ISearchButton {
  isActive: boolean;
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

interface IPopularTrip extends ISrcImage {
  name: string;
  position: string;
}

// image

export const BoxImage = styled.div<ISrcImage>`
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
  border: 1px solid ${p => p.theme.colors.gray.bright};
  display: flex;
  flex-direction: column;
  width: 85%;
  background-color: ${p => p.theme.colors.gray.basic};
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
  background-color: ${(p) => (p.isActive ? p.theme.colors.gray.basic : p.theme.colors.basicBlue)};
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
    border-left: 1px solid ${p => p.theme.colors.gray.basic};
    border-right: 1px solid ${p => p.theme.colors.gray.basic};
  }

  &:nth-of-type(3) {
    border-top-right-radius: 4px;
  }

  @media(min-width: 1000px) {
    &:nth-of-type(2) {
      border-left: none;
      border-right: none;
      border-top: 1px solid ${p => p.theme.colors.gray.basic};
      border-bottom: 1px solid ${p => p.theme.colors.gray.basic};
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
  color: ${p => p.theme.colorsTxt.mediumBlue};

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

export const SlideImage = styled.div<ISrcImage>`
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

export const OfferTripCreator = styled.div<ISrcImage>`
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
  font-size: 2.5rem;

  @media(min-width: 1100px) {
    font-size: 2.8rem;
  }
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

// popular trips 

export const PopularTripsSection = styled.section`
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;

  @media(min-width: 1100px) {
    width: 100rem;
  }
`

export const PopularTripsTitle = styled.h3`
  margin-bottom: 40px;
  text-transform: uppercase;
  font-weight: 500;
`

export const PopularTrips = styled.div`
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
  gap: 20px;
  width: 30rem;

  @media(min-width: 700px) {
    width: 80%;
    flex-direction: row;
  }

  @media(min-width: 1100px) {
    display: grid;
    grid-template-rows: 100%;
    gap: 40px;
    height: 300px;
    justify-content: space-between;
    width: 100%;
  }
`

export const PopularTripsTop = styled(PopularTrips)`
  @media(min-width: 1100px) {
    grid-template-columns: 1fr 230px 230px;
  }
`

export const PopularTripsBottom = styled(PopularTrips)`
  margin-top: 20px;

  @media(min-width: 1100px) {
    grid-template-columns: 230px 230px 1fr;
  }
`

export const PopularTrip = styled(NavLink)<IPopularTrip>`
  background-image: url(${p => p.image});
  background-size: cover;
  background-position: ${p => p.position};
  position: relative;
  height: 300px;
  width: 100%;

  &::after {
    content: '${p => p.name}';
    padding: 10px 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(244, 249, 251, 0.8);
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.3rem;
  }

  @media(min-width: 1100px) {
    background-position: center;

    &:hover::after {
      opacity: 1;
    }

    &::after {
      padding: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      opacity: 0;
      transition: opacity 0.5s;
    }
  }
`

export const PopularTripBtn = styled(NavLink)`
  padding: 18px 20px;
  margin: 40px auto 0;
  display: block;
  width: max-content;
  background-color: ${p => p.theme.colors.basicBlue};
  color: ${p => p.theme.colorsTxt.darkBlue};
  text-transform: uppercase;
  border-radius: 25px;
  opacity: 1;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.7;
  }
`

// contact form

export const ContactForm = styled.form<ISrcImage>`
  padding: 50px 0;
  background-image: url(${(p) => p.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactFormBox = styled.div`
  padding: 20px 35px;
  width: 80%;
  background-color: rgba(224, 229, 232, 0.85);
  border-radius: 10px;

  @media(min-width: 800px) {
    padding: 30px 50px;
  }

  @media(min-width: 900px) {
    width: 60%;
  }

  @media(min-width: 1100px) {
    width: 50%;
  }
`

export const ContactFormTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
  text-align: center;
`

export const FormNameEmailBox = styled.div`
  margin: 30px 0 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media(min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FormInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

export const FormLabel = styled.label`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 500;
`

export const FormInput = styled.input`
  border: none;
  padding: 8px 12px;
  border-radius: 2px;
`

export const FormTextarea = styled.textarea`
  padding: 8px 12px;
  border: none;
  resize: none;
  border-radius: 2px;
  font-size: 1.5rem;
`

export const FormConfirmButton = styled.button`
  margin: 20px auto 0;
  padding: 8px 0;
  border: none;
  display: block;
  width: 100%;
  text-transform: uppercase;
  border-radius: 4px;
  text-align: center;
  background-color: ${p => p.theme.colors.gray.dark};
  color: ${p => p.theme.colors.brightBasicBlue};
  cursor: pointer;

  @media(min-width: 600px) {
    width: 45%;
  }

  @media(min-width: 800px) {
    width: 35%;
  }
`