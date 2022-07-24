import { useTimer } from "@hooks/useTimer";
import type { NextPage } from "next";
import { useEffect } from "react";
import TypingTest from "../components/organism/TypingTest";

const TypingPage: NextPage = () => {
  const { isFinished, timeElapsed, timerTemplate, stopTimer } = useTimer(2);

  useEffect(() => {
    if (isFinished) {
      // Send context action
      return stopTimer()
    }
  }, [isFinished]);

  return (
    <>
      <TypingTest timerTemplate={timerTemplate} stopTimer={stopTimer} timeIsFinished={isFinished} timeElapsed={timeElapsed} />
    </>
  );
};

export default TypingPage;
