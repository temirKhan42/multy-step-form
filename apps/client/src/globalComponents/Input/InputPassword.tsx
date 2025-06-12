import { forwardRef, useState } from "react";
import Icon from '@mdi/react';
import { mdiEyeOutline, mdiEyeClosed } from '@mdi/js';
import { InputBlock, ViewIcon } from "./styled";
import { Flex, TextOffset } from "../../styledComponents";
import { colors } from "../../core/utils/constans";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  label: string;
  error?: string;
  withIcon?: boolean;
}

export const InputPassword = forwardRef<HTMLInputElement, Props>(
  ({
    value,
    label,
    id,
    type = 'password',
    withIcon = true,
    error,
    ...props
  }, ref) => {
    const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
    const [showPassword, setShowPassword] = useState(false);

    return (
      <InputBlock withicon={`${withIcon}`} column={"column"} gap={'0.25rem'}>
        {label || error ? 
          <Flex jc={"space-between"} ai={"center"} gap="2.5rem">
            {label ? <label htmlFor={inputId}>{label}</label> : null}

            {error && (
              <TextOffset
                color={colors.redStrawberry()}
                weight="700"
                id={`${inputId}-error`}
                role="alert"
              >
                {error}
              </TextOffset>
            )}
          </Flex> : null
        }
        <input
          id={inputId}
          type={showPassword ? "text" : "password"}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          ref={ref}
          {...props}
        />

        <ViewIcon type={"button"} onClick={() => setShowPassword(!showPassword)}>
          <Icon 
            path={showPassword ? mdiEyeOutline : mdiEyeClosed} 
            size={1} 
            color={colors.blueMarine()} 
          />
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={(e) => e.preventDefault()}
          />
        </ViewIcon>
      </InputBlock>
    );
  }
);

InputPassword.displayName = 'InputPassword';