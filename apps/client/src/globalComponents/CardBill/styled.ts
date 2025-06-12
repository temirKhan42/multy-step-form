import styled from "styled-components";
import { colors, mediaMinWidth } from "../../core/utils/constans";


const CardBlock = styled.div<{isactive: 'true'|'false'}>`
  padding: 1rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({isactive}) => isactive === 'true' ? colors.blueMarine() : colors.greyCool()};
  display: flex;
  gap: 1rem;
  background-color: ${({isactive}) => isactive === 'true' ? colors.whiteMagnolia() : '#fff'};
  transition: all 0.2s ease;
  cursor: pointer;

  p {
    cursor: pointer;
  }

  @media (min-width: ${mediaMinWidth}) {
    flex-direction: column;
    gap: 2.75rem;
  }
`;

export {
  CardBlock,
};