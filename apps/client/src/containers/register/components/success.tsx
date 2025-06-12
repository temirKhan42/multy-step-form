import { TUiInfo } from "../../../core/types";
import { isMobile } from "../../../core/utils";
import SuccessDesc from "../ui/desctop/successDesc";
import SuccessMob from "../ui/mobile/successMob";

const Success: React.FC = () => {
  const isDeviceMobile = isMobile(navigator.userAgent);

  const buttons: [null, null] = [
    null,
    null
  ];

  const uiInfo: TUiInfo = {
    title: "Thank you!",
    description: "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.",
  };

  return (
    <>
      {isDeviceMobile ? 
        <SuccessMob
          buttons={buttons}  
          uiInfo={uiInfo}
        /> : 
        <SuccessDesc
          buttons={buttons}
          uiInfo={uiInfo}
        />
      }
    </>
  );
};

export default Success;