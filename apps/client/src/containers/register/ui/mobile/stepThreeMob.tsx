import React from "react";
import { useGetAddonnsQuery } from "../../../../core/store/api/plan";
import { IAddon, TUiButton, TUiInfo } from "../../../../core/types/register";
import { colors } from "../../../../core/utils/constans";
import { CardCheck, Loader } from "../../../../globalComponents";
import { Flex, Text, TextOffset } from "../../../../styledComponents";
import Wraper from "./wraper";

type Props = {
  uiInfo: TUiInfo;
  buttons: [TUiButton|null, TUiButton|null];
  addonCards: IAddon[];
  onCheckAddOnn: (checked: boolean, addonVal: string) => void;
}

const StepThreeMob: React.FC<Props> = ({ 
  uiInfo,
  buttons, 
  addonCards,
  onCheckAddOnn
}) => {
  const { isLoading } = useGetAddonnsQuery(undefined, {skip: true});

  return (
    <Wraper buttons={buttons}>
      <Flex column={"column"} gap={'1rem'}>
        <Text color={colors.blueMarine()} weight={'700'}>
          {uiInfo.title}
        </Text>

        <TextOffset size="14" color={colors.greyCool()} bottom={"0.5rem"}>
          {uiInfo.description}
        </TextOffset>

        {isLoading ? 
          <Flex ai={"center"} jc={"center"}>
            <Loader width={32} height={32} /> 
          </Flex> :
          addonCards.map((card) => {
            return (
              <CardCheck 
                cardData={card} 
                key={card.value} 
                onCheck={onCheckAddOnn} 
              />
            );
          })
        }
      </Flex>
    </Wraper>
  );
};

export default StepThreeMob;