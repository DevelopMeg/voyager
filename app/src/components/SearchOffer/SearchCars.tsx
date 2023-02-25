import * as React from "react";
import { GoGlobe } from "react-icons/go";
import { IoMdCalendar } from "react-icons/io";
import { MdDirectionsCar, MdElectricCar } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";
import * as S from "./SearchOffer.styled";

export const SearchCars = () => {
  return (
    <S.SearchForm>
      <S.BoxFormFields>

        <S.FormField mdWidth={100} width={40}>
          <S.FormLabel>
            <GoGlobe/>
            city:
          </S.FormLabel>
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={25}>
          <S.FormLabel>
            <IoMdCalendar />
            start rent date:
          </S.FormLabel>

          {/* calendar */}
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={25}>
          <S.FormLabel>
            <IoMdCalendar />
            end rent date:
          </S.FormLabel>

          {/* calendar */}
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={30}>
          <S.FormLabel>
            <MdDirectionsCar />
            type car:
          </S.FormLabel>
          {/* SELECT */}
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={30}>
          <S.FormLabel>
            <MdElectricCar />
            electric car:
          </S.FormLabel>
          {/* SELECT */}
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={15}>
          <S.FormLabel>
            <GiGearStickPattern />
            transmission:
          </S.FormLabel>
          {/* SELECT */}
          <S.FormInput type="text" />
        </S.FormField>

        <S.FormField width={15}>
          <S.FormLabel>
            <MdPeopleAlt />
            seats:
          </S.FormLabel>
          <S.FormInput type="number" />
        </S.FormField>

      </S.BoxFormFields>

      <S.ConfirmButton>search</S.ConfirmButton>
    </S.SearchForm>
  );
};

