import { useState, useRef } from "react";
import Timer from "./components/Timer";

const countdownModes = {
  Work: "work",
  ShortBreak: "shortBreak",
  LongBreak: "longBreak",
};

type countdownModes = (typeof countdownModes)[keyof typeof countdownModes];

function App() {
  const [secondsRemaining, setSecondsRemaining] = useState(25 * 60);
  const [countdownMode, setCountdownMode] = useState(countdownModes.Work);
  const [isPaused, setIsPaused] = useState(true);
  const intervalID = useRef<number | undefined>(undefined);

  function handleChangeCountdownState() {
    const newIsPaused = !isPaused;
    setIsPaused(newIsPaused);

    console.log(`Countdown is paused?: ${newIsPaused}`);
    if (newIsPaused) {
      clearInterval(intervalID.current);
      console.log(intervalID.current);
      return;
    }

    intervalID.current = setInterval(() => {
      setSecondsRemaining((prev) => Math.max(prev - 1, 0));
      console.log(`-1 seconds`);
    }, 1000);
  }

  function handleChangeMode(mode: countdownModes) {
    if (!isPaused) handleChangeCountdownState();
    setCountdownMode(mode);
    switch (mode) {
      case countdownModes.Work:
        setSecondsRemaining(25 * 60);
        break;

      case countdownModes.ShortBreak:
        setSecondsRemaining(1 * 60);
        break;

      case countdownModes.LongBreak:
        setSecondsRemaining(15 * 60);
        break;
      default:
        console.error("invalid countdown mode");
        break;
    }
  }

  return (
    <main>
      <Timer time={secondsRemaining} />
      <h2>{countdownMode}</h2>
      <button onClick={handleChangeCountdownState}>
        {isPaused ? "play" : "pausar"}
      </button>
      <button onClick={() => handleChangeMode(countdownModes.Work)}>
        pomodoro
      </button>
      <button onClick={() => handleChangeMode(countdownModes.ShortBreak)}>
        pausa corta
      </button>
      <button onClick={() => handleChangeMode(countdownModes.LongBreak)}>
        pausa larga
      </button>
    </main>
  );
}

export default App;
