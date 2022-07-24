import { FC, ReactNode, useReducer } from "react";
import { UIContext } from "./UIContext";
import { uiReducer } from "./UIReducer";

export interface UIState {
  scoreModalOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  scoreModalOpen: false,
};

export const UIProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openScoreModal = () => {
    dispatch({ type: "UI - Open ScoreModal" });
  };

  const closeScoreModal = () => {
    dispatch({ type: "UI - Close ScoreModal" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openScoreModal,
        closeScoreModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
