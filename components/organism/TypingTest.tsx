import { ScoreContext } from "@context/Score";
import { UIContext } from "@context/Ui";
import {
  PulsedKeyType,
  TypingParagraph,
  TypingParagraphStatus,
} from "@molecules/TypingParagraph";
import { Keyboard } from "@organism/Keyboard";
import { FC, useContext, useEffect, useState } from "react";

const testParagraph = "Lorem Ipsum es simplemente el texto";

interface TypingTest {
  timerTemplate: string;
  stopTimer: () => void;
  timeIsFinished: boolean;
  timeElapsed: { minutes: number; seconds: number };
}

const TypingTest: FC<TypingTest> = ({
  timerTemplate,
  stopTimer,
  timeIsFinished,
  timeElapsed,
}) => {
  const { openScoreModal } = useContext(UIContext);
  const { setScore } = useContext(ScoreContext);
  const [statusLettersList, setStatusLettersList] = useState<boolean[]>([]);
  const [pulsedKey, setPulsedKey] = useState<{ letter: string }>({
    letter: "",
  });

  const handlePulsedKey = (keyPressed: PulsedKeyType) => {
    setPulsedKey(keyPressed);
  };

  const handleOnPulseKey = (status: TypingParagraphStatus) => {
    const positivePoints = statusLettersList?.filter(value => value === true).length + 1
    const totalWords = testParagraph?.split("").length

    if (status?.isLettersEnd) {
      setScore({
        precision: Math.round(( positivePoints  / totalWords ) * 100),
        score:positivePoints ,
        totalTime: `0${timeElapsed?.minutes}:${timeElapsed?.seconds}`
      })
      openScoreModal();
      return stopTimer();
    }
    setStatusLettersList((preState) => [
      ...preState,
      status?.pulsedKeyAndPositionIsSame,
    ]);
  };

  useEffect(() => {
    if (timeIsFinished) {
      openScoreModal();
      return stopTimer();
    }
  }, [timeIsFinished]);

  return (
    <div className="grid  grid-cols-1 ">
      <p className="ml-10 text-xl">Tiempo: {timerTemplate} </p>
      <div className="flex justify-center h-80  items-center  ">
        <TypingParagraph
          pulsedKey={pulsedKey}
          paragraph={testParagraph}
          onPulsedKey={handleOnPulseKey}
          statusLettersList={statusLettersList}
          safeKeys={[
            "",
            "CapsLock",
            "Control",
            "Alt",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
          ]}
        />
      </div>
      <div className="flex justify-center">
        <Keyboard onPulseKey={handlePulsedKey} />
      </div>
    </div>
  );
};

export default TypingTest;
