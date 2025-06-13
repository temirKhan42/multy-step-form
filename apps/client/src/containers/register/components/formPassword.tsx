import React from "react";
import { useRegister } from "..";
import { TPerson } from "../../../core/types/register";
import { InputPassword } from "../../../globalComponents";
import { StyledForm } from "../ui/styled";

type Props = { errors: TPerson }

const FormPassword: React.FC<Props> = ({ errors }) => {
  const { personInfo, handleChangePerson } = useRegister();

  return (
    <StyledForm>
      <InputPassword
        label="Create a password"
        value={personInfo?.password || ''}
        defaultValue={personInfo?.password}
        placeholder={"e.g. 123abcABC"}
        onChange={(e) => handleChangePerson('password', e.target.value)}
        error={errors.password}
      />

      <InputPassword
        label="Confirm the password"
        value={personInfo?.confirmPassword || ''}
        defaultValue={personInfo?.confirmPassword}
        placeholder={"e.g. 123abcABC"}
        onChange={(e) => handleChangePerson('confirmPassword', e.target.value)}
        error={errors.confirmPassword}
      />
    </StyledForm>
  );
};

export default FormPassword;
