import React, { forwardRef } from "react";
import { InputBlock } from "./styled";
import { Flex, TextOffset } from "../../styledComponents";
import { colors } from "../../core/utils/constans";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string
}

export const InputCustom = forwardRef<HTMLInputElement, Props>(
  ({
    label,
    id,
    type = 'text',
    error,
    ...props
  }, ref) => {
    const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

    return (
      <InputBlock column={"column"} gap={'0.25rem'}>
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
          ref={ref}
          type={type}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
      </InputBlock>
    );
  }
);

InputCustom.displayName = 'InputCustom';
