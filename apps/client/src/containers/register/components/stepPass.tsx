import { TObjectKeyString, TUiButton, TUiInfo } from "../../../core/types";
import { isMobile } from "../../../core/utils";
import { useRegister } from "..";
import StepPassDesc from "../ui/desctop/stepPassDesc";
import StepPassMob from "../ui/mobile/stepPassMob";
import FormPassword from "./formPassword";
import { useState } from "react";
import { validatePersonInfo } from "../schema";

const StepPass: React.FC = () => {
  const isDeviceMobile = isMobile(navigator.userAgent);
  const [errors, setErrors] = useState<TObjectKeyString>({});
  const { handleBack, handleStep, step, personInfo } = useRegister();

  const onNext = async () => {
    const onSuccess = () => {
      handleStep(step+1);
    };
    await validatePersonInfo(personInfo, setErrors, onSuccess, 'password');
  };

  const uiInfo: TUiInfo = {
    title: "Password",
    description: "Please create your password.",
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

  return (
    <>
      {isDeviceMobile ? 
        <StepPassMob
          uiInfo={uiInfo}
          buttons={buttons}
        >
          <FormPassword errors={errors} />
        </StepPassMob> :
        <StepPassDesc
          uiInfo={uiInfo}
          buttons={buttons}
        >
          <FormPassword errors={errors} />
        </StepPassDesc>
      }
    </>
  );
};

export default StepPass;