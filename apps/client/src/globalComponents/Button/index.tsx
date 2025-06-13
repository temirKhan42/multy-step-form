import React, { ButtonHTMLAttributes } from "react";
import { Oval } from 'react-loader-spinner';
import { ButtonStyle } from "./styled";

export type TButtonStyle = {
  varity?: 'main'|'default'|'empty'
  color?: string; 
  bcgrnd?: string; 
  colorh?: string; 
  bcgrndh?: string;
}

type Props = {
  title: string;
  isLoading?: boolean;
} & TButtonStyle & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({
  title,
  color,
  bcgrnd,
  colorh,
  bcgrndh,
  varity = 'default',
  isLoading = false,
  ...rest
}) => {
  
  return (
    <ButtonStyle 
      varity={varity}
      color={color}
      bcgrnd={bcgrnd}
      colorh={colorh}
      bcgrndh={bcgrndh}
      {...rest}
    >
      {
        isLoading ? 
          <Oval
            height={16}
            width={16}
            color={color ? color : "#fff"}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#fff"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        : null
      }
      {title}
    </ButtonStyle>
  );
};
