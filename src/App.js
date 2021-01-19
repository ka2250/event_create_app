import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';　// bootstrap読み込み

import FormHeader from "./components/FormHeader";
import Events from './components/Events';
import OperatedLogs from "./components/OperatedLogs";

function App() {

  return (
    <div className="App">
      <div className="container">
        <FormHeader />
        <Events />
        <OperatedLogs />
      </div>
    </div>
  );
}

export default App;
