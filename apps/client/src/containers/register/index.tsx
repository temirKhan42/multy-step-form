import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetAddonnsQuery } from "../../core/store/api/plan";
import StepOne from "./components/stepOne";
import StepTwo from "./components/stepTwo";
import StepThree from "./components/stepThree";
import StepFour from "./components/stepFour";
import Success from "./components/success";
import { TBillType, PersonContextType, TBillPlan, TPerson, IAddon } from '../../core/types/register'
import StepPass from "./components/stepPass";

const RegisterContext = createContext<PersonContextType | undefined>(undefined);

const Register: React.FC = () => {
  const router = useRouter();
  const stepsList = ['your info', 'password', 'select plan', 'add-ons', 'summary'];
  const stepFromQuery = parseInt(router.query.step as string) || 1;
  const [personInfo, setPersonInfo] = useState<TPerson>({'billPlan': 'arcade', billType: 'per-month'});
  const { data: addonns } = useGetAddonnsQuery();
  const [addons, setAddons] = useState<IAddon[]>([]);

  useEffect(() => {
    setAddons(addonns ? addonns.data : []);
  }, [addonns]);

  const handleChangePerson = (
    key: keyof TPerson, 
    value: string|TBillType|TBillPlan|string[]
  ) => {
    setPersonInfo(personInfo ? 
      {...personInfo, [key]: value} : 
      {[key]: value}
    );
  };

  const handleStep = (value: number) => {
    router.push(`/register?step=${value}`, undefined, { shallow: true });
  };

  const handleBack = () => {
    if (stepFromQuery > 1) {
      router.back();
    }
  };

  return (
    <RegisterContext.Provider value={{ 
      personInfo, 
      handleChangePerson,
      stepsList,
      step: stepFromQuery,
      handleStep,
      handleBack,
    }}>
      {stepFromQuery === 1 ? 
        <StepOne /> : 
          stepFromQuery === 2 ?
        <StepPass /> :
          stepFromQuery === 3 ?
        <StepTwo /> : 
          stepFromQuery === 4 ?
        <StepThree addons={addons} setAddons={setAddons} /> :
          stepFromQuery === 5 ?
        <StepFour addons={addons} /> :
          stepFromQuery === 6 ?
        <Success /> : null
      }
    </RegisterContext.Provider>
  );
};

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) throw new Error('useRegister must be used within RegisterProvider');
  return context;
};

export default Register;