import styled from "styled-components";

export const Footer = styled.footer`
  padding: 20px 30px;
  background-color: ${p => p.theme.colors.basicBlue};
  text-align: center;

  @media (min-width: 900px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 1250px) {
    padding: 20px 45px;
  }
`;

export const BoxSectionInfo = styled.div`
  padding: 20px 0 10px;
  border-bottom: 2px solid ${p => p.theme.colors.brighterBasicBlue};

  &:first-of-type {
    padding-top: 0;
    flex-basis: 30%;
  }

  &:nth-of-type(2) {
    flex-basis: 40%;
  }

  &:nth-of-type(3) {
    flex-basis: 30%;
  }

  @media (min-width: 900px) {
    padding: 0;
    border-bottom: none;
    border-left: 2px solid ${p => p.theme.colors.brighterBasicBlue};

    &:first-of-type {
      padding-right: 30px;
      border-left: none;
    }
  }

  @media (min-width: 1250px) {
    &:first-of-type {
      padding-right: 40px;
    }
  }
`;

export const PageMainTitle = styled.h4`
  margin: 0 -10px 0 0;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: 10px;

  @media (min-width: 900px) {
    font-size: 2.2rem;
  }
`;

export const PageInfo = styled.p`
  margin-bottom: 10px;
  font-weight: 300;

  @media (min-width: 900px) {
    text-align: justify;
  }
`;

export const TitleSectionInfo = styled.h5`
  margin: 0 0 15px;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 400;

  @media (min-width: 900px) {
    margin-bottom: 22px;
    font-size: 1.8rem;
  }
`;

export const LinksList = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  @media (min-width: 900px) {
    margin: 0 auto;
    width: 80%;
  }
`;

export const Link = styled.li`
  padding: 0 10px 10px;
  text-transform: uppercase;
  font-weight: 300;

  @media (min-width: 900px) {
    padding-bottom: 12px;
  }
`;

export const BoxContactInfo = styled.div`
  margin: 0 auto;
  width: max-content;
`;

export const ContactInfo = styled.p`
  margin: 0 0 10px;
  display: flex;
  align-items: center;

  @media (min-width: 900px) {
    margin-bottom: 14px;
  }
`;

export const ContactInfoContent = styled.span`
  margin-left: 10px;
  font-size: 1.4rem;
  font-weight: 300;
`;

export const BoxCopyrightInfo = styled.div`
  flex-basis: 100%;
  padding-top: 20px;

  @media (min-width: 900px) {
    margin-top: 20px;
    border-top: 2px solid ${p => p.theme.colors.brighterBasicBlue};
  }
`;

export const CopyrightInfo = styled.p`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 300;

  &:last-of-type {
    margin-top: 5px;
    font-size: 1.2rem;
  }

  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;
