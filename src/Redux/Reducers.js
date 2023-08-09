import {combineReducers} from "redux";

const Q = "Q";
const W = "W";
const E = "E";

const A = "A";
const S = "S";
const D = "D";

const Z = "Z";
const X = "X";
const C = "C";

const defaultState = "";

const displayReducer = (state = defaultState, action) => {
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

export const root = combineReducers(
    
    {
    display: displayReducer,
})
