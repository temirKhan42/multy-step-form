import React from "react";
import Link from "next/link";
import { colors } from "../../../../core/utils/constans";
import { Flex, Text, TextOffset } from "../../../../styledComponents";
import Wraper from "./wraper";
import { PriceBlock } from "./styled";
import { ResultBlock } from "../styled";
import { TUiButton, TUiInfo } from "../../../../core/types/register";

type Props = {
  buttons: [TUiButton|null, TUiButton|null];
  uiInfo: TUiInfo;
}

const StepFourMob: React.FC<Props> = ({ 
  buttons, 
  uiInfo,
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

        <ResultBlock>
          <Flex ai={"center"} gap={"0.5rem"}>
            <Flex column={"column"} gap={"0.25rem"}>
              <Text size={"14"} weight="700" color={colors.blueMarine()}>
                {uiInfo.planTitle}
              </Text>
              <Link href={"/register?step=3"}>
                {"Change"}
              </Link>
            </Flex>
            <Text size={"14"} weight="700" color={colors.blueMarine()}>
              {uiInfo.planPrice}
            </Text>
          </Flex>
          {uiInfo.selected ? 
            <Flex column={"column"} gap={"1rem"}>
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
          <Text size={"14"} color={colors.greyCool()}>
            {uiInfo.totalTitle}
          </Text>
          <Text size={"14"} color={colors.bluePurplish()} weight="700">
            {uiInfo.totalPrice}
          </Text>
        </PriceBlock>
      </Flex>
    </Wraper>
  );
};

export default StepFourMob;