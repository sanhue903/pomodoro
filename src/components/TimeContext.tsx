import { createContext } from "react";

const TimeContext = createContext(null);

function TimeReducer(time: number, countdownState: string, action) {
  switch (action.type) {
    case "paused":
      break;

    default:
      break;
  }
}

const CoundownStates = {
  Paused: "paused",
  ShortBreak: "shortBreak",
  LongBreak: "longBreak",
  WorkTime: "workTime",
};

type CoundownStates = (typeof CoundownStates)[keyof typeof CoundownStates];
