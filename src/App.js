import React from "react";
import packageJson from "../package.json";

import Header from "./components/Header";
import Summary from "./components/Summary";

function App() {
  return (
    <div>
      <Header />
      <div className="text-center py-4 lg:px-4">
        <div
          className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            Beta
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            Version {packageJson.version}
          </span>
        </div>
      </div>
      <Summary />
    </div>
  );
}

export default App;
