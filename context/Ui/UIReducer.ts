import { UIState } from "./UIProvider";

type UIAction =
  | { type: "UI - Open ScoreModal" }
  | { type: "UI - Close ScoreModal" }


export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case "UI - Open ScoreModal":
      return { ...state, scoreModalOpen: true };

    case "UI - Close ScoreModal":
      return { ...state, scoreModalOpen: false };

    default:
      return { ...state };
  }
};
