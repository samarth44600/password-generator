import React from "react";
import { useEffect, useState } from "react";

//IMPORTING LOGIC
import { generatePassword } from "../Utils/generatePassword";

//IMPORTING ICONS AND ELEMENTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faSync } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import Slider from "react-input-slider";

export default function Generator({ style }: { style: any }) {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(12);
  const [charsCheck, setCharsCheck] = useState<boolean>(true);

  const generate = (): void => {
    setPassword(generatePassword(length, charsCheck));
  };

  const handleChange = (): void => {
    setCharsCheck(!charsCheck);
  };
  const copyText = (): void => {
    navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generate();
  }, []);

  useEffect(() => {
    generate();
  }, [length, charsCheck]);

  console.log(length);
  return (
    //   MAIN DIV
    <div className={style.generatorMainDiv}>
      {/* DIV ELEMENT FOR  HEADING */}
      <div className={style.heading}>
        <h1>Password generator</h1>
      </div>

      {/* DIV ELEMENT FOR  PASSWORD ,AND ICONS */}
      <div className={style.generatorDiv}>
        <input value={password} readOnly />

        <FontAwesomeIcon
          onClick={generate}
          className={style.icons}
          icon={faSync}
        />
        <FontAwesomeIcon
          onClick={copyText}
          className={style.icons}
          icon={faCopy}
        />
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
          onChange={({ x }) => {
            setLength(() => x);
          }}
          // styling
          styles={{
            track: {
              backgroundColor: "grey",
              height: 5
            },
            active: {
              backgroundColor: "black"
            },
            thumb: {
              width: 20,
              height: 20,
              backgroundColor: "black"
            },
            disabled: {
              opacity: 0.5
            }
          }}
        />
        <p>{length}</p>
      </div>
    </div>
  );
}
