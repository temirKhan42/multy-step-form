import React from "react";
import { IAddon } from "../../core/types/register";
import { colors } from "../../core/utils/constans";
import { Flex, Text, TextOffset } from "../../styledComponents";
import { CardCheckBlock } from "./styled";

type Props = {
  cardData: IAddon;
  onCheck: (checked: boolean, value: string) => void;
}

export const CardCheck: React.FC<Props> = ({cardData, onCheck}) => {

  return (
    <CardCheckBlock 
      onClick={() => onCheck(!cardData.isActive, cardData.value)} 
      isactive={`${cardData.isActive}`}
    >
      <div className="checkbox-wrapper">
        <input 
          checked={cardData.isActive} 
          onChange={() => undefined} 
          id="c1-13" 
          type="checkbox" 
        />
      </div>
      <Flex column={"column"} gap={'0.25rem'}>
        <Text size={"14"} weight={"700"} color={colors.blueMarine()}>
          {cardData.title}
        </Text>
        <Text size={"12"} weight={"500"} color={colors.greyCool()}>
          {cardData.info}
        </Text>
      </Flex>
      <TextOffset size={"12"} weight={"500"} color={colors.bluePurplish()} left={"0.25rem"}>
        +${cardData.price}/{cardData.billType === 'per-month' ? 'mo' : 'yr'}
      </TextOffset>
    </CardCheckBlock>
  );
};


