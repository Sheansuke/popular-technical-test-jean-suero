import { createContext } from "react";

export type ScoreType = {
  precision: number;
  score: number;
  totalTime: string;
};
interface IScoreContext {
  // MENU
  score: ScoreType
  setScore: (score: ScoreType) => void;
  clearScore: () => void;
}

export const ScoreContext = createContext({} as IScoreContext);
