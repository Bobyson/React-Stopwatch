import { useEffect, useState } from "react";
import Timer from "./Timer";
import Buttons from "./Buttons";
import './stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <>
      <div className="stopwatch">
        <div className="time">
          <Timer time={time} />
        </div>
        <div className="buttons">
          <Buttons
            isActive={isActive}
            isPaused={isPaused}
            handleStart={handleStart}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
          />
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
