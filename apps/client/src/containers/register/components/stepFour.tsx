import React, { useMemo, useState } from "react";
import { useRegister } from "..";
import { IAddon, IPlan, TUiButton, TUiInfo } from "../../../core/types/register";
import { isMobile } from "../../../core/utils";
import StepFourDesc from "../ui/desctop/stepFourDesc";
import StepFourMob from "../ui/mobile/stepFourMob";
import { useRegisterUserMutation } from "../../../core/store/api/authorize";
import { useNotify } from "../../../core/providers/notifyProvider";
import { useGetPlansQuery } from "../../../core/store/api/plan";

type Props = {
  addons: IAddon[];
}

const StepFour: React.FC<Props> = ({ addons }) => {
  const isDeviceMobile = isMobile(navigator.userAgent);
  const {openNotification} = useNotify();
  const [registerUser, {isLoading: isRegisterLoading}] = useRegisterUserMutation();
  const { personInfo, handleBack, handleStep, step } = useRegister();
  const { data: billPlans } = useGetPlansQuery();
  const [selctedAddonSumm, setSelectedAddonSumm] = useState(0);
  const isPerMonth = personInfo.billType === 'per-month';

  const handleConfirm = async () => {
    const {data, error} = await registerUser(personInfo);
    if (data?.success) {
      handleStep(step+1);
      openNotification({
        text: "New account successfuly created!",
        title: "Registration",
        type: "success"
      });

    } else {
      const text = (error as any)?.error || 
        (error as any)?.data?.message || 
        'Unknown error while creating new account';

      openNotification({
        text,
        title: "Registration",
        type: "error"
      })
    }
  };

  const buttons: [TUiButton, TUiButton] = [
    {
      label: "Go back",
      onClick: () => handleBack()
    },
    {
      label: "Confirm",
      onClick: handleConfirm,
      isLoading: isRegisterLoading
    }
  ];

  const selectedPlan: IPlan|null = useMemo(() => {
    if (personInfo.billType && personInfo.billPlan && billPlans?.data) {
      const result = billPlans.data.find((plan) => {
        return (
          plan.billType === personInfo.billType && 
          plan.value === personInfo.billPlan
        );
      });
      return result || null;
    } else {
      return null
    }
  }, [personInfo.billType, personInfo.billPlan, billPlans?.data]);

  const selectedAddons: IAddon[] = useMemo(() => {
    if (personInfo.billType && personInfo.addons && addons) {
      let count = 0;
      const result = addons.filter((addonn) => {
        if (addonn.billType !== personInfo.billType) {
          return false;
        }
        const isAddonSelected = personInfo.addons?.includes(addonn.id);
        count = isAddonSelected ? count+addonn.price : count;
        return isAddonSelected;
      });
      setSelectedAddonSumm(count);
      return result;
    } else {
      setSelectedAddonSumm(0);
      return [];
    }
  }, [personInfo.billType, personInfo.addons, addons]);

  const uiInfo: TUiInfo = {
    title: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
    "planTitle": `${selectedPlan?.title} ${isPerMonth ? "(Monthly)" : "(Yearly)"}`,
    "planPrice": `${selectedPlan?.price}/${isPerMonth ? "mo" : "yr"}`,
    "totalTitle": `Total (per ${isPerMonth ? "month" : "year"})`,
    "totalPrice": `+${selctedAddonSumm+(selectedPlan?.price || 0)}/${isPerMonth ? "mo" : "yr"}`,
    "selected": selectedAddons
      .sort((addon1, addon2) => addon1.price > addon2.price ? 1 : -1)
      .map((addon) => {
        return {
          "selectedTitle": addon.title || '', 
          "selectePrice": `+${addon.price}/${isPerMonth ? "mo" : "yr"}`
        };
      })
  };

  return (
    <>
      {isDeviceMobile ? 
        <StepFourMob 
          buttons={buttons}  
          uiInfo={uiInfo}
        /> : 
        <StepFourDesc
          buttons={buttons}
          uiInfo={uiInfo}
        />  
      }
    </>
  );
};

export default StepFour;