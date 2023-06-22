import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./components/Navbar";
import FoodList from "./components/FoodList";
import FoodDetail from "./pages/FoodDetail";
import CreateFoodForm from "./components/CreateFoodForm";
import ErrorPage from "./pages/ErrorPage";
import EditFoodForm from "./components/EditFoodForm";
import LoginForm from "./components/FormUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/crear" element={<CreateFoodForm />} />
        <Route path="/edit" element={<EditFoodForm />} />
        <Route path="/list" element={<FoodList />} />
        <Route path="/list/:_id" element={<FoodDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
