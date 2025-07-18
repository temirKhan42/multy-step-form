import React, { ReactNode } from "react";
import Image from "next/image";
import { Container, Footer, FormBlock, StepBlock } from "./styled";
import {Steps} from "../../../../globalComponents";
import {Button} from "../../../../globalComponents";
import { TUiButton } from "../../../../core/types/register";
import { useRegister } from "../..";
import useElementHeight from "../../../../core/hooks/useElementHeight";

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
  const { stepsList, step, } = useRegister();
  const { ref: formRef, height: formHeight } = useElementHeight<HTMLDivElement>(200);

  return (
    <Container formheight={`${formHeight}`}>
      <StepBlock>
        <Image 
          style={{width: '100%', height: 'fit-content'}}
          priority={true} 
          height={172} 
          width={379} 
          alt={"sidebar mobile"} 
          src={"/images/bg-sidebar-mobile.svg"} 
        />
        <Steps list={stepsList} current={currentStep ? currentStep : step-1} />
      </StepBlock>

      <FormBlock ref={formRef}>
        {children}
      </FormBlock>

      {buttons[0] || buttons[1] ? 
        <Footer>
          {buttons[0] ? 
            <Button 
              title={buttons[0].label}
              onClick={buttons[0].onClick}
              varity={"empty"}
            /> : <div></div>
          }
          {buttons[1] ?
            <Button
              title={buttons[1]?.label}
              onClick={buttons[1]?.onClick}
              isLoading={buttons[1]?.isLoading !== undefined ? 
                buttons[1]?.isLoading :
                false
              }
            /> : null
          }
        </Footer> : null
      }
    </Container>
  );
};

export default Wraper;