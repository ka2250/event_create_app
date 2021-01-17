import 'bootstrap/dist/css/bootstrap.min.css';　// bootstrap読み込み

function App() {

  return (
    <div className="App">
      <div className="container">

        {/* ヘッダー */}
        <header className="mt-5 d-flex justify-content-between align-items-center">
          <div>
            <h4>Creat Event App</h4>
            <p>using react hooks.</p>
          </div>

          <button className="btn btn-info btn-sm">Login</button>
        </header>

        {/* フォーム */}
        <form className="mt-4">
          <label className="mr-2" for="input-event">create event : </label>
          <div class="d-flex justify-content-around">
            <input type="text" className="form-control" id="input-event" placeholder="input your event..." />
            <button type="button" class="btn btn-outline-secondary ml-3">Add</button>
          </div>
        </form>

        {/* イベントリスト */}
        <div className="event-list mt-5">
          <div className="d-flex justify-content-between mb-2">
            <h5>Events</h5>
            <button type="button" class="btn btn-danger btn-sm">DELETE EVENTS</button>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th>Event Description</th>
                <th className="text-center">Edit</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="text-center">1</th>
                <td>aaaaaaaaaaaaaaaaaa</td>
                <td className="text-center">edit</td>
              </tr>
              <tr>
                <th>2</th>
                <td>aaaaaaaaaaaaaaaaaa</td>
                <td className="text-center">edit</td>
              </tr><tr>
                <th className="text-center">3</th>
                <td>aaaaaaaaaaaaaaaaaa</td>
                <td className="text-center">edit</td>
              </tr>
            </tbody>
          </table>
        </div>


        {/* ログリスト */}
        <div className="log-list mt-5">
          <div className="d-flex justify-content-between mb-2">
            <h5>Logs</h5>
            <button type="button" class="btn btn-secondary btn-sm">DELETE LOGS</button>
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">ID</th>
                <th>Delete Event</th>
                <th className="text-center">Operated</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="text-center">1</th>
                <td>aaaaaaaaaaaaaaaaaa</td>
                <td className="text-center">2021/1/17</td>
              </tr>
              <tr>
                <th className="text-center">2</th>
                <td>aaaaaaaaaaaaaaaaaa</td>
                <td className="text-center">2021/1/17</td>
              </tr><tr>
                <th className="text-center">3</th>
                <td>aaaaaaaaaaaaaaaaaa</td>
                <td className="text-center">2021/1/17</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
