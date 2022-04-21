import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <strong>Dictionary</strong>
        </header>

        <main>
          {" "}
          <Dictionary />
        </main>
        <footer className="text-center">
          {" "}
          <small>Coded by Holly Dalton</small>
        </footer>
      </div>
    </div>
  );
}
