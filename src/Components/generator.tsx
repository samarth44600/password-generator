import React from "react";

//IMPORTING LOGIC
import { generatePassword } from "../Utils/generatePassword";

//IMPORTING ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faSync } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import Slider from "react-input-slider";

export default function Generator({
  style,
  length,
  setLength,
  charsCheck,
  setCharsCheck,
}: {
  style: any;
  length: any;
  setLength: any;
  charsCheck: any;
  setCharsCheck: any;
}) {
  const handleChange = () => {
    setCharsCheck(!charsCheck);
  };
  const value: string = generatePassword(length, charsCheck);
  return (
    //   MAIN DIV
    <div className={style.generatorMainDiv}>
      {/* DIV ELEMENT FOR  HEADING */}
      <div className={style.heading}>
        <h1>Password generator</h1>
      </div>

      {/* DIV ELEMENT FOR  PASSWORD ,AND ICONS */}
      <div className={style.generatorDiv}>
        <input defaultValue={value} />

        <FontAwesomeIcon className={style.icons} icon={faSync} />
        <FontAwesomeIcon className={style.icons} icon={faCopy} />
      </div>

      {/* DIV ELEMENT FOR SPECIAL CHARACTER TOGGLE */}
      <div className={style.specialCharsToggle}>
        <p>Special Character: </p>
        <Switch checked={charsCheck} onChange={handleChange} />
        {console.log(charsCheck)}
      </div>

      <div className={style.slider}>
        <Slider
          axis="x"
          x={length}
          xmax={20}
          xmin={6}
          onChange={({ x }) => setLength(() => x)}
          // styling
          styles={{
            track: {
              backgroundColor: "grey",
            },
            active: {
              backgroundColor: "black",
            },
            thumb: {
              width: 20,
              height: 20,
              backgroundColor: "black",
            },
            disabled: {
              opacity: 0.5,
            },
          }}
        />
        <p>{length}</p>
      </div>
    </div>
  );
}
