import * as React from "react";

import { TargetIndicatorPopupProps } from "./TargetIndicatorPopup.types";

import { Popup, PopupBody, PopupContent, PopupHeader } from "@shared/ui";
import { TargetIndicatorContainer } from "@entities/ProgressIndicator";

export const TargetIndicatorPopup: React.FC<
  TargetIndicatorPopupProps
> = ({}) => {
  return (
    <Popup>
      <PopupHeader title={"Target Indicator Demo"} />
      <PopupBody>
        <PopupContent>
          <TargetIndicatorContainer />
        </PopupContent>
      </PopupBody>
    </Popup>
  );
};