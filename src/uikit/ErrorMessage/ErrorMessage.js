import React from "react";
import * as S from "./ErrorMessage.styled";

const ErrorMessage = ({ touched, error }) => {
  return <S.ErrorMessage>{touched && error ? error : null}</S.ErrorMessage>;
};

export default ErrorMessage;
