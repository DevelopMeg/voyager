import * as React from "react";
import { GoGlobe } from "react-icons/go";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { MdPeopleAlt, MdOutlinePeopleOutline } from "react-icons/md";
import * as S from "./SearchOffer.styled";

export const SearchFlights = (): JSX.Element => {
  return (
    <S.SearchForm>
      <S.BoxFormFields>
        <S.FormField>
          <S.FormLabel>
            <GoGlobe />
            from:
          </S.FormLabel>
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField>
          <S.FormLabel>
            <GoGlobe />
            to:
          </S.FormLabel>
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={30}>
          <S.FormLabel>
            <FaPlaneDeparture />
            departure:
          </S.FormLabel>
          {/* calendar */}
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={30}>
          <S.FormLabel>
            <FaPlaneArrival />
            return:
          </S.FormLabel>
          {/* calendar */}
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={15}>
          <S.FormLabel>
            <MdPeopleAlt />
            adult:
          </S.FormLabel>
          <S.FormInput type="number" />
        </S.FormField>

        <S.FormField width={15}>
          <S.FormLabel>
            <MdOutlinePeopleOutline />
            child:
          </S.FormLabel>
          <S.FormInput type="number" />
        </S.FormField>

      </S.BoxFormFields>

      <S.ConfirmButton>search</S.ConfirmButton>
    </S.SearchForm>
  );
};
