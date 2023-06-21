import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import foodService from "../services/food.service";

export default function FoodDetail() {
  const [food, setFood] = useState(null);
  const { _id } = useParams();

  const getData = async () => {
    try {
      const res = await foodService.getOne(_id);
      setFood(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [_id]);

  return (
    <div>
      {food ? (
        <div className="card d-flex justify-content-center">
          <p>Name: {food.name}</p>
          <p>Kcal: {food.kcal}</p>
          <Link to="/list">VOLVER A LISTADO</Link>
        </div>
      ) : (
        <div className="text-center">
          <p>No hay datos</p>
        </div>
      )}
    </div>
  );
}
