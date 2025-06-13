import styled from "styled-components";
import { colors } from "../../../../core/utils/constans";
import { Flex } from "../../../../styledComponents";


const Container = styled.div<{formheight: string}>`
  background-color: ${colors.whiteMagnolia()};
  height: ${({formheight}) => +formheight + (12*16)}px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const StepBlock = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &>img {
    position: absolute;
    top: 0;
    left: 0;
  }

  &>.steps-custom {
    position: relative;
    margin: 0 auto;
  }
`;
const Footer = styled.div`
  height: 4.5rem;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FormBlock = styled.div`
  background-color: #fff;
  border-radius: 0.5rem; 
  height: fit-content; 
  min-height: 10rem;
  width: calc(100% - 2rem);
  position: absolute;
  top: 6rem;
  left: 1rem;
  padding: 2rem 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const PriceBlock = styled(Flex)`
  padding: 0.5rem 1rem;
`;

export {
  Container,
  StepBlock,
  Footer,
  FormBlock,
  PriceBlock,
};
