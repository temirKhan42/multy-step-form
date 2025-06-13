import React from "react";
import { colors } from "../../core/utils/constans";
import { StepBlock, StepNum, StepsList, StepTitle } from "./styled";

export const themes: {[key: string]: any} = {
  default: {
    color1: '#fff',
    color2: colors.blueLight(),
    color3: colors.bluePastel(),
    color4: '#000',
  },
  dark: {
    color1: colors.greyCool(),
    color2: colors.bluePurplish(),
    color3: colors.blueMarine(),
    color4: '#fff',
  },
  light: {
    color1: '#fff',
    color2: colors.blueLight(),
    color3: colors.bluePastel(),
    color4: '#000',
  }
};

type Props = {
  list: string[];
  current?: number; // starts with 0
  theme?: 'default'|'dark'|'light'
}

export const Steps: React.FC<Props> = ({list, current = 0, theme = 'default'}) => {

  return (
    <StepsList className="steps-custom">
      {list.map((title, index) => {
        const num = index+1;
        return (
          <StepBlock key={index}>
            <StepNum isactive={`${index===current}`} theme={theme}>
              <span>{num}</span>
            </StepNum>
            <StepTitle theme={theme}>
              <p>step {num}</p>
              <p>{title}</p>
            </StepTitle>
          </StepBlock>
        );
      })}
    </StepsList>
  );
};
