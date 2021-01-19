import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';　// bootstrap読み込み

import FormAndList from "./components/FormAndList";
import OperatedLogs from "./components/OperatedLogs";

function App() {

  return (
    <div className="App">
      <div className="container">
        <FormAndList />
        <OperatedLogs />
      </div>
    </div>
  );
}

export default App;
