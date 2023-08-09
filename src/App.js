/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from "react";
import tachyons from "tachyons";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  Qkey,
  Wkey,
  Ekey,
  Akey,
  Skey,
  Dkey,
  Zkey,
  Xkey,
  Ckey,
} from "./Redux/Actions";

//! APP COMPONENT
function App() {
  return (
    <div id="drum-machine" className="App">
      <div id="display" className="main-container">
        <div className="logo">
          <span>FCC</span>
          <FontAwesomeIcon size="lg" className="icon" icon={faFreeCodeCamp} />
        </div>
        <div className="left-container">
          <DrumPads1 />
        </div>
        <div className="right-container">
          <Mixers />
        </div>
      </div>
    </div>
  );
}

export default App;

//! MIXER COMPONENT
export const Mixers = () => {
  const description = useSelector((state) => state.display)
  return (
    <>
      <h3>Power</h3>
      <div className="switch-container">
        <div></div>
      </div>
      <button>{description}</button>
      <div className="slider">
        <div className="slider-tab"></div>
      </div>
      <h3>Bank</h3>
      <div className="switch-container">
        <div> </div>
      </div>
    </>
  );
};

//! DRUMPADS COMPONENT
export const DrumPads1 = () => {
  const dispatch = useDispatch();
  //* keyDown event listener for drum pads
  // added switch statement to select the correct description display upon button click
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playAudio(e.key.toUpperCase());
      switch (e.key.toUpperCase()) {
        case "Q":
          dispatch(Qkey());
          break;
        case "W":
          dispatch(Wkey());
          break;

        case "E":
          dispatch(Ekey());
          break;

        case "A":
          dispatch(Akey());
          break;

        case "S":
          dispatch(Skey());
          break;

        case "D":
          dispatch(Dkey());
          break;

        case "Z":
          dispatch(Zkey());
          break;

        case "X":
          dispatch(Xkey());
          break;

        case "C":
          dispatch(Ckey());
          break;
      }
    });
  }, []);

  // array to map over pad info

  const buttonArray = [
    {
      keyCode: 81,
      text: "Q",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",

      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  //* onClick for drum pads
  // added switch statement to select the correct description display upon button click
  const playAudio = (selector) => {
    const audio = document.getElementById(selector);
    console.log(selector);
    audio.play();

    switch (selector) {
      case "Q":
        dispatch(Qkey());
        break;
      case "W":
        dispatch(Wkey());
        break;

      case "E":
        dispatch(Ekey());
        break;

      case "A":
        dispatch(Akey());
        break;

      case "S":
        dispatch(Skey());
        break;

      case "D":
        dispatch(Dkey());
        break;

      case "Z":
        dispatch(Zkey());
        break;

      case "X":
        dispatch(Xkey());
        break;

      case "C":
        dispatch(Ckey());
        break;
    }
  };

  return (
    <>
      <div className="pad-container">
        {buttonArray.map((item) => {
          return (
            <Pad
              key={item.text}
              audio={item.src}
              onClick={() => {
                playAudio(item.text);
              }}
              symbol={item.text}
              src={item.src}
            />
          );
        })}
      </div>
    </>
  );
};

//! PAD COMPONENT
export const Pad = ({ symbol, audio, onClick, handleKeyDown }) => {
  return (
    <div
      id={audio}
      onClick={onClick}
      // onKeyDown={handleKeyDown}
      className="drum-pad"
    >
      <audio id={symbol} controls className="clip" src={audio} />

      {symbol}
    </div>
  );
};

// excluding Pad component
// <div
//   id={item.text}
//   onKeyDown={() => {
//     playAudio(item.text)
//   }}
//   onClick={() => {
//     playAudio(item.src)
//   }}
//   // onKeyDown={handleKeyDown}
//   className="pad"
// >
//   <audio id={item.src} controls className="clip" src={item.src} />

//   {item.text}
// </div>

/*
- if I create a store state what will its purpose be?
- an additional onclick logic to set state in the button
- that state will be taken from the store to the description prop in mixers
hwo can i do that?




 */
