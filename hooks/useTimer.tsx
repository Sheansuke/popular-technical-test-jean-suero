import React, { useEffect, useState } from "react";

export const useTimer = (maxMinutes: number, listenChange: any) => {
  const [timerTemplate, setTimerTemplate] = useState<string>("0:00");
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [timer, setTimer] = useState<{
    seconds: number;
    minutes: number;
  }>({
    seconds: 0,
    minutes: maxMinutes,
  });

  const stopTimer = () => {
    setIsFinished(true);
  };

  useEffect(() => {
    setTimer(preState => ({
      ...preState,
      minutes: maxMinutes,
    }))
  }, [listenChange]);

  useEffect(() => {
    if (isFinished) return () => clearInterval(timerCount);
    const timerCount = setInterval(() => {
      if (timer?.minutes === 0 && timer?.seconds === 0) {
        setTimerTemplate("0:00");
        setIsFinished(true);
        return () => clearInterval(timerCount);
      }

      setTimerTemplate(
        `${timer?.minutes}:${timer?.seconds <= 9 ? "0" : ""}${timer?.seconds}`
      );
      setTimer((preState) => ({
        ...preState,
        seconds: timer?.seconds - 1,
      }));

      // STOP when time is out

      if (timer?.seconds <= 0) {
        setTimer((preState) => ({
          ...preState,
          seconds: 59,
          minutes: timer?.minutes - 1,
        }));
      }
    }, 1000);

    return () => clearInterval(timerCount);
  });

  return {
    timerTemplate,
    isFinished,
    timer,
    timeElapsed: {
      minutes: maxMinutes - 1 - timer?.minutes,
      seconds: 59 - timer?.seconds,
    },
    stopTimer,
  };
};
