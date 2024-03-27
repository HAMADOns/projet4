import * as React from "react";
import "./App.css";
import "./styles.css";

// const secondContainer = (
//   <div
//     className="container"
//     style={{ color: "#cac6c6", backgroundColor: "#1f2a36" }}
//   >
//     <img src="../public/coupe.png" alt="" className="image" />
//     MERCI
//     <p className="text" style={{ color: "#a5a1a1" }}>
//       Votre feedback est crucial pour nous aider à améliorer nos services et à
//       mieux répondre à vos besoins à l'avenir
//     </p>
//   </div>
// );
// function vote() {
//   return (
//     <div
//       className="container"
//       style={{ color: "#cac6c6", backgroundColor: "#1f2a36" }}
//     >
//       <img src="../public/coupe.png" alt="" className="image" />
//       MERCI
//       <p className="text" style={{ color: "#a5a1a1" }}>
//         Votre feedback est crucial pour nous aider à améliorer nos services et à
//         mieux répondre à vos besoins à l'avenir
//       </p>
//     </div>
//   );
// }
// function App() {
//   return (
//     <>
//       <div>Projet 4</div>
//       <div
//         className="container"
//         style={{ color: "#cac6c6", backgroundColor: "#1f2a36" }}
//       >
//         <img src="../public/etoile5.png" alt="" className="image" />
//         Notez notre service
//         <p className="text" style={{ color: "#a5a1a1" }}>
//           Nous aimerions connaître votre opinion sur votre récente expérience
//           avec notre service. Veuillez prendre quelques instants pour nous
//           attribuer une note de satisfaction de 1 à 5
//         </p>
//         <div>
//           <button
//             style={{
//               color: "white",
//               fontWeight: "bold",
//               backgroundColor: "#f59f01",
//               textAlign: "center",
//             }}
//             onClick={vote}
//           >
//             Noter
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

function App() {
  const [showSecondContainer, setShowSecondContainer] = React.useState();

  const toggleSecondContainer = () => {
    setShowSecondContainer(secondContainer);
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
      <div>Projet 4</div>
      <div
        className="container"
        style={{ color: "#cac6c6", backgroundColor: "#1f2a36" }}
      >
        <img src="../public/etoile5.png" alt="" className="image" />
        Notez notre service
        <p className="text" style={{ color: "#a5a1a1" }}>
          Nous aimerions connaître votre opinion sur votre récente expérience
          avec notre service. Veuillez prendre quelques instants pour nous
          attribuer une note de satisfaction de 1 à 5
        </p>
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
      {showSecondContainer}
    </>
  );
}

export default App;
