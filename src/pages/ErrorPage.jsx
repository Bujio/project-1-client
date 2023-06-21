import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h2>¿Cómo has llegado hasta aquí?</h2>

      <Link to="/list">
        <p>Volver a casa</p>
      </Link>
    </div>
  );
}
