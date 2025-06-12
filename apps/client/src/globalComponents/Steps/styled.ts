import styled from "styled-components";
import { themes } from ".";
import { mediaMinWidth } from "../../core/utils/constans";

const StepsList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (min-width: ${mediaMinWidth}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const StepBlock = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StepNum = styled.div<{isactive: 'true'|'false'; theme: string}>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({isactive, theme}) => isactive === 'true' ? themes[theme]?.color2 : themes[theme]?.color1};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({isactive, theme}) => isactive === 'true' ? themes[theme]?.color2 : 'transparent'};
  transition: all 0.2s ease;

  &>span {
    font-size: 10px;
    font-weight: 700;
    color: ${({isactive, theme}) => isactive === 'true' ? themes[theme]?.color4 : themes[theme]?.color1};
  }
`;

const StepTitle = styled.div<{theme: string}>`
  display: none;
  flex-direction: column;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &>p {
    text-transform: uppercase;
    margin: 0;
  }
  &>p:first-child {
    font-size: 9px;
    font-weight: 400;
    color: ${({theme}) => themes[theme]?.color3};
  }
  &>p:last-child {
    font-size: 10px;
    font-weight: 700;
    color: ${({theme}) => themes[theme]?.color1};
  }

  @media (min-width: ${mediaMinWidth}) {
    display: flex;
  }
`;

export {
  StepsList,
  StepBlock,
  StepNum,
  StepTitle
};