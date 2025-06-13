import React, { useRef } from "react";
import { TOption } from "../../core/types";
import { colors } from "../../core/utils/constans";
import { Text } from "../../styledComponents";
import { SwitcherBlock } from "./styled";

type Props = {
  options: [TOption, TOption];
  select: (value: string|number|boolean) => void;
  value: string|number|boolean;
}

export const Switcher: React.FC<Props> = ({
  options,
  select,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [optionA, optionB] = options;

  const handleChecked = () => {
    select(inputRef.current?.checked ? optionB.value : optionA.value);
  };

  return (
    <SwitcherBlock>
      <Text size="14" color={colors.blueMarine()} weight="500">
        {optionA.label}
      </Text>
      <label>
        <input 
          checked={value === optionB.value ? true : false}
          ref={inputRef} 
          onChange={handleChecked} 
          type="checkbox" 
        />
        <span className="slider"></span>
      </label>
      <Text size="14" color={colors.greyCool()} weight="500">
        {optionB.label}
      </Text>
    </SwitcherBlock>
  );
};