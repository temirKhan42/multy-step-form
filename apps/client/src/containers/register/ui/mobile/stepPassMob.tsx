import { ReactNode } from "react";
import { TUiButton, TUiInfo } from "../../../../core/types";
import { colors } from "../../../../core/utils/constans";
import { Flex, Text, TextOffset } from "../../../../styledComponents";
import Wraper from "./wraper";

type Props = {
  uiInfo: TUiInfo;
  buttons: [TUiButton|null, TUiButton|null];
  children: ReactNode;
}

const StepPassMob: React.FC<Props> = ({
  buttons,
  uiInfo,
  children,
}) => {

  return (
    <Wraper buttons={buttons}>
      <Flex column={"column"} gap={'1rem'}>
        <Text color={colors.blueMarine()} weight={'700'}>
          {uiInfo.title}
        </Text>

        <TextOffset size="14" color={colors.greyCool()} bottom={"0.5rem"}>
          {uiInfo.description}
        </TextOffset>

        {children}
      </Flex>
    </Wraper>
  );
};

export default StepPassMob;