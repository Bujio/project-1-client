import { useState, useEffect } from "react";
import foodService from "../services/food.service";
import { Link } from "react-router-dom";

export default function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await foodService.getAll();
      setFoods(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFood = async (id) => {
    try {
      await foodService.delete(id);
      const updatedFoods = foods.filter((food) => food._id !== id);
      setFoods(updatedFoods);
    } catch (err) {
      console.log(err);
    }
  };

  const updateFood = async (id, updatedData) => {
    try {
      await foodService.edit(id, updatedData);
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const renderFoods = () => {
    return foods.map((food) => (
      <div
        key={food._id}
        className="card d-flex justify-content-center mx-auto"
        style={{ maxWidth: "300px" }}
      >
        <div className="card-body">
          <h2 className="card-title">
            <span className="strong">Name: </span>
            {food.name}
          </h2>
          <h2 className="card-text">Kcal: {food.kcal}</h2>
          <button
            className="btn btn-danger"
            onClick={() => deleteFood(food._id)}
          >
            🗑️
          </button>
          <Link to={`/list/${food._id}`} className="btn btn-primary">
            Ver detalle
          </Link>
          <button
            className="btn btn-secondary"
            onClick={() => {
              const newName = prompt("Enter new name", food.name);
              const newKcal = prompt("Enter new kcal", food.kcal);
              if (newName && newKcal) {
                updateFood(food._id, { name: newName, kcal: newKcal });
              }
            }}
          >
            Editar
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {renderFoods()}
    </div>
  );
}
