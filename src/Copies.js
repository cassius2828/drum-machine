import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { on, off } from "./Redux/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import ErrorBoundry from "./ErrorBoundary";
import {faVolumeMute} from "@fortawesome/free-solid-svg-icons";

//! MIXER COMPONENT COPY
export const MixersCopy = () => {
  const flipSwitch = useSelector((state) => state.power);
  const dispatch = useDispatch();

  return (
    <>
      {/* ternary operator for power switch display */}
      <h3>Power</h3>
      {flipSwitch === "off" ? (
        <div
          onClick={() => dispatch(on())}
          className={flipSwitch + " switch-container power"}
          //
        >
          <div></div>
        </div>
      ) : (
        <div
          onClick={() => dispatch(off())}
          className={flipSwitch + " switch-container power"}
          //
        >
          <div></div>
        </div>
      )}

      <button id="bank-description"></button>
      <p>--</p>
      <div className="slider">
        <FontAwesomeIcon 
        style={{color: 'transparent'}}
        icon={faVolumeMute} />
        <input
          defaultValue={50}
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
        />
      </div>
      <h3>Bank</h3>

      <div className="switch-container bank">
        <div> </div>
      </div>
    </>
  );
};

//! DRUMPADS COMPONENT COPY
export const DrumPadsCopy = () => {
  const clickColorChange = (selector) => {
    const id = document.getElementById(selector);
    console.log(id);
    id.style.backgroundColor = "#aba79c";
    id.style.border = "none";
    setTimeout(() => {
      id.style.backgroundColor = "#747370";
      id.style.border = "solid .5px black";
    }, 100);
  };

  // array to map over pad info

  const buttonArray1 = [
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

  return (
    <>
      <div className="pad-container">
        {buttonArray1.map((item) => {
          return (
            <PadCopy
              extra={() => {
                clickColorChange(item.src);
              }}
              key={item.text}
              audio={item.src}
              symbol={item.text}
            />
          );
        })}
      </div>
    </>
  );
};

//! PAD COMPONENT COPY
export const PadCopy = ({ symbol, audio, extra }) => {
  return (
    <div className="extra-container" onClick={extra}>
      <div id={audio} className="drum-pad">
        <audio id={audio} controls className="clip" src={audio} />
        {symbol}
      </div>
    </div>
  );
};

//! APP COMPONENT COPY
function AppCopy() {
  //   const flipSwitch = useSelector((state) => state.power);

  return (
    <>
      {" "}
      <div id="drum-machine" className="App">
        <ErrorBoundry>
          <div id="display" className="main-container">
            <div className="logo">
              <span>FCC</span>
              <FontAwesomeIcon
                size="lg"
                className="icon"
                icon={faFreeCodeCamp}
              />
            </div>
            {/* separatte here */}

            <div className="left-container">
              <DrumPadsCopy />
            </div>
            <div className="right-container">
              <MixersCopy />
            </div>
          </div>
          {/* separate here */}
        </ErrorBoundry>
      </div>
    </>
  );
}

export default AppCopy;
