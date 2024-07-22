import List from "./List";

function App() {
  const listStyle = {
    minHeight: "500px",
    Height: "500px",
  };

  return (
    <div className="App">
      <div className="row mt-5">
        <div className="col-6 offset-3">
          <div
            className="p-4 bg-secondary text-white rounded-3"
            style={listStyle}
          >
            <h1 className="text-center">To-Do List</h1>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
