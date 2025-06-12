import styled from "styled-components";
import { colors, mediaMinWidth } from "../../../core/utils/constans";
import { flex, Flex } from "../../../styledComponents";
import { TFlex } from "../../../core/types/style";

const ResultBlock = styled.div`
  padding: 1.25rem 1rem 1rem;
  background-color: ${colors.whiteMagnolia()};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;

  &>div:first-child {
    padding-bottom: 0.625rem;
    border-bottom: 1px solid ${colors.greyCool()};
  }

  a {
    font-size: 14px;
    color: ${colors.greyCool()};
    text-decoration: underline;
    cursor: pointer;
  }

  &>div:last-child {
    padding-top: 1rem;
  }

  @media (min-width: ${mediaMinWidth}) {
    padding: 1.5rem 1.25rem;

    &>div:first-child {
      padding-bottom: 1.5rem;
    }

    a {
      font-size: 16px;
    }

    &>div:last-child {
      padding-top: 1.25rem;
    }
  }
`;
const SuccessBlock = styled(Flex)`
  padding: 2.5rem 0;

  @media (min-width: ${mediaMinWidth}) {
    height: 30rem;
    padding: 0;
  }
`;
const StyledForm = styled.form<TFlex>`
  ${flex};
  flex-direction: column;

  @media (min-width: ${mediaMinWidth}) {
    gap: 1.5rem;
  }
`;

export {
  ResultBlock,
  SuccessBlock,
  StyledForm
};
