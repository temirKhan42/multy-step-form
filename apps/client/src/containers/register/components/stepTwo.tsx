import React, { useMemo } from "react";
import { TBillOption, TCard, TUiButton, TUiInfo } from "../../../core/types/register";
import { isMobile } from "../../../core/utils";
import StepTwoDesc from "../ui/desctop/stepTwoDesc";
import StepTwoMob from "../ui/mobile/stepTwoMob";
import { useRegister } from "..";
import { useGetPlansQuery } from "../../../core/store/api/plan";

const icons = {
  'arcade': "/images/icon-arcade.svg",
  'advanced': "/images/icon-advanced.svg",
  'pro': "/images/icon-pro.svg",
};

const StepTwo: React.FC = () => {
  const isDeviceMobile = isMobile(navigator.userAgent);
  const { personInfo, handleBack, handleStep, step } = useRegister();
  const { data: billPlans } = useGetPlansQuery();

  const cards: TCard[] = useMemo(() => {
    if (personInfo.billType && billPlans?.data) {
      return billPlans.data
        .filter((card) => card.billType === personInfo.billType)
        .sort((card1, card2) => card1.price > card2.price ? 1 : -1)
        .map((card) => {
          return {
            ...card,
            icon: icons[card.value]
          };
        });
    } else {
      return [];
    }
  }, [billPlans?.data, personInfo.billType]);

  const uiInfo: TUiInfo = {
    title: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
  };
  
  const buttons: [TUiButton, TUiButton] = [
    {
      label: "Go back",
      onClick: () => handleBack()
    },
    {
      label: "Next Step",
      onClick: () => handleStep(step+1)
    }
  ];

  const billOptions: [TBillOption, TBillOption] = [
    {label: 'Monthly', value: 'per-month'},
    {label: 'Yearly', value: 'per-year'}
  ];

  return (
    <>
      {isDeviceMobile ? 
        <StepTwoMob 
          uiInfo={uiInfo}
          buttons={buttons}
          billOptions={billOptions}
          cards={cards}
        /> : 
        <StepTwoDesc 
          buttons={buttons}
          uiInfo={uiInfo}
          billOptions={billOptions}
          cards={cards}
        />  
      }
    </>
  );
};

export default StepTwo;