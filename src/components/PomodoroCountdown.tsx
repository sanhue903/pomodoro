import React, { useEffect, useState } from "react";

interface BreakButtonProps {
  children: string;
  onClick: React.Dispatch<React.SetStateAction<number>>;
  time: number;
}

function BreakButton(props: BreakButtonProps) {
  const { children, onClick, time } = props;

  return <button onClick={() => onClick(time)}> {children} </button>;
}

interface TimerProps {
  time: number;
}
function Timer(props: TimerProps) {
  const { time } = props;
  const minutes: number = Math.trunc(time / 60);
  const seconds: number = time % 60;

  function toText(time: number) {
    const text: string = String(time);
    return time > 10 ? text : "0" + text;
  }

  return <h1>{`${toText(minutes)} : ${toText(seconds)}`}</h1>;
}

function PomodoroCountdown() {
  const [secondsRemaining, setSecondsRemaining] = useState(60 * 25);
  const [countdownStarted, setCountdownStarded] = useState(false);

  useEffect(() => {
    if (secondsRemaining > 0 && countdownStarted) {
      const ID = setInterval(
        () => setSecondsRemaining(secondsRemaining - 1),
        1000
      );
      return () => clearInterval(ID);
    }
  }, [secondsRemaining, countdownStarted]);

  return (
    <main>
      <Timer time={secondsRemaining} />
      {countdownStarted ? (
        <button onClick={() => setCountdownStarded(false)}> pausar</button>
      ) : (
        <button onClick={() => setCountdownStarded(true)}>play</button>
      )}
      <BreakButton onClick={(time) => setSecondsRemaining(time)} time={65}>
        short break
      </BreakButton>
      <BreakButton onClick={(time) => setSecondsRemaining(time)} time={900}>
        long break
      </BreakButton>
    </main>
  );
}

export default PomodoroCountdown;
