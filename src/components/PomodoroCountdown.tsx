import React, { useState } from "react";

interface BreakButtonProps {
  children: string;
  onClick: React.Dispatch<React.SetStateAction<number>>;
  time: number;
}

function BreakButton(props: BreakButtonProps) {
  const { children, onClick, time } = props;

  return <button onClick={() => onClick(time)}> {children} </button>;
}

interface PlayPauseButtonProps {
  children: string;
  onClick: React.Dispatch<React.SetStateAction<number>>;
}

function PlayButton(props: PlayPauseButtonProps) {
  const { children, onClick } = props;

  return <button>{children}</button>;
}

function PomodoroCountdown() {
  const [secondsRemaining, setSecondsRemaining] = useState(60 * 25);
  const [countdownStarted, setCountdownStarded] = useState(false);

  return (
    <main>
      <h1>{secondsRemaining}</h1>
      {countdownStarted ? (
        <button onClick={() => setCountdownStarded(false)}> pausar</button>
      ) : (
        <button onClick={() => setCountdownStarded(true)}>play</button>
      )}
      <BreakButton onClick={(time) => setSecondsRemaining(time)} time={300}>
        short break
      </BreakButton>
      <BreakButton onClick={(time) => setSecondsRemaining(time)} time={900}>
        long break
      </BreakButton>
    </main>
  );
}

export default PomodoroCountdown;
