import * as React from "react";
import { NavLink } from "react-router-dom";
import { MdLocationOn, MdEmail, MdCall } from "react-icons/md";
import { footerRoutes } from "../routes";
import * as S from "./Footer.styled";

const Footer = (): JSX.Element => {
  return (
    <S.Footer>
      <S.BoxSectionInfo>
        <S.PageMainTitle>voyager</S.PageMainTitle>
        <S.PageInfo>
          This is page where you can book flights, hotels and rent a car on your
          dream trip. You can also use our trip creator to plan your journey.
          Also you can get inspired check the most popular tours.
        </S.PageInfo>
      </S.BoxSectionInfo>

      <S.BoxSectionInfo>
        <S.TitleSectionInfo>links</S.TitleSectionInfo>
        <S.LinksList>
          {footerRoutes.map((route, id) => (
            <S.Link key={id}>
              <NavLink to={route.path}>{route.title}</NavLink>
            </S.Link>
          ))}
        </S.LinksList>
      </S.BoxSectionInfo>

      <S.BoxSectionInfo>
        <S.TitleSectionInfo>contact us</S.TitleSectionInfo>

        <S.BoxContactInfo>
          <S.ContactInfo>
            <MdLocationOn />
            <S.ContactInfoContent>Paris City, France</S.ContactInfoContent>
          </S.ContactInfo>

          <S.ContactInfo>
            <MdEmail />
            <S.ContactInfoContent>voyager@email.com</S.ContactInfoContent>
          </S.ContactInfo>

          <S.ContactInfo>
            <MdCall />
            <S.ContactInfoContent>555 555 555</S.ContactInfoContent>
          </S.ContactInfo>
        </S.BoxContactInfo>
      </S.BoxSectionInfo>

      <S.BoxCopyrightInfo>
        <S.CopyrightInfo>DevelopMeg 2023 © All right reserverd</S.CopyrightInfo>
        <S.CopyrightInfo>photos by Unsplash & icons by Icons8</S.CopyrightInfo>
      </S.BoxCopyrightInfo>
    </S.Footer>
  );
};

export default Footer;
