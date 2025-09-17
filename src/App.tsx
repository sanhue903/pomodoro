import { useState, useRef } from "react";
import Timer from "./components/Timer";
import ModeButton from "./components/ModeButton";

const countdownModes = {
  Work: "work",
  ShortBreak: "short break",
  LongBreak: "long break",
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
      <header>
        <ModeButton OnClick={() => handleChangeMode(countdownModes.Work)}>
          Pomodoro
        </ModeButton>
        <ModeButton OnClick={() => handleChangeMode(countdownModes.ShortBreak)}>
          Pausa corta
        </ModeButton>
        <ModeButton OnClick={() => handleChangeMode(countdownModes.LongBreak)}>
          Pausa larga
        </ModeButton>
      </header>

      <section>
        <p>{countdownMode}</p>
        <Timer time={secondsRemaining} />
      </section>
      <footer>
        <button onClick={handleChangeCountdownState}>
          {isPaused ? "play" : "pausar"}
        </button>
      </footer>
    </main>
  );
}

export default App;
