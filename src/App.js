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
          <Dictionary defaultKeyword="travel" />
        </main>
        <footer className="App-footer text-center">
          {" "}
          <small>
            Coded by{" "}
            <a href="https://www.linkedin.com/in/holly-jane-dalton/">
              Holly Dalton
            </a>{" "}
            and{" "}
            <a href="https://github.com/hollyjanedalton/Dictionary-app">
              open-sourced
            </a>{" "}
            on Github
          </small>
        </footer>
      </div>
    </div>
  );
}
