import React from "react";
import { useField } from "formik";
import * as S from "./Select.styled";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Select = (props) => {
  const [field, meta] = useField(props);
  return (
    <S.Wrapper>
      <S.Select {...field} {...props} {...meta}>
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map((option, index) => (
          <option key={`option${index}`}>{option}</option>
        ))}
      </S.Select>
      <ErrorMessage {...meta} />
    </S.Wrapper>
  );
};

export default Select;
