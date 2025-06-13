import React, { useMemo } from "react";
import { useRegister } from "..";
import { IAddon, TUiButton, TUiInfo } from "../../../core/types/register";
import { isMobile } from "../../../core/utils";
import StepThreeDesc from "../ui/desctop/stepThreeDesc";
import StepThreeMob from "../ui/mobile/stepThreeMob";

type Props = {
  addons: IAddon[];
  setAddons: (_var: IAddon[]) => void;
}

const StepThree: React.FC<Props> = ({addons, setAddons}) => {
  const isDeviceMobile = isMobile(navigator.userAgent);
  const { personInfo, handleStep, handleBack, step, handleChangePerson } = useRegister();

  const addonCards: IAddon[] = useMemo(() => {
    if (personInfo.billType && addons) {
      return addons.filter((addon) => {
        return addon.billType === personInfo.billType;
      });
    } else {
      return [];
    }
  }, [personInfo.billType, addons]);

  const uiInfo: TUiInfo = {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  };

  const onNext = () => {
    handleStep(step+1);
    const activeAddons = addonCards
      .filter((addon) => {
        return addon.isActive;
      })
      .map((addon) => {
        return addon.id;
      });
    handleChangePerson('addons', activeAddons);
  };

  const buttons: [TUiButton, TUiButton] = [
    {
      label: "Go back",
      onClick: () => handleBack()
    },
    {
      label: "Next Step",
      onClick: onNext
    }
  ];

  const onCheckAddOnn = (checked: boolean, addonVal: string) => {
    if (personInfo.billType && addons) {
      setAddons(
        addons.map((card) => {
          return (
            card.billType === personInfo.billType && 
            card.value === addonVal
          ) ? {...card, 'isActive': checked} : card;
        })
      );
    }
  };

  return (
    <>
      {isDeviceMobile ? 
        <StepThreeMob 
          uiInfo={uiInfo}
          buttons={buttons}
          addonCards={addonCards}
          onCheckAddOnn={onCheckAddOnn}
        /> : 
        <StepThreeDesc 
          uiInfo={uiInfo}
          buttons={buttons}
          addonCards={addonCards}
          onCheckAddOnn={onCheckAddOnn}
        />  
      }
    </>
  );
};

export default StepThree;