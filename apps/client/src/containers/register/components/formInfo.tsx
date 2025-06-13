import React from "react";
import { useRegister } from "..";
import { TPerson } from "../../../core/types/register";
import { InputCustom, InputPhone } from "../../../globalComponents";
import { StyledForm } from "../ui/styled";

type Props = { errors: TPerson }

const FormInfo: React.FC<Props> = ({ errors }) => {
  const { personInfo, handleChangePerson } = useRegister();

  return (
    <StyledForm>
      <InputCustom
        label="Name"
        type="text"
        value={personInfo?.name || ''}
        defaultValue={personInfo?.name}
        onChange={(e) => handleChangePerson('name', e.target.value)}
        placeholder={"e.g. Stephen King"}
        error={errors.name}
        required
      />

      <InputCustom
        label="Email Address"
        type={"email"}
        value={personInfo?.email || ''}
        defaultValue={personInfo?.email}
        onChange={(e) => handleChangePerson('email', e.target.value)}
        placeholder={"e.g. stephenking@lorem.com"}
        error={errors.email}
        required
      />

      <InputPhone
        label="Phone Number"
        value={personInfo?.phone || ''}
        defaultValue={personInfo?.phone}
        onChange={(value) => handleChangePerson('phone', value as string)}
        placeholder={"e.g. +0 123 456 7890"}
        error={errors.phone}
        required
      />
    </StyledForm>
  );
};

export default FormInfo