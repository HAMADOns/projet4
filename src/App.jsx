import * as React from "react";
import "./App.css";
import "./styles.css";

const principalContainer = (
  <div
    className="container"
    style={{ color: "#cac6c6", backgroundColor: "#1f2a36" }}
  >
    Votez pour moi
    <p className="text" style={{ color: "#a5a1a1" }}>
      test test
    </p>
  </div>
);
function test() {}
function App() {
  return (
    <>
      <div>Projet 4</div>
      {principalContainer}
    </>
  );
}

export default App;
