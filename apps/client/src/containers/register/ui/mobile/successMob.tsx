import Image from "next/image";
import { colors } from "../../../../core/utils/constans";
import { Text, TextOffset } from "../../../../styledComponents";
import { SuccessBlock } from "../styled";
import Wraper from "./wraper";
import { TUiButton, TUiInfo } from "../../../../core/types";

type Props = {
  buttons: [TUiButton|null, TUiButton|null];
  uiInfo: TUiInfo;
}

const SuccessMob: React.FC<Props> = ({ buttons, uiInfo }) => {

  return (
    <Wraper buttons={buttons} currentStep={4}>
      <SuccessBlock column={"column"} ai={"center"} gap={"1rem"}>
        <Image width={56} height={56} alt={"check mark"} src={"/images/icon-thank-you.svg"} />
        <TextOffset 
          align={"center"} 
          size={"24"} 
          weight="700" 
          color={colors.blueMarine()} 
          top={"0.5rem"}
        >
          {uiInfo.title}
        </TextOffset>
        <Text color={colors.greyCool()} align={"center"} lh={"1.5"}>
          {uiInfo.description}
        </Text>
      </SuccessBlock>
    </Wraper>
  );
};

export default SuccessMob;