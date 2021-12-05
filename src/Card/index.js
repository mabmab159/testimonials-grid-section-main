import React from "react";
import bg_pattern from "../assets/bg-pattern-quotation.svg";
import "./styles.css";

function Card({ imagen, autor, oficio, titulo, contenido, colorFuente }) {
  return (
    <React.Fragment>
      <div className="card-titulo" style={colorFuente}>
        <div className="card-informacion">
          <img src={imagen} alt="Imagen de persona" />
          <div className="card-autor">
            <h3>{autor}</h3>
            <h3 className="card-autor-oficio">{oficio}</h3>
          </div>
        </div>
        <div className="pattern">
          {autor === "Daniel Clifford" && (
            <img src={bg_pattern} alt="logo-adicional" />
          )}
        </div>
      </div>
      <h2 className="texto-titulo" style={colorFuente}>
        {titulo}
      </h2>
      <p className="card-contenido" style={colorFuente}>
        {contenido}
      </p>
    </React.Fragment>
  );
}

export { Card };
