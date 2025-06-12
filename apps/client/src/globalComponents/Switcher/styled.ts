import styled from "styled-components";
import { colors } from "../../core/utils/constans";


const SwitcherBlock = styled.div`
  height: 3rem;
  border-radius: 0.5rem;
  background-color: ${colors.whiteMagnolia()};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  &>label {
    position: relative;
    display: inline-block;
    width: 2.375rem;
    height: 1.25rem;

    & input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .slider::before {
        transform: translateX(1.125rem);
      }
    }

    &>span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${colors.blueMarine()};
      border-radius: 0.625rem;
      transition: 0.4s;

      &::before {
        position: absolute;
        content: "";
        height: 0.75rem;
        width: 0.75rem;
        top: 0.25rem;
        left: 0.25rem;
        background-color: white;
        border-radius: 50%;
        transition: 0.4s;
      }
    }
  }
`;

export {
  SwitcherBlock,
}