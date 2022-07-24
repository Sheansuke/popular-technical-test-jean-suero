import { ConfigType } from "./ConfigContext";
import { ConfigState } from "./ConfigProvider";

type ConfigAction = { type: "Config - Set Configs"; payload: ConfigType };

export const configReducer = (
  state: ConfigState,
  action: ConfigAction
): ConfigState => {
  switch (action.type) {
    case "Config - Set Configs":
      return { ...state, configs: action?.payload };

    default:
      return { ...state };
  }
};
