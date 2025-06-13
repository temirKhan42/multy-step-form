import React from "react";
import { Oval, OvalProps } from "react-loader-spinner"
import { colors } from "../../core/utils/constans";

type Props = {
  theme?: 'default'|'dark'|'light'
} & OvalProps

export const Loader: React.FC<Props> = ({theme = 'default', ...rest}) => {
  const themes: {[key: string]: any} = {
    default: {
      color1: colors.blueMarine(),
      color2: colors.greyLight(),
    },
    dark: {
      color1: colors.whiteAlabaster(),
      color2: colors.blueLight(),
    },
    light: {
      color1: colors.blueMarine(),
      color2: colors.greyLight(),
    }
  };


  return (
    <Oval
      height={16}
      width={16}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      strokeWidth={2}
      strokeWidthSecondary={2}
      color={themes[theme].color1} 
      secondaryColor={themes[theme].color2} 
      {...rest}
    />
  );
};
