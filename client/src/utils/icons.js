import styled from "styled-components";
import { satin, candy } from "./colors";

export const circleCross = '<span class="material-icons"> highlight_off </span>';
export const emptyCircle = '<span class="material-icons"> panorama_fish_eye </span>';

export const Icon = styled.span`
  color: ${satin};
  font-size: ${props => props.size || '24px' };
  &:hover {
    color: ${candy};
    cursor: pointer;
  }
`