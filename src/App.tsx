import React, { useState } from "react";
// import PasswordGenerateForm from './Components/PasswordGenerateForm';
import Generator from "./Components/generator";
import style from "./App.module.scss";

function App() {
  const [length, setLength] = useState<number>(12);
  const [charsCheck, setCharsCheck] = useState<boolean>(true);
  return (
    <div className={style.App}>
      <Generator
        style={style}
        length={length}
        setLength={setLength}
        charsCheck={charsCheck}
        setCharsCheck={setCharsCheck}
      />
    </div>
  );
}

export default App;
