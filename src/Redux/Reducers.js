import { combineReducers } from "redux";

const Q = "Q";
const W = "W";
const E = "E";
const A = "A";
const S = "S";
const D = "D";
const Z = "Z";
const X = "X";
const C = "C";

const OFF = "OFF";
const ON = "ON";

const BANK_ON = "BANK_ON";
const BANK_OFF = "BANK_OFF";

const defaultState = "Heater Kit";

const displayReducer1 = (state = defaultState, action) => {
  switch (action.type) {
    case Q:
      return (state = "Heater 1");
    case W:
      return (state = "Heater 2");
    case E:
      return (state = "Heater 3");
    case A:
      return (state = "Heater 4");
    case S:
      return (state = "Clap");
    case D:
      return (state = "Open HH");
    case Z:
      return (state = "Kick n Hat");
    case X:
      return (state = "Kick");
    case C:
      return (state = "Closed HH");
    default:
      return state;
  }
};
const defaultState2 = "Smooth Piano Kit";

const displayReducer2 = (state = defaultState2, action) => {
  switch (action.type) {
    case Q:
      return (state = "Chord 1");
    case W:
      return (state = "Chord 2");
    case E:
      return (state = "Chord 3");
    case A:
      return (state = "Shaker");
    case S:
      return (state = "Open HH");
    case D:
      return (state = "Closed HH");
    case Z:
      return (state = "Punchy Kick");
    case X:
      return (state = "Side Stick");
    case C:
      return (state = "Snare");
    default:
      return state;
  }
};

const toggleSwitch = (state = "on", action) => {
  switch (action.type) {
    case OFF:
      return (state = "off");
    case ON:
      return (state = "on");
    default:
      return state;
  }
};

const bankToggle = (state = "on", action) => {
  switch (action.type) {
    case BANK_OFF:
      return (state = "off");
    case BANK_ON:
      return (state = "on");
    default:
      return state;
  }
};

export const root = combineReducers({
  display1: displayReducer1,
  display2: displayReducer2,
  power: toggleSwitch,
  bank: bankToggle,
});
