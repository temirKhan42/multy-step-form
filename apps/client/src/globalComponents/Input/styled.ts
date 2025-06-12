import styled from "styled-components";
import { flex } from "../../styledComponents";
import { TFlex } from "../../core/types/style";
import { colors, mediaMinWidth } from "../../core/utils/constans";

const inputHeighMob = 2.5;
const inputHeighDesc = 3;

const InputBlock = styled.div<{withicon?: 'true'|'false'} & TFlex>`
  ${flex};
  position: relative;

  label {
    font-size: 10px;
    font-weight: 500;
    color: ${colors.blueMarine()};
    margin: 0;
    padding: 0;
  }

  p[role="alert"] {
    font-size: 10px;
    margin-left: auto;
    text-align: right;
  }

  &>input {
    height: ${inputHeighMob}rem;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.25rem;
    border-color: ${colors.greyCool()};
    display: flex;
    justify-content: center;
    padding: ${({withicon = 'false'}) => withicon === 'true' ? '0 3rem 0 1rem' : '0 1rem'};
    font-size: 14px;
    font-weight: 500;
    outline-color: ${colors.blueMarine()};
  }
  &>input[aria-invalid="true"] {
    border-color: ${colors.redStrawberry()};
  }

  @media (min-width: ${mediaMinWidth}) {
    gap: 0.5rem;
    
    label,
    p[role="alert"] {
      font-size: 12px;
    }
    
    &>input {
      height: ${inputHeighDesc}rem;
      border-radius: 0.5rem;
      font-size: 16px;
    }
  }
`;
const ViewIcon = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: ${inputHeighMob / 2}rem;
  right: 1rem;
  transform: translateY(50%);
  cursor: pointer;

  &>input[type=checkbox] {
    display: none;
  }
`;

export {
  InputBlock,
  ViewIcon
};