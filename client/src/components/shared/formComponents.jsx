import styled from "styled-components";
import { satin, blizzardBlue, blizzardBlueTransparent, tumbleweed, candy, darkBlue } from "../../utils/colors";

export const Input = styled.input`
  padding: 1em 2em;
  margin: 2em;
  width: 20em;
  background: none;
  border: none;
  font-size: 1.3em;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: ${tumbleweed};
  &:focus {
    color: ${tumbleweed};
    outline: none;
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SubmitButton = styled.button`
  height: fit-content;
  background: ${satin};
  border: none;
  color: ${blizzardBlue};
  padding: 1em 2em;
  transition: all 0.3s ease;
  &:hover {
    background: ${candy};
    transform: translate(0, -0.3em);
    cursor: pointer;
  }
`

export const TextArea = styled.textarea`
  padding: 1em  2em;
  margin: 0 2em;
  height: 15em;
  width: 30em;
  resize: none;
  background: ${tumbleweed};
  font-size: 1.5em;
  border: 1px solid ${tumbleweed};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: ${darkBlue};
  overflow: auto;
  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  font-size: 1.2em;
  color: ${blizzardBlue};
  margin-bottom: 0.3em;
  margin-left: 3em;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Button = styled.button`
  background-color: ${blizzardBlueTransparent(.1)};
  color: ${blizzardBlue};
  border: ${satin};
  padding: 1em 1.5em;
  transition: all .3s ease;
  border-radius: .7em;
  &:hover {
    cursor: pointer;
    background-color: ${blizzardBlueTransparent()};
  }
  &:focus {
    outline: none;
  }
`