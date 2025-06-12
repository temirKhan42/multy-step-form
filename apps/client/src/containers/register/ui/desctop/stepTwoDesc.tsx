import { useRegister } from "../..";
import { useGetPlansQuery } from "../../../../core/store/api/plan";
import { TBillOption, TBillType, TCard, TUiButton, TUiInfo } from "../../../../core/types";
import { colors } from "../../../../core/utils/constans";
import { CardBill, Loader, Switcher } from "../../../../globalComponents";
import { Flex, Grid, Offset, TextOffset } from "../../../../styledComponents";
import Wraper from "./wraper";

type Props = {
  buttons: [TUiButton|null, TUiButton|null];
  uiInfo: TUiInfo;
  billOptions: [TBillOption, TBillOption];
  cards: TCard[];
}

const StepTwoDesc: React.FC<Props> = ({
  buttons,
  uiInfo,
  billOptions,
  cards
}) => {
  const { personInfo, handleChangePerson } = useRegister();
  const { isLoading } = useGetPlansQuery();

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
            <Loader 
              width={32} 
              height={32} 
            /> 
          </Flex> : 
          <Grid cols={"1fr 1fr 1fr"}>
            {cards.map((card) => {
              return (
                <CardBill 
                  key={card.value} 
                  card={card} 
                  isActive={card.value === personInfo.billPlan}
                  onSelect={(plan) => handleChangePerson('billPlan', plan)}
                />
              );
            })}
          </Grid>
        }

        <Offset top={"2rem"} />

        <Switcher 
          options={billOptions}
          select={(value) => handleChangePerson('billType', value as TBillType)} 
          value={personInfo.billType || 'per-month'}
        />
      </Flex>
    </Wraper>
  );
};

export default StepTwoDesc;