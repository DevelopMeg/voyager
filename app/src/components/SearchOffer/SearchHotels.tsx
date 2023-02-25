import * as React from "react";
import { GoGlobe } from "react-icons/go";
import { IoMdCalendar } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { IoBed } from "react-icons/io5";
import { MdPeopleAlt, MdOutlinePeopleOutline } from "react-icons/md";
import * as S from "./SearchOffer.styled";

export const SearchHotels = () => {
  return (
    <S.SearchForm>
      <S.BoxFormFields>

        <S.FormField mdWidth={100} width={40}>
          <S.FormLabel>
            <GoGlobe />
            city:
          </S.FormLabel>
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={25}>
          <S.FormLabel>
            <IoMdCalendar />
            check in:
          </S.FormLabel>
          {/* calendar */}
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={25}>
          <S.FormLabel>
            <IoMdCalendar />
            check out:
          </S.FormLabel>
          {/* calendar */}
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={30}>
          <S.FormLabel>
            <AiFillStar />
            standard:
          </S.FormLabel>
          {/* SELECT */}
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={30}>
          <S.FormLabel>
            <IoBed />
            type room:
          </S.FormLabel>
          {/* SELECT */}
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
