import styled, { css } from "styled-components";
import { colors, mediaMinWidth } from "../../core/utils/constans";
import { TButtonStyle } from ".";

const empty = css`
  height: fit-content;
  width: fit-content;
  color: ${colors.greyCool()};
  background-color: transparent;
  display: block;
  text-align: left;

  &:hover {
    color: ${colors.blueMarine()};
    background-color: transparent;
  }
`;

const main = css`
  color: #fff;
  background-color: ${colors.bluePurplish()};

  &:hover {
    background-color: ${colors.bluePurplish(0.7)};
  }
`;

const ButtonStyle = styled.button<TButtonStyle>`
  height: 2.5rem;
  min-width: 6.25rem;
  width: fit-content;
  border-radius: 0.25rem;
  border: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${({color}) => color ? color : '#fff'};
  background-color: ${({bcgrnd}) => bcgrnd ? bcgrnd : colors.blueMarine()};
  cursor: pointer;
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  font-size: 14px;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({bcgrndh}) => bcgrndh ? bcgrndh : colors.blueMarine(0.7)};
    color: ${({colorh}) => colorh ? colorh : '#fff'};
  }

  ${({varity = 'default'}) => varity === 'empty' ? empty : varity === 'main' ? main : ''};

  @media (min-width: ${mediaMinWidth}) {
    border-radius: 0.5rem;
    height: 3rem;
    min-width: 7.75rem;
  }
`;

export {
  ButtonStyle
};