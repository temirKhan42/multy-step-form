import Link from "next/link";
import { colors } from "../../../../core/utils/constans";
import { Flex, Text, TextOffset } from "../../../../styledComponents";
import Wraper from "./wraper";
import { ResultBlock } from "../styled";
import { PriceBlock } from "./styled";
import { IAddon, IPlan, TUiButton, TUiInfo } from "../../../../core/types";

type Props = {
  buttons: [TUiButton|null, TUiButton|null];
  uiInfo: TUiInfo;
}

const StepFourDesc: React.FC<Props> = ({
  buttons,
  uiInfo,
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

        <ResultBlock>
          <Flex ai={"center"} gap={"0.5rem"}>
            <Flex column={"column"} gap={"0.5rem"}>
              <Text weight="700" color={colors.blueMarine()}>
                {uiInfo.planTitle}
              </Text>
              <Link href={"/register?step=3"}>{"Change"}</Link>
            </Flex>
            <Text weight="700" color={colors.blueMarine()}>
              {uiInfo.planPrice}
            </Text>
          </Flex>
          {uiInfo.selected ? 
            <Flex column={"column"} gap={"1.5rem"}>
              {uiInfo?.selected.map((addonn, index) => {
                return (
                  <Flex key={index} ai={"center"} jc={"space-between"}>
                    <Text size={"14"} color={colors.greyCool()}>
                      {addonn.selectedTitle}
                    </Text>
                    <Text size={"14"} color={colors.blueMarine()}>
                      {addonn.selectePrice}
                    </Text>
                  </Flex>
                );
              })}
            </Flex> : null
          }
        </ResultBlock>
        
        <PriceBlock ai={"center"} jc={"space-between"} gap={"0.5rem"}>
          <Text color={colors.greyCool()}>
            {uiInfo.totalTitle}
          </Text>
          <Text color={colors.bluePurplish()} weight="700">
            {uiInfo.totalPrice}
          </Text>
        </PriceBlock>
      </Flex>
    </Wraper>
  );
};

export default StepFourDesc;