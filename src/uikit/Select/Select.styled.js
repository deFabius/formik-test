import styled from "styled-components";
import { shared } from "../shared";

export const Wrapper = styled.div``;

export const Select = styled.select`
  ${shared}
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;

  color: ${(props) => props.value === "" && "grey"};

  /* Hide arrow icon in IE browsers */
  &::-ms-expand {
    display: none;
  }

  & option {
    font-weight: normal;
  }
`;
