import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      className="d-flex justify-content-center align-items-center gap-4 text-light bg-dark font-weight-bold "
      style={{ height: "100px" }}
    >
      <Link className="font-weight-bold text-light" to="/list">
        LISTA DE COMIDA
      </Link>
      <Link className="font-weight-bold text-light" to="/crear">
        CREAR COMIDA
      </Link>
    </div>
  );
}
