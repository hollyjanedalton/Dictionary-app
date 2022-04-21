import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <a href="/" className="btn btn-warning">
          Emergency!
        </a>
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
