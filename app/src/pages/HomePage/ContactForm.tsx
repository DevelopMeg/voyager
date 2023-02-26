import * as React from "react";
import contactFormImage from "../../assets/images/contact-form.jpg"
import * as S from "./HomePage.styled";

const ContactForm = (): JSX.Element => {
  return (
    <S.ContactForm image={contactFormImage}>
      <S.ContactFormBox>
        <S.ContactFormTitle>contact us</S.ContactFormTitle>

        <S.FormNameEmailBox>
          <S.FormInputBox>
            <S.FormLabel>name</S.FormLabel>
            <S.FormInput type="text" />
          </S.FormInputBox>

          <S.FormInputBox>
            <S.FormLabel>email</S.FormLabel>
            <S.FormInput type="text" />
          </S.FormInputBox>
        </S.FormNameEmailBox>

        <S.FormInputBox>
          <S.FormLabel>message</S.FormLabel>
          <S.FormTextarea rows={5} />
        </S.FormInputBox>

        <S.FormConfirmButton>
          send now
        </S.FormConfirmButton>
      </S.ContactFormBox>
    </S.ContactForm>
  );
};

export default ContactForm;
