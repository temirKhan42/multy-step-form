import styled from "styled-components";
import { colors, mediaMinWidth } from "../../core/utils/constans";

const CardCheckBlock = styled.div<{isactive: 'true'|'false'}>`
  border-width: 1px;
  border-style: solid;
  border-color: ${({isactive}) => isactive === 'true' ? colors.blueMarine() : colors.greyCool()};
  border-radius: 0.625rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({isactive}) => isactive === 'true' ? colors.whiteMagnolia() : '#fff'};
  cursor: pointer;

  p {
    cursor: pointer;
  }

  @supports (-webkit-appearance: none) or (-moz-appearance: none) {
    .checkbox-wrapper input[type=checkbox] {
      --active: #275EFE;
      --active-inner: #fff;
      --focus: 2px rgba(39, 94, 254, .3);
      --border: #BBC1E1;
      --border-hover: #275EFE;
      --background: #fff;
      --disabled: #F6F8FF;
      --disabled-inner: #E1E6F9;
      appearance: none;
      height: 20px;
      outline: none;
      display: inline-block;
      vertical-align: top;
      position: relative;
      margin: 0;
      cursor: pointer;
      border: 1px solid var(--bc, var(--border));
      background: var(--b, var(--background));
      transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
    }
    .checkbox-wrapper input[type=checkbox]:after {
      content: "";
      display: block;
      left: 0;
      top: 0;
      position: absolute;
      transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
    }
    .checkbox-wrapper input[type=checkbox]:checked {
      --b: var(--active);
      --bc: var(--active);
      --d-o: .3s;
      --d-t: .6s;
      --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
    }
    .checkbox-wrapper input[type=checkbox]:disabled {
      --b: var(--disabled);
      cursor: not-allowed;
      opacity: 0.9;
    }
    .checkbox-wrapper input[type=checkbox]:disabled:checked {
      --b: var(--disabled-inner);
      --bc: var(--border);
    }
    .checkbox-wrapper input[type=checkbox]:disabled + label {
      cursor: not-allowed;
    }
    .checkbox-wrapper input[type=checkbox]:hover:not(:checked):not(:disabled) {
      --bc: var(--border-hover);
    }
    .checkbox-wrapper input[type=checkbox]:focus {
      box-shadow: 0 0 0 var(--focus);
    }
    .checkbox-wrapper input[type=checkbox]:not(.switch) {
      width: 20px;
    }
    .checkbox-wrapper input[type=checkbox]:not(.switch):after {
      opacity: var(--o, 0);
    }
    .checkbox-wrapper input[type=checkbox]:not(.switch):checked {
      --o: 1;
    }
    .checkbox-wrapper input[type=checkbox] + label {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      margin-left: 4px;
    }

    .checkbox-wrapper input[type=checkbox]:not(.switch) {
      border-radius: 0.25rem;
    }
    .checkbox-wrapper input[type=checkbox]:not(.switch):after {
      width: 5px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 4px;
      transform: rotate(var(--r, 20deg));
    }
    .checkbox-wrapper input[type=checkbox]:not(.switch):checked {
      --r: 43deg;
    }
  }

  .checkbox-wrapper * {
    box-sizing: inherit;
  }
  .checkbox-wrapper *:before,
  .checkbox-wrapper *:after {
    box-sizing: inherit;
  }

  @media (min-width: ${mediaMinWidth}) {
    padding: 1.25rem 1.5rem;
    gap: 1.5rem;

    &>div:nth-child(2) {
      gap: 0.5rem;
    }
    p {
      font-size: 14px;
    }
  }
`;

export {
  CardCheckBlock,
};
