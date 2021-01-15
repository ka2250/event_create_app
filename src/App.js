import 'bootstrap/dist/css/bootstrap.min.css';　// bootstrap読み込み
import "./style.css"; // StyleCSS読み込み

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h4 className="header-title">creatEvent App</h4>
          <p className="header-desc">using react hooks.</p>
        </header>

        <form className="event-form">
          <div className="form-group">
            <label for="input-event">create event :</label>
            <input type="text" className="form-control" id="input-event" placeholder="input your event..." />
            <button type="button" class="btn btn-light">Add</button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default App;
