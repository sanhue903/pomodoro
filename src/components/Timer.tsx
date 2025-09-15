interface TimerProps {
  time: number;
}
function Timer(props: TimerProps) {
  const { time } = props;
  const minutes: number = Math.trunc(time / 60);
  const seconds: number = time % 60;

  function toText(time: number): string {
    const text: string = String(time);
    return time > 10 ? text : "0" + text;
  }

  return <h1>{`${toText(minutes)} : ${toText(seconds)}`}</h1>;
}

export default Timer;
