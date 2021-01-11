import { css } from "styled-components";

export const shared = css`
  display: block;
  padding: 0 0.4rem;
  line-height: 2.5rem;
  font-size: 1.2rem;
  margin-top: 1rem;
  border-width: 1px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  height: 2.5rem;
  border-color: ${(props) => props.error && "red"};

  &:hover {
    border-color: #f00;
  }

  /* Focus style */
  &:focus {
    border-color: #aaa;
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
`;
