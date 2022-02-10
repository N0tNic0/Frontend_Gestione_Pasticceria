import React from "react";
import "./aboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__left">
        <img src={require("../../assets/pasticciotto-leccese-1.jpg")} alt="logo" />
      </div>

      <div className="aboutUs__right">
        <h1 className="mainHeading">Salenticceria</h1>
        <h3 className="subHeading">Creiamo opere d'arte</h3>
        <p class="description">
          Ho fondato questa nuova attività con l'obbiettivo di portare dolci deliziosi e tipici
          del territorio salentino.
          Il progetto è volto a far conoscere a tutto il mondo le specialità della magnifica terra al Sud della Puglia.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
