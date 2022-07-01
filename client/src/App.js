import "./App.css";
import Landing from "./pages/Landing";
import SearchLocation from "./pages/AddLoc";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <Landing />
      </Header>
      <SearchLocation />
    </div>
  );
}

export default App;
