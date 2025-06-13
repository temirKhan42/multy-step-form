import React, { ReactNode } from "react";
import { colors } from "../../../../core/utils/constans";
import { Flex, TextOffset } from "../../../../styledComponents";
import Wraper from "./wraper";
import { TUiButton, TUiInfo } from "../../../../core/types/register";

type Props = {
  uiInfo: TUiInfo;
  buttons: [TUiButton|null, TUiButton|null];
  children: ReactNode;
}

const StepOneDesc: React.FC<Props> = ({
  uiInfo,
  buttons,
  children
}) => {
  
  return (
    <Wraper buttons={buttons}>
      <Flex column={"column"} gap={"0"}>
        <TextOffset bottom={"1.25rem"} color={colors.blueMarine()} size="26" weight="700">
          {uiInfo.title}
        </TextOffset>
        <TextOffset bottom={"2.625rem"} color={colors.greyCool()} weight="500">
          {uiInfo.description}
        </TextOffset>
        {children}
      </Flex>
    </Wraper>
  );
};

export default StepOneDesc;