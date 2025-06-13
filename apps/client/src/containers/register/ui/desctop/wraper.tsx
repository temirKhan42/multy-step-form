import React, { ReactNode } from "react";
import Image from "next/image";
import {Steps} from "../../../../globalComponents";
import {Button} from "../../../../globalComponents";
import { Container, ContentBlock, Sidebar, SidebarLayout } from "./styled";
import { Flex } from "../../../../styledComponents";
import { TUiButton } from "../../../../core/types/register";
import { useRegister } from "../..";

type Props = {
  buttons: [TUiButton|null, TUiButton|null];
  children: ReactNode;
  currentStep?: number;
}

const Wraper: React.FC<Props> = ({
  buttons,
  children,
  currentStep
}) => {
  const { stepsList, step } = useRegister();

  return (
    <Container>
      <Flex gap={"0"}>
        <Sidebar>
          <Image 
            priority={true} 
            height={568} 
            width={274} 
            alt={"sidebar desctop"} 
            src={"/images/bg-sidebar-desktop.svg"} 
          />
          <SidebarLayout>
            <Steps list={stepsList} current={currentStep ? currentStep : step-1} />
          </SidebarLayout>
        </Sidebar>
        <ContentBlock>
          {children}
          {buttons[0] || buttons[1] ? 
            <Flex jc={"space-between"} ai={"center"}>
              {buttons[0] ? 
                <Button 
                  title={buttons[0].label}
                  onClick={buttons[0].onClick}
                  varity={"empty"}
                /> : <div></div>
              }
              {buttons[1] ? 
                <Button 
                  title={buttons[1].label}
                  onClick={buttons[1].onClick}
                  isLoading={buttons[1]?.isLoading !== undefined ?
                    buttons[1].isLoading :
                    false
                  }
                /> : null
              }
            </Flex> : null
          }
        </ContentBlock>
      </Flex>
    </Container>
  );
};

export default Wraper;