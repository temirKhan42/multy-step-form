import { useState } from "react";
import { TObjectKeyString, TUiButton, TUiInfo } from "../../../core/types";
import { isMobile } from "../../../core/utils";
import StepOneDesc from "../ui/desctop/stepOneDesc";
import StepOneMob from "../ui/mobile/stepOneMob";
import FormInfo from "./formInfo";
import { validatePersonInfo } from "../schema";
import { useRegister } from "..";

const StepOne: React.FC = () => {
  const isDeviceMobile = isMobile(navigator.userAgent);
  const [errors, setErrors] = useState<TObjectKeyString>({});
  const { personInfo, handleStep, step } = useRegister();

  const onNext = async () => {
    const onSuccess = () => {
      handleStep(step+1);
    };
    await validatePersonInfo(personInfo, setErrors, onSuccess)
  };

  const uiInfo: TUiInfo = {
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
  };
  
  const buttons: [null, TUiButton] = [
    null,
    {
      label: "Next Step",
      onClick: onNext
    }
  ];

  return (
    <>
      {isDeviceMobile ? 
        <StepOneMob
          uiInfo={uiInfo}
          buttons={buttons}
        >
          <FormInfo errors={errors} />
        </StepOneMob> : 
        <StepOneDesc
          uiInfo={uiInfo}
          buttons={buttons}  
        >
          <FormInfo errors={errors} />  
        </StepOneDesc>
      }
    </>
  );
};

export default StepOne;