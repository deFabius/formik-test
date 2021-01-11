import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: space-between;

  > * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
`;
