import axios from "axios";

class FoodService {
  constructor() {
    this.api = axios.create({
      baseURL: `http://localhost:5005/api/food`,
    });
  }

  create(data) {
    return this.api.post("/", data);
  }

  edit(id, data) {
    return this.api.put(`/${id}`, data);
  }

  delete(id) {
    return this.api.delete(`/${id}`);
  }

  getAll() {
    return this.api.get(`/`);
  }

  getOne(id, name, kcal) {
    return this.api.get(`/${id}`, { params: { name, kcal } });
  }
}

const foodService = new FoodService();

export default foodService;
