import { FC, ReactNode, useEffect, useReducer } from "react";
import { ConfigContext, ConfigType } from "./ConfigContext";
import { configReducer } from "./configReducer";

export interface ConfigState {
  configs: ConfigType;
}

const CONFIG_INITIAL_STATE: ConfigState = {
  configs: {
    paragraph:
      "Este es un párrafo de prueba si aparece es que algo no está funcionando bien, pero mientras puedes entretener",
    timerMinutes: "0",
  },
};

export const ConfigProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(configReducer, CONFIG_INITIAL_STATE);

  useEffect(() => {
    const localStoreState: ConfigType = JSON.parse(localStorage.getItem("config") ?? `{}`);
    setConfigs(localStoreState);
  }, []);

  const setConfigs = (config: ConfigType) => {
    localStorage.setItem('config', JSON.stringify(config));
    dispatch({ type: "Config - Set Configs", payload: config });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...state,
        setConfigs,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
