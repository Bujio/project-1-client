import { useState, useEffect } from "react";
import foodService from "../services/food.service";

export default function EditFoodForm({ foodId }) {
  const [name, setName] = useState("");
  const [kcal, setKcal] = useState("");

  useEffect(() => {
    getFoodData();
  }, [foodId]);

  const getFoodData = async () => {
    try {
      const res = await foodService.getOne(foodId);
      const { name, kcal } = res.data;
      setName(name);
      setKcal(kcal);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await foodService.edit(foodId, { name, kcal });
      console.log("Food edited successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="kcal">Kcal:</label>
        <input
          type="number"
          id="kcal"
          value={kcal}
          onChange={(e) => setKcal(e.target.value)}
        />
      </div>
      <button type="submit">Edit Food</button>
    </form>
  );
}
