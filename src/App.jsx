import * as React from "react";
import "./App.css";
import "./styles.css";

function App() {
  const [showSecondContainer, setShowSecondContainer] = React.useState(false);
  const [isButtonClicked, setIsButtonClicked] = React.useState(false);

  const toggleSecondContainer = () => {
    isButtonClicked
      ? setShowSecondContainer(!showSecondContainer)
      : alert("Veuillez choisir une note");
  };
  const handleNumberButtonClick = () => {
    setIsButtonClicked(true);
  };
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

  return (
    <>
      {!showSecondContainer && (
        <div>
          <div>Projet 4</div>
          <div
            className="container"
            style={{ color: "#cac6c6", backgroundColor: "#1f2a36" }}
          >
            <img src="./etoile5.png" alt="" className="image" />
            Notez notre service
            <p className="text" style={{ color: "#a5a1a1" }}>
              Nous aimerions connaître votre opinion sur votre récente
              expérience avec notre service. Veuillez prendre quelques instants
              pour nous attribuer une note de satisfaction de 1 à 5
            </p>
            <div className="button-container">
              <button className="button" onClick={handleNumberButtonClick}>
                1
              </button>
              <button className="button" onClick={handleNumberButtonClick}>
                2
              </button>
              <button className="button" onClick={handleNumberButtonClick}>
                3
              </button>
              <button className="button" onClick={handleNumberButtonClick}>
                4
              </button>
              <button className="button" onClick={handleNumberButtonClick}>
                5
              </button>
            </div>
            <div>
              <button
                style={{
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "#f59f01",
                  textAlign: "center",
                }}
                onClick={toggleSecondContainer}
              >
                Noter
              </button>
            </div>
          </div>
        </div>
      )}
      {showSecondContainer && secondContainer}
    </>
  );
}

export default App;
