import * as React from "react";
import "./App.css";
import "./styles.css";

const principalContainer = (
  <div
    className="container"
    style={{ color: "#cac6c6", backgroundColor: "#1f2a36" }}
  >
    <img src="../public/etoile5.png" alt="" className="image" />
    Votez pour moi
    <p className="text" style={{ color: "#a5a1a1" }}>
      Nous aimerions connaître votre opinion sur votre récente expérience avec
      notre service. Veuillez prendre quelques instants pour nous attribuer une
      note de satisfaction de 1 à 5
    </p>
  </div>
);
const secondContainer = (
  <div
    className="container"
    style={{ color: "#cac6c6", backgroundColor: "#1f2a36" }}
  >
    <img src="../public/coupe.png" alt="" className="image" />
    MERCI
    <p className="text" style={{ color: "#a5a1a1" }}>
      Votre feedback est crucial pour nous aider à améliorer nos services et à
      mieux répondre à vos besoins à l'avenir
    </p>
  </div>
);
function test() {}
function App() {
  return (
    <>
      <div>Projet 4</div>
      {principalContainer}
      {secondContainer}
    </>
  );
}

export default App;
