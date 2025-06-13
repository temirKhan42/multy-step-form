import React from "react";
import { useGetAddonnsQuery } from "../../../../core/store/api/plan";
import { IAddon, TUiButton, TUiInfo } from "../../../../core/types/register";
import { colors } from "../../../../core/utils/constans";
import { CardCheck, Loader } from "../../../../globalComponents";
import { Flex, TextOffset } from "../../../../styledComponents";
import Wraper from "./wraper";

type Props = {
  uiInfo: TUiInfo;
  buttons: [TUiButton|null, TUiButton|null];
  addonCards: IAddon[];
  onCheckAddOnn: (checked: boolean, addonVal: string) => void;
}

const StepThreeDesc: React.FC<Props> = ({
  uiInfo,
  buttons,
  addonCards,
  onCheckAddOnn
}) => {
  const { isLoading } = useGetAddonnsQuery(undefined, {skip: true});

  return (
    <Wraper buttons={buttons}>
      <Flex column={"column"} gap={"0"}>
        <TextOffset bottom={"1.25rem"} color={colors.blueMarine()} size="26" weight="700">
          {uiInfo.title}
        </TextOffset>
        <TextOffset bottom={"2.625rem"} color={colors.greyCool()} weight="500">
          {uiInfo.description}
        </TextOffset>

        {isLoading ?
          <Flex ai={"center"} jc={"center"}>
            <Loader width={32} height={32} /> 
          </Flex> :
          <Flex column={"column"}>
            {addonCards.map((card) => {
              return (
                <CardCheck
                  cardData={card} 
                  key={card.value} 
                  onCheck={onCheckAddOnn} 
                />
              );
            })}
          </Flex>
        }
      </Flex>
    </Wraper>
  );
};

export default StepThreeDesc;