import React, { useState } from "react";
//IMPORTING COMPONENTS
import Slider from "react-input-slider";

//IMPORTING LOGIC
import { generatePassword } from "../Utils/generatePassword";

export default function PasswordGenerateForm() {
  const [length, setLength] = useState<number>(12);

  let value: string = generatePassword(length, true);
  return (
    <div className="div">
      <h1>Password Generate Form</h1>
      <input value={value} />
      <br />
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
      <br />
      <p>{length}</p>
      {/* <input
        type="number"
        max={20}
        min={6}
        value={length}
        onChange={(e): void => {
          setLength(Number(e.target.value));
        }}
      /> */}

      {console.log(value, value.length)}
    </div>
  );
}
