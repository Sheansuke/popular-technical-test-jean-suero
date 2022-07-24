import { createContext } from "react";

export type ConfigType = {
  paragraph: string;
  timerMinutes: string;
};

interface ConfigContext {
  configs: ConfigType;
  setConfigs: (data: ConfigType) => void;
}

export const ConfigContext = createContext({} as ConfigContext);
