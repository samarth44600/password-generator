import React, { Suspense } from "react";

//IMPORTING CSS
import style from "./App.module.scss";

import Loading from "./Components/Loading";

const Generator = React.lazy(() => import("./Components/generator"));

function App() {
  return (
    <div className={style.App}>
      <Suspense fallback={<Loading />}>
        <Generator style={style} />
      </Suspense>
    </div>
  );
}

export default App;
