import styled from "styled-components";
import { Flex } from "../../../../styledComponents";

const Container = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
`;
const Sidebar = styled.div`
  width: 17.125rem;
  position: relative;
  border-radius: 0.625rem;
`;
const SidebarLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: transparent;
`;
const ContentBlock = styled.div`
  padding: 2.75rem 6.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 5.75rem;
  width: 100%;
`;
const PriceBlock = styled(Flex)`
  padding: 1.5rem 1.5rem;
`;

export {
  Container,
  Sidebar,
  SidebarLayout,
  ContentBlock,
  PriceBlock
};