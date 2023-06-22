import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string().required("El nombre de usuario es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

const LoginForm = () => {
  const [loginError, setLoginError] = useState(false);

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      // Simulando la autenticación
      if (values.username === "admin" && values.password === "password") {
        console.log("Inicio de sesión exitoso");
        setLoginError(false);
      } else {
        console.log("Inicio de sesión fallido");
        setLoginError(true);
      }
    },
  });

  return (
    <div>
      <h1>Formulario de Autenticación</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={values.username}
          />
          {errors.username && <div>{errors.username}</div>}
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <div>{errors.password}</div>}
        </div>
        {loginError && <div>Nombre de usuario o contraseña incorrectos</div>}
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
