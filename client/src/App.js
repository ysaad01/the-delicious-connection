import "./App.css";
import Landing from "./pages/Landing";
import SearchLocation from "./pages/AddLoc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing />
      </header>
      <SearchLocation />
    </div>
  );
}

export default App;
