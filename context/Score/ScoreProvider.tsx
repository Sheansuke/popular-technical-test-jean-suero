import { FC, ReactNode, useReducer } from "react";
import { ScoreType, ScoreContext } from "./ScoreContext";
import { scoreReducer } from "./scoreReducer";

export interface ScoreState {
  score: ScoreType;
}

const SCORE_INITIAL_STATE: ScoreState = {
  score: {
    precision: 0,
    score: 0,
    totalTime: "0:00",
  },
};

export const ScoreProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(scoreReducer, SCORE_INITIAL_STATE);

  const setScore = (score: ScoreType) => {
    dispatch({ type: "Score - Set Score", payload: score });
  };

  const clearScore = () => {
    dispatch({ type: "Score - Clear Score" });
  };

  return (
    <ScoreContext.Provider
      value={{
        ...state,
        setScore,
        clearScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
