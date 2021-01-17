import 'bootstrap/dist/css/bootstrap.min.css';　// bootstrap読み込み

import Header from "./components/Header";
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import EventLogs from "./components/EventLogs";

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <EventForm />
        <EventList />
        <EventLogs />
      </div>
    </div>
  );
}

export default App;
