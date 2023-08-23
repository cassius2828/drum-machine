/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import React, { useEffect, useState } from "react";
import tachyons from "tachyons";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeMute,
  faVolumeLow,
  faVolumeHigh,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
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
  on,
  off,
  bankOff,
  bankOn,
} from "./Redux/Actions";
import ErrorBoundry from "./ErrorBoundary";
import AppCopy from "./Copies";

//! APP COMPONENT
function App() {
  const flipSwitch = useSelector((state) => state.power);

  return (
    <>
      {flipSwitch === "on" ? (
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
                  <DrumPads
                  
                  />
                </div>
                <div className="right-container">
                  <Mixers />
                </div>
              </div>
              {/* separate here */}
            </ErrorBoundry>
          </div>
        </>
      ) : (
        <AppCopy />
      )}
    </>
  );
}

export default App;

//! MIXER COMPONENT
export const Mixers = () => {
  const [vol, setVol] = useState(50);
  const [speaker, setSpeaker] = useState(vol);
  const dispatch = useDispatch();
  const description1 = useSelector((state) => state.display1);
  const description2 = useSelector((state) => state.display2);
  const flipSwitch = useSelector((state) => state.power);
  const flipBank = useSelector((state) => state.bank);


  const handleVolChange = (e) => {
    setVol(e.target.value);


  };

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

      <button>{flipBank === "off" ? description2 : description1}</button>
      <p>{"volume: " + vol}</p>
      <div className="slider">
        {vol > 0 && vol < 50 ? (
          <FontAwesomeIcon
            onClick={() => {
              setVol(0);
          
            }}
            icon={faVolumeLow}
          />
        ) : vol >= 50 ? (
          <FontAwesomeIcon
            onClick={() => {
              setVol(0);
          

            }}
            icon={faVolumeHigh}
          />
        ) : (
          <FontAwesomeIcon
            icon={faVolumeMute}
          />
        )}
        <input
          onChange={handleVolChange}
          defaultValue={50}
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
        />
      </div>
      <h3>Bank</h3>
      {flipBank === "off" ? (
        <div
          onClick={() => dispatch(bankOn())}
          className={flipBank + " switch-container bank"}
        >
          <div> </div>
        </div>
      ) : (
        <div
          onClick={() => dispatch(bankOff())}
          className={flipBank + " switch-container bank"}
        >
          <div> </div>
        </div>
      )}
    </>
  );
};

//! DRUMPADS COMPONENT
export const DrumPads = ({vol}) => {
  const flipBank = useSelector((state) => state.bank);

  // highlights drum pad on click
  const clickColorChange = (selector) => {
    const id = document.getElementById(selector);
    console.log(id);
    id.style.backgroundColor = "orange";
    id.style.border = "none";
    setTimeout(() => {
      id.style.backgroundColor = "#747370";
      id.style.border = "solid .5px black";
    }, 100);
  };

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
  const buttonArray2 = [
    {
      keyCode: 81,
      text: "Q",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      text: "W",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      text: "E",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      text: "A",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      text: "S",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      text: "D",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      text: "Z",

      src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      text: "X",

      src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",

      src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  //* onClick for drum pads
  // added switch statement to select the correct description display upon button click
  const playAudio = (selector) => {
    const audio = document.getElementById(selector);

    console.log(selector);
    audio.volume = vol;
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
        {flipBank === "off"
          ? buttonArray2.map((item) => {
              return (
                <Pad
                  extra={() => {
                    clickColorChange(item.src);
                  }}
                  key={item.text}
                  audio={item.src}
                  onClick={() => {
                    playAudio(item.text);
                  }}
                  symbol={item.text}
                  src={item.src}
                />
              );
            })
          : buttonArray1.map((item) => {
              return (
                <Pad
                  extra={() => {
                    clickColorChange(item.src);
                  }}
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
export const Pad = ({ symbol, audio, onClick, extra }) => {
  return (
    <div className="extra-container" onClick={extra}>
      <div id={audio} onClick={onClick} className="drum-pad">
        <audio id={symbol} controls className="clip" src={audio} />
        {symbol}
      </div>
    </div>
  );
};
