import React from "react";
import { useRegister } from "../..";
import { useGetPlansQuery } from "../../../../core/store/api/plan";
import { TBillOption, TBillType, TCard, TUiButton, TUiInfo } from "../../../../core/types/register";
import { colors } from "../../../../core/utils/constans";
import { CardBill, Loader, Switcher } from "../../../../globalComponents";
import { Flex, Text, TextOffset } from "../../../../styledComponents";
import Wraper from "./wraper";

type Props = {
  uiInfo: TUiInfo;
  buttons: [TUiButton|null, TUiButton|null];
  billOptions: [TBillOption, TBillOption];
  cards: TCard[];
}

const StepTwoMob: React.FC<Props> = ({
  buttons,
  uiInfo,
  billOptions,
  cards
}) => {
  const { personInfo, handleChangePerson } = useRegister();
  const { isLoading } = useGetPlansQuery();

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
          cards.map((card) => {
            return (
              <CardBill
                key={card.value} 
                card={card}
                isActive={card.value === personInfo.billPlan}
                onSelect={(plan) => handleChangePerson('billPlan', plan)}
              />
            );
          })
        }

        <Switcher 
          options={billOptions}
          select={(value) => handleChangePerson('billType', value as TBillType)} 
          value={personInfo.billType || 'per-month'}
        />
      </Flex>
    </Wraper>
  );
};

export default StepTwoMob;