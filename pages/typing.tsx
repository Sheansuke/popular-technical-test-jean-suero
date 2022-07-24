import { useTimer } from "@hooks/useTimer";
import type { NextPage } from "next";
import { useContext } from "react";
import TypingTest from "../components/organism/TypingTest";
import { ResultBoard } from "../components/molecules/ScoreBoard";
import { UIContext } from "../context/Ui/UIContext";
import { ScoreContext } from "../context/Score/ScoreContext";
import { ConfigContext } from "../context/TypingConfigs/ConfigContext";

const TypingPage: NextPage = () => {
  const { scoreModalOpen } = useContext(UIContext);
  const { configs } = useContext(ConfigContext);

  const { score } = useContext(ScoreContext);
  const { isFinished, timeElapsed, timerTemplate, stopTimer } = useTimer(
    Number(configs?.timerMinutes), configs
  );

  return (
    <>
      {scoreModalOpen && (
        <ResultBoard
          precision={score?.precision}
          score={score?.score}
          totalTime={score?.totalTime}
        />
      )}

      <TypingTest
        timerTemplate={timerTemplate}
        stopTimer={stopTimer}
        timeIsFinished={isFinished}
        timeElapsed={timeElapsed}
      />
    </>
  );
};

export default TypingPage;
