import { ReactNode } from "react";
import { TUiButton, TUiInfo } from "../../../../core/types";
import { colors } from "../../../../core/utils/constans";
import { Flex, TextOffset } from "../../../../styledComponents";
import Wraper from "./wraper";

type Props = {
  buttons: [TUiButton|null, TUiButton|null];
  uiInfo: TUiInfo;
  children: ReactNode;
}

const StepPassDesc: React.FC<Props> = ({
  buttons,
  uiInfo,
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

export default StepPassDesc;