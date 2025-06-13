import React, { forwardRef, InputHTMLAttributes } from "react";
import { IMaskInput } from 'react-imask';
import { InputBlock } from "./styled";
import { Flex, TextOffset } from "../../styledComponents";
import { colors } from "../../core/utils/constans";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  onChange: (value: string) => void;
  error?: string;
}

export const InputPhone = forwardRef<HTMLInputElement, Props>(
  ({
    label,
    onChange,
    error,
    id,
    ...props
  }, ref) => {
    const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

    return (
      <InputBlock column={"column"} gap={'0.25rem'}>
        {label || error ?
          <Flex>
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
        <IMaskInput
          ref={ref}
          mask={"+0 000 000 0000"}
          unmask={true}
          placeholder={props.placeholder || "+0 123 456 7890"}
          value={typeof props.value === 'string' ? props.value : ''}
          onAccept={(value) => onChange(value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          required={props.required}
        />
      </InputBlock>
    );
  }
);

InputPhone.displayName = 'InputPhone';