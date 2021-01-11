import React from "react";
import { useField } from "formik";
import * as S from "./Input.styled";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Input = (props) => {
  const [field, meta] = useField(props);
  return (
    <S.Wrapper>
      <S.Input {...field} {...meta} {...props} />
      <ErrorMessage {...meta} />
    </S.Wrapper>
  );
};

export default Input;
