import * as React from "react";
import { useState } from "react";
import sliderFlightsImage from "../../assets/images/home-page-slider-flights.jpg"
import sliderHotelsImage from "../../assets/images/home-page-slider-hotels.jpg"
import sliderCarsImage from "../../assets/images/home-page-slider-cars.jpg"
import * as S from "./HomePage.styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ISlideContent {
  title: string;
  content: string;
  buttonContent: string;
  buttonPath: string;
  image: string;
}

interface ISlide {
  slide: ISlideContent;
}

export type SlideArrowType = "prev" | "next"

interface ISlideArrow {
  type: SlideArrowType;
  disabled: boolean;
  onClick: () => void;
}

const slidesContent: ISlideContent[] = [
  {
    title: "flights",
    content: "On this page you can find and book flights to different parts of the world. Search flights in the best prices!",
    buttonContent: "find flight",
    buttonPath: "/flights",
    image: sliderFlightsImage
  },
  {
    title: "hotels",
    content: "On this page you can find and book hotel in different parts of the world. Search hotel in the best price!",
    buttonContent: "find hotels",
    buttonPath: "/hotels",
    image: sliderHotelsImage
  },
  {
    title: "cars",
    content: "On this page you can find and book cars in different parts of the world. Search car in the best price!",
    buttonContent: "find cars",
    buttonPath: "/cars",
    image: sliderCarsImage
  }
]

const slideWidth: number = 500;

const SliderOffers = (): JSX.Element => {

  const [currentSlideId, setCurrentSlideId] = useState<number>(0);

  const moveToPrevSlide = (): void => {
    setCurrentSlideId(currentSlideId - 1)
  }

  const moveToNextSlide = (): void => {
    setCurrentSlideId(currentSlideId + 1)
  }

  return <S.SliderOffers>
    <SlideArrow
      type="prev"
      disabled={currentSlideId === 0}
      onClick={moveToPrevSlide} />

    <S.SlidesBox slideWidth={slideWidth}>
      <S.Slides
        countSlides={slidesContent.length}
        currentSlideId={currentSlideId}
        slideWidth={slideWidth}>
        {slidesContent.map((slide, i) => <Slide key={i} slide={slide} />)}
      </S.Slides>
    </S.SlidesBox>

    <SlideArrow
      type="next"
      disabled={currentSlideId === slidesContent.length - 1}
      onClick={moveToNextSlide} />

    <S.SliderDots>
      {slidesContent.map((slide, i) =>
        <S.SliderDot
          key={i}
          isActive={i === currentSlideId}
          onClick={() => setCurrentSlideId(i)} />)}
    </S.SliderDots>
  </S.SliderOffers>
};

const Slide = ({ slide }: ISlide): JSX.Element => {
  const { image, title, content, buttonContent, buttonPath } = slide

  return <S.Slide slideWidth={slideWidth}>
    <S.SlideImage image={image}></S.SlideImage>

    <S.SlideContent>
      <S.SlideTitle>{title}</S.SlideTitle>
      <S.SlideText>{content}</S.SlideText>
      <S.SlideButton to={buttonPath}>
        {buttonContent}
      </S.SlideButton>
    </S.SlideContent>
  </S.Slide>
}

export default SliderOffers;

const SlideArrow = ({ type, disabled, onClick }: ISlideArrow): JSX.Element => {

  const icon: JSX.Element = type === "prev" ? <IoIosArrowBack /> : <IoIosArrowForward />

  return (
    <S.SlideArrowBtn
      typeArrow={type}
      disabled={disabled}
      onClick={() => onClick()}>
      {icon}
    </S.SlideArrowBtn>
  )
}