import React from "react";
import * as S from "./Flex.styled";

const Flex = ({ children, ...props }) => <S.Flex {...props}>{children}</S.Flex>;

export default Flex;
