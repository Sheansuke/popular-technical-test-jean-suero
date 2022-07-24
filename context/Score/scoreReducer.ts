import { ScoreState } from "./ScoreProvider";
import { ScoreType } from "./ScoreContext";

type ScoreAction =
  | { type: "Score - Set Score"; payload: ScoreType }
  | { type: "Score - Clear Score" };

export const scoreReducer = (
  state: ScoreState,
  action: ScoreAction
): ScoreState => {
  switch (action.type) {
    case "Score - Set Score":
      return { ...state, score: action?.payload };

    case "Score - Clear Score":
      return {
        ...state,
        score: {
          precision: 0,
          score: 0,
          totalTime: "0:00",
        },
      };

    default:
      return { ...state };
  }
};
