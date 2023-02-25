import styled from "styled-components";

interface IFormField {
  mdWidth?: number;
  width?: number;
}

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const BoxFormFields = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media(min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }

  @media(min-width: 1000px) {
    margin: 35px 0;
  }
`

export const FormField = styled.div<IFormField>`
  display: flex;
  flex-direction: column;

  @media(min-width: 700px) {
    width: ${p => p.mdWidth ? p.mdWidth : 48}%;
  }

  @media(min-width: 1000px) {
    width: ${p => p.width ? p.width : 48}%;
  }
` 

export const FormLabel = styled.label`
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.4rem;

  svg {
    margin-right: 8px;
    font-size: 1.6rem;
  }
`
export const FormInput = styled.input`
  border: 1px solid ${p => p.theme.colors.gray.dark};
  padding: 8px 12px;
  border-radius: 4px;
  background-color: ${p => p.theme.colors.white};
  font-size: 1.4rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${p => p.theme.colors.gray.dark};
  }
`

export const ConfirmButton = styled.button`
  padding: 8px 0;
  border: 1px solid ${p => p.theme.colors.basicBlue};
  align-self: center;
  width: 60%;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.mediumBasicBlue};
  border-radius: 4px;
  font-size: 1.4rem;
  cursor: pointer;

  @media(min-width: 1000px) {
    width: 30%;
  }
`