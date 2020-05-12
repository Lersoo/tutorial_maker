import styled from "styled-components";
import { purple, orchid } from "../../utils/colors";

export const Input = styled.input`
  padding: 1em 2em;
  margin: 2em;
  width: 20em;
  background: none;
  border: none;
  font-size: 1.5em;
  border-bottom: 5px solid ${purple};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  &:focus {
    outline: none;
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
`

export const SubmitButton = styled.button`
  background: ${purple};
  border: none;
  color: ${orchid}
`