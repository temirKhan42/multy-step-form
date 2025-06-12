import Image from "next/image";
import { CardBlock } from "./styled";
import { Flex, Text } from "../../styledComponents";
import { colors } from "../../core/utils/constans";
import { TBillPlan, TCard } from "../../core/types";

type Props = {
  card: TCard;
  isActive?: boolean;
  onSelect: (value: TBillPlan) => void;
}

export const CardBill: React.FC<Props> = ({
  card, 
  isActive = false,
  onSelect
}) => {

  return (
    <CardBlock onClick={() => onSelect(card.value)} isactive={`${isActive}`}>
      <Image 
        width={40} 
        height={40} 
        src={card.icon} 
        alt={`icon for ${card.title}`} 
      />
      <Flex column={"column"} gap={"0.5rem"}>
        <Text size={"14"} weight={"700"} color={colors.blueMarine()}>
          {card.title}
        </Text>
        <Text size={"14"} color={colors.greyCool()}>
          ${card.price}/{card.billType === 'per-month' ? 'mo' : 'yr'}
        </Text>
        {card.description ? 
          <Text size={"12"} weight="700" color={colors.blueMarine()}>
            {card.description}
          </Text> : null
        }
      </Flex>
    </CardBlock>
  );
};