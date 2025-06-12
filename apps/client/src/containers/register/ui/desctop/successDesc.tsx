import Image from "next/image";
import { SuccessBlock } from "../styled";
import Wraper from "./wraper";
import { Text, TextOffset } from "../../../../styledComponents";
import { colors } from "../../../../core/utils/constans";
import { TUiButton, TUiInfo } from "../../../../core/types";

type Props = {
  buttons: [TUiButton|null, TUiButton|null];
  uiInfo: TUiInfo;
}

const SuccessDesc: React.FC<Props> = ({
  buttons,
  uiInfo
}) => {
  return (
    <Wraper buttons={buttons} currentStep={4}>
      <SuccessBlock column={"column"} ai={"center"} jc={"center"} gap={"1.25rem"}>
        <Image width={80} height={80} alt={"check mark"} src={"/images/icon-thank-you.svg"} />
        <TextOffset
          align={"center"} 
          size={"32"} 
          weight="700" 
          color={colors.blueMarine()} 
          top={"1rem"}
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

export default SuccessDesc;